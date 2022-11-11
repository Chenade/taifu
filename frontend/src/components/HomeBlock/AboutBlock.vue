<template>
  <div class="container py-4">
    <div class="box">
      <div class="region">
        <div class="text-header">{{ $t('about.header') }}</div>
        <div class="text-content">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="text of $i18n.messages[$i18n.locale].about.content"
              :key="text"
            >
              {{ text }}
            </li>
          </ul>
        </div>
      </div>
      <router-link class="region" :to="'/message'">
        <div class="image-box" v-if="news.image">
          <ImageComponent :src="news.image" />
          <div class="banner">{{ news.title }}</div>
        </div>
      </router-link>
      <router-link class="region" :to="'/active'">
        <div class="image-box" v-if="activity.image">
          <ImageComponent :src="activity.image" />
          <div class="banner">{{ activity.title }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ImageComponent from '../ImageComponent.vue';
import { getCurrentInstance, ref } from 'vue';
const { proxy } = getCurrentInstance();
const news = ref({});
const activity = ref({});

proxy.api.get('/banner/latest').then((response) => {
  news.value = response.news;
  activity.value = response.activity;
});
</script>

<style lang="scss">
.box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 50px 10px;
  grid-template-areas:
    '. image1'
    'introduce image1'
    'introduce image2'
    'introduce image2';
  height: inherit;
  max-height: 80vh;
  @include Large() {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'introduce introduce'
      'image1 image2';
    max-height: unset;
  }
  @include Medium() {
    row-gap: 15px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'introduce'
      'image1'
      'image2';
  }
  @include Small() {
    row-gap: 15px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'introduce'
      'image1'
      'image2';
  }
  .region:nth-child(1) {
    @include Small() {
      padding: 0 5px;
    }
    grid-area: introduce;
  }
  .region:nth-child(2) {
    grid-area: image1;
  }
  .region:nth-child(3) {
    grid-area: image2;
  }
  .region {
    @include flexCenter;
    padding: 0 50px;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 15px;
    .text-header {
      color: #272e31;
      font-weight: 700;
      font-size: 34px;
      line-height: 41px;
    }
    .text-content {
      text-align: justify;
      .list-group {
        .list-group-item {
          font-size: 1.1rem;
          background-color: unset;
          border-bottom: unset;
        }
      }
    }
    .image-box {
      @include flexCenter;
      width: 100%;
      height: 100%;
      img {
        width: inherit;
        max-height: 100%;
        border-radius: 5px;
        object-fit: contain;
      }
      .banner {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.2);
        bottom: 0;
        line-height: 4rem;
        text-align: center;
        color: var(--color-light-1);
        width: inherit;
        font-size: 20px;
        border-radius: 3px;
      }
    }
  }
}
</style>
