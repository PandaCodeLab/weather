<template>
  <div class="top-info">
    <div class="my-v-select" v-if="cityWaitForSelect">
      <v-select
        onclick="event.stopPropagation()"
        @input="citySelectedHandle"
        :options="rusCities"
        placeholder="Выберите город"
        v-model="citySelected"
        :clearable="false"
      />

      <div
        class="my-v-select-submit"
        @click="selectSubmitHandler"
        onclick="event.stopPropagation()"
      >
        OK
      </div>
    </div>

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
  watch: {
    searchInput(val) {
      console.log(val)
    }
  },
  methods: {
    selectSubmitHandler() {
      console.log('1')
      document.dispatchEvent(new KeyboardEvent('keypress', { key: 'a' }))
    },
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
.my-v-select {
  position: relative;
  &-submit {
    font-size: 3rem;
    position: absolute;
    right: 0;
    top: 50%;
    z-index: 2;
    transform: translate(0, -50%);
    color: #1086ff;
    background: white;
    padding: 0 3rem;
    cursor: pointer;
    @include for-phone-only {
      font-size: 1.5rem;
      padding-left: 0;
    }
  }
}

.v-select {
  font-size: 3rem;
  width: 45vw;
  background: white;
  border-radius: 8px;
  .vs__actions {
    display: none !important;
  }

  @include for-phone-only {
    font-size: 1.5rem;
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
  @include for-phone-only {
    font-size: 3rem;
  }
}

.my-location,
.city-change {
  cursor: pointer;
}

.my-location {
  margin-left: 30px;
  position: relative;
  img {
    margin-right: 12px;
    position: absolute;
    top: -3px;
    left: -25px;
  }
  @include for-phone-only {
    margin-left: 50px;
  }
}
</style>
