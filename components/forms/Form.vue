<template>
  <v-form>
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
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
          color="terciary"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="birthDate.dateFormatted"
              :error-messages="birthDateErrors"
              label="Data de Nascimento*"
              prepend-inner-icon="mdi-calendar"
              color="terciary"
              v-bind="attrs"
              v-on="on"
              @input="$v.birthDate.dateFormatted.$touch()"
              @blur="$v.birthDate.dateFormatted.$touch()"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="birthDate.date"
            color="terciary"
            @input="birthDate.menu = false"
          ></v-date-picker>
        </v-menu>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-text-field
          v-model="CPF"
          :error-messages="cpfErrors"
          label="CPF*"
          placeholder="Informe seu CPF"
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

    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="address.CEP"
          :error-messages="cepErrors"
          label="CEP*"
          placeholder="Informe seu CEP"
          prepend-inner-icon="mdi-mailbox"
          v-mask="'##.###-###'"
          required
          color="terciary"
          @input="$v.address.CEP.$touch()"
          @blur="$v.address.CEP.$touch()"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" :sm="address.state === 'Outro' ? '4' : '6'">
        <v-text-field
          v-model="address.city"
          :error-messages="cityErrors"
          label="Cidade*"
          placeholder="Informe sua cidade"
          prepend-inner-icon="mdi-city"
          required
          color="terciary"
          @input="$v.address.city.$touch()"
          @blur="$v.address.city.$touch()"
        />
      </v-col>

      <v-col cols="12" :sm="address.state === 'Outro' ? '4' : '6'">
        <v-combobox
          v-model="address.state"
          :error-messages="stateErrors"
          label="Estado*"
          placeholder="Informe seu estado"
          prepend-inner-icon="mdi-billboard"
          :items="statesList()"
          color="terciary"
          required
          @input="$v.address.state.$touch()"
          @blur="$v.address.state.$touch()"
        />
      </v-col>

      <v-col v-if="address.state === 'Outro' " cols="12" sm="6" md="4">
        <v-text-field
          v-model="address.informState"
          :error-messages="informStateErrors"
          label="Informe o Estado*"
          placeholder="Informe seu estado"
          prepend-inner-icon="mdi-billboard"
          :counter="2"
          color="terciary"
          required
          @input="$v.address.informState.$touch()"
          @blur="$v.address.informState.$touch()"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="address.district"
          :error-messages="districtErrors"
          label="Bairro*"
          placeholder="Informe seu bairro"
          prepend-inner-icon="mdi-home-group"
          required
          color="terciary"
          @input="$v.address.district.$touch()"
          @blur="$v.address.district.$touch()"
        />
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="address.street"
          :error-messages="streetErrors"
          label="Rua*"
          placeholder="Informe seu rua"
          prepend-inner-icon="mdi-sign-real-estate"
          required
          color="terciary"
          @input="$v.address.street.$touch()"
          @blur="$v.address.street.$touch()"
        />
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
        <v-btn
          @click.prevent="saveFormData()"
          class="mr-4 save-btn"
          type="submit"
          color="primary"
          outlined
        >
          Salvar
        </v-btn>
        <v-btn class="clear-btn" @click="clear" color="error" outlined>
          Limpar
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, requiredIf, minLength, maxLength, between } from 'vuelidate/lib/validators'
import { cpf } from 'cpf-cnpj-validator'
import States from '../../assets/js/states'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, minLength: minLength(4) },
    surname: { required, minLength: minLength(4) },
    birthDate: {
      dateFormatted: {
        required,
      }
    },
    CPF: { required },
    income: {
      required,
      between: between(1000, 999999999999999)
    },
    address: {
      CEP: {
        required,
        minLength: minLength(10),
      },
      city: {
        required,
        minLength: minLength(5)
      },
      state: {
        required,
        maxLength: maxLength(2),
      },
      informState: {
        required: requiredIf(function() {
          return this.address.state === 'Outro' || this.address.state === 'outro'
        }),
        maxLength: maxLength(2),
      },
      street: {
        required,
        minLength: minLength(5)
      },
      district: {
        required,
        minLength: minLength(5)
      },
    },

    petSpecie: { required },
    petRace: { required },
    otherPetRace: {
      required: requiredIf(function() {
        return this.petRace === 'Outro' || this.petRace === 'outro'
      }),
    },
  },

  data () {
    return {
      name: '',
      surname: '',
      birthDate: {
        date: null,
        dateFormatted: null,
        menu: false,
      },
      CPF: '',
      validCPF: null,
      income: null,
      address: {
        CEP: '',
        city: '',
        state: '',
        informState: '',
        street: '',
        district: '',
      },
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
      if (!this.$v.birthDate.dateFormatted.$dirty) return errors
      /* !this.$v.birthDate.date.between && errors.push('A idade mínima é 18 e a máxima é 65.') */
      !this.$v.birthDate.dateFormatted.required && errors.push('A Data de Nascimento é obrigatória.')
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

    cepErrors () {
      const errors = []
      if (!this.$v.address.CEP.$dirty) return errors
      !this.$v.address.CEP.required && errors.push('O CEP é obrigatório.')
      !this.$v.address.CEP.minLength && errors.push('Informe no mínimo 10 caracteres.')
      return errors
    },

    cityErrors () {
      const errors = []
      if (!this.$v.address.city.$dirty) return errors
      !this.$v.address.city.required && errors.push('A cidade é obrigatória.')
      !this.$v.address.city.minLength && errors.push('Informe no mínimo 5 caracteres.')
      return errors
    },

    stateErrors () {
      const errors = []
      if (!this.$v.address.state.$dirty) return errors
      !this.$v.address.state.required && errors.push('O estado é obrigatório.')
      if (this.address.state !== 'Outro' && this.address.state !== 'outro') {
        !this.$v.address.state.maxLength && errors.push('Infome apenas dois caracteres.')
      }
      return errors
    },

    informStateErrors () {
      const errors = []
      if (!this.$v.address.informState.$dirty) return errors
      !this.$v.address.informState.required && errors.push('O estado é obrigatório.')
      !this.$v.address.informState.maxLength && errors.push('Infome apenas dois caracteres.')
      return errors
    },

    streetErrors () {
      const errors = []
      if (!this.$v.address.street.$dirty) return errors
      !this.$v.address.street.required && errors.push('A rua é obrigatória.')
      !this.$v.address.street.minLength && errors.push('Informe no mínimo 5 caracteres.')
      return errors
    },

    districtErrors () {
      const errors = []
      if (!this.$v.address.district.$dirty) return errors
      !this.$v.address.district.required && errors.push('O bairro é obrigatório.')
      !this.$v.address.district.minLength && errors.push('Informe no mínimo 5 caracteres.')
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

    'birthDate.date': 'getFormattedDate',

    'address.informState': 'changeInformState',

    CPF () {
      if (this.CPF.length === 14) this.validCPF = cpf.isValid(this.CPF)
    },

    petSpecie () {
      this.petRace = ''
    },
  },

  methods: {
    statesList () {
      return States.states
    },

    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },

    changeInformState () {
      this.address.informState = ''
    },

    getFormattedDate () {
      this.birthDate.dateFormatted = this.formatDate(this.birthDate.date)
    },

    saveFormData () {
      this.$v.$touch()

      if (!this.$v.$error) {
        console.log('Save with sucessfull!')
      } else {
        this.$v.$touch()
      }
    },

    clear () {
      this.$v.$reset()
      this.name = ''
      this.surname = ''
      this.birthDate.date = null
      this.birthDate.dateFormatted = null
      this.CPF = ''
      validCPF = null
      this.select = null
      this.income = null,
      this.address
      this.address.CEP = ''
      this.address.city = ''
      this.address.state = ''
      this.address.informState = ''
      this.address.street = ''
      this.address.district = ''
      this.petSpecie = null
      this.otherPetRace = ''
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
