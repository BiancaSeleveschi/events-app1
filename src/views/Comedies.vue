<template>
  <div>
    <ItemList :events="events" :category="category" />
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Comedy",
  components: { ItemList },
  data() {
    return {
      category: "comedies",
    };
  },
  computed: {
    events() {
      return this.$store.state.events.filter(
        (event) => event.category === this.category
      );
    },
  },
};
</script>

<style scoped></style>
