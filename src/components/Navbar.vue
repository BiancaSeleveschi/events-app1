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
                  @click="showCities = false"
                  v-for="(city, index) in cities"
                  :key="index"
                  class="city-name d-block px-3 pt-3 w-25"
                >
                  <router-link
                    :to="{
                      name: 'CityEvents',
                      params: { city: city },
                    }"
                    class="text-decoration-none"
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
              @input="filterEvents"
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
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
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
      cities: [
        "Alba",
        "Arad",
        "Arges",
        "Bacău",
        "Bihor",
        "Bistriţa-Năsăud",
        "Botoșani",
        "Brăila",
        "Brașov",
        "Bucharest",
        "Buzău",
        "Caraş-Severin",
        "Călărași",
        "Cluj",
        "Constanța",
        "Covasna",
        "Dâmboviţa",
        "Dolj",
        "Galaţi",
        "Giurgiu",
        "Gorj",
        "Harghita",
        "Hunedoara",
        "Iași",
        "Ialomiţa",
        "Ilfov",
        "Maramureş",
        "Mehedinţi",
        "Mureş",
        "Neamţ",
        "Olt",
        "Prahova",
        "Satu Mare",
        "Sălaj",
        "Sibiu",
        "Suceava",
        "Suceava",
        "Teleorman",
        "Timiş",
        "Tulcea",
        "Vaslui",
        "Vâlcea",
        "Vrancea",
      ],
    };
  },
  methods: {
    filterEvents() {
      this.$router.push("/search");
      EventBus.$emit("search-query", this.searchWord);
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
  height: 0;
  width: 0;
  left: 270px;
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
