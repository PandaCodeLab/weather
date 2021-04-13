<template>
  <div class="main">
    <div class="d-flex">
      <img :src="imgSrc" width="140" height="140" alt="" />
      <div class="temperature-current">
        <span class="value">{{ temperature }}</span>
        <span v-if="isCelsius" class="sign">&#176;</span>
        <span v-else class="sign">&#176;</span>
      </div>
    </div>
    <div class="temperature-state-text">
      Преимущественно
      {{ weatherObj.label }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['weatherType']),
    imgSrc() {
      return require(`../../assets/icons${this.weatherObj.icon_url}`)
    },
    isCelsius() {
      return this.$store.getters.isCelsius
    },
    temperature() {
      return this.$store.getters.temperature
    },
    weatherObj() {
      if (this.weatherType === 'Rain') {
        return {
          label: 'дожди',
          icon_url: '/rain.svg'
        }
      }
      if (this.weatherType === 'Sun') {
        return {
          label: 'солнечно',
          icon_url: '/sun.svg'
        }
      }
      if (this.weatherType === 'Clouds') {
        return {
          label: 'облачно',
          icon_url: '/cloud.svg'
        }
      }
      if (this.weatherType === 'Clear') {
        return {
          label: 'ясно',
          icon_url: '/partly_cloudy.svg'
        }
      }
      if (this.weatherType === 'Storm') {
        return {
          label: 'гроза',
          icon_url: '/rain.svg'
        }
      }

      return {
        label: 'ясно',
        icon_url: '/partly_cloudy.svg'
      }
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
