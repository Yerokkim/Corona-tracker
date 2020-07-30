<template>
  <div>
    <v-card-title>
      <p>Total Cases</p>
    </v-card-title>
    <v-list-item>
      <h1>{{ this.total }}</h1>
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
    total() {
      let total = this.data.reduce((acc, val) => {
        return acc + val.cases;
      }, 0);
      return total;
    }
  }
};
</script>
