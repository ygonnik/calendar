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
                <input :class="{'frame2-input': !this.frame2InvalidInput, 'frame2-input-invalid': this.frame2InvalidInput,}" v-model="title" placeholder="Событие"/>
            </v-container>
            <v-container class="frame4">
                <input readonly v-model="date" placeholder="День, месяц, год"/>
            </v-container>
            <v-container class="frame5">
                <input :class="{'frame5-input': !this.frame5InvalidInput, 'frame5-input-invalid': this.frame5InvalidInput,}" v-model="participants" placeholder="Имена участников"/>
            </v-container>
            <v-container class="frame6">
                <textarea v-model="description" placeholder="Описание"></textarea>
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
        day: {
            type: Object,
            required: true
        }
    },
    methods: {
        hideCellPopup() {
            this.$emit('update:CellPopupShow', false)
            this.title = ''
            this.description = ''
            this.participants = ''
            this.frame2InvalidInput = false
            this.frame5InvalidInput = false
        },
        createEvent() {
            this.frame2InvalidInput = this.title !== '' ? false : true
            this.frame5InvalidInput = this.participants !== '' ? false : true
            if (!this.frame2InvalidInput && !this.frame5InvalidInput) {
                const event = {
                year: this.day.dateYear,
                month: this.day.dateMonth,
                day: this.day.dateDay,
                dateText: new Date(this.day.dateYear, this.day.dateMonth, this.day.dateDay)
                .toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' }),
                title: this.title,
                participants: this.participants,
                description: this.description
            }
            store.commit("pushEvent", event)
            this.$emit('refresh')
            this.title = ''
            this.description = ''
            this.participants = ''
            }
        }
    },
    data() {
        return {
            largeArrow,
            largeCross,
            title: '',
            date: new Date(this.day.dateYear, this.day.dateMonth, this.day.dateDay)
                .toLocaleDateString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric' }),
            participants: '',
            description: '',
            frame2InvalidInput : false,
            frame5InvalidInput : false
        };
    }
}
</script>
<style lang="css">
    @import '../styles/cellPopup.css';
</style>