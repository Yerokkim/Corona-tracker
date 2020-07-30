<template>
  <div>
    <div class="container">
      <Total :data="this.data" />
      <TodaysDeath :data="this.data" />
      <TodaysTotal :data="this.data" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Total from "./TotalViewsChild/Total";
import TodaysDeath from "./TotalViewsChild/TodaysDeath";
import TodaysTotal from "./TotalViewsChild/TodaysTotal";

export default {
  name: "TotalViews",
  components: {
    Total,
    TodaysDeath,
    TodaysTotal
  },
  computed: {
    ...mapState(["data"])
  },
  methods: {
    ...mapActions(["getData"])
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 25px;
}
</style>
