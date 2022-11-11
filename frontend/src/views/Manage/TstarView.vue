<template>
  <div class="container">
    <div class="btn-group pt-4" role="group">
      <router-link
        class="btn btn-outline-primary"
        v-for="children of childrenList"
        :key="children.title"
        :to="children.link"
        >{{ children.title }}</router-link
      >
    </div>
  </div>
  <component :is="componentId"></component>
</template>

<script setup>
import { ref, shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import TstarCreateVue from '../../components/ManageBlock/TstarCreate.vue';
import TstarOneVue from '../../components/ManageBlock/TstarOne.vue';
const route = useRoute();

const childrenList = ref([
  {
    title: '新增',
    link: 'create',
  },
  {
    title: '更動',
    link: '1',
  },
]);

const com = shallowRef({
  create: TstarCreateVue,
  1: TstarOneVue,
});

const componentId = shallowRef(null);

setCmponent(route.params.chapters);
function setCmponent(chapters) {
  componentId.value = com.value[chapters];
}
watch(
  () => route.params.chapters,
  async (chapters) => setCmponent(chapters),
  { deep: true }
);
</script>

<style lang="scss" scoped>
#news-create {
  background-color: var(--background-color-4);
  .form {
    padding: 4rem 0;
    .send-btn {
      background-color: var(--background-color-1);
    }
  }
}
</style>
