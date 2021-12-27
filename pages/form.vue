<template>
  <div>
    <v-row justify="center">
      <v-col cols="4">
        <PageTitle title="Formulário" />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="8">
        <form>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Nome*"
                placeholder="Informe seu nome"
                prepend-icon="mdi-account-tie"
                required
                color="terciary"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              />
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="surname"
                :error-messages="surnameErrors"
                label="Sobrenome*"
                placeholder="Informe segundo nome e sobrenome"
                prepend-icon="mdi-account-tie"
                required
                color="terciary"
                @input="$v.surname.$touch()"
                @blur="$v.surname.$touch()"
              />
            </v-col>

            <v-col cols="12" sm="6" md="4"
            >
              <v-menu
                v-model="birthDate.menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
                color="terciary"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="birthDate.date"
                    label="Data de Nascimento*"
                    prepend-icon="mdi-calendar-month"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :error-messages="birthDateErrors"
                    required
                    color="terciary"
                    header-color="primary"
                    @input="$v.birthDate.date.$touch()"
                    @blur="$v.birthDate.date.$touch()"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="birthDate.date"
                  @input="birthDate.menu = false"
                  color="terciary"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
               <v-text-field
                v-model="CPF"
                :error-messages="cpfErrors"
                label="CPF*"
                placeholder="Informe seu cpf"
                prepend-icon="mdi-card-account-details"
                number
                v-mask="'###.###.###-##'"
                required
                color="terciary"
                @input="$v.CPF.$touch()"
                @blur="$v.CPF.$touch()"
              >
                <v-icon v-if="validCPF === true" slot="append" color="terciary">
                  mdi-check-bold
                </v-icon>
                <v-icon v-if="validCPF === false" slot="append" color="error">
                  mdi-close-thick
                </v-icon>

              </v-text-field>
            </v-col>
          </v-row>
          <!-- <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :error-messages="selectErrors"
            label="Item"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="Do you agree?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox> -->

         <v-row justify="end">
           <v-col cols="4" class="text-right">
              <v-btn class="mr-4" @click="submit" color="primary" outlined>
                Salvar
              </v-btn>
              <v-btn @click="clear" color="error" outlined>
                Limpar
              </v-btn>
           </v-col>
         </v-row>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, between } from 'vuelidate/lib/validators'
import { cpf } from 'cpf-cnpj-validator'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, minLength: minLength(4) },
    surname: { required, minLength: minLength(4) },
    birthDate: {
      date: {
        required,
        between: between(18, 65)
      }
    },
    CPF: { required },
    email: { required, email },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

  data () {
    return {
      name: '',
      surname: '',
      birthDate: {
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
      },
      CPF: '',
      validCPF: undefined,
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }
  },

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.minLength && errors.push('Para Nome, é preciso pelo menos 4 caracteres.')
      !this.$v.name.required && errors.push('O Nome é obrigatório.')
      return errors
    },

    surnameErrors () {
      const errors = []
      if (!this.$v.surname.$dirty) return errors
      !this.$v.surname.minLength && errors.push('Para Sobrenome, é preciso pelo menos 4 caracteres.')
      !this.$v.surname.required && errors.push('O Segundo nome e sobrenome é obrigatório.')
      return errors
    },

    birthDateErrors () {
      const errors = []
      if (!this.$v.birthDate.date.$dirty) return errors
      !this.$v.birthDate.date.between && errors.push('A idade mínima é 18 e a máxima é 65.')
      !this.$v.birthDate.date.required && errors.push('O Data de Nascimento é obrigatório.')
      return errors
    },

    cpfErrors () {
      const errors = []
      if (!this.$v.CPF.$dirty) return errors
      !this.validCPF && errors.push('O CPF informado não é válido.')
      !this.$v.CPF.required && errors.push('O CPF é obrigatório.')
      return errors
    },

    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },

    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },

    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
  },

  watch: {
    CPF () {
      if (this.CPF.length === 14) this.validCPF = cpf.isValid(this.CPF)
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
    },

    clear () {
      this.$v.$reset()
      this.name = ''
      this.surname = ''
      this.birthDate.name = new Date()
      this.cpf = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
}
</script>

<style scoped lang="scss">

</style>
