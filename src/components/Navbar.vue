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
          <form class="d-flex" role="search">
            <input
              v-model="searchWord"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              @click="searchEvent"
              class="btn btn-outline-secondary"
              type="submit"
            >
              Search
            </button>
          </form>
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
    };
  },
  methods: {
    searchEvent() {
      this.$store.dispatch("updateEventsList", this.searchWord);
      // return this.$store.getters.getFilteredEvents(this.searchWord);
      // return this.$store.getters.getAllEvents.filter((event) => {
      //   event.name.toLowerCase().includes(this.searchWord) ||
      //     event.location.toLowerCase().includes(this.searchWord);
      // });
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
</style>
