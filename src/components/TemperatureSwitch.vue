<template>
  <div class="temperature-switch">
    <span
      class="celsius"
      @click="setTemperatureMode(true)"
      :class="{ active: isCelsius }"
      >C</span
    >
    <span
      class="fahrenheit"
      @click="setTemperatureMode(false)"
      :class="{ active: !isCelsius }"
      >F</span
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isCelsius'])
  },
  methods: {
    setTemperatureMode(val) {
      this.$store.dispatch('setTemperatureMode', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.temperature-switch {
  margin-left: auto;
  font-size: 1.8rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.4);
  .active {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
  .celsius {
    border-radius: 8px 0 0 8px;
  }
  .fahrenheit {
    border-radius: 0 8px 8px 0;
  }
  span {
    padding: 0.5rem 1.5rem;
    display: inline-block;
  }
}
</style>
