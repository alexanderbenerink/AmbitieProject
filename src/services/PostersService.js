import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://api.airtable.com/v0/app40cdROa36i8voz/Table%201'
})

Axios.defaults.headers.common = { 'Authorization': 'Bearer ' + process.env.VUE_APP_AIRTABLEKEY }

export default {
  getPosters () {
    return Axios.get()
  }
}
