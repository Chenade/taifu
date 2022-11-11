<template>
  <nav id="header" class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">台灣台復新創學會</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarManage"
        aria-controls="navbarManage"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarManage">
        <ul class="navbar-nav me-auto">
          <li
            class="nav-item"
            v-for="(router, index) of routerList"
            :key="index"
          >
            <router-link class="nav-link" :to="router.link">{{
              router.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = '/manage';
const routerList = ref([
  {
    name: '首頁',
    link: baseUrl,
  },
  {
    name: '理事長｜楊大德',
    link: `${baseUrl}/board_leader`,
  },
  {
    name: '組織架構',
    link: `${baseUrl}/teams/create`,
  },
  {
    name: '活動紀錄',
    link: `${baseUrl}/activity/create`,
  },
  {
    name: '最新消息',
    link: `${baseUrl}/news/create`,
  },
  {
    name: '台灣之星',
    link: `${baseUrl}/tstar/create`,
  },
]);
</script>

<style lang="scss" scoped>
#header {
  background-color: var(--background-color-2);
}
</style>
