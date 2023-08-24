<template>
  <img v-if="src" class="image-component" :src="src" :alt="alt" />
</template>

<script setup>
import { ref } from 'vue';

const prop = defineProps({
  src: String,
  alt: String,
});

const src = ref(prop.src ? `/public/Image/${prop.src}` : null);
const alt = ref(prop.alt);
</script>

<style lang="scss" scoped>
.image-component {
  width: 100%;
}
</style>
