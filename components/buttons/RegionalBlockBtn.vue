<template>
  <v-tooltip top color="terciary">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-2 mb-2"
        rounded text color="primary"
        v-bind="attrs"
        v-on="on"
        :class="btnActive.text === block.text ? 'regional-block-active' : 'regional-block'"
        
      >
        {{ block.text }}
      </v-btn>
    </template>
    <span>{{ block.description }}</span>
  </v-tooltip>
</template>

<script>

export default {
  name: 'RegionalBlockBtn',
  props: {
    block: { type: [], default: '' },
    btnActive: { type: '', default: '' },
  },
}
</script>

<style scoped lang="scss">
@import '~assets/scss/main.scss';

.regional-block:hover, .regional-block-active {
  background-color: $primary !important;
  color: #fff !important;
  transform: scale(1.1) !important;
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%),
    0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);
}

.regional-block-active {
  background-color: $secondary !important;
}
</style>