<template>
    <div class="modal-description">
        <div class="modal-description__block">
            <button class="modal-description__but" @click="closeModal()">X</button>
            <div class="modal-description__wrapper" v-if="material">
                <p class="modal-description__wrapper__info">{{material.description}}</p>
                <a class="modal-description__wrapper__download" :href="material.link">Скачать</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Header',
    props: {
        material: {
            type: Object,
            required: true,
            default:() => {}
        }
    },
    mounted() {
        const modal = document.querySelector('.modal-description');
        modal.addEventListener('click', (e) => {
            const block = document.querySelector('.modal-description__block');
            let targetElement = e.target;
            do {
                if (targetElement === block) {
                    return;
                }
                targetElement = targetElement.parentNode;
            } while (targetElement)
            this.$store.commit('SET_IS_MATERIAL_MODAL_OPENED', false);
        });
    },
  methods: {
      closeModal() {
          this.$store.commit('SET_IS_MATERIAL_MODAL_OPENED', false);
      }
  }
}
</script>

<style lang="sass" src="@/media/sass/components/modal-description.sass"></style>