<template>
    <div class="header">
        <div class="header__logo">
            <img class="header__logo-img" src="../media/images/logo.png" alt="logo">
        </div>
        <div class="header__routing">
            <ul class="header__routing-list">
                <li class="header__routing-item">
                    <router-link class="header__routing-item__link" to="/main">Главная</router-link>
                </li>
                <li class="header__routing-item">
                    <router-link class="header__routing-item__link" to="/materials">Материалы</router-link>
                </li>
                <li class="header__routing-item">
                    <router-link class="header__routing-item__link" to="/diplomas">Грамоты</router-link>
                </li>
                <li class="header__routing-item">
                    <router-link class="header__routing-item__link" to="/price">Услуги и цены</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass" src="@/media/sass/components/header.sass"></style>