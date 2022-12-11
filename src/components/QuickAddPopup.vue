<template lang="">
    <v-container class="quick-add-popup-container" v-if="QuickAddPopupShow" @click.stop="hideQuickAddPopup">
        <img class="quick-add-decorate" :src="largeArrow"/>
        <v-container @click.stop class="quick-add-popup-content-container">
            <v-container class="quick-add-frame1">
                <div class="quick-add-frame1-icon" @click="hideQuickAddPopup">
                    <img :src="largeCross">
                </div>
            </v-container>
            <v-container class="quick-add-frame2">
                <input :class="{'quick-add-frame2-input': !this.invalidInput, 'quick-add-frame2-input-invalid': this.invalidInput,}" v-model="eventInput" placeholder="25 ноября, Кутеж, Серж"/>
            </v-container>
            <v-container class="quick-add-frame3">
                <v-btn class="quick-add-frame3-extra-button" @click="createEvent"><p>Создать</p></v-btn>
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
        QuickAddPopupShow: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        hideQuickAddPopup() {
            this.$emit('update:QuickAddPopupShow', false)
            this.eventInput = ''
            this.invalidInput = false
        },
        createEvent() {
            this.invalidInput = false
            const months = ['января', 'февраля', 'марта', 'апреля',
                            'мая', 'июня', 'июля', 'августа',
                            'сентября', 'октября', 'ноября', 'декабря']
            const splitedInput = this.eventInput.split(',')
            const splitedInputDate = splitedInput[0].split(' ')
            const inputMonthIndex = months.findIndex(month => month === splitedInputDate[1])
            if (splitedInputDate[0] > 0 && splitedInputDate[0] < 32 && inputMonthIndex !== -1) {
                const event = {
                year: store.getters.getCurrentYearText,
                month: inputMonthIndex,
                day: Number(splitedInputDate[0]),
                dateText: new Date(store.getters.getCurrentYearText, inputMonthIndex, splitedInputDate[0])
                .toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' }),
                title: splitedInput[1],
                participants: splitedInput.slice(2).join(', '),
                description: ''
                }
                store.commit("pushEvent", event)
                this.$emit('refresh')
                this.eventInput = ''
                this.hideQuickAddPopup()
            }
            else {
                this.invalidInput = true
            }
        }
    },
    data() {
        return {
            largeArrow,
            largeCross,
            eventInput: '',
            invalidInput : false
        };
    }
}
</script>
<style lang="css">
    @import '../styles/quickAddPopup.css';
</style>