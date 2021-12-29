<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <PageTitle title="Formulário" />
      </v-col>
    </v-row>

    <v-row justify="center" :class="$vuetify.breakpoint.xs ? 'mb-10' : 'mb-5'">
      <v-col cols="10" sm="8" lg="6">
        <Form />
      </v-col>
    </v-row>
  </div>
</template>