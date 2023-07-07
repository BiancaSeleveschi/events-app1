<template>
  <div class="bg-dark">
    <h1 class="text-light title">
      LEADER IN TICKETING - YOUR GUIDE TO GOING OUT
    </h1>
    <div class="events-section">
      <div v-for="(event, index) in filteredEvents" :key="index" class="item">
        <router-link
          :to="{
            name: 'ItemDetails',
            params: {
              event: event,
              id: event.id,
            },
          }"
          class="card"
        >
          <img class="card-image" :src="event.img" />
          <div class="card-bottom shadow text-light">
            <p class="item-title m-auto">
              {{ event.name }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <ItemList :events="events" />
  </div>
</template>

<script>
import { EventBus } from "@/store";
import ItemList from "@/components/ItemList";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: { ItemList },
  data() {
    return {
      events: this.$store.state.events,
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
<style scoped>
.events-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, 20em);
  grid-gap: 0.7em;
  justify-content: center;
  height: fit-content;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 300px;
}

.title {
  padding-top: 5%;
}

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  width: 18em;
  height: 20em;
  border: none;
  border-bottom: inherit;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0);
  text-decoration: none;
}

.item:hover > .card > .card-image {
  transform: scale(1.1);
}

.card-bottom:hover > .card-image {
  transform: scale(1.1);
}

.card-image {
  position: absolute;
  width: inherit;
  height: inherit;
  object-fit: cover;
  display: block;
  object-position: top;
  transition: transform 0.6s;
  filter: brightness(80%);
}

.card-bottom {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  text-align: center;
}

.item-title {
  font-size: 26px;
  font-weight: 700;
}
</style>
