import Vue from 'vue'
import Vuex from 'vuex'
import reportApi from "./services/reportApi.js"
/* eslint-disable */
Vue.use(Vuex)

var avro_url = "https://avro.alerce.online/get_avro_info"


Date.prototype.subsDays = function(days) {
  var date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}
function dateToJD(date) {
    var mjulianDate = date / 86400000 + 40587;
    return mjulianDate;
}
function jdToDate(jd){
  var date = (jd - 40587) * 86400000;
  return new Date(date)
}
function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

export default new Vuex.Store({
  state: {
    sneCandidates: [],
    selectedSne: null,
    alertCandidate:null,
    deltaDays: null,
    zoomed: false,
    table: null,
    avro: null,
    aladin: null,
    report: false,
    reports: null,
    response: null,
    user: {
      id: null,
      name: null,
      email: null,
      avatar: null
    }
  },
  mutations: {
    CLEAN_AVRO(state){
      state.avro = null;
    },
    SET_ALADIN(state){
      var aladin = state.aladin ? state.aladin : A.aladin('#aladin-lite-div', {survey: "P/PanSTARRS/DR1/color-z-zg-g", fov:0.02, cooFrame: "J2000d"});
      state.aladin = aladin;
    },
    SET_AVRO(state,payload){
      state.avro = payload;
    },
    SET_CANDIDATES(state,payload){
      state.sneCandidates = payload;
    },
    CLEAN_CANDIDATES(state){
      state.sneCandidates = [];
    },
    SELECT_CANDIDATE(state,payload){
      state.selectedSne = payload;
    },
    CHANGE_DELTA(state,payload){
      state.deltaDays = payload;
    },
    SET_ZOOM(state,payload){
      state.zoomed = payload;
    },
    SET_CANDIDATE_ALERT(state,payload){
      state.alertCandidate = payload;
    },
    SET_TABLE(state,payload){
      state.table = payload;
    },
    UPDATE_TABLE(state,payload){
      state.table.clear();
      var candidates = []
      $.each(payload,function(key,value){
        var mjd = value["firstmjd"];
        var date = jdToDate(mjd);
        var dateStr = pad((date.getUTCDate()),2) + '/' + pad((date.getUTCMonth() + 1),2) + '/' +  date.getUTCFullYear() + ' ' + pad(date.getUTCHours(),2) + ":" + pad(date.getUTCMinutes(),2) + ":" + pad(date.getUTCSeconds(),2) + " UT"
        var prob = value["pclassearly"].toFixed(3);
        var nobs = value["nobs"]
        var filter = value["fid"];
        var obj ={
          oid: key,
          discovery_date: dateStr,
          prob: prob,
          nobs: nobs
        }
        candidates.push(obj)
      })
      state.table.rows.add(candidates).draw(false);
    },
    SET_SHOW_REPORT(state, value){
      state.report = value
    },
    SET_RESPONSE_REPORT(state, value){
      state.response = value.data
    },
    SET_REPORTS(state, value){
      state.reports = value.data
    },
    SET_USER(state, data){
      state.user = data
    },
    SET_NULL_USER(state){
      state.user.id = null,
      state.user.name = null,
      state.user.email = null,
      state.user.avatar = null
    }
  },
  actions: {
    setAladin(context){
      context.commit("SET_ALADIN");
    },
    retrieveAVRO(context,data){
      var url = avro_url + "?oid="+ data["oid"] + "&candid=" + data["candid"]
      var data
      axios.get(url).then(function(response){
        // if (response.status==200){
          // data = response["data"]
          context.commit("SET_AVRO",response.data)
        // }
      });
    },
    retrieveAlert(context,oid){
      var parameters = {"oid":oid}
      axios.post("https://ztf.alerce.online/get_detections",parameters).then(function(response){
        var alerts = response.data.result.detections;
        if(alerts.length > 1){
          var firstmjd = 1/0;
          var first_alert;
          $.each(alerts, function(id,value){
            if(firstmjd > value["mjd"]){
              firstmjd = value["mjd"];
              first_alert = id;
            }
          });
          var selected = alerts[first_alert];
        }else{
          var selected = alerts[0];
        }
        context.commit("CLEAN_AVRO");
        context.dispatch("retrieveAVRO",{"oid":oid,"candid":selected["candid_str"]});
        context.commit("SET_CANDIDATE_ALERT",selected);
      },function(){
        console.log("Error")
      })
    },
    retrieveCandidates(context,delta){
      //Calculate stuff
      var date = new Date();
      var now_mjd = dateToJD(date);
      var last_mjd = dateToJD(date.subsDays(delta));

      var parameters = {
            "records_per_pages":100,
            "query_parameters":
            {
              "filters":
                      {"classearly": 2},
              "dates":
                      {"firstmjd":
                        {"min":last_mjd,"max":now_mjd}
                      }
              },
              "sortBy": "pclassearly",
              "total":100
      };
      axios.post("https://ztf.alerce.online/query",parameters).then(function(response){
        context.commit("SET_CANDIDATES", response.data.result);
        context.commit("CHANGE_DELTA",delta);
        context.commit("SET_ZOOM",false);
        context.commit("UPDATE_TABLE", response.data.result);
      }, function(){
        console.log("error");
      });
    },
    cleanCandidates(context){
      context.commit("CLEAN_CANDIDATES");
    },
    setSelectedCandidate(context,selected){
      context.commit("SELECT_CANDIDATE", selected);
    },
    setZoomed(context){
      context.commit("SET_ZOOM",true);
    },
    createTable(context,id){
      $.fn.dataTable.moment( 'DD/MM/YYYY HH:mm:SS UT' );
      var table = $("#sneCandidates").DataTable({
        "pageLength": 6,
        "dom":"t,p,r",
        "order": [[ 2, "desc" ],[3,"desc"],[1,"desc"]],
        "responsive": true,
        "searching": true, "info": false,"lengthChange":false,
        'processing': true,
        'language': {
            'loadingRecords': '&nbsp;',
            'processing': 'Loading...'
        },
        "columns": [
          { data: "oid" },
          { data: "discovery_date"},
          { data: "prob" },
          { data: "nobs" }
        ],
      });
      context.commit("SET_TABLE",table)
    },
    displayReport(context, show){
      context.commit("SET_SHOW_REPORT", show)
    },
    doReport(context, data){
      reportApi.report(data).then(response => {
        context.commit("SET_RESPONSE_REPORT", response)
        context.dispatch("getReports", context.state.user.email)
      })
      .catch(reason => {
        context.commit("SET_RESPONSE_REPORT", reason)
      })
    },
    getReports(context, data){
      reportApi.getReports(data).then(response => {
        context.commit("SET_REPORTS", response)
      })
      .catch(reason => {
        context.commit("SET_RESPONSE_REPORT", reason)
      })
    },
    deleteReport(context, data){
      reportApi.deleteReport(data).then(response => {
        context.commit("SET_RESPONSE_REPORT", response)
        context.dispatch("getReports", context.state.user.email)
      })
      .catch(reason => {
        context.commit("SET_RESPONSE_REPORT", reason)
      })
    },
    loginUser(context, data){
      let user = {email: data.w3.U3, avatar: data.w3.Paa,}
      reportApi.existUser(user).then(response => {
        if(response.data.exist) {
          context.dispatch("getReports", data.w3.U3)
          context.commit("SET_USER", {
            name: data.w3.ig,
            email: data.w3.U3,
            avatar: data.w3.Paa,
            id: response.data.user_id
          })
        }
        else {
          this.$gAuth.signOut()
        }
      })
    },
    logoutUser(context) {
      context.commit("SET_NULL_USER")
    }
  },
  getters:{
    getCandidates(state){
      return state.sneCandidates;
    },
    getSelected(state){
      return  state.selectedSne ? state.sneCandidates[state.selectedSne] : null;
    },
    getDeltaDays(state){
      return state.deltaDays;
    },
    getZoomed(state){
      return state.zoomed;
    },
    getAlert(state){
      return state.alertCandidate;
    },
    getTable(state){
      return state.table;
    },
    getAladin(state){
      return state.aladin;
    },
    getDisplayReport(state){
      return state.report;
    },
    getReports(state){
      return state.reports  == null? [] : state.reports;
    },
    getUser(state){
      return state.user;
    },
    getAvro(state){
      return state.avro
    }
  }
})
/* eslint-enable */