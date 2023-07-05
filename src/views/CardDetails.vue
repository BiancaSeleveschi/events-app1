<template>
  <div>
    <div
      class="m-auto my-5 border border-2 bg-secondary bg-opacity-25 m-auto p-4 rounded rounded-4 payment-page"
    >
      <h4 class="p-4">Enter your card details</h4>
      <div class="w-75 mb-5 d-block m-auto">
        <p class="card-info-pgf">Name on card*</p>
        <input
          v-model="cardholderName"
          type="text"
          class="w-100 card-input"
          required
        />
        <span class="card-alert" v-show="isCardholderNameInputIncomplete"
          >Please enter the cardholder name</span
        >
      </div>
      <div class="w-75 mb-5 d-block m-auto">
        <p class="card-info-pgf">Number*</p>
        <input
          v-model="cardNumber"
          type="number"
          class="w-100 card-input"
          required
        />
        <span class="card-alert" v-show="isCardNumberInputIncomplete"
          >Enter the card number</span
        >
      </div>

      <p class="w-100 ms-5 ps-2 card-info-pgf">Expiration Date*</p>
      <div class="w-50 mb-5 d-inline-block">
        <select v-model="month" class="p-1 w-50 card-input">
          <option value="Year" disabled>Month</option>
          <option v-for="(month, index) in months" :key="index">
            {{ month }}
          </option>
        </select>
        <span
          v-show="isExpirationMonthInputIncomplete"
          class="card-alert ms-5 ps-2"
        >
          Enter a valid date</span
        >
      </div>
      <div class="w-50 mb-5 d-inline-block">
        <select v-model="year" class="w-75 p-1 card-input" id="year-select">
          <option value="Year" disabled>Year</option>
          <option v-for="(year, index) in years" :key="index">
            {{ year }}
          </option>
        </select>
        <span class="card-alert" v-show="isExpirationYearInputIncomplete"
          >This field is required</span
        >
      </div>
      <p class="w-100 ms-5 ps-2 card-info-pgf">CVV/CVC*</p>
      <div class="w-50 mb-5 d-inline-block">
        <input
          v-model="cvv"
          type="number"
          class="w-100 card-input"
          id="input-cvv"
          required
        />
        <span class="card-alert" id="cvv-alert" v-show="isCvvInputIncomplete"
          >Enter a CVV/CVC</span
        >
      </div>
      <p
        @click="showCvvDetails = !showCvvDetails"
        id="cvv-pgf"
        class="d-inline-block me-3 ms-2"
      >
        What is this?
      </p>
      <div v-show="showCvvDetails" id="cvv-inf-card">
        <p class="close-button pe-2" @click="showCvvDetails = false">X</p>
        <img
          class="m-auto w-75 d-block"
          src="https://media.istockphoto.com/id/1393724588/photo/cvv-code-icon-on-white-background-cvv-code-icon-with-credit-card-and-magnifying-glass-sign.jpg?s=612x612&w=0&k=20&c=pk1XGAM5U5Ki1_kgggYhPG3hBOEvmS_F0Y6XOUiZ9h0="
        />
        <p class="px-2">
          For MasterCard and Visa, enter last three digits on the signature
          strip.
        </p>
      </div>
      <button
        @click="payNow"
        class="py-2 px-5 d-block m-auto mb-4 btn btn-dark"
      >
        Place Order
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDetails",
  data() {
    return {
      cardholderName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvv: "",
      isCvvInputIncomplete: false,
      isExpirationMonthInputIncomplete: false,
      isExpirationYearInputIncomplete: false,
      isCardNumberInputIncomplete: false,
      isCardholderNameInputIncomplete: false,
      isCardDetailsComplete: false,
      showCvvDetails: false,
      email: "",
      emailMessage: "",
      id: this.generateFictiveId(6),
    };
  },
  computed: {
    months() {
      let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      return months.map((m) =>
        m.toLocaleString("en-US", { minimumIntegerDigits: 2 })
      );
    },
    years() {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let i = 0; i < 13; i++) {
        years.push(currentYear + i);
      }
      return years;
    },
  },
  methods: {
    payNow() {
      let card = {
        cardholderName: this.cardholderName,
        cardNumber: this.cardNumber,
        month: this.month,
        year: this.year,
        cvv: this.cvv,
      };
      const regexCardholderName = /^[a-zA-Z\s]+$/;
      this.isCardholderNameInputIncomplete = !regexCardholderName.test(
        card.cardholderName
      );
      const regexCardNumber = /^(?:[0-9]{4}\s?){3}[0-9]{4}$/;
      this.isCardNumberInputIncomplete = !regexCardNumber.test(card.cardNumber);

      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      this.isExpirationMonthInputIncomplete =
        this.month === "" ||
        (this.year == currentYear && parseInt(this.month) < currentMonth);
      this.isExpirationYearInputIncomplete = card.year === "";

      const regexCVV = /^[0-9]{3,4}$/;
      this.isCvvInputIncomplete = !regexCVV.test(card.cvv);
      this.isCardDetailsComplete =
        !this.isCardholderNameInputIncomplete &&
        !this.isCardNumberInputIncomplete &&
        !this.isExpirationYearInputIncomplete &&
        !this.isExpirationYearInputIncomplete &&
        !this.isCvvInputIncomplete;
      if (this.isCardDetailsComplete) {
        this.$router.push("/order/confirmation");
        this.$store.dispatch("resetCart");
      }
    },
  },
};
</script>

<style scoped>
#year-select {
  margin-left: -55px;
}

#cvv-pgf {
  cursor: pointer;
}

#cvv-inf-card {
  font-family: "Malgun Gothic Semilight", sans-serif;
  background-color: #ffffff;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  border: 1px solid black;
  border-radius: 10px;
  width: 350px;
  height: 400px;
  margin-top: -500px;
  left: 49%;
  z-index: 1;
}

#cvv-inf-card:before {
  content: "";
  position: absolute;
  height: 0px;
  width: 0px;
  left: 29%;
  top: 100%;
  border-width: 15px;
  border-color: transparent transparent transparent #000000;
  border-style: solid;
  transform: rotate(90deg);
  z-index: -6;
}

.payment-page {
  font-family: "Malgun Gothic Semilight", sans-serif;
  width: 500px;
}

.close-button {
  cursor: pointer;
  font-size: 20px;
  margin-left: 200px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.card-input {
  outline: none;
}

.card-alert {
  position: relative;
  color: red;
  font-size: 14px;
  float: left;
}

.card-info-pgf {
  margin-bottom: 0;
  float: left;
  text-align: start;
}
</style>
