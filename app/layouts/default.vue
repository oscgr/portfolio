<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(true)

const navItems = [
  { label: 'Work', to: '/' },
  { label: 'Presets', to: '/presets' },
  { label: 'Tutorials', to: '/tutorials' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col md:flex-row font-sans antialiased">

    <!-- Nuxt UI Viewport-Aware Sidebar -->
    <USidebar v-model:open="isMenuOpen" class="bg-neutral-950 border-neutral-900" :ui="{
      root: 'md:border-r border-neutral-900',
      header: 'p-8 pb-4',
      body: 'p-8 pt-0 flex flex-col justify-between h-full'
    }">
      <!-- Sidebar Header Slot: Identity -->
      <template #header>
        <div>
          <NuxtLink to="/" class="text-xl hover:underline transition-colors">
            Oscar Grainger
          </NuxtLink>
        </div>
      </template>

      <!-- Sidebar Default Slot: Content / Links -->
      <template #default>
        <div class="flex flex-col justify-between h-full py-6">
          <!-- Navigation Menu Layer -->
          <UNavigationMenu orientation="vertical" :items="navItems" :ui="{
            root: 'w-full',
            list: 'space-y-3',
            link: 'text-neutral-400 hover:text-white font-light tracking-wide py-1 px-0 transition-colors bg-transparent hover:bg-transparent data-[active]:text-white data-[active]:font-normal'
          }" />

          <!-- Footer Integration -->
          <div>
            <p class="text-[10px] tracking-widest text-neutral-600 uppercase">
              &copy; {{ new Date().getFullYear() }}
            </p>
          </div>
        </div>
      </template>
    </USidebar>


    <!-- Main Dynamic Content Region -->
    <main class="flex-1 px-6 py-10 md:p-16 max-w-5xl">
      <NuxtPage />
    </main>

  </div>
</template>
