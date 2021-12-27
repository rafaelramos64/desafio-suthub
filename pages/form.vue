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
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Nome*"
                placeholder="Informe seu nome"
                prepend-inner-icon="mdi-account-tie"
                required
                color="terciary"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="surname"
                :error-messages="surnameErrors"
                label="Sobrenome*"
                placeholder="Informe o seu sobrenome completo"
                prepend-inner-icon="mdi-account-tie"
                required
                color="terciary"
                @input="$v.surname.$touch()"
                @blur="$v.surname.$touch()"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6" md="4">
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
                    prepend-inner-icon="mdi-calendar-month"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :error-messages="birthDateErrors"
                    required
                    color="terciary"
                    header-color="primary"
                    @input="$v.birthDate.date.$touch()"
                    @blur="$v.birthDate.date.$touch()"
                  />
                </template>
                <v-date-picker
                  v-model="birthDate.date"
                  @input="birthDate.menu = false"
                  color="terciary"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="CPF"
                :error-messages="cpfErrors"
                label="CPF*"
                placeholder="Informe seu cpf"
                prepend-inner-icon="mdi-card-account-details"
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

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="income"
                :error-messages="incomeErrors"
                label="Renda Mensal*"
                placeholder="Informe sua renda"
                prepend-inner-icon="mdi-currency-brl"
                color="terciary"
                type="number"
                required
                @input="$v.income.$touch()"
                @blur="$v.income.$touch()"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" :sm="petRace === 'Outro' ? '4' : '6'">
              <v-select
                v-model="petSpecie"
                :items="species"
                :error-messages="petSpecieErrors"
                label="Espécie do Pet*"
                prepend-inner-icon="mdi-dog"
                color="terciary"
                required
                @change="$v.petSpecie.$touch()"
                @blur="$v.petSpecie.$touch()"
              />
            </v-col>
            <v-col v-if="petSpecie !== null" cols="12" :sm="petRace === 'Outro' ? '4' : '6'">
              <v-select
                v-model="petRace"
                :items="petSpecie === 'Cão' ? dogRaces : catRaces"
                :error-messages="petRaceErrors"
                :label="petSpecie === 'Cão' ? 'Raça do Cão*' : 'Raça do Gato*'"
                :prepend-inner-icon="petSpecie === 'Cão' ? 'mdi-dog-side' : 'mdi-cat'"
                color="terciary"
                required
                @change="$v.petRace.$touch()"
                @blur="$v.petRace.$touch()"
              />
            </v-col>

            <v-col v-if="petRace === 'Outro'" cols="12" sm="4">
              <v-text-field
                v-model="otherPetRace"
                :error-messages="otherPetRaceErrors"
                label="Informe a Raça*"
                :placeholder="petSpecie === 'Cão' ? 'Informe a raça do seu cão' : 'Informe a raça do seu gato'"
                :prepend-inner-icon="petSpecie === 'Cão' ? 'mdi-dog-side' : 'mdi-cat'"
                color="terciary"
                required
                @change="$v.otherPetRace.$touch()"
                @blur="$v.otherPetRace.$touch()"
              />
            </v-col>
          </v-row>

         <v-row justify="end">
           <v-col cols="4" class="text-right">
              <v-btn class="mr-4 save-btn" @click="submit" color="primary" outlined>
                Salvar
              </v-btn>
              <v-btn class="clear-btn" @click="clear" color="error" outlined>
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
import { required, minLength, between } from 'vuelidate/lib/validators'
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
    income: {
      required,
      between: between(1000, 999999999999999)
    },
    petSpecie: { required },
    petRace: { required },
    otherPetRace: { required },
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
      income: null,
      petSpecie: null,
      species: [
        'Cão',
        'Gato',
      ],
      petRace: null,
      dogRaces: [
        'Poodle',
        'Pinscher',
        'Labrador',
        'Shiba Inu',
        'Vira-latas',
        'Outro'
      ],
      catRaces: [
        'Persa',
        'Siamês',
        'Maine Coon',
        'Ragdoll',
        'Sphynx',
        'Outro'
      ],
      otherPetRace: '',
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
      !this.$v.surname.required && errors.push('O Sobrenome é obrigatório.')
      return errors
    },

    birthDateErrors () {
      const errors = []
      if (!this.$v.birthDate.date.$dirty) return errors
      !this.$v.birthDate.date.between && errors.push('A idade mínima é 18 e a máxima é 65.')
      !this.$v.birthDate.date.required && errors.push('A Data de Nascimento é obrigatória.')
      return errors
    },

    cpfErrors () {
      const errors = []
      if (!this.$v.CPF.$dirty) return errors
      !this.validCPF && errors.push('O CPF informado não é válido.')
      !this.$v.CPF.required && errors.push('O CPF é obrigatório.')
      return errors
    },

    incomeErrors () {
      const errors = []
      if (!this.$v.income.$dirty) return errors
      !this.$v.income.required && errors.push('A renda mensal é obrigatória.')
      !this.$v.income.between &&
        errors.push(this.income >= 1000 && this.income >= 999999999999999 ?
          'A renda informada não é aceita como válida.' : 'A renda mínima é R$ 1.000,00.' )
      return errors
    },

    petSpecieErrors () {
      const errors = []
      if (!this.$v.petSpecie.$dirty) return errors
      !this.$v.petSpecie.required && errors.push('A espécie do pet é obrigatória.')
      return errors
    },

    petRaceErrors () {
      const errors = []
      if (!this.$v.petRace.$dirty) return errors
      !this.$v.petRace.required &&
        errors.push(this.petSpecie === 'Cão' ? 'A raça do cão é obrigatória.' : 'A raça do gato é obrigatória.')
      return errors
    },

    otherPetRaceErrors () {
      const errors = []
      if (!this.$v.otherPetRace.$dirty) return errors
      !this.$v.otherPetRace.required &&
        errors.push(this.petSpecie === 'Cão' ? 'A raça do cão é obrigatória.' : 'A raça do gato é obrigatória.')
      return errors
    },
  },

  watch: {
    CPF () {
      if (this.CPF.length === 14) this.validCPF = cpf.isValid(this.CPF)
    },

    petSpecie () {
      this.petRace = ''
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
@import '~assets/scss/main.scss';

.save-btn:hover {
  background-color: $primary !important;
  border-color: $primary !important;
  color: #fff !important;
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%),
    0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)
}

.clear-btn:hover {
  background-color: $error !important;
  border-color: $error !important;
  color: #fff !important;
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%),
    0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)
}
</style>
