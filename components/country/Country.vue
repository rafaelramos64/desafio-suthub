<template>
  <div>
    <h1>12312312312</h1>
    <v-img
      class="mb-3"
      :class="selectedCountry ? 'selected-country' : 'country-img change-cursor'"
      :src="country.flag"
      :lazy-src="country.flag"
      :alt="country.name"
      max-width="316"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="primary lighten-2"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </div>
</template>

<script>

export default {
  name: 'Country',
  props: {
    country: [],
    selectedCountry: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.country-img {
  width: 316px;
  height: 181px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 0;
  object-fit: contain;
}

.selected-country {
  min-width: 443px;
  min-height: 258px;
  max-width: 443px;
  max-height: 258px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 0;
  @media screen and (max-width: 599px) {
      min-width: 363px;
      min-height: 178px;
      max-width: 363px;
      max-height: 178px;
  }

  @media screen and (max-width: 380px) {
      min-width: 316px;
      min-height: 181px;
      max-width: 316px;
      max-height: 181px;
  }
}

.change-cursor {
  cursor: pointer;
}
</style>