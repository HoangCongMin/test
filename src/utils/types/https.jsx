import axios from 'axios'

export class Http {
    instance
  
    constructor() {
     
      this.instance = axios.create({
        baseURL: 'https://api-ecom.duthanhduoc.com/',
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json',
        
        }
      })
      
    }
  }
  
  const http = new Http().instance
  
  export default http
  
