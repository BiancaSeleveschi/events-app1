<template>
  <div>
    <ItemList :events="$store.state.events.sports" />
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sports",
  components: { ItemList },
};
</script>

<style scoped></style>
