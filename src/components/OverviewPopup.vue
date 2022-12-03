<template lang="">
    <v-container class="overview-popup-container">
        <img class="overview-decorate" :src="largeArrow"/>
        <v-container class="overview-content">
            <v-container class="overview-control">
                <v-container class="overview-control-icon">
                    <img :src="largeCross"/>
                </v-container>
            </v-container>
            <v-container class="overview-description-container">
                <v-container class="overview-description-title-container">
                    <p>Сдача проекта</p>
                </v-container>
                <v-container class="overview-description-date-container">
                    <p>6 ноября</p>
                </v-container>
                <v-container class="overview-description-people-container">
                    <p class="overview-description-people-title">Участники:</p>
                    <p class="overview-description-people-content">Я</p>
                </v-container>
            </v-container>
            <v-container class="overview-description-input-container">
                <input placeholder="Описание"/>
            </v-container>
            <v-container class="overview-control-buttons-container">
                <v-btn class="extra-button-ok"><p>Готово</p></v-btn>
                <v-btn class="extra-button-delete"><p>Удалить</p></v-btn>
            </v-container>
        </v-container>
    </v-container>
</template>
<script>
import largeArrow from '../../public/largeArrow.png';
import largeCross from '../../public/largeCross.png';
export default {
    data() {
        return {
            largeArrow,
            largeCross
        };
    }
}
</script>
<style lang="css">
    @import '../styles/overviewPopup.css';
</style>