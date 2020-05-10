<template>
  <div id="app">
    <Header/>
    <Sidebar v-if="isSidebarActive"></Sidebar>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Sidebar
  },
  computed: {
    ...mapGetters([
      'isSidebarActive'
    ])
  },
  created() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.$store.commit('SET_DEVICE_WIDTH', window.innerWidth);
    }
  }
}
</script>

<style lang="sass" src="@/media/sass/app.sass"></style>
