<template lang="">
    <v-container class="search-popup-container"  @click.stop="hideSearchPopup">
        <img class="search-popup-decorate" :src="largeArrow"/>
        <v-container @click.stop class="search-popup-content-container">
            <v-container class="search-popup-list">
                <v-container class="search-popup-list-item">
                    <v-container class="search-popup-list-item-title">
                        <p>Встреча</p>
                    </v-container>
                    <v-container class="search-popup-list-item-date">
                        <p>3 марта</p>
                    </v-container>
                </v-container>
                <v-container class="search-popup-list-item">
                    <v-container class="search-popup-list-item-title">
                        <p>Встреча</p>
                    </v-container>
                    <v-container class="search-popup-list-item-date">
                        <p>3 марта</p>
                    </v-container>
                </v-container>
                <v-container class="search-popup-list-item">
                    <v-container class="search-popup-list-item-title">
                        <p>Встреча</p>
                    </v-container>
                    <v-container class="search-popup-list-item-date">
                        <p>3 марта</p>
                    </v-container>
                </v-container>
                <v-container class="search-popup-list-item">
                    <v-container class="search-popup-list-item-title">
                        <p>Встреча</p>
                    </v-container>
                    <v-container class="search-popup-list-item-date">
                        <p>3 марта</p>
                    </v-container>
                </v-container>
                <v-container class="search-popup-list-item">
                    <v-container class="search-popup-list-item-title">
                        <p>Встреча</p>
                    </v-container>
                    <v-container class="search-popup-list-item-date">
                        <p>3 марта</p>
                    </v-container>
                </v-container>
                <v-container class="search-popup-list-item">
                    <v-container class="search-popup-list-item-title">
                        <p>Встреча</p>
                    </v-container>
                    <v-container class="search-popup-list-item-date">
                        <p>3 марта</p>
                    </v-container>
                </v-container>
                <v-container class="search-popup-list-item">
                    <v-container class="search-popup-list-item-title">
                        <p>Встреча</p>
                    </v-container>
                    <v-container class="search-popup-list-item-date">
                        <p>3 марта</p>
                    </v-container>
                </v-container>
                <v-container class="search-popup-list-item">
                    <v-container class="search-popup-list-item-title">
                        <p>Встреча</p>
                    </v-container>
                    <v-container class="search-popup-list-item-date">
                        <p>3 марта</p>
                    </v-container>
                </v-container>
            </v-container>
        </v-container>
    </v-container>
</template>
<script>
import largeArrow from '../../public/largeArrow.png';
export default {
    data() {
        return {
            largeArrow,
        };
    }
}
</script>
<style lang="css">
    @import '../styles/searchPopup.css';
</style>