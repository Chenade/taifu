<template>
  <footer class="bg-gradient text-center text-white">
    <div class="p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      <div class="footer-list">
        <section class="footer-group footer-link">
          <a
            class="btn btn-primary rounded router-link"
            v-for="(icon, index) of iconList"
            :style="{ 'background-color': icon.color }"
            :href="icon.href"
            :key="index"
          >
            <FBIcon width="14" fill="white" />
          </a>
        </section>

        <div class="footer-group">
          <div class="footer-key">{{ $t('footer.email') }}</div>
          <div class="footer-val">ptjeanliu@gmail.com</div>
        </div>

        <div class="footer-group">© 2020 Copyright</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import FBIcon from './icons/facebook-f.vue';

const iconList = ref([
  {
    color: '#3b5998',
    href: '#',
  },
]);
</script>

<style lang="scss" scoped>
footer {
  .footer-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @include Small() {
      flex-direction: column;
      row-gap: 5px;
    }
    .router-link {
      @include Small() {
        border-radius: 50% !important;
      }
    }
    .footer-group {
      display: flex;
      column-gap: 5px;
      flex-direction: row;
    }
  }
}
</style>
