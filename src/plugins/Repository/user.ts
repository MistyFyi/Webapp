import { AxiosInstance } from "axios"
import { BASE_URL } from "./index"

export interface User {
  getUserProfile(): Promise<any>
  sendContactRequest(
    email: string,
    message: string,
    recaptcha: string
  ): Promise<any>
}

export default ($axios: AxiosInstance) => ({
  getUserProfile() {
    return $axios.get(`${BASE_URL}/v1/user/profile`)
  },
  sendContactRequest(email: string, message: string, recaptcha: string) {
    return $axios.post(`${BASE_URL}/v1/user/contact/request`, {
      email,
      message,
      recaptcha,
    })
  },
})
