import axios from 'axios'

export default function(value: string) {
  return axios.get(`http://localhost:8000/${value}`)
}
