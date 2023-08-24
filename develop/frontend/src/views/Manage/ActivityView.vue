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
import ActivityCreateVue from '../../components/ManageBlock/ActivityCreate.vue';
import ActivityOneVue from '../../components/ManageBlock/ActivityOne.vue';
import ActivityTwoVue from '../../components/ManageBlock/ActivityTwo.vue';
import ActivityThreeVue from '../../components/ManageBlock/ActivityThree.vue';
import ActivityFourVue from '../../components/ManageBlock/ActivityFour.vue';
const route = useRoute();

const childrenList = ref([
  {
    title: '新增',
    link: 'create',
  },
  {
    title: '會員大會/新創論壇',
    link: '1',
  },
  {
    title: '每月分享會',
    link: '2',
  },
  {
    title: '企業、學術機構參訪',
    link: '3',
  },
  {
    title: '外館拜訪、國際交流或其他',
    link: '4',
  },
]);

const com = shallowRef({
  create: ActivityCreateVue,
  1: ActivityOneVue,
  2: ActivityTwoVue,
  3: ActivityThreeVue,
  4: ActivityFourVue,
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
