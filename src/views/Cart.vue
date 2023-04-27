<template>
  <div>
    <div class="card">
      <h4 class="border-bottom p-2">My order</h4>
      <div
        v-for="(item, index) in this.$store.state.cart"
        :key="index"
        class="border border-1 rounded-4 p-2 mb-2"
      >
        <h5 class="fw-bold mt-2">{{ item.event.name }}</h5>
        <p>{{ item.event.location }}, {{ item.event.date }}</p>
        <div class="w-100">
          <p class="d-inline">
            {{ item.quantity }} x ticket/s: {{ item.event.name }}
          </p>
          <p class="d-inline price">
            {{ item.quantity }} x {{ item.event.price }} RON
          </p>
        </div>
        <div>
          <p class="d-inline">Electronic ticket (email):</p>
          <p class="d-inline text-success" id="electronic-ticket">Free</p>
        </div>
        <p class="d-inline">Total:</p>
        <p class="d-inline price">{{ item.quantityPrice }} RON</p>
      </div>
      <div class="p-2">
        <input
          v-model="couponCode"
          placeholder="Coupon Code"
          class="d-inline w-50 me-4 p-2"
          id="couponCode"
        />
        <button
          class="btn btn-outline-dark d-inline w-25"
          @click="applyCouponCode"
        >
          Apply
        </button>
      </div>
      <p
        v-show="showCouponCodeAlert"
        class="text-danger ms-2"
        id="coupon-code-alert"
      >
        Enter a valid coupon code
      </p>
      <h5 class="fw-bold mx-2 mt-2 p-2 border-bottom border-top">
        Total:
        <span class="price"> {{ totalPrice }} RON</span>
      </h5>
      <button class="btn btn-dark w-50 my-3 m-auto">Pay Now</button>
    </div>
    <div class="d-inline-block email-card">
      <p>sssssssssss</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cart",
  data() {
    return {
      couponCode: "",
      couponCodeName: "EXTRA10",
      showCouponCodeAlert: false,
      isCouponCodeValid: false,
    };
  },
  computed: {
    totalPrice() {
      let totalPrice = this.$store.getters.getTotalPrice;
      let discountedPrice;
      if (this.isCouponCodeValid) {
        discountedPrice = totalPrice - totalPrice * 0.1;
      } else {
        discountedPrice = totalPrice;
      }
      return discountedPrice;
    },
  },
  methods: {
    applyCouponCode() {
      if (this.couponCode.toLowerCase() !== this.couponCodeName.toLowerCase()) {
        this.showCouponCodeAlert = true;
        this.isCouponCodeValid = false;
      } else {
        this.isCouponCodeValid = true;
      }
    },
  },
};
</script>

<style scoped>
#couponCode {
  border: none;
  border-bottom: 1px solid black;
  outline: none;
}
#coupon-code-alert {
  margin-top: -6px;
}
.card {
  border: 1px solid black;
  float: left;
  width: 500px;
  text-align: left;
  padding: 10px;
  margin-left: 20%;
  margin-top: 7%;
  margin-bottom: 10%;
}
.email-card {
  border: 1px solid black;
  width: 500px;
  text-align: left;
  padding: 10px;
  margin-right: 20%;
  margin-top: 7%;
  margin-bottom: 10%;
  border-radius: 5px;
}
.price {
  float: right;
}
</style>
