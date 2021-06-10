import Vue, { PropOptions } from "vue";
import { CandidateData } from "@/app/candidate/entity";
import { mapActions } from "vuex";
import { ActionTypes as candidateActions } from "@/app/candidate/agents/candidate/actions";

export default Vue.extend({
  name: "CandidatesComponent",

  props: {
    candidates: {
      type: Array,
      required: true,
    } as PropOptions<CandidateData[]>,
  },

  data() {
    return {
      isLoggedIn: false,
      selectedCandidate: "",
      headers: [
        { text: "ObjectID", sortable: false, value: "oid" },
        { text: "N° of Detections", sortable: false, value: "ndet" },
        { text: "Probability", sortable: false, value: "probability" },
        { text: "Actions", sortable: false, value: "actions" },
      ],
    };
  },

  mounted() {
    if (this.candidates) {
      this.selectedCandidate = this.candidates[0].oid;
    }
  },

  watch: {
    selectedCandidate(newVal) {
      const candidate = this.candidates.filter((a) => a.oid === newVal);
      if (candidate.length) {
        this.selectCandidate(candidate[0]);
      }
    },
  },

  methods: {
    ...mapActions("candidate", { selectCandidate: candidateActions.select }),

    rowClicked(row: CandidateData) {
      this.selectedCandidate = row.oid;
    },

    keyPressed(e: KeyboardEvent) {
      if (this.candidates) {
        const index = this.candidates
          .map((x) => x.oid)
          .indexOf(this.selectedCandidate);
        if (e.key == "ArrowUp" && index > 0) {
          this.selectedCandidate = this.candidates[index - 1].oid;
        } else if (e.key == "ArrowDown" && index < 9) {
          this.selectedCandidate = this.candidates[index + 1].oid;
        }
      }
    },
  },

  created() {
    window.addEventListener("keydown", this.keyPressed);
  },

  destroyed() {
    window.removeEventListener("keydown", this.keyPressed);
  },

  render(): Vue.VNode {
    const renderTable = () => {
      return (
        <v-data-table
          headers={this.headers}
          items={this.candidates}
          item-key={"oid"}
          scopedSlots={{
            item: (item: Record<string, any>) => (
              <tr
                style={
                  this.selectedCandidate === item.item.oid
                    ? {
                        color: "black",
                        backgroundColor: "white",
                      }
                    : {}
                }
                on={{
                  click: (): void => {
                    this.rowClicked(item.item);
                  },
                }}
              >
                <td>{item.item.oid}</td>
                <td>{item.item.ndet}</td>
                <td>{item.item.probability}</td>
                <td>
                  <v-btn icon>
                    <v-icon
                      color={
                        this.selectedCandidate === item.item.oid ? "black" : ""
                      }
                      disabled={this.isLoggedIn ? false : true}
                    >
                      clear
                    </v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon
                      color={
                        this.selectedCandidate === item.item.oid ? "black" : ""
                      }
                      disabled={this.isLoggedIn ? false : true}
                    >
                      done
                    </v-icon>
                  </v-btn>
                </td>
              </tr>
            ),
          }}
        ></v-data-table>
      );
    };

    return (
      <div>
        <v-card tile>{renderTable()}</v-card>
      </div>
    );
  },
});
