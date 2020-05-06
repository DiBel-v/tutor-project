<template>
    <div class="price">
        <div class="price__wrapper">
            <img class="price__wrapper-img" src="../media/images/eg.png" alt="ЕГЭ">
            <span class="price__wrapper-price">2000 руб/час</span>
        </div>
        <div class="price__wrapper">
            <img class="price__wrapper-img" src="../media/images/og.png" alt="ОГЭ">
            <span class="price__wrapper-price">1500 руб/час</span>
        </div>
        <div class="price__wrapper">
            <h1 class="price__wrapper-head">5-11 класс</h1>
            <span class="price__wrapper-price">1500 руб/час</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Price'
}
</script>

<style lang="sass" src="@/media/sass/components/price.sass"></style>