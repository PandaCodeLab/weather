<template>
  <div class="bottom-info">
    <div class="data-item">
      <div class="title">Ветер</div>
      <div class="data">
        {{ weather.windSpeed }} м/c, {{ weather.windDirection }}
      </div>
    </div>

    <div class="data-item">
      <div class="title">Давление</div>
      <div class="data">{{ weather.pressure }} мм рт. ст.</div>
    </div>

    <div class="data-item">
      <div class="title">Влажность</div>
      <div class="data">{{ weather.humidity }}%</div>
    </div>

    <div class="data-item">
      <div class="title">Вероятность дождя</div>
      <div class="data">10%</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    weather() {
      return this.$store.getters.weather
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
}

.data-item {
  .title {
    font-size: 1.8rem;
    opacity: 0.6;
  }
  .data {
    font-size: 2.5rem;
  }
}
</style>
