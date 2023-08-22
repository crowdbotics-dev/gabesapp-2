import axios from "axios"
import {
  CONSECTETUR_INVENTO_USERNAME,
  CONSECTETUR_INVENTO_PASSWORD
} from "react-native-dotenv"
const consecteturinvento = axios.create({
  baseURL: "http://ddsds.dds/api",
  auth: {
    username: CONSECTETUR_INVENTO_USERNAME,
    password: CONSECTETUR_INVENTO_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
