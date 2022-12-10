<template lang="">
    <v-container class="overview-popup-container" v-if="OverviewPopupShow" @click.stop="hideOverviewPopup">
        <img class="overview-decorate" :src="largeArrow"/>
        <v-container @click.stop class="overview-content">
            <v-container class="overview-control">
                <v-container class="overview-control-icon" @click="hideOverviewPopup">
                    <img :src="largeCross"/>
                </v-container>
            </v-container>
            <v-container class="overview-description-container">
                <v-container class="overview-description-title-container">
                    <p>{{day.title}}</p>
                </v-container>
                <v-container class="overview-description-date-container">
                    <p>{{day.dateText}}</p>
                </v-container>
                <v-container class="overview-description-people-container">
                    <p class="overview-description-people-title">Участники:</p>
                    <p class="overview-description-people-content">{{day.participants}}</p>
                </v-container>
            </v-container>
            <v-container class="overview-description-input-container">
                <input v-model="description" placeholder="Описание"/>
            </v-container>
            <v-container class="overview-control-buttons-container">
                <v-btn class="extra-button-ok" @click="editEvent"><p>Готово</p></v-btn>
                <v-btn class="extra-button-delete"><p>Удалить</p></v-btn>
            </v-container>
        </v-container>
    </v-container>
</template>
<script>
import largeArrow from '../../public/largeArrow.png';
import largeCross from '../../public/largeCross.png';
import store from '@/store';
export default {
    props: {
        OverviewPopupShow: {
            type: Boolean,
            default: false
        },
        day: {
            type: Object,
            required: true
        }
    },
    methods: {
        hideOverviewPopup() {
            this.$emit('update:OverviewPopupShow', false)
        },
        editEvent() {
            const event = {
                year: this.day.dateYear, //todo
                month: this.day.dateMonth,
                day: this.day.dateDay,
                title: this.title,
                participants: this.participants,
                description: this.description
            }
            store.commit("pushEvent", event)
            this.$emit('refresh')
        }
    },
    data() {
        return {
            largeArrow,
            largeCross,
            description: this.day.description
        };
    }
}
</script>
<style lang="css">
    @import '../styles/overviewPopup.css';
</style>