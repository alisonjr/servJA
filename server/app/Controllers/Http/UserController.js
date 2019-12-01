'use strict'

const User = use('App/Models/User')

class UserController {
  async login( {request, auth} ){
    const {email, password} = request.all()
    const token = await auth.attempt(email, password)

    return token;
  }

  async register({ request }){
    const { email, password } = request.all();

    const user = new User()

    user.email    = email
    user.password = password
    user.username = email

    try{
      await user.save()
    }
    catch(e){
      console.log(e)
      console.log('deu ruim')
    }


    return this.login(...arguments)
  }
}

module.exports = UserController
