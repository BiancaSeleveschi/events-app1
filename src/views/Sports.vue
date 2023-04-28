<template>
  <div>
    <ItemList :events="events" :category="category" />
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";
import { EventBus } from "@/store";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sports",
  components: { ItemList },
  data() {
    return {
      category: "sports",
    };
  },
  created: function () {
    EventBus.$on("search-query", (query) => {
      this.searchWord = query;
    });
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
