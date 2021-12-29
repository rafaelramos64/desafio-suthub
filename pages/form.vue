<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <PageTitle title="Formulário" />
      </v-col>
    </v-row>

    <v-row justify="center" :class="$vuetify.breakpoint.xs ? 'mb-10' : 'mb-5'">
      <v-col cols="11" sm="9" lg="8" xl="6">
        <v-card class="py-5 px-10 card-form">
          <Form />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.card-form {
  border-radius: 0.9rem;
}
</style>