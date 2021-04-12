<template>
  <div>
    <TopInfo />
    <Main />
    <BottomInfo />
  </div>
</template>

<script>
import TopInfo from '@/components/TopInfo'
import Main from '@/components/Main'
import BottomInfo from '@/components/BottomInfo'

export default {
  name: 'Home',
  mounted() {
    console.log(this.$axios)
  },
  components: {
    TopInfo,
    Main,
    BottomInfo
  }
}
</script>

<style lang="sass" scoped>
.top-info
  height: 20%
.main
  height: 60%
.bottom-info
  height: 20%
</style>
