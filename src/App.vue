<template>
  <v-app>
    <v-app-bar app color="warning" dark>
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          src="./assets/corona.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <h1>Corona-Tracker</h1>
    </v-app-bar>

    <v-content>
      <div class="d-flex align-center">
        <TotalViews />
      </div>
    </v-content>

    <v-content>
      <Chart />
    </v-content>
  </v-app>
</template>

<script>
import TotalViews from "./components/TotalViews";
import Chart from "./components/Chart";

export default {
  name: "App",

  components: {
    TotalViews,
    Chart
  },

  data: () => ({
    //
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
