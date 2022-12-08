<template>
  <v-app>
    <CalendarMain/>
  </v-app>
</template>

<script>
import CalendarMain from './components/CalendarMain.vue';
export default {
  name: 'App',

  components: {
    CalendarMain,
  },

  data: () => ({
  }),
}
</script>
