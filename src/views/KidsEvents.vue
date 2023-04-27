<template>
  <div>
    <ItemList :events="$store.state.kidsEvents" category="Kids Events" />
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";
export default {
  name: "KidsEvents",
  components: { ItemList },
};
</script>

<style scoped></style>
