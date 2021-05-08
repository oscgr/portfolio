<template>
  <Header />
  <router-view class="pl-80" />
</template>

<script>
import Header from './components/App/Header.vue'
export default {
  name: 'App',
  components: { Header },
}
</script>
