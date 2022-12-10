<template lang="">
    <v-container>
        <v-app-bar class="header">
            <v-container class="header-container">
                <v-container class="control">
                    <v-container class="control-buttons">
                        <v-btn class="button" @click="showQuickAddPopup"><p>Добавить</p></v-btn>
                        <QuickAddPopup v-model:QuickAddPopupShow="QuickAddPopupVisible"/>
                        <v-btn class="button" @click="refresh"><p>Обновить</p></v-btn>
                    </v-container>
                    <v-container class="input-area">
                        <img class="search-img" :src="largeSearch">
                        <input class="search-input" placeholder="Событие, дата или участник"/>
                        <SearchPopup/>
                    </v-container>
                </v-container>
            </v-container>
        </v-app-bar>
        <v-container class="main">
            <v-container class="main-container">
                <v-container class="bottom-row">
                    <v-container class="month-control">
                        <v-btn class="button-left" @click="previousMonth">
                            <v-container :class="{'button-icon-left' : !QuickAddPopupVisible}">
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
                        <th :class="{'main-cell': !day.haveEvent, 'main-cell-event': day.haveEvent}" v-for="day in week"
                                                :key="day.dateDay + '-'
                                                + day.dateMonth + '-'
                                                + day.dateYear"
                                                @click="showPopup(day)">
                            <div class="cell-heading">
                                <p>{{day.heading}}</p>
                            </div>
                            <div class="cell-title">
                                <p>{{day.title}}</p>
                            </div>
                            <div class="cell-description">
                                <p>{{day.description}}</p>
                            </div>
                            <CellPopup 
                                v-model:CellPopupShow="day.CellPopupVisible"
                                :day="day"
                                @refresh="refresh"/>
                            <OverviewPopup
                                v-model:OverviewPopupShow="day.OverviewPopupVisible"
                                :day="day"
                                @refresh="refresh"/>
                        </th>
                    </tr>
                </table>
            </v-container>
        </v-container>
    </v-container>
</template>
<script>
import CellPopup from './CellPopup.vue';
import QuickAddPopup from './QuickAddPopup.vue';
import OverviewPopup from './OverviewPopup.vue';
import SearchPopup from './SearchPopup.vue';
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
    let eventDate
    const weekdays = ['Понедельник, ', 'Вторник, ', 'Среда, ',
                        'Четверг, ', 'Пятница, ', 'Суббота, ', 'Воскресенье, ']
    let weekdaysIter = 0
    const previousMonth = new Date(year, month - 1)
    const currentMonth = new Date(year, month)
    const nextMonth = new Date(year, month + 1)
    let startCell = currentMonth.getDay() === 0 ? 6 : currentMonth.getDay() - 1
    let previousMonthDays = month === 0 ? 31 : previousMonth.daysInMonth()
    for (let i = 1; i <= startCell; i++) {
        let dayCreated = false
        store.getters.getEvents.forEach(event => {
            eventDate = new Date(event.year, event.month)
            if (previousMonthDays - startCell + i === event.day &&
                previousMonth.getMonth() === eventDate.getMonth() &&
                previousMonth.getFullYear() === eventDate.getFullYear()) {
                    const day =  {
                        heading: weekdaysIter >= weekdays.length ? event.day : weekdays[weekdaysIter++] + event.day,
                        title: event.title,
                        dateDay: previousMonthDays - startCell + i,
                        dateMonth: month - 1,
                        dateYear: year,
                        dateText : event.dateText,
                        participants: event.participants,
                        description: event.description,
                        CellPopupVisible : false,
                        OverviewPopupVisible : false,
                        haveEvent: true
                    }
                    dayCreated = true
                    grid.push(day)
                }
            });
        if (!dayCreated) {
            const day =  {
            heading: weekdaysIter >= weekdays.length ? previousMonthDays - startCell + i : weekdays[weekdaysIter++] + (previousMonthDays - startCell + i),
            title: '',
            dateDay: previousMonthDays - startCell + i,
            dateMonth: month - 1,
            dateYear: year,
            dateText : '',
            participants: '',
            description: '',
            CellPopupVisible : false,
            OverviewPopupVisible : false,
            haveEvent: false
            }
            grid.push(day)
        }
    }
    for (let i = 1; i <= currentMonth.daysInMonth(); i++) {
        let dayCreated = false
        store.getters.getEvents.forEach(event => {
            eventDate = new Date(event.year, event.month)
            if (i === event.day &&
                currentMonth.getMonth() === eventDate.getMonth() &&
                currentMonth.getFullYear() === eventDate.getFullYear()) {
                        const day =  {
                            heading: weekdaysIter >= weekdays.length ? event.day : weekdays[weekdaysIter++] + event.day,
                            title: event.title,
                            dateDay: i,
                            dateMonth: month,
                            dateYear: year,
                            dateText : event.dateText,
                            participants: event.participants,
                            description: event.description,
                            CellPopupVisible : false,
                            OverviewPopupVisible : false,
                            haveEvent: true
                        }
                        dayCreated = true
                        grid.push(day)
                    }
            });
        if (!dayCreated) {
            const day =  {
            heading: weekdaysIter >= weekdays.length ? i : weekdays[weekdaysIter++] + i,
            title: '',
            dateDay: i,
            dateMonth: month,
            dateYear: year,
            dateText : '',
            participants: '',
            description: '',
            CellPopupVisible : false,
            OverviewPopupVisible : false,
            haveEvent: false
            }
            grid.push(day)
        }
    }
    for (let i = 1; i < gridSize; i++) {
        let dayCreated = false
        store.getters.getEvents.forEach(event => {
            eventDate = new Date(event.year, event.month)
            if (i === event.day &&
                nextMonth.getMonth() === eventDate.getMonth() &&
                nextMonth.getFullYear() === eventDate.getFullYear()) {
                        const day =  {
                            heading: weekdaysIter >= weekdays.length ? event.day : weekdays[weekdaysIter++] + event.day,
                            title: event.title,
                            dateDay: i,
                            dateMonth: month + 1,
                            dateYear: year,
                            dateText : event.dateText,
                            participants: event.participants,
                            description: event.description,
                            CellPopupVisible : false,
                            OverviewPopupVisible : false,
                            haveEvent: true
                        }
                        dayCreated = true
                        grid.push(day)
                    }
            });
        if (!dayCreated) {
            const day =  {
            heading: weekdaysIter >= weekdays.length ? i : weekdays[weekdaysIter++] + i,
            title: '',
            dateDay: i,
            dateMonth: month + 1,
            dateYear: year,
            dateText : '',
            participants: '',
            description: '',
            CellPopupVisible : false,
            OverviewPopupVisible : false,
            haveEvent: false
            }
            grid.push(day)
        }
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
        },
        showPopup(day) {
            day.haveEvent ?
            day.OverviewPopupVisible = true :
            day.CellPopupVisible = true
        },
        showQuickAddPopup() {
            this.QuickAddPopupVisible = true
        },
        refresh() {
            switchMonth()
        }
    },
    computed: {
        ...mapGetters ({
            getGrid: 'getGrid',
            getCurrentMonth: 'getCurrentMonth',
            getCurrentYear: 'getCurrentYear',
            getCurrentMonthText: 'getCurrentMonthText',
            getCurrentYearText: 'getCurrentYearText',
            getEvents: 'getEvents',
        }),

    },
    components: {
    CellPopup,
    QuickAddPopup,
    OverviewPopup,
    SearchPopup,
    },
    data() {
        return {
            largeSearch,
            largeArrow,
            QuickAddPopupVisible : false,
        };
    }
}
</script>
<style lang="css">
    @import '../styles/styles.css';
</style>