import Cookie from 'js-cookie'

async function authOp(type, authData, axios) {
  try {
    if (typeof axios !== 'function') {
      throw new TypeError('Axios not available')
    }
    let request = {}
    let response = ''
    let result = ''
    let authURL = ''
    switch (type) {
      case 'sign-up':
        authURL =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          process.env.firebaseKey
        request = {
          ...authData,
          returnSecureToken: true,
        }
        response = await axios.$post(authURL, request)
        // ToDo: Add a user to the DB: First Name, Last Name
        result = response
        break
      case 'sign-in':
        authURL =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          process.env.firebaseKey
        request = {
          ...authData,
          returnSecureToken: true,
        }
        response = await axios.$post(authURL, request)
        result = response
        break
    }
    return result
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    throw err
  }
}

function authenticateUser(result) {
  localStorage.setItem('token', result.idToken)
  localStorage.setItem(
    'tokenExpiration',
    new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
  )
  Cookie.set('jwt', result.idToken)
  Cookie.set(
    'expirationDate',
    new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
  )
}

export { authOp, authenticateUser }