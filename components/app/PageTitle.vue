<template>
  <div class="page-tittle mt-3 mb-7">
    <h3>{{ title }}</h3>
    <h5 v-if="subtitle !== ''">{{ subtitle }}</h5>
  </div>
</template>

<script>
export default {
 props: {
   title: { type: '', default: '' },
   subtitle: { type: '', default: '' },
 }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/main.scss';

h5 { 
  color: $primary;
}

.page-tittle::before {
  content: "";
  position: absolute;
  display: block;
  width: 130px;
  height: 1.5px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}

.page-tittle {
  font-family: Montserrat,sans-serif;
  color: rgba(0,0,0,.7);
  font-size: 1.6rem;
  text-align: center;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  padding-top: 15px;
}

.page-tittle::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3.5px;
  background: $terciary;
  bottom: 0;
  left: calc(50% - 15px);
}
</style>