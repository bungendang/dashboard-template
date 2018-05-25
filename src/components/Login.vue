<template>
  <div class="login-container">
    <md-card class="login-form">
      <md-progress-bar md-mode="indeterminate" v-if="sending"></md-progress-bar>
      <form novalidate @submit.prevent="validateUser">
        <md-card-header>
          <img src="../assets/logo.png" class="reponsive">
        </md-card-header>
        <md-card-content>
          <!-- <md-field>
            <label>Username / Email</label>
            <md-input v-model="form.username"></md-input>
          </md-field> -->
          <md-field :class="getValidationClass('username')">
            <label for="username">Username / E-mail</label>
            <md-input name="username" id="username" autocomplete="given-name" v-model="form.username" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.username.required">Username / E-mail is required</span>
            <span class="md-error" v-else-if="!$v.form.username.minlength">Invalid username / e-mail</span>
          </md-field>
          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input v-model="form.password" type="password"></md-input>
            <span class="md-error" v-if="!$v.form.password.required">Password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.minlength">Invalid password</span>
          </md-field>
        </md-card-content>
        <md-card-actions>
          <div class="error-message" v-if="invalidLogin">Your username or password invalid</div>
          <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
        </md-card-actions>
      </form>
    </md-card>
    <!-- <div class="bego">
      asdasd
    </div> -->
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  mixins: [validationMixin],
  data: () => ({
    form: {
      username: null,
      password: null
    },
    sending: false,
    invalidLogin: false,
    api: {
      endpoint: 'http://localhost:3000/v1'
    }
  }),
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(40)
      },
      password: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(40)
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.username = null
      this.form.password = null
      this.invalidLogin = false
    },
    postLogin () {
      var self = this
      // console.log('post login')
      var data = {
        username: this.form.username,
        password: this.form.password
      }
      //  post to backend
      // var token = 'asdasd'
      // var auth = {
      //   status: true,
      //   user_id: 'asoqiwejjjasi'
      // }
      this.sending = true
      setTimeout(() => {
        this.$http.post(this.api.endpoint + '/login', data).then(response => {
          // success callback
          var resp = response.body
          localStorage.setItem('token', resp.token)
          localStorage.setItem('auth', JSON.stringify({
            status: true,
            user_id: resp.user._id,
            user_fullname: resp.user.fullname,
            user_role: resp.user.role
          }))
          self.$router.push('/')
          // console.log(response)
        }, response => {
          // error callback
          // var e = self
          console.log(self)
          this.sending = false
          this.invalidLogin = true
          setTimeout(() => {
            self.clearForm()
            // console.log('restart')
          }, 1000)
          // console.log('error')
        })
        // alert("Hello");
      }, 1000)
      // console.log('hello')
    },
    validateUser () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.postLogin()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.md-card-header{
  img{
    border-radius:0px !important;
  }
}
.error-message{
  color: red;
}
.login-container{
  text-align: center;
  background-color: #EEE !important;
  .login-form{
    width:400px;
    margin:auto !important;
    margin-top:300px !important;
    background-color: white;
  }
}
.bego{
  font-size: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
