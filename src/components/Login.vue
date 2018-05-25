<template>
  <div class="login-container">
    <md-card class="login-form">
      <form novalidate @submit.prevent="validateUser">
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
    sending: false
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
    },
    postLogin () {
      console.log('post login')
      //  post to backend
      var token = 'asdasd'
      var auth = {
        status: true,
        user_id: 'asoqiwejjjasi'
      }
      localStorage.setItem('token', token)
      localStorage.setItem('auth', JSON.stringify(auth))
      this.$router.push('/')
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
