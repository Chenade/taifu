<template>
  <HeaderMain />
  <main>
    <div class="page">
      <HeaderContent :title="title" :content="content" />
      <LatestNews v-for="news of newsList" :data="news" :key="news.id" />
    </div>
  </main>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue';
import HeaderContent from '../components/HeaderContent.vue';
import HeaderMain from '../components/HeaderMain.vue';
import LatestNews from '../components/MessageBlock/LatestNews.vue';

const { proxy } = getCurrentInstance();

const title = ref('訊息公告');
const content = ref('最近活動訊息');

const newsList = ref([]);

(async function init() {
  const one = await proxy.api.get('/news/list/cat/1');
  const two = await proxy.api.get('/news/list/cat/2');

  newsList.value.push(...one);
  newsList.value.push(...two);
})();
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: auto;
  .page {
    width: 100%;
    background-color: var(--background-color-4);
  }
}
</style>
