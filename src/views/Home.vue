<template>
  <div>
    <TopInfo />
    <Main />
    <BottomInfo />
  </div>
</template>

<script>
import TopInfo from '@/components/app/TopInfo'
import Main from '@/components/app/Main'
import BottomInfo from '@/components/app/BottomInfo'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions(['fetchMyCity', 'fetchWeatherData'])
  },
  computed: {
    ...mapGetters(['city'])
  },
  mounted() {
    if (this.city === null) this.fetchMyCity()
  },
  components: {
    TopInfo,
    Main,
    BottomInfo
  }
}
</script>

<style lang="scss" scoped>
.top-info {
  height: 20%;
}
.main {
  height: 60%;
}
.bottom-info {
  height: 20%;
}
</style>
