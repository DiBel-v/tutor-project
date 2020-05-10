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
import Hammer from 'hammerjs';
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
    mounted() {
        const sliderWrapper = document.querySelector('.diplomas__wrapper-slide');
        console.log(sliderWrapper);
        console.log('Hammer', Hammer);
        const mc = new Hammer.Manager(sliderWrapper);
        mc.add(new Hammer.Pan());
        console.log(mc);
        mc.on('panend', this.fingerMoveEnd);
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 37) {
                this.changeImage('left');
            } else if (e.keyCode === 39) {
                this.changeImage('right');
            }
        });
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
        },
        fingerMoveEnd(e) {
            const horizontal = e.additionalEvent === 'panright' || e.additionalEvent === 'panleft';
            console.log('e.delta', e.deltaX);
            if (horizontal) {
                if (e.deltaX > 0) {
                    this.changeImage('left');
                } else {
                    this.changeImage('right');
                }
            }
        }
    }
}
</script>

<style lang="sass" src="@/media/sass/components/diplomas.sass"></style>