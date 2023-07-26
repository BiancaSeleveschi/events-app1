<template>
  <div>
    <div class="card">
      <h4 class="border-bottom p-2 mx-2">My order</h4>
      <div
        v-for="(item, index) in this.$store.state.cart"
        :key="index"
        class="border border-1 rounded-4 p-2 mb-2 bg-secondary bg-opacity-10"
      >
        <p @click="removeEventFromCart(index)" class="close me-1">x</p>
        <h5 class="fw-bold mt-2 festival-name">{{ item.event.name }}</h5>
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
      <div class="p-3">
        <p>Add coupon code</p>
        <input
          v-model="couponCode"
          placeholder="Coupon Code"
          class="d-inline w-50 me-4 py-2"
          id="couponCode"
        />
        <button
          class="btn btn-outline-dark d-inline w-25"
          @click="applyCouponCode"
        >
          Apply
        </button>
        <p v-show="showCouponCodeAlert" class="text-danger">
          {{ messageCouponCodeAlert }}
        </p>
      </div>
      <h5 class="fw-bold mx-3 my-4 py-2 border-bottom border-top">
        Total:
        <span class="price"> {{ totalPrice }} RON</span>
      </h5>
    </div>
    <div class="d-inline-block email-card px-4">
      <h5 class="py-2 border-bottom">You'll receive the tickets via email.</h5>
      <p class="pt-3">Enter your email</p>
      <input
        v-model="email"
        placeholder="Email"
        class="p-1 w-75"
        id="email-input"
      />
      <p v-show="isEmailInvalid" class="text-danger">
        {{ messageEmailAlert }}
      </p>
      <button
        class="btn btn-dark w-50 my-4 d-block m-auto"
        @click="verifyEmail"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Checkout",
  data() {
    return {
      couponCode: "",
      email: "",
      messageEmailAlert: "",
      messageCouponCodeAlert: "",
      couponCodeName: "EXTRA10",
      showCouponCodeAlert: false,
      isCouponCodeValid: false,
      isCouponCodeApplied: false,
      isEmailInvalid: false,
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
      if (
        this.$store.state.cart.length === 0 &&
        this.isCouponCodeValid !== ""
      ) {
        this.showCouponCodeAlert = true;
        this.messageCouponCodeAlert = "You don't have any ticket added";
      } else if (this.$store.state.cart.length !== 0) {
        if (
          this.couponCode.toLowerCase() !== this.couponCodeName.toLowerCase()
        ) {
          this.showCouponCodeAlert = true;
          this.isCouponCodeValid = false;
          this.messageCouponCodeAlert = "Enter a valid coupon code";
        } else {
          this.isCouponCodeValid = true;
          this.showCouponCodeAlert = false;
        }
      }
    },
    removeEventFromCart(index) {
      this.$store.dispatch("removeEventFromCart", index);
    },
    verifyEmail() {
      if (this.email === "") {
        this.isEmailInvalid = true;
        this.messageEmailAlert = "Enter a email address";
      } else if (!this.email.includes("@") && this.email !== "") {
        this.isEmailInvalid = true;
        this.messageEmailAlert = "Enter a valid email address";
      } else if (this.email.includes("@")) {
        this.$router.push({
          name: "CardDetails",
          params: {
            email: this.email,
          },
        });
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

#email-input {
  outline: none;
  margin-top: -10px;
}

.card {
  border: 1px solid black;
  float: left;
  width: 25%;
  text-align: left;
  padding: 10px;
  margin-left: 20%;
  margin-top: 7%;
  margin-bottom: 10%;
}

.email-card {
  border: 1px solid black;
  width: 30%;
  text-align: left;
  padding: 10px;
  margin-right: 20%;
  margin-top: 7%;
  margin-bottom: 10%;
  border-radius: 5px;
}

.close {
  float: right;
  margin-top: -10px;
  font-size: 22px;
  cursor: pointer;
}

.price {
  float: right;
}
@media (max-width: 576px) {
  .card {
    width: 90%;
    margin-left: 5%;
    font-size: 14px;
  }

  .email-card {
    width: 90%;
    margin-right: 1%;
    margin-top: 0%;
  }
  .festival-name,
  .price,
  .border-bottom {
    font-size: 16px;
  }
  .btn,
  #couponCode {
    font-size: 14px;
  }
}
</style>
