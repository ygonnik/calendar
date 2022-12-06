<template lang="">
    <v-container>
        <v-app-bar class="header">
            <v-container class="header-container">
                <v-container class="control">
                    <v-container class="control-buttons">
                        <v-btn class="button" ><p>Добавить</p></v-btn>
                        <v-btn class="button"><p>Обновить</p></v-btn>
                    </v-container>
                    <v-container class="input-area">
                        <img class="search-img" :src="largeSearch">
                        <input class="search-input" placeholder="Placeholder"/>
                    </v-container>
                </v-container>
            </v-container>
        </v-app-bar>
        <v-container class="main">
            <v-container class="main-container">
                <v-container class="bottom-row">
                    <v-container class="month-control">
                        <v-btn class="button-left" @click="previousMonth">
                            <v-container class="button-icon-left">
                                <img class="arrow-left" :src="largeArrow">
                            </v-container>
                        </v-btn>
                        <v-container class="mounth-control-text-container">
                            <p class="mounth-control-text">{{this.getCurrentMonthText + " " + this.getCurrentYearText}}</p>
                        </v-container>
                        <v-btn class="button-right" @click="nextMonth">
                            <v-container class="button-icon-right">
                                <img class="arrow-right" :src="largeArrow">
                            </v-container>
                        </v-btn>
                    </v-container>
                    <v-btn class="extra-button" @click="todayButtonHandler"><p>Сегодня</p></v-btn>
                </v-container>
                <table class="main-table">
                    <tr class="main-row" v-for="week in this.getGrid" :key="week">
                        <th class="main-cell" v-for="day in week" :key="day">
                            <div class="cell-heading">
                                <p>{{day}}</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                    </tr>
                </table>
            </v-container>
        </v-container>
    </v-container>
</template>
<script>
import largeSearch from '../../public/largeSearch.png';
import largeArrow from '../../public/largeArrow.png';
import store from '@/store';
import {mapGetters} from 'vuex'



Date.prototype.daysInMonth = function() { // https://habr.com/ru/post/177059/
		return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

const gridSize = 42
function switchMonth() {
    const year = store.getters.getCurrentYear
    const month = store.getters.getCurrentMonth
    let grid = []
    let splittedGrid = []
    const dateMonth = new Date(year, month)
    let startCell = dateMonth.getDay() === 0 ? 6 : dateMonth.getDay() - 1
    let previousMonthDays = month === 0 ? 31 : new Date(year, month - 1).daysInMonth()
    for (let i = 1; i <= startCell; i++) {
        grid.push(previousMonthDays - startCell + i)
    }
    for (let i = 1; i <= dateMonth.daysInMonth(); i++) {
        grid.push(i)
    }
    for (let i = 1; i < gridSize; i++) {
        grid.push(i)
    }
    for (let i = 1; i <= gridSize / 7; i++) {
        splittedGrid.push(grid.slice(7 * (i - 1), 7 * i))
    }
    store.commit("setGrid", splittedGrid)
    }
    
export default {
    beforeCreate() {
        switchMonth()
    },
    methods: {
        nextMonth() {
            store.commit("incrementCurrentMonth")
            switchMonth()
        },

        previousMonth() {
            store.commit("decrementCurrentMonth")
            switchMonth()
        },

        todayButtonHandler() {
            store.commit("resetDate")
            switchMonth()
        }
    },
    computed: {
        ...mapGetters ({
            getGrid: 'getGrid',
            getCurrentMonth: 'getCurrentMonth',
            getCurrentYear: 'getCurrentYear',
            getCurrentMonthText: 'getCurrentMonthText',
            getCurrentYearText: 'getCurrentYearText'
        })
    },
    data() {
        return {
            largeSearch,
            largeArrow
        };
    }
}
</script>
<style lang="css">
    @import '../styles/styles.css';
</style>