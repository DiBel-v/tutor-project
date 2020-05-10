<template>
    <div class="sidebar">
        <div class="sidebar__container">
            <ul class="sidebar__container-list">
                <li class="sidebar__container-item" @click="$store.commit('SET_IS_SIDEBAR_ACTIVE', false)">
                    <router-link class="sidebar__container-item__link" to="/main">Главная</router-link>
                </li>
                <li class="sidebar__container-item" @click="$store.commit('SET_IS_SIDEBAR_ACTIVE', false)">
                    <router-link class="sidebar__container-item__link" to="/materials">Материалы</router-link>
                </li>
                <li class="sidebar__container-item" @click="$store.commit('SET_IS_SIDEBAR_ACTIVE', false)">
                    <router-link class="sidebar__container-item__link" to="/price">Услуги и цены</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Sidebar',
  computed: {
      ...mapGetters([
          'isMobile'
      ])
  }
}
</script>

<style lang="sass" src="@/media/sass/components/sidebar.sass"></style>