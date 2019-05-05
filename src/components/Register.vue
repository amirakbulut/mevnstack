<template>
  <div class="container">
    <h1>Account aanmaken</h1>
      <a-form :layout="formLayout" :form="form">
        <a-form-item label="E-mailadres">
          <a-input placeholder="E-mailadres" v-decorator="[ 'username', ruleSets.username ]">
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item label="Password">
          <a-input placeholder="Wachtwoord" type="password" v-decorator="[ 'password', ruleSets.password ]">
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="register">Registreren</a-button>
        </a-form-item>
        Ik heb al een account, <router-link :to="{name: 'Login'}">log direct in.</router-link>
      </a-form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      formLayout: 'vertical',
      form: this.$form.createForm(this),
      ruleSets: {
        username: {
          rules: [
            { required: true, message: 'E-mailadres is verplicht' },
            { type: 'email', message: 'E-mail formaat incorrect' }
          ]
        },
        password: {
          rules: [
            { required: true, message: 'Wachtwoord is verplicht' },
            { min: 6,
              max: 30,
              pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-._])'),
              message: 'Wachtwoord dient tussen de 6 tot 30 karakters te bevatten, waarvan een Hoofdletter, kleine letter, speciaal teken & nummer'
            }
          ]
        }
      }
    }
  },
  methods: {
    async register () {
      await new Promise((resolve, reject) => {
        this.form.validateFields((err, values) => {
          if (err) {
            return
          }
          resolve()
        })
      })

      try {
        await AuthenticationService.register({
          email: this.form.getFieldValue('username'),
          password: this.form.getFieldValue('password')
        })
        this.$notification.open({
          message: 'Login succesvol',
          description: 'Je word binnen enkele seconden doorverwezen'
        })
      } catch (e) {
        if (e.response.status === 422) {
          this.form.setFields({
            [e.response.data.field]: {
              value: this.form.getFieldValue('username'),
              errors: [
                new Error(e.response.data.error)
              ]
            }
          })
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 70px;
}

@media only screen and (max-width: 992px) {
  .container {
    padding: 40px;
  }
}
</style>
