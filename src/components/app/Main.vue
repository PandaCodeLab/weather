<template>
  <div class="main">
    <div class="d-flex">
      <img
        src="../../assets/icons/sun.svg"
        width="140"
        height="140"
        alt=""
        v-if="isSunny"
      />
      <img
        src="../../assets/icons/rain.svg"
        width="140"
        height="140"
        alt=""
        v-else
      />
      <div class="temperature-current">
        <span class="value">{{ temperature }}</span>
        <span v-if="isCelsius" class="sign">&#176;</span>
        <span v-else class="sign">&#176;</span>
      </div>
    </div>
    <div class="temperature-state-text" v-if="isSunny">
      Преимущественно солнечно
    </div>
    <div class="temperature-state-text" v-else>Преимущественно осадки</div>
  </div>
</template>

<script>
export default {
  computed: {
    isSunny() {
      return this.$store.getters.isSunny
    },
    isCelsius() {
      return this.$store.getters.isCelsius
    },
    temperature() {
      return this.$store.getters.temperature
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .d-flex {
    align-items: center;
  }
}

.temperature {
  &-current {
    font-size: 20rem;
    position: relative;
    .sign {
      //position: absolute;
    }
    @include for-phone-only {
      font-size: 10rem;
    }
  }
  &-state-text {
    font-size: 2.5rem;
    @include for-phone-only {
      font-size: 2rem;
    }
  }
}
</style>
