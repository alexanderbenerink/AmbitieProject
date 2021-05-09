import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://api.airtable.com/v0/app40cdROa36i8voz/Resume'
})

const airtableAPIKey = process.env.VUE_APP_AIRTABLEKEY

Axios.defaults.headers.common = { 'Authorization': 'Bearer ' + airtableAPIKey }

export default {
  getResume () {
    return Axios.get('?view=Grid%20view')
    // return Axios.get('?maxRecords=4&view=Grid%20view')
  }
}
