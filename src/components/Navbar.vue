<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <h1 class="navbar-brand fw-bold me-5">Events</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page"
                >Home
              </router-link>
            </li>
            <li class="nav-item">
              <p
                class="nav-link dropdown-toggle"
                @click="showCities = !showCities"
              >
                Cities
              </p>
              <div class="cities-div" v-show="showCities">
                <div
                  v-for="(city, index) in $store.state.cities"
                  :key="index"
                  class="city-name d-block px-3 pt-3 w-25"
                >
                  {{ city }}
                </div>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/festivals" class="nav-link"
                >Festivals
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/comedies" class="nav-link"
                >Comedies</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/sports" class="nav-link">Sports</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/kids/events" class="nav-link"
                >Kids Events
              </router-link>
            </li>
          </ul>
          <router-link to="/cart" class="cart rounded-5 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
          </router-link>
          <router-link to="/search" class="search-box rounded-5 me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-search text-dark"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      city: "City",
      searchWord: "",
      showCities: false,
      showCartDetails: false,
    };
  },
  methods: {
    searchEvent(searchWord) {
      // this.$emit("search", searchWord);
      if (searchWord !== "") {
        this.$router.push("/search");
      }
    },
    showCart() {
      this.showCartDetails = !this.showCartDetails;
      this.showLogin = false;
      this.showProfile = false;
    },
  },
};
</script>

<style scoped>
.cities-div {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  width: 830px;
  height: 600px;
  top: 90px;
  left: 150px;
  z-index: 2;
  overflow: auto;
  background-color: white;
  border: 1px solid black;
}

.cities-div:after {
  content: "";
  position: fixed;
  height: 0px;
  width: 0px;
  left: 245px;
  top: 60px;
  border-width: 15px;
  border-color: transparent #000000 transparent transparent;
  border-style: solid;
  transform: rotate(90deg);
  z-index: 1;
}

.city-name {
  text-align: start;
  cursor: pointer;
}

.city-name:hover {
  background-color: #cccccc;
}

.nav-link {
  font-size: 20px;
  cursor: pointer;
  margin-top: 15px;
}

.navbar-brand {
  font-size: 30px;
}
.search-box,
.cart {
  float: right;
  padding: 8px;
  align-items: self-end;
  display: grid;
  cursor: pointer;
  background: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
</style>
