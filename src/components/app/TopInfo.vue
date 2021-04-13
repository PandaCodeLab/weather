<template>
  <div class="top-info">
    <v-select
      onclick="event.stopPropagation()"
      @input="citySelectedHandle"
      v-if="cityWaitForSelect"
      :options="rusCities"
      placeholder="Выберите город"
      v-model="citySelected"
    >
      <template v-slot:option="option">
        <span :class="option.icon"></span>
        {{ option.name }}
      </template>
    </v-select>
    <div class="block-helper" v-else>
      <div class="city-current">{{ city }}</div>
      <div class="d-flex text--1">
        <div
          class="city-change"
          onclick="event.stopPropagation()"
          @click="cityWaitForSelect = true"
        >
          Сменить город
        </div>
        <div class="my-location" @click="fetchMyCity">
          <img src="../../assets/icons/cursor.svg" alt="" />
          <span>Мое местоположение</span>
        </div>
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
    },
    homeCity() {
      return this.$store.getters.homeCity
    }
  },
  methods: {
    async fetchMyCity() {
      if (this.homeCity !== this.city) {
        const myCity = await this.$store.dispatch('fetchMyCity')
        this.citySelected = myCity
      }
    },
    async citySelectedHandle() {
      await this.$store.dispatch('fetchWeatherData', this.citySelected.name)
      this.cityWaitForSelect = false
    }
  },
  mounted() {
    document.onkeydown = evt => {
      evt = evt || window.event
      if (evt.keyCode == 27) {
        this.cityWaitForSelect = false
      }
    }

    window.addEventListener('click', e => {
      this.cityWaitForSelect = false
    })
  },
  components: {
    TemperatureSwitch
  }
}
</script>

<style lang="scss" scoped>
.v-select {
  font-size: 3rem;
  width: 45vw;
  background: white;
  border-radius: 8px;
  .vs__actions {
    display: none !important;
  }
}

.block-helper {
  .d-flex {
    align-items: center;
  }
}

.top-info {
  display: flex;
  align-items: flex-start;
}

.city-current {
  font-size: 5rem;
  margin-bottom: 5px;
}

.my-location,
.city-change {
  cursor: pointer;
}

.my-location {
  margin-left: 30px;
  img {
    margin-right: 12px;
    position: relative;
    top: 3px;
  }
}
</style>
