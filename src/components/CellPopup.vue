<template lang="">
    <v-container class="cell-popup-container">
        <img class="decorate" :src="largeArrow"/>
        <v-container class="popup-content-container">
            <v-container class="frame1">
                <div class="frame1-icon">
                    <img :src="largeCross">
                </div>
            </v-container>
            <v-container class="frame2">
                <input placeholder="Событие"/>
            </v-container>
            <v-container class="frame4">
                <input placeholder="День, месяц, год"/>
            </v-container>
            <v-container class="frame5">
                <input placeholder="Имена участников"/>
            </v-container>
            <v-container class="frame6">
                <input placeholder="Описание"/>
            </v-container>
            <v-container class="frame3">
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
    @import '../styles/cellPopup.css';
</style>