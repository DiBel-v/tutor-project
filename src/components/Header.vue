<template>
    <div class="header">
        <template v-if="!isMobile">
            <div class="header__logo">
                <img class="header__logo-img" src="../media/images/logo.png" alt="logo">
            </div>
            <div class="header__routing">
                <ul class="header__routing-list">
                    <li class="header__routing-item">
                        <router-link :class="{'header__routing-item__link_is_active': activeRoute === 'main'}" @click="activeRoute = 'main'" class="header__routing-item__link" to="/main">Главная</router-link>
                    </li>
                    <li class="header__routing-item">
                        <router-link :class="{'header__routing-item__link_is_active': activeRoute === 'materials'}" @click="activeRoute = 'materials'" class="header__routing-item__link" to="/materials">Материалы</router-link>
                    </li>
                    <li class="header__routing-item">
                        <router-link :class="{'header__routing-item__link_is_active': activeRoute === 'diplomas'}" @click="activeRoute = 'diplomas'" class="header__routing-item__link" to="/diplomas">Грамоты</router-link>
                    </li>
                    <li class="header__routing-item">
                        <router-link :class="{'header__routing-item__link_is_active': activeRoute === 'price'}" @click="activeRoute = 'price'" class="header__routing-item__link" to="/price">Услуги и цены</router-link>
                    </li>
                </ul>
            </div>
        </template>
        <template v-else>
            <div class="header__mobile">
                <div @click="activateSidebar()" class="header__mobile__container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="header__mobile__container-img" :class="{'header__mobile__container-img_is_active': isSidebarActive}">
                        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/>
                    </svg>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Header',
    computed: {
      ...mapGetters([
          'isMobile',
          'isSidebarActive'
      ])
    },
    data() {
        return {
            activeRoute: 'main'
        }
    },
  methods: {
      activateSidebar() {
          this.$store.commit('SET_IS_SIDEBAR_ACTIVE', !this.isSidebarActive);
      }
  }
}
</script>

<style lang="sass" src="@/media/sass/components/header.sass"></style>