<template>
  <div>
    <ItemList :events="filteredEvents" category="Events" />
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  name: "CityEvents",
  components: { ItemList },
  props: ["city"],
  data() {
    return {
      cityInitial: this.city,
      // city: this.$route.params.city,
    };
  },
  mounted() {
    console.log(this.cityInitial);
  },
  computed: {
    filteredEvents() {
      return this.$store.state.events.filter(
        (event) => event.location === this.city
      );
    },
  },
};
</script>

<style scoped></style>
