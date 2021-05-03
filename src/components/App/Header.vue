<template>
<nav id="header" class="uppercase bg-gray-50 fixed w-80 z-10 px-10 top-0 bottom-0">
  <div class="w-full">
      <div class="text-center pt-10 pb-5">
        <a class="text-xl" href="#">
					OSC.GR
				</a>
      </div>
    <hr>
    </div>
  <div class="pt-5" v-for="menuItem in menuItems">
    <a class="border-l-2 border-white hover:border-black text-l visited:line-through" :href="menuItem.link" v-text="menuItem.name" />
  </div>

	</nav>
</template>

<script setup>
import {ref} from "vue";

const menuItems = ref([
  {
    name: 'à propos',
    link: '/about'
  },
  {
    name: 'Home'
  }
])
</script>
