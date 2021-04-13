import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import degConverter from '@/utils/cardinalDirections'
import celsToFar from '@/utils/celsToFar'
import error from './error'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: null,
    weather: {},
    isCelsius: true,
    homeCity: ''
  },
  mutations: {
    setCity(state, city) {
      state.city = city
      if (!state.homeCity) {
        state.homeCity = city
      }
    },
    setWeather(state, data) {
      state.weather = data
    },
    setTemperatureMode(state, data) {
      state.isCelsius = data
    }
  },
  actions: {
    setCity({ commit }, city) {
      commit('setCity', city)
    },
    setTemperatureMode({ commit }, data) {
      commit('setTemperatureMode', data)
    },
    async fetchMyCity({ dispatch, commit, getters }) {
      try {
        const response = await axios.get(`http://ip-api.com/json?lang=ru`)
        const { city } = response.data

        dispatch('fetchWeatherData', city)
        return city
      } catch (e) {
        console.error(e)
        throw e
      }
    },
    async fetchWeatherData({ dispatch, commit, getters }, city) {
      try {
        if (city !== getters.city) {
          const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VUE_APP_WEATHER_KEY}&units=metric`
          )

          const windDirection = degConverter(response.data.wind.deg)

          const data = {
            isSunny: response.data.weather[0].main === 'Rain' ? true : false,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed,
            temperature: Math.ceil(response.data.main.temp),
            windDirection
          }

          commit('setWeather', data)
          commit('setCity', city)
        }
      } catch (e) {
        dispatch('setError', `Погода в городе "${city}" неизвестна`)
        throw e
      }
    }
  },
  getters: {
    city: s => s.city,
    homeCity: s => s.homeCity,
    isCelsius: s => s.isCelsius,
    isSunny: s => s.weather.isSunny,
    weather: s => s.weather,
    temperature: state => {
      return state.isCelsius
        ? state.weather.temperature
        : Math.ceil(celsToFar(state.weather.temperature))
    }
  },
  modules: {
    error
  }
})
