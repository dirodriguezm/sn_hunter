import julian from "julian";
import Vue from "vue";
import { CandidateSearchFilters } from "@/app/candidate/service/candidate.service.types";
import { ClassifierData } from "@/app/classifier/entity/classifier.types";
import { mapActions, mapGetters } from "vuex";
import { ActionTypes as classifierActions } from "@/app/classifier/agents/actions";
import { ActionTypes as candidatesActions } from "@/app/candidate/agents/candidates/actions";
import { ActionTypes as candidateActions } from "@/app/candidate/agents/candidate/actions";

export default Vue.extend({
  name: "FilterComponent",

  data() {
    const todayDate = new Date();
    const beforeYesterdayDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);

    const todayYear = todayDate.getUTCFullYear();
    const todayMonth = todayDate.getUTCMonth() + 1;
    const todayDay = todayDate.getUTCDate();

    const beforeYesterdayYear = beforeYesterdayDate.getUTCFullYear();
    const beforeYesterdayMonth = beforeYesterdayDate.getUTCMonth() + 1;
    const beforeYesterdayDay = beforeYesterdayDate.getUTCDate();

    const today =
      todayYear +
      "-" +
      (todayMonth > 9 ? todayMonth : "0" + todayMonth) +
      "-" +
      (todayDay > 9 ? todayDay : "0" + todayDay);

    const beforeYesterday =
      beforeYesterdayYear +
      "-" +
      (beforeYesterdayMonth > 9
        ? beforeYesterdayMonth
        : "0" + beforeYesterdayMonth) +
      "-" +
      (beforeYesterdayDay > 9 ? beforeYesterdayDay : "0" + beforeYesterdayDay);

    return {
      filter: {
        classifier: "stamp_classifier",
        class: "SN",
        firstmjd: [beforeYesterday, today],
        page: 1,
      } as CandidateSearchFilters,
      datePickerMenu: false,
    };
  },

  methods: {
    dateToJulian(d: string): string {
      return String(julian(new Date(d)) - 2400000.5);
    },

    setFilterClassifier(c: ClassifierData): void {
      this.filter.classifier = c.classifier_name;
      this.filter.class = "";
    },

    setFilterClass(c: string): void {
      this.filter.class = c;
    },

    showDatePicker(): void {
      this.datePickerMenu = true;
    },

    setDateTextField(): string | void {
      if (this.filter.firstmjd.length == 0) {
        return;
      }
      const date = this.filter.firstmjd;
      if (date.length == 1) {
        return date[0] + " (" + this.dateToJulian(date[0]) + ")";
      }
      const julian0 = this.dateToJulian(date[0]);
      const julian1 = this.dateToJulian(date[1]);
      if (julian0 < julian1) {
        return (
          date[0] + " ~ " + date[1] + " (" + julian0 + " ~ " + julian1 + ")"
        );
      }
      return date[1] + " ~ " + date[0] + " (" + julian1 + " ~ " + julian0 + ")";
    },

    parseFilter(): CandidateSearchFilters {
      const parsedFilter = {
        classifier: this.filter.classifier,
        class: this.filter.class,
        firstmjd: this.filter.firstmjd.map((d) => this.dateToJulian(d)).sort(),
        page: this.filter.page,
      };
      return parsedFilter;
    },
    ...mapActions("classifiers", [classifierActions.getClassifiers]),
    ...mapActions("candidates", [candidatesActions.getCandidates]),
    ...mapActions("candidate", { selectCandidate: candidateActions.select }),

    async fetchCandidates() {
      await this.getCandidates(this.parseFilter);
      await this.selectCandidate(this.candidates[0]);
    },
  },

  computed: {
    ...mapGetters("candidates", { candidates: "get" }),
    ...mapGetters("candidate", { selectedCandidate: "get" }),
    ...mapGetters("classifiers", { classifiers: "get" }),
    classifierClasses(): string[] {
      const classifier = this.classifiers.filter(
        (c: ClassifierData) => c.classifier_name === this.filter.classifier
      );
      return classifier.length ? classifier[0].classes : classifier;
    },
  },

  async mounted() {
    await this.getClassifiers();
    await this.fetchCandidates();
  },

  render(): Vue.VNode {
    const renderClassifiers = () => {
      return (
        <v-select
          v-model={this.filter.classifier}
          label="Classifier"
          items={this.classifiers}
          item-text="classifierName"
          onChange={this.setFilterClassifier}
          return-object
        ></v-select>
      );
    };

    const renderClasses = () => {
      if (this.filter.classifier != "") {
        return (
          <v-select
            v-model={this.filter.class}
            label="Class"
            items={this.classifierClasses}
            item-text="classes"
            onChange={this.setFilterClass}
            return-object
          ></v-select>
        );
      } else {
        return <v-select label="Class" disabled></v-select>;
      }
    };

    const renderDatePicker = () => {
      return (
        <div>
          <v-text-field
            value={this.setDateTextField()}
            label="Date"
            readonly
            onClick={this.showDatePicker}
          ></v-text-field>
          <v-menu
            v-model={this.datePickerMenu}
            close-on-content-click={false}
            position-y={200}
            position-x={80}
            max-width={290}
          >
            <v-date-picker
              v-model={this.filter.firstmjd}
              no-title
              scrollable
              full-width
              range
            ></v-date-picker>
          </v-menu>
        </div>
      );
    };

    const renderSearchButton = () => {
      if (this.filter.classifier == "") {
        return (
          <v-btn block disabled>
            Search
          </v-btn>
        );
      }
      return (
        <v-btn onClick={this.fetchCandidates} block>
          Search
        </v-btn>
      );
    };

    return (
      <v-card tile>
        <v-container>
          <v-row>
            <v-col>{renderClassifiers()}</v-col>
            <v-col>{renderClasses()}</v-col>
          </v-row>
          {renderDatePicker()}
          {renderSearchButton()}
        </v-container>
      </v-card>
    );
  },
});
