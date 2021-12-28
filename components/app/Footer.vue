<template>
  <v-footer
    :absolute="!fixed"
    app
    tile
    color="#fff"
    class="border-footer"
  >
    <v-container fluid class="pa-0">
      <v-row justify="space-between" align="center" no-gutters>
        <v-col cols="4">
          <span class="rafael-ramos">&copy; Copyleft || <b> Rafael Ramos </b> </span>
        </v-col>

        <v-col cols="4" class="text-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-4 increase-btn"
            icon
          >
            <a :href="icon.link" target="_blank">
              <v-icon 
                color="primary" size="28px">
                {{ icon.icon }}
              </v-icon>
            </a>
          </v-btn>
        </v-col>

        <v-col cols="4" class="d-flex justify-end">
          <v-img max-width="100" src="/suthub.png" alt="SutHub logo" />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      fixed: false,
      icons: [
        { icon: 'mdi-github', link: 'https://github.com/rafaelramos64' },
        { icon: 'mdi-email', link: 'mailto:<rafaelramos64@protonmail.com>' },
        { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/rafael-ramos64' },
      ],
    } 
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/main.scss';

.border-footer {
  border-top: 1px solid #fcfc !important;
}

.rafael-ramos {
  color: $secondary !important;
}

.increase-btn:hover {
  transform: scale(1.1) !important;
  & .v-icon {
    color: $secondary !important;
  }
}

a {
  text-decoration: none !important;
}
</style>
