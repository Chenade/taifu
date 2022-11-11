<template>
  <div class="container" v-if="msgData">
    <ContentBlock :title="msgData.title" />
    <section class="image-box mb-4">
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-6">
          <ImageComponent v-for="src of imgList" :src="src" :key="src" />
        </div>
      </div>
    </section>
    <ContentBlock
      v-for="(data, index) of msgData.content"
      :key="index"
      :title="data.title"
      :content="data.content"
    ></ContentBlock>
    <section class="link-box mb-4">
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-6 text-end">
          <a
            :href="msgData.link"
            class="btn btn-link text-white"
            target="_blank"
          >
            {{ msgData.link_alt }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ContentBlock from '../ContentBlock.vue';
import ImageComponent from '../ImageComponent.vue';

const prop = defineProps({
  data: Object,
});
const msgData = ref(prop.data);
const imgList = ref(msgData.value.image.split(';'));
</script>

<style lang="scss" scoped>
.container {
  margin-top: 100px;
  margin-bottom: 5rem;
  @include Small() {
    margin-top: 40px;
  }
  .image-box {
    width: 100%;
  }
  .link-box {
    .btn-link {
      background-color: var(--background-color-2);
      text-decoration: unset;
      a {
        text-decoration: unset;
        color: var(--color-light-1);
      }
    }
  }
}
</style>
