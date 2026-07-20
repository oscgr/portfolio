<template>
  <section>
    <p>This page will be displayed at the / route.</p>
    <NuxtLink to="/about">About</NuxtLink>
  </section>
</template>
<script setup lang="ts">
const route = useRoute()
</script>