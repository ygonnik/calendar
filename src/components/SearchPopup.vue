<template lang="">
    <v-container class="search-popup-container" v-if="searchResults.length !== 0">
        <img class="search-popup-decorate" :src="largeArrow"/>
        <v-container class="search-popup-content-container">
            <v-container class="search-popup-list">
                <v-container class="search-popup-list-item" @click="goToEvent(searchResult)" v-for="searchResult in searchResults" :key="searchResult.dateDay + '-'+ searchResult.dateMonth">
                    <v-container class="search-popup-list-item-title">
                        <p>{{searchResult.title}}</p>
                    </v-container>
                    <v-container class="search-popup-list-item-date">
                        <p>{{searchResult.date}}</p>
                    </v-container>
                </v-container>
            </v-container>
        </v-container>
    </v-container>
</template>
<script>
import largeArrow from '../../public/largeArrow.png';
import store from '@/store';
export default {
    props: {
        searchResults: {
            type: Array,
            required: true
        }
    },
    methods: {
        goToEvent(searchResult) {
            console.log(searchResult)
            store.commit("setCurrentMonth", searchResult.dateMonth)
            store.commit("setCurrentYear", searchResult.dateYear)
            this.$emit('refresh')
        }
    },
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