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
                <input placeholder="25 ноября, Кутеж, Серж"/>
            </v-container>
            <v-container class="quick-add-frame3">
                <v-btn class="quick-add-frame3-extra-button"><p>Создать</p></v-btn>
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
        },
        createEvent() {
            const event = {
                //parsing
            }
            store.commit("pushEvent", event)
        }
    },
    data() {
        return {
            largeArrow,
            largeCross
        };
    }
}
</script>
<style lang="css">
    @import '../styles/quickAddPopup.css';
</style>