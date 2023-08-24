<template>
  <div class="container q-pa-md">
    <q-carousel
      arrows
      animated
      control-color="white"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
      v-model="slide"
      height="450px"
      class="carousel"
    >
      <q-carousel-slide
        v-for="(team, index) of teamList"
        :name="index"
        :img-src="'/public/Image/' + team.image"
        :key="team.image"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h5">{{ team.role }}{{ team.name }}</div>
          <div class="text-subtitle1">{{ team.title }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const slide = ref(0);
const prop = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const teamList = ref(prop.data);
</script>

<style lang="sass" scoped>
.q-carousel__slide
  background-color: gray
  background-size: contain
  background-repeat: no-repeat
.carousel
  border-radius: 5px
  margin: 80px 0 60px 0
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
  padding-bottom: 45px
</style>
