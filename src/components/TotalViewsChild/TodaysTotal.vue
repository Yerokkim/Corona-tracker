<template>
  <div>
    <v-card-title>
      <p>Today's Cases</p>
    </v-card-title>
    <v-list-item>
      <h1>{{ this.todaysTotal }}</h1>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "TodaysTotal",
  props: {
    data: Array
  },
  computed: {
    todaysTotal() {
      let total = this.data.reduce((acc, val) => {
        return acc + val.todayCases;
      }, 0);
      return total;
    }
  }
};
</script>
