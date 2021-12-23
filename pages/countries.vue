<template>
  <div>
    <CountryInfo />
  </div>
</template>

<script>

export default {
  name: 'Country',
  data () {
    return {
      ret: this.getCountries
    }
  },
}
</script>

<style lang="scss" scoped>

</style>