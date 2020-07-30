<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { Bar } from "vue-chartjs";
export default {
  name: "Chart",
  extends: Bar,
  computed: {
    ...mapState(["data"]),
    ...mapGetters(["getCountries", "getTotal", "getTodaysTotal"])
  },
  methods: {
    ...mapActions(["getData"])
  },
  async mounted() {
    await this.getData();
    this.renderChart({
      labels: this.getCountries,
      datasets: [
        {
          label: "Total",
          borderColor: "#FC2525",
          pointBackgroundColor: "white",
          borderWidth: 1,
          pointBorderColor: "white",
          backgroundColor: "#FC2525",
          data: this.getTotal
        },
        {
          label: "Today's Cases",
          borderColor: "#05CBE1",
          pointBackgroundColor: "white",
          borderWidth: 1,
          pointBorderColor: "white",
          backgroundColor: "#05CBE1",
          data: this.getTodaysTotal
        }
      ]
    });
  }
};
</script>
