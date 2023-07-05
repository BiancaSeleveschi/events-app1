<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-secondary bg-opacity-25">
      <div class="container-fluid">
        <h1 class="navbar-brand fw-bold me-5">EventGo</h1>
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
              <router-link
                to="/"
                class="nav-link active mx-1"
                aria-current="page"
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
                  @click="showCities = false"
                  v-for="(city, index) in cities"
                  :key="index"
                  class="city-div d-block pt-3 w-25"
                >
                  <router-link
                    :to="{
                      name: 'CityEvents',
                      params: { city: city },
                    }"
                    class="text-decoration-none p-3"
                    >{{ city }}
                  </router-link>
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
                >Comedies
              </router-link>
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

          <form class="d-flex" role="search">
            <input
              v-model="searchWord"
              @input="searchEvent"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <router-link to="/checkout" class="cart rounded-5 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-bag text-dark"
            >
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
              />
            </svg>
            <span id="notification-counter" class="fw-bold">{{
              this.$store.getters.getCartItemCount
            }}</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { EventBus } from "@/store";

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
  computed: {
    cities() {
      let cities = [
        "Alba-Iulia",
        "Arad",
        "Pitești",
        "Bacău",
        "Oradea ",
        "Bistriţa",
        "Botoșani",
        "Brăila",
        "Brașov",
        "Bucharest",
        "Buzău",
        "Caransebeș",
        "Călărași",
        "Cluj-Napoca",
        "Constanța",
        "Sfântu Gheorghe",
        "Târgoviște",
        "Craiova",
        "Galaţi",
        "Giurgiu",
        "Târgu Jiu",
        "Miercurea Ciuc",
        "Deva ",
        "Iași",
        "Slobozia",
        "Ilfov",
        "Baia Mare",
        "Drobeta-Turnu Severin",
        "Târgu Mureș",
        "Piatra Neamț",
        "Caracal",
        "Ploiești",
        "Satu Mare",
        "Zalău",
        "Sibiu",
        "Suceava",
        "Suceava",
        "Alexandria ",
        "Timișoara",
        "Tulcea",
        "Râmnicu Vâlcea",
        "Vaslui",
        "Focșani",
      ];
      return cities.sort();
    },
  },
  methods: {
    searchEvent() {
      this.$router.push("/search");
      EventBus.$emit("search-query", this.searchWord);
    },
  },
};
</script>

<style scoped>
#notification-counter {
  float: right;
  position: absolute;
  color: white;
  right: 15px;
  top: 20px;
  background-color: red;
  border-radius: 20px;
  padding: 5px;
  font-size: 9px;
  width: 20px;
  height: 20px;
}

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
}

.cities-div:after {
  content: "";
  position: fixed;
  height: 0;
  width: 0;
  left: 270px;
  top: 62px;
  border-width: 15px;
  border-color: transparent #ffffff transparent transparent;
  border-style: solid;
  transform: rotate(90deg);
  z-index: 1;
}

.city-div {
  text-align: start;
}

.city-div:hover {
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
