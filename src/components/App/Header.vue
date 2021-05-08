<template>
  <nav id="header" class="uppercase fixed w-80 z-10 px-10 top-0 bottom-0">
    <div class="w-full">
      <div class="text-center pt-10 pb-5">
        <a class="text-xl" href="#"> OSC.GR </a>
      </div>
      <hr class="mb-3" />
    </div>
    <ul>
      <router-link
        v-for="menuItem in menuItems"
        :to="menuItem.to"
        tag="li"
        class="py-2 mx-auto transition-all hover:bg-gray-50 text-l visited:line-through hover:text-gray-500"
        v-text="menuItem.name"
      />
    </ul>
  </nav>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
    const menuItems = ref([
      {
        name: 'Accueil',
        to: '/',
      },
      {
        name: 'à propos',
        to: '/about',
      },
    ])

    return {
      menuItems,
    }
  },
})
</script>
