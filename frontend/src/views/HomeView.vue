<template>
  <HeaderMain />
  <main>
    <div class="page">
      <div class="block">
        <AboutBlock />
      </div>
      <div class="block">
        <OriginBlock />
      </div>
      <div class="block">
        <PurposeBlock />
      </div>
      <div class="block" v-if="leader">
        <ChairmanBlock>
          <template #image>
            <ImageComponent :src="leader.image" />
          </template>

          <template #title> 理事長｜楊大德 </template>
          <template #text>
            {{ leader.content }}
          </template>
        </ChairmanBlock>
      </div>
      <div class="block">
        <ChairmanBlock side="right">
          <template #image>
            <img
              class="chairman-img"
              src="@/assets/img/創會會長.jpg"
              width="400"
              height="300"
            />
          </template>

          <template #title>{{ $t('history.header') }}</template>

          <template #text>
            <p
              v-for="text of $i18n.messages[$i18n.locale].history.content"
              :key="text"
            >
              {{ text }}
            </p>
          </template>
        </ChairmanBlock>
      </div>
      <div class="block" v-if="teams.length">
        <OrganizeBlock :data="teams" />
      </div>
      <div class="block" v-if="promos.length">
        <OrganizeBlock :data="promos" />
      </div>
      <FooterMain />
    </div>
  </main>
</template>

<script setup>
import HeaderMain from '../components/HeaderMain.vue';
import ImageComponent from '../components/ImageComponent.vue';
import AboutBlock from '../components/HomeBlock/AboutBlock.vue';
import OriginBlock from '../components/HomeBlock/OriginBlock.vue';
import PurposeBlock from '../components/HomeBlock/PurposeBlock.vue';
import ChairmanBlock from '../components/HomeBlock/ChairmanBlock.vue';
import OrganizeBlock from '../components/HomeBlock/OrganizeBlock.vue';
import FooterMain from '../components/FooterMain.vue';
import { getCurrentInstance, ref } from 'vue';

const { proxy } = getCurrentInstance();
const leader = ref(null);
const teams = ref([]);
const promos = ref([]);

proxy.api.get('/board/leader').then((response) => {
  leader.value = response;
});
proxy.api.get('/teams/list').then((response) => {
  teams.value = response;
});
proxy.api.get('/promo/list').then((response) => {
  promos.value = response;
  console.log(response);
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #aa9a9a;
  overflow: auto;
}
.page {
  width: 100%;
  height: 100%;
  .block {
    .chairman-img {
      object-position: top;
    }
    &:nth-child(2) {
      background-color: #e5e5e5;
    }
    &:nth-child(3) {
      background-color: white;
    }
    &:nth-child(4) {
      background-color: #e5e5e5;
    }
    &:nth-child(5) {
      background-color: white;
    }
    &:nth-child(6) {
      background-color: #e5e5e5;
    }
  }
}
</style>
