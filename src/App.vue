<template>
  <AppHeader></AppHeader>
  <main class="my-5">
    <RouterView/>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
  export default {
    components:{
      AppHeader,
      AppFooter
    }
  }
</script>

<style lang="scss" scoped>
</style>