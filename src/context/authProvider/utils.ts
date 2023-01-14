import { Api } from '../../services/api'

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post('login', { email, password })
    // console.log(request)

    return request.data
  } catch (error) {
    return null
  }
}
