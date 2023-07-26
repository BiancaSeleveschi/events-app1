<template>
  <div class="events-section d-block bg-dark bg-opacity-75">
    <h2 class="text-bg-primary m-auto p-4 text-uppercase title">
      {{ category }}
    </h2>
    <h4
      v-show="events.length === 0"
      class="py-3 mt-5 px-3 m-auto text-black title"
    >
      Sorry, we couldn't find any results for the entered search.
    </h4>
    <div
      v-for="(event, index) in events"
      :key="index"
      class="cart-item m-auto bg-light"
    >
      <img :src="event.img" alt="Event image" class="event-image" />
      <div class="event-content">
        <router-link
          :to="{
            name: 'ItemDetails',
            params: {
              event: event,
              id: event.id,
            },
          }"
          class="item-header"
        >
          <h3 class="item-event-title">{{ event.name }}</h3>
          <button class="btn btn-primary" id="get-button">Get a ticket</button>
        </router-link>
        <p class="pgf fw-bold">
          {{ event.date }},
          <span class="text-secondary"> {{ event.location }} </span>
        </p>
        <p class="mb-4 pgf">{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: ["events", "category"],
};
</script>

<style scoped>
#get-button {
  float: right;
  margin-top: 90px;
  margin-left: 40px;
}

.item-event-title {
  display: flex;
  position: relative;
  text-align: start;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Clab Personal Use", sans-serif;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.034);
  transition: 0.5s;
}

.item-event-title:hover {
  color: #838383;
}

.pgf,
.title {
  text-align: left;
}

.title {
  letter-spacing: 3px;
  width: 50%;
}

.item-header {
  text-decoration: none;
}

.events-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, 20em);
  grid-gap: 0.7em;
  justify-content: center;
  height: fit-content;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 600px;
  margin-bottom: -35%;
}
.event-content {
  margin-left: 30px;
}
.cart-item {
  border-bottom: solid 1px #333;
  display: grid;
  grid-template-columns: 3fr 6fr 1fr;
  padding: 20px;
  background-color: #ffffff;
  width: 50%;
}

.event-image {
  display: flow;
  width: 100%;
  object-fit: cover;
  margin-right: 30px;
  object-position: top;
  transition: transform 0.6s;
  filter: brightness(80%);
}

.cart-item:hover {
  background-color: #e3e3e3;
}
@media (max-width: 576px) {
  .cart-item,
  .title {
    width: 90%;
  }
  .event-image {
    width: 100%;
    display: block;
  }
  .event-content {
    width: 80%;
    display: block;
  }
  .item-event-title {
    font-size: 18px;
  }
  #get-button {
    width: 100px;
    float: left;
    margin: 0px 20px 10px 0px;
    display: block;
    font-size: 14px;
  }
  .pgf {
    font-size: 14px;
  }
}
</style>
