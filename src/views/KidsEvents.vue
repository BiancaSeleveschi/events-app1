<template>
  <div>
    <ItemList :events="events" category="Kids Events" />
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";
export default {
  name: "KidsEvents",
  components: { ItemList },
  computed: {
    events() {
      return this.$store.state.events.filter(
        (event) => event.category === "kids"
      );
    },
  },
};
</script>

<style scoped></style>
