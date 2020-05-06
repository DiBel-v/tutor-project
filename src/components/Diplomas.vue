<template>
    <div class="diplomas">
        <img class="diplomas__arrow" src="../media/images/left-arrow.svg"  @click="changeImage('left')">
        <div class="diplomas__wrapper">
            <div class="diplomas__wrapper-slide">
                <img class="diplomas__wrapper-slide-img" :src="diplomasList[currentImgIdx]">
            </div>
        </div>
        <img class="diplomas__arrow" src="../media/images/right-arrow.svg" @click="changeImage('right')">
    </div>
</template>

<script>
import image1 from '../media/images/1.jpg';
import image2 from '../media/images/2.jpg';
import image3 from '../media/images/3.png';
import image4 from '../media/images/4.jpg';


export default {
    name: 'Diplomas',
    data() {
        return {
            diplomasList: [
                image1,
                image2,
                image3,
                image4,

            ],
            currentTransition: 0,
            currentImgIdx: 0
        }
    },
    methods: {
        changeImage(arrow) {
            if (arrow === 'right') {
                if (this.currentImgIdx !== this.diplomasList.length - 1) {
                    this.currentImgIdx += 1;
                } else {
                    this.currentImgIdx = 0;
                }
            } else {
                if (this.currentImgIdx !== 0) {
                    this.currentImgIdx -= 1;
                } else {
                    this.currentImgIdx = this.diplomasList.length - 1;
                }
            }
        }
    }
}
</script>

<style lang="sass" src="@/media/sass/components/diplomas.sass"></style>