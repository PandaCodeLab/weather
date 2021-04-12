<template>
  <div id="app">
    <router-view />
    <template>
      <snackbar
        ref="snackbar"
        baseSize="100px"
        :wrapClass="''"
        :colors="null"
        :holdTime="3000"
        :multiple="true"
      />
    </template>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$refs.snackbar.info('red', 'msg'))
  }
}
</script>

<style lang="scss">
@import 'assets/style.css';
</style>
