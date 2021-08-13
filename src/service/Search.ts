import axios from 'axios'

export default function(): void {
  axios.get('http://localhost:8000/s1').then(function(response) {
    console.log(response)
  })
}
