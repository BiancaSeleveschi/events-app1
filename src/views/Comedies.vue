<template>
  <div>
    <ItemList :events="$store.state.events.comedy" />
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Comedy",
  components: { ItemList },
};
</script>

<style scoped></style>
