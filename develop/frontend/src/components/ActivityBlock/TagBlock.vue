<template>
  <section class="py-5 border-bottom" id="features">
    <div class="container my-5">
      <div class="row">
        <a
          class="col-lg-3 col-md-6 px-5 text-decoration-none my-4"
          v-for="(tag, index) of tagList"
          :key="index"
          :href="tag.href"
        >
          <h5 class="h4 fw-bolder">{{ tag.title }}</h5>
          <p class="mb-1 text-justify">{{ tag.decoration }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const tagList = ref([
  {
    title: '會員大會/新創論壇',
    decoration:
      '每年度的大會，邀請產官學界共同參與，並舉辦論壇，創造新創事業直接鏈接資源機會',
    href: '#1',
  },
  {
    title: '每月分享會',
    decoration: '邀請各領域專家或會員進行新創商業模式分享，互相學習',
    href: '#2',
  },
  {
    title: '企業、學術機構參訪',
    decoration: '實際體驗，對新創商業模式進行實務交流',
    href: '#3',
  },
  {
    title: '外館拜訪、國際交流或其他',
    decoration: '整合國際新創資源，與世界市場鏈接',
    href: '#4',
  },
]);
</script>

<style lang="scss" scoped>
a {
  color: var(--color-dark-1);
}
#features {
  background-color: var(--background-color-4);
}
</style>
