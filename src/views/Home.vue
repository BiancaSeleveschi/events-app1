<template>
  <div class="home">
    <h1 class="mt-5 pt-5">LEADER IN TICKETING - YOUR GUIDE TO GOING OUT</h1>
    <ItemList :events="events" />
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: { ItemList },
  data() {
    return {
      // events: this.$store.getters.getAllEvents,
    };
  },
  computed: {
    events() {
      return this.$store.getters.getAllEvents;
    },
  },
};
</script>
