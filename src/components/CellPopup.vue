<template lang="">
    <v-container class="cell-popup-container" v-if="CellPopupShow" @click.stop="hideCellPopup">
        <img class="decorate" :src="largeArrow"/>
        <v-container @click.stop class="popup-content-container">
            <v-container class="frame1">
                <div class="frame1-icon" @click="hideCellPopup">
                    <img :src="largeCross">
                </div>
            </v-container>
            <v-container class="frame2">
                <input v-model="title" placeholder="Событие"/>
            </v-container>
            <v-container class="frame4">
                <input v-model="date" placeholder="День, месяц, год"/>
            </v-container>
            <v-container class="frame5">
                <input v-model="participants" placeholder="Имена участников"/>
            </v-container>
            <v-container class="frame6">
                <input v-model="description" placeholder="Описание"/>
            </v-container>
            <v-container class="frame3">
                <v-btn class="extra-button-ok" @click="createEvent"><p>Готово</p></v-btn>
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
        CellPopupShow: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        hideCellPopup() {
            this.$emit('update:CellPopupShow', false)
        },
        createEvent() {
            const event = {
                year: new Date(this.getCurrentYear, this.getCurrentMonth).getFullYear(),
                month: new Date(this.getCurrentYear, this.getCurrentMonth).getMonth(),
                day: this.getSelectedDay,
                title: this.title,
                date: this.date,
                participants: this.participants,
                description: this.description
            }
            store.commit("pushEvent", event)
        }
    },
    data() {
        return {
            largeArrow,
            largeCross,
            title: '',
            date: '',
            participants: '',
            description: ''
        };
    }
}
</script>
<style lang="css">
    @import '../styles/cellPopup.css';
</style>