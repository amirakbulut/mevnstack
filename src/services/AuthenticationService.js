import Api from '@/services/Api'

function register (credentials) {
  return Api().post('register', credentials)
}

export default {register}
