<template>
  <div class="top-info">
    <v-select :options="rusCities" v-model="citySelected" />
    <div class="block-helper">
      <div class="city-current">{{ city }}</div>
      <div class="d-flex text--1">
        <div class="city-change" @click="cityWaitForSelect = true">
          Сменить город
        </div>
        <div class="my-location" @click="fetchMyCity">Мое местоположение</div>
      </div>
    </div>
    <TemperatureSwitch />
  </div>
</template>

<script>
import TemperatureSwitch from '@/components/TemperatureSwitch'

import rusCities from '@/utils/rusCities'

import { mapActions } from 'vuex'

export default {
  data() {
    return {
      cityWaitForSelect: false,
      citySelected: null,
      rusCities
    }
  },
  computed: {
    city() {
      return this.$store.getters.city
    }
  },
  watch: {
    citySelected(newVal) {
      console.log(newVal.name)
      this.$store.dispatch('setCity', newVal.name)
    }
  },
  methods: {
    ...mapActions(['fetchMyCity', 'setCity'])
  },
  mounted() {},
  components: {
    TemperatureSwitch
  }
}
</script>

<style lang="sass" scoped>
.dropdown
  margin: 0
  font-size: 4rem
.dropdown-input
  max-width: 400px !important

.top-info
  display: flex
  align-items: flex-start

.city-current
  font-size: 5rem

.my-location, .city-change
  cursor: pointer
</style>
