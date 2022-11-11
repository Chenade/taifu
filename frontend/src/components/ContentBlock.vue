<template>
  <section class="content mb-5">
    <div class="row gx-5 justify-content-center">
      <div class="col-lg-6">
        <h5 class="fw-bolder mb-3">{{ title }}</h5>
        <p
          v-for="(text, index) of contentList"
          class="lead mb-2 fs-6"
          :key="index"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useParamStore } from '@/stores/globalVar';
const store = useParamStore();
const prop = defineProps({
  title: String,
  content: String,
});

const title = ref(prop.title);
const contentList = computed(() => {
  if (typeof prop.content !== 'string') return [];
  return prop.content.replace(/\$\?$/, '').split(store.splitSymbol);
});
</script>

<style lang="scss" scoped>
.content {
  p {
    // opacity: 0.8;
    font-weight: 500;
    &:last-child {
      margin-bottom: 0 !important;
    }
  }
}
</style>
