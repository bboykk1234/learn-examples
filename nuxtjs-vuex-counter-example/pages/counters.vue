<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="decrement">-</button>
    <span>/</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    counter() {
      return this.$store.state.counters.number;
    },
  },
  methods: {
    ...mapMutations({
      increment: "counters/increment",
      decrement: "counters/decrement",
    }),
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
