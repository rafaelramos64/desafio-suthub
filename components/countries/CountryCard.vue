<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      :class="{ 'on-hover': hover }"
      class="mx-auto card-country"
      max-width="344"
    >
      <Flag class="flag-img" fullWidth :country="country" />
      
      <v-card-title >
        <span class="hide-country-name">{{ country.name }}</span>
      </v-card-title>

      <div :class="$vuetify.breakpoint.mdAndUp ? 'area-languages' : ''">
        <v-card-subtitle>
          Línguas <br />
          <v-btn
            :text="$vuetify.breakpoint.mdAndUp"
            color="terciary"
            class="language pa-0"
            :class="$vuetify.breakpoint.smAndDown ? 'mr-1 mb-1' : ''"
            v-for="(lang, key) in country.languages"
            :key="key"
            nuxt
            :to="'lang/' + lang.iso639_1"
          >
            <span @click="saveSelectedLanguage(lang)">{{ lang.name }}, </span>
          </v-btn>
        </v-card-subtitle>
      </div>

      <v-card-actions>
        <v-btn v-if="!show" color="deep-purple" text @click="show = !show">
          Ver mais
        </v-btn>

        <v-btn v-else color="deep-purple" text @click="show = !show">
          Ver menos
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            Mais informações.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CountryCard',
  props: {
    country: [], default: ''
  },
  data () {
    return {
      show: false,
    }
  },

  methods: {
    ...mapActions(['saveSelectedLanguage']),
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/main.scss';

.v-btn.v-size--default {
  font-size: 0.875rem !important;
}

.v-btn {
  font-weight: 300 !important;
  line-height: 1.375rem !important;
  letter-spacing: 0.0071428571em !important;
}

.flag-img {
  filter: brightness(90%) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25)) !important;
  
}
.card-country:hover .flag-img {
  transition: all 0.3s linear;
  filter: brightness(100%) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25)) !important;
}

.language:hover {
  transform: scale(1.1) !important;
  background-color: $primary !important;
  color: #fff !important;
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%),
    0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);
}

.hide-country-name  {
  max-width: 28ch;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap;
}

.area-languages {
  max-height: 90px;
  overflow-y: auto;
  
}
</style>