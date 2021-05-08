<template>
  <nav id="header" class="uppercase bg-gray-50 fixed w-80 z-10 px-10 top-0 bottom-0">
    <div class="w-full">
      <div class="text-center pt-10 pb-5">
        <a class="text-xl" href="#"> OSC.GR </a>
      </div>
      <hr />
    </div>
    <div class="pt-5" v-for="menuItem in menuItems">
      <router-link
        class="border-l-2 border-white hover:border-black text-l visited:line-through"
        :to="menuItem.to"
        v-text="menuItem.name"
      ></router-link>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Header',
  setup() {
    const menuItems = ref([
      {
        name: '| Accueil',
        to: '/',
      },
      {
        name: '| à propos',
        to: '/about',
      },
    ])

    return {
      menuItems
    }
  }
}

</script>
