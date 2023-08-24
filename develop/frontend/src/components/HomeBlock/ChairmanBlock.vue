<template>
  <div class="container pb-4">
    <div class="box-outside" :class="{ right: isRight }">
      <div class="box-inside">
        <div class="img-box">
          <slot name="image"></slot>
        </div>
        <div class="text-box">
          <h4 class="text-title">
            <slot name="title"></slot>
          </h4>
          <div class="text-content">
            <slot name="text"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  side: String,
});
const isRight = ref(props.side === 'right');
</script>

<style lang="scss">
.box-outside {
  $image-width: 400px;
  $image-height: 300px;
  $box-height: 400px;
  $text-width: 90%;
  padding: 80px 0 0 25px;
  @include Small() {
    padding-left: 0;
  }
  .box-inside {
    height: $box-height;
    @include Large() {
      height: auto;
    }
    .img-box {
      position: absolute;
      top: 0;
      left: 0;
      @include Large() {
        position: relative;
        top: 0;
      }
      img {
        z-index: 20;
        border-radius: 5px;
        width: $image-width;
        height: $image-height;
        object-fit: contain;
        background-color: lightgray;
        @include Large() {
          width: 100%;
        }
      }
    }
    .text-box {
      $image-width: 400px;
      $image-height: 300px;
      $box-height: 350px;
      $text-width: 90%;
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: 8px;
      background-color: #fff;
      padding-left: calc(#{$image-width} - (100% - #{$text-width}) + 20px);
      padding-top: calc(#{$box-height} - #{$image-height});
      padding-right: 20px;
      width: $text-width;
      min-height: 90%;
      @include Large() {
        position: relative;
        right: 0;
        padding: 20px;
        top: -10px;
      }
      .text-title {
        font-weight: 700;
        margin: 15px 0;
        @include Small() {
          font-size: 32px;
        }
      }
      .text-content {
        font-size: 16px;
        text-align: justify;
        color: #767676;
        line-height: 2rem;
        text-indent: 2rem;
        @include Small() {
          font-size: 14px;
        }
      }
    }
  }
  &.right {
    padding: 80px 25px 0 0;
    @include Small() {
      padding-right: 0;
    }
    .box-inside {
      .img-box {
        bottom: unset;
        left: unset;
        right: 0;
      }
      .text-box {
        top: unset;
        right: unset;
        left: 0;
        padding-left: 20px;
        padding-right: calc(#{$image-width} - (100% - #{$text-width}) + 20px);
        background-color: #e5e5e566;
        @include Large() {
          position: relative;
          padding: 20px;
          top: -10px;
          margin-left: auto;
        }
      }
    }
  }
}
</style>
