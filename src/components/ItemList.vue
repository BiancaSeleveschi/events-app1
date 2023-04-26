<template>
  <div>
    <div class="events-section">
      <div v-for="(event, index) in events" :key="index" class="item">
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
  name: "ItemList",
  props: ["events"],
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

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  width: 20em;
  height: 26em;
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
