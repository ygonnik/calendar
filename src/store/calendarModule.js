export const calendarModule = {
    state: () => ({
        grid : [],
        events: [],
        currentYear : new Date().getFullYear(),
        currentMonth : new Date().getMonth(),
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
        setCurrentMonth(state, payload) {
            state.currentMonth = payload
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload
        },
        resetDate(state) {
            state.currentMonth = new Date().getMonth()
        },
        setEvents(state, payload) {
            state.events = payload
        },
        pushEvent(state, payload) {
            state.events.push(payload)
        },
        deleteEvent(state, payload) {
            const eventIndex = state.events.findIndex(event => event.day === payload.day &&
                                                        event.month === payload.month &&
                                                        event.year === payload.year)
            state.events.splice(eventIndex)
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
        },
        getEvents(state) {
            return state.events
        }
    }
}