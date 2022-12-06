<template>
  <v-app>
    <CalendarMain/>
    <!-- <CellPopup/> -->
    <!-- <QuickAddPopup/> -->
    <!-- <OverviewPopup/> -->
  </v-app>
</template>

<script>
// import CellPopup from './components/CellPopup.vue';
import CalendarMain from './components/CalendarMain.vue';
// import QuickAddPopup from './components/QuickAddPopup.vue';
//import OverviewPopup from './components/OverviewPopup.vue';
export default {
  name: 'App',

  components: {
    CalendarMain,
    // CellPopup,
    // QuickAddPopup,
    //OverviewPopup
  },

  data: () => ({
    //
  }),
}
</script>
