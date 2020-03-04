<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar>
            <v-toolbar-title>
              Регистрация
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
              />
              <v-text-field
                  v-model="password"
                  :error-messages="passErrors"
                  label="Password"
                  required
                  @input="$v.pass.$touch()"
                  @blur="$v.pass.$touch()"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
                @click.prevent="signup"
                :disabled="processing"
            >
              Зарегестрироваться
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    pass: { required, maxLength: maxLength(6) },
    email: { required, email }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      this.$store.dispatch('SIGNUP', { email: this.email, password: this.password })
      this.$v.$touch()
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passErrors () {
      const errors = []
      if (!this.$v.pass.$dirty) return errors
      !this.$v.pass.maxLength && errors.push('Password must be at most 6 characters long')
      !this.$v.pass.required && errors.push('Password is required.')
      return errors
    },
    processing () {
      return this.$store.getters.getProcessing
    },
    isUserAuthenticated () {
      return this.$store.getters.isUserAuthenticated
    }
  },
  watch: {
    isUserAuthenticated (val) {
      if (val === true) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>

</style>
