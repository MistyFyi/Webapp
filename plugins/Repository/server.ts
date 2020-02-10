import { AxiosInstance } from 'axios'
import { BASE_URL } from './index'

export default ($axios: AxiosInstance) => ({
  getServerHistory (id: number) {
    return $axios.get(`${BASE_URL}/api/v1/server/history/${id}`)
  }
})