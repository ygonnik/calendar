import {createStore} from 'vuex';
import {calendarModule} from '@/store/calendarModule'

export default createStore({
    modules: {
        calendar: calendarModule
    }
})