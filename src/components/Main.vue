<template>
  <div class="main">
    <div class="main__wrapper">
      <div class="main__person">
        <h2 class="main__person-name">Верченко Елена Александровна</h2>
        <img class="main__person-img" src="../media/images/photo.jpg" alt="photo">
      </div>
      <div class="main__about" v-if="!isMobile">
        <h3 class="main__about-head">О себе</h3>
        <p class="main__about-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software like Aldus PageMaker including 
          versions of Lorem Ipsum.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Main',
  computed: {
    ...mapGetters([
      'isMobile',
      'isSidebarActive'
    ])
  }
}
</script>

<style lang="sass" src="@/media/sass/components/main.sass"></style>