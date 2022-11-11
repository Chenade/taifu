<template>
  <div class="container">
    <div class="introduce-box">
      <div class="introduce-content">
        <h5 class="text-title">{{ $t('origin.header') }}</h5>
        <div class="text-content">
          <div class="flex-list flex-right">
            <div class="flex-img">
              <img src="@/assets/img/緣起.jpg" alt="緣起" />
            </div>
            <span class="flex-text">{{ $t('origin.content[0]') }}</span>
          </div>

          <div class="flex-list flex-left">
            <div class="flex-img">
              <img src="@/assets/img/temp.png" alt="緣起" />
            </div>
            <span class="flex-text">{{ $t('origin.content[1]') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.introduce-box {
  display: grid;
  padding: 20px 0;
  @include Small() {
    padding: 30px 5px;
  }
  .introduce-content {
    @include flexCenter;
    flex-direction: column;
    padding: 20px 0;
    gap: 20px;
    @include Large() {
      padding: 20px 0;
    }
    @include Small() {
      padding: 5px 0;
    }
    .text-title {
      font-weight: 700;
      text-align: center;
      font-size: 32px;
    }
    .text-content {
      display: flex;
      flex-direction: column;
      row-gap: 40px;
      @include Small() {
        font-size: 14px;
      }
      .flex-list {
        display: flex;
        column-gap: 20px;
        height: 280px;
        @include Medium() {
          height: auto;
          flex-direction: column !important;
        }
        :nth-child(1) {
          flex: 4 1;
        }
        :nth-child(2) {
          padding-top: 30px;
          @include Small() {
            padding-top: 10px;
          }
          flex: 6 1;
        }
        &.flex-left {
          flex-direction: row-reverse;
        }
        .flex-img {
          img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .flex-text {
          font-size: 16px;
          line-height: 2rem;
          text-indent: 2rem;
          @include Small() {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
