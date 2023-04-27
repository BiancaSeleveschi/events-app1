<template>
  <div>
    <h1 class="mt-5 pt-5 title-search">SEARCH</h1>
    <input
      v-model="searchWord"
      placeholder="Search"
      type="text"
      class="p-2 rounded rounded-2 m-auto input-search"
    />
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
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      searchWord: "",
    };
  },
  computed: {
    filteredEvents() {
      let events;
      if (this.searchWord === "") {
        events = this.$store.getters.getAllEvents;
      } else {
        events = this.$store.getters.getAllEvents.filter((event) => {
          return (
            event.name.toLowerCase().includes(this.searchWord.toLowerCase()) ||
            event.location.toLowerCase().includes(this.searchWord.toLowerCase())
          );
        });
      }
      return events;
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
  padding-top: 150px;
  padding-bottom: 300px;
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
.title-search {
  letter-spacing: 3px;
  color: darkblue;
  font-size: 50px;
  font-family: "Sitka Subheading", sans-serif;
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

.input-search {
  width: 100%;
  max-width: 330px;
  border: none;
  outline: none;
  background-color: rgba(175, 175, 166, 0.4);
  border-radius: 16px;
  border-bottom: 2px solid #c2c2c2;
  font-size: 20px;
  position: absolute;
  display: grid;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.input-search:focus {
  background-color: rgba(169, 164, 164, 0.5);
}
</style>
