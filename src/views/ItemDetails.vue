<template>
  <div class="mt-5">
    <div v-if="event" class="event">
      <div class="mt-5 pt-5 w-50 m-auto cart-item bg-secondary bg-opacity-25">
        <img :src="event.img" class="img" />
        <div class="ms-5">
          <h3 class="item-event-title fw-bold">{{ event.name }}</h3>
          <p class="pgf fw-bold mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calendar-check text-primary"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
              />
            </svg>
            {{ event.date }}
          </p>
          <p class="pgf">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill text-primary"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              />
            </svg>
            {{ event.location }}
          </p>
          <p class="pgf text-dark mt-5">
            {{ event.description }}
          </p>
        </div>
      </div>
      <div
        class="border border-secondary border-opacity-50 border border-5 w-50 m-auto mt-2"
      >
        <h4 class="fw-bold m-3">Buy tickets</h4>
        <h5>Price: {{ event.price }} RON</h5>
        <div class="button-div m-auto my-3">
          <button class="button-left d-inline" @click="decreaseQuantity">
            -
          </button>
          <p class="quantity d-inline p-2" type="number">
            {{ quantity }}
          </p>
          <button class="button-right d-inline" @click="increaseQuantity">
            +
          </button>
        </div>
        <button class="btn btn-dark m-auto my-3" @click="buyTickets(event)">
          Buy tickets
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemDetails",
  props: ["id", "event"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    buyTickets(event) {
      let item = {
        event: {
          name: event.name,
          location: event.location,
          date: event.date,
          price: event.price,
          id: event.id,
        },
        quantity: this.quantity,
        quantityPrice: event.price * this.quantity,
      };
      this.$store.dispatch("addToCart", item);
      this.$router.push("/checkout");
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
  },
};
</script>
<style scoped>
.button-div {
  width: max-content;
  border-radius: 30px;
  border: 1px solid #808080;
}

.event {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 300px;
}

.img {
  display: flow;
  width: 18em;
  height: 20em;
  object-fit: cover;
  object-position: top;
  transition: transform 0.6s;
  filter: brightness(80%);
}

.cart-item {
  display: grid;
  grid-template-columns: 3fr 6fr 1fr;
  padding: 20px;
  background-color: #ffffff;
}

.item-event-title {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.034);
  cursor: pointer;
  transition: 0.5s;
}

.button-right,
.button-left {
  border: none;
  background-color: grey;
  padding: unset;
  width: 25px;
  height: 30px;
  font-size: 20px;
}

.button-left {
  border-radius: 20px 0 0 20px;
}

.button-right {
  border-radius: 0 20px 20px 0;
}

.quantity {
  font-size: 20px;
}

.button-right:hover,
.button-left:hover {
  background-color: #5b5b5b;
}

.pgf {
  text-align: left;
}

.item-event-title:hover {
  color: #838383;
}

.item-event-title {
  display: flex;
  position: relative;
  text-align: start;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.034);
  transition: 0.5s;
}
</style>
