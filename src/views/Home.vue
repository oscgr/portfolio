<template>
  <img
    class="lazy"
    src="https://www.solidbackgrounds.com/images/1024x1024/1024x1024-tropical-rain-forest-solid-color-background.jpg"
    data-src="https://www.dropbox.com/s/957ajja8a67qvka/2021-01-06_1.jpg?dl=1"
    alt="toto"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>

<style>
.image {
  background-image: url('https://www.dropbox.com/s/957ajja8a67qvka/2021-01-06_1.jpg?dl=1');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: grey;
}
</style>
