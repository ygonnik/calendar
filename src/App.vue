<template>
  <v-app>
    <NavBar/>
    <!-- <CellPopup/> -->
    <!-- <QuickAddPopup/> -->
    <OverviewPopup/>
  </v-app>
</template>

<script>
// import CellPopup from './components/CellPopup.vue';
import NavBar from './components/NavBar.vue';
// import QuickAddPopup from './components/QuickAddPopup.vue';
import OverviewPopup from './components/OverviewPopup.vue';
export default {
  name: 'App',

  components: {
    NavBar,
    // CellPopup,
    // QuickAddPopup,
    OverviewPopup
  },

  data: () => ({
    //
  }),
}
</script>
