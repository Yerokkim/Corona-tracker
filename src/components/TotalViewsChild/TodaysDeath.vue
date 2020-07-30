<template>
  <div>
    <v-card-title>
      <p>Today's Death</p>
    </v-card-title>
    <v-list-item>
      <h1>{{ this.todayDeaths }}</h1>
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
    todayDeaths() {
      let total = this.data.reduce((acc, val) => {
        return acc + val.todayDeaths;
      }, 0);
      return total;
    }
  }
};
</script>
