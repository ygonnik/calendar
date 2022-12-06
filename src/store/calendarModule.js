export const calendarModule = {
    state: () => ({
        grid : [],
        currentYear : new Date().getFullYear(),
        currentMonth : new Date().getMonth()
    }),
    mutations: {
        setGrid(state, payload) {
            state.grid = payload
        },
        incrementCurrentMonth(state) {
            state.currentMonth++
        },
        decrementCurrentMonth(state) {
            state.currentMonth--
        },
        resetDate(state) {
            state.currentMonth = new Date().getMonth()
        }
    },
    getters: {
        getGrid(state) {
            return state.grid
        },
        getCurrentMonth(state) {
            return state.currentMonth
        },
        getCurrentYear(state) {
            return state.currentYear
        },
        getCurrentMonthText(state) {
            const monthDate = new Date(state.currentYear, state.currentMonth);
            return new Intl.DateTimeFormat("ru-RU", { month: "long" }).format(monthDate)
        },
        getCurrentYearText(state) {
            const yearDate = new Date(state.currentYear, state.currentMonth);
            return yearDate.getFullYear()
        }
    }
}