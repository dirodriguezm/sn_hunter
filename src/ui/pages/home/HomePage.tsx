import CelestialMapComponent from "@/UI/components/CelestialMapComponent/CelestialMapComponent";
import CandidatesComponent from "@/UI/components/CandidatesComponent/CandidatesComponent";
import SummaryComponent from "@/UI/components/SummaryComponent/SummaryComponent";
import FilterComponent from "@/UI/components/FilterComponent/FilterComponent";
/* import AladinComponent from "@/UI/components/AladinComponent/AladinComponent"; */
import StampComponent from "@/UI/components/StampComponent/StampComponent";
import { mapState } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "HomePage",

  components: {
    CelestialMapComponent,
    CandidatesComponent,
    SummaryComponent,
    FilterComponent,
    /* AladinComponent, */
    StampComponent,
  },

  computed: {
    ...mapState("classifier", ["loading", "error", "classifiers"]),
    ...mapState("candidate", ["loading", "error", "candidates"]),
    ...mapState("selected", ["candidate", "detection"]),
  },

  async mounted() {
    await this.$store.dispatch("classifier/getClassifiers");
  },

  render(): Vue.VNode {
    const renderLoading = () => {
      return (
        <v-container
          fluid
          style={{
            textAlign: "center",
          }}
        >
          <v-progress-circular indeterminate></v-progress-circular>
        </v-container>
      );
    };

    const renderFilters = () => {
      if (this.$store.getters["classifier/isLoading"]) {
        return renderLoading();
      }
      return (
        <v-container fluid>
          <FilterComponent />
        </v-container>
      );
    };

    const renderCandidates = () => {
      if (this.error) {
        return <p> Error: {this.error} </p>;
      } else if (this.$store.getters["candidate/isLoading"]) {
        return renderLoading();
      } else if (this.$store.getters["candidate/length"] == 0) {
        return (
          <v-container
            fluid
            style={{
              textAlign: "center",
            }}
          >
            <v-card tile>
              <v-container fluid>No results</v-container>
            </v-card>
          </v-container>
        );
      }
      return (
        <v-container fluid>
          <CandidatesComponent
            ref="CandidatesComponent"
            candidates={this.$store.getters["candidate/get"]}
          />
        </v-container>
      );
    };

    const renderStamps = (type: string) => {
      if (!this.$store.getters["selected/hasDetection"]) {
        return renderLoading();
      }
      return (
        <v-container fluid>
          <StampComponent type={type} />
        </v-container>
      );
    };

    const renderSummary = () => {
      if (!this.$store.getters["selected/hasDetection"]) {
        return renderLoading();
      }
      return (
        <v-container fluid>
          <SummaryComponent
            detection={this.$store.getters["selected/getDetection"]}
          />
        </v-container>
      );
    };

    const renderCelestialMap = () => {
      if (!this.$store.getters["selected/hasDetection"]) {
        return renderLoading();
      }
      return (
        <v-container fluid>
          <CelestialMapComponent />
        </v-container>
      );
    };

    const renderAladin = () => {
      if (!this.$store.getters["selected/hasCandidate"]) {
        return renderLoading();
      }
      return <v-container fluid>{/* <AladinComponent /> */}</v-container>;
    };

    return (
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols={5}>
            <v-row no-gutters>
              <v-col>{renderFilters()}</v-col>
              <v-col>{renderSummary()}</v-col>
            </v-row>
            {renderCandidates()}
          </v-col>
          <v-col cols={7}>
            <v-row no-gutters>
              <v-col>{renderStamps("science")}</v-col>
              <v-col>{renderStamps("template")}</v-col>
              <v-col>{renderStamps("difference")}</v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>{renderAladin()}</v-col>
              <v-col cols={4}>{renderCelestialMap()}</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    );
  },
});
