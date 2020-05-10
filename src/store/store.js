import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const MOBILE_WIDTH = 480;

const store = new Vuex.Store({
    state: {
        deviceWidth: 0,
        isMobile: false,
        isSidebarActive: false,
        isMaterialModalOpened: false
    },
    mutations: {
        SET_DEVICE_WIDTH(state, payload) {
            state.deviceWidth = payload;
        },
        SET_IS_SIDEBAR_ACTIVE(state, payload) {
            state.isSidebarActive = payload;
        },
        SET_IS_MATERIAL_MODAL_OPENED(state, payload) {
            state.isMaterialModalOpened = payload;
        }
    },
    getters: {
        isMobile: state => state.deviceWidth <= MOBILE_WIDTH,
        isSidebarActive: state => state.isSidebarActive,
        isMaterialModalOpened: state => state.isMaterialModalOpened
    }
});

export default store;