<template>
  <HeaderManageVue />
  <main>
    <div class="page">
      <router-view />
    </div>
  </main>
</template>

<script setup>
import HeaderManageVue from '../components/HeaderManage.vue';
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  .page {
    width: 100%;
    background-color: var(--background-color-4);
  }
}
</style>
