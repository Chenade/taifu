<template>
  <section id="activity-header" class="py-5">
    <div class="container px-5">
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-6">
          <div class="text-center my-5">
            <h3 class="fw-bolder text-secondary-50 lh-lg">{{ title }}</h3>
            <p class="lead text-secondary-50 mb-4">{{ content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const prop = defineProps({
  title: String,
  content: String,
});

const title = ref(prop.title);
const content = ref(prop.content);
</script>

<style lang="scss" scoped>
#activity-header {
  background-color: var(--background-color-5);
}
</style>
