<template>
  <HeaderMain />
  <main>
    <div class="page">
      <HeaderContent :title="title" :content="content" />
      <TagBlock />
      <ContentBlock
        v-if="request.member.length"
        :id="1"
        :title="'會員大會/新創論壇'"
        :data="request.member"
      />
      <ContentBlock
        v-if="request.share.length"
        :id="2"
        :title="'每月分享會'"
        :data="request.share"
      />
      <ContentBlock
        v-if="request.visit.length"
        :id="3"
        :title="'企業、學術機構參訪'"
        :data="request.visit"
      />
      <ContentBlock
        v-if="request.another.length"
        :id="4"
        :title="'外館拜訪、國際交流或其他'"
        :data="request.another"
      />
    </div>
  </main>
</template>

<script setup>
import HeaderMain from '../components/HeaderMain.vue';
import HeaderContent from '../components/HeaderContent.vue';
import TagBlock from '../components/ActivityBlock/TagBlock.vue';
import ContentBlock from '../components/ActivityBlock/ContentBlock.vue';
import { getCurrentInstance, ref } from 'vue';
const { proxy } = getCurrentInstance();

const title = ref('活動紀錄');
const content = ref(
  '台復新創學會為提昇臺灣產業，創造臺灣產業價值，經常舉辦各項活動，協助所有參與者分享資源，整合資源，創造資源整合的巨大綜效。'
);
const request = ref({
  member: [],
  share: [],
  visit: [],
  another: [],
});

proxy.api.get('/activity/list/cat/1').then((response) => {
  request.value.member = response;
});
proxy.api.get('/activity/list/cat/2').then((response) => {
  request.value.share = response;
});
proxy.api.get('/activity/list/cat/3').then((response) => {
  request.value.visit = response;
});
proxy.api.get('/activity/list/cat/4').then((response) => {
  request.value.another = response;
});

onMounted(() => {
  // Listen for hash change and scroll to the corresponding block
  window.addEventListener('hashchange', scrollToHash);
  scrollToHash(); // Initial scroll if hash is present in the URL
});

const scrollToHash = () => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

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
  }
}
</style>
