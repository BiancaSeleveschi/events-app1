<template>
  <div class="ff">
    <ItemList :events="filteredEvents" category="Search results" />
  </div>
</template>

<script>
import { EventBus } from "@/store";
import ItemList from "@/components/ItemList";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  components: { ItemList },
  data() {
    return {
      events: this.$store.state.events,
      showMessage: false,
      searchWord: "",
    };
  },
  created: function () {
    EventBus.$on("search-query", (query) => {
      this.searchWord = query;
    });
  },
  computed: {
    filteredEvents() {
      if (this.searchWord.trim() !== "") {
        return this.events.filter((event) =>
          event.name.toLowerCase().includes(this.searchWord.toLowerCase())
        );
      } else {
        return this.events;
      }
    },
  },
};
</script>
<style scoped></style>
