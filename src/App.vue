<template>
  <div id="app">
    <router-view />

    <notifications position="top center" :duration="2000" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['error'])
  },
  watch: {
    error(error) {
      this.$notify({
        type: 'error',
        title: error
      })
    }
  }
}
</script>

<style lang="scss">
@import 'assets/style.css';

@mixin for-phone-only {
  @media (max-width: 768px) {
    @content;
  }
}

@mixin for-desktop-up {
  @media (min-width: 1200px) {
    @content;
  }
}
</style>
