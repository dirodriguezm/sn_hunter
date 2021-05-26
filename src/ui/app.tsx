import NavbarComponent from "@/UI/components/NavbarComponent/NavbarComponent";
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {
    NavbarComponent,
  },
  render(): Vue.VNode {
    return (
      <v-app>
        <v-main>
          <NavbarComponent />
          <router-view />
        </v-main>
      </v-app>
    );
  },
});
