<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col md:flex-row">
    <div class="md:w-100">
      <RouterLink class="text-2xl hover:underline" to="/">
        Oscar Grainger
      </RouterLink>
      <RouterLink to="/example">
        About
      </RouterLink>
      <p>
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
      </p>
    </div>
    <div class="grow">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
