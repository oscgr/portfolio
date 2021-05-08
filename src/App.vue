<template>
  <Header />
  <router-view class="" />
</template>

<script>
import Header from './components/App/Header.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: { Header },
})
</script>
