<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { EventBus } from "@/store";

export default {
  components: { Navbar },
  data() {
    return {
      events: this.$store.state.events,
      searchWord: "",
    };
  },
  created: function () {
    EventBus.$on("search-query", (query) => {
      this.searchWord = query;
    });
  },
  computed: {
    filteredEvents() {
      if (this.searchWord.trim() !== "") {
        return this.events.filter((event) =>
          event.name.toLowerCase().includes(this.searchWord.toLowerCase())
        );
      } else {
        return this.events;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
