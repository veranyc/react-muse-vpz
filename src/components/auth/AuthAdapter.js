const localhost = 'http://localhost:3000/api/v1'
const heroku = 'https://morning-brushlands-34721.herokuapp.com/api/v1'
let baseUrl = localhost

export default class AuthAdapter {
  static login(loginParams) {
    return fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static signUp (signUpParams) {
     return fetch(`${baseUrl}/users`, {
       method: 'POST',
       headers: headers(),
       body: JSON.stringify(signUpParams)
     }).then(res => res.json())
   }

  static currentUser() {
    return fetch(`${baseUrl}/me`, {
      headers: headers()
    }).then(res => res.json())
  }
}



function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}
