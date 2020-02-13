<template>
  <div class="row">
    <div class="col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 col-md-6 offset-md-3">
      <form>
        <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
            v-model="pass"
            :error-messages="passErrors"
            :counter="10"
            label="Password"
            required
            @input="$v.pass.$touch()"
            @blur="$v.pass.$touch()"
        ></v-text-field>
        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    pass: { required }
  },
  data: () => ({
    pass: '',
    email: ''
  }),
  computed: {
    passErrors () {
      const errors = []
      if (!this.$v.pass.$dirty) return errors
      !this.$v.pass.required && errors.push('Password is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  }
}
</script>

<style scoped>
</style>
