<template>
  <div class="container">
    <div class="purpose-box">
      <div class="purpose-content">
        <h5 class="text-title">{{ $t('purposr.header') }}</h5>
        <div class="text-content">
          <div class="left-group">
            <p
              class="group-text"
              v-for="text of $i18n.messages[$i18n.locale].purposr.content
                .description"
              :key="text"
            >
              {{ text }}
            </p>
          </div>
          <div class="line"></div>
          <div class="right-group">
            <span class="list-group-title">{{
              $t('purposr.content.activity.header')
            }}</span>
            <ul class="list-group list-group-flush mb-2">
              <li
                class="list-group-item"
                v-for="text of $i18n.messages[$i18n.locale].purposr.content
                  .activity.content"
                :key="text"
              >
                {{ text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.purpose-box {
  display: grid;
  padding: 20px 0;
  @include Small() {
    padding: 30px 5px;
  }
  .purpose-content {
    @include flexCenter;
    flex-direction: column;
    padding: 20px 0;
    gap: 20px;
    p {
      text-align: justify;
      &:last-child {
        justify-self: end;
      }
    }
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
      display: grid;
      grid-template-columns: 1fr 1px 1fr;
      grid-auto-flow: column;
      column-gap: 40px;
      font-size: 16px;
      @include Small() {
        grid-template-columns: unset;
        grid-auto-flow: row;
        row-gap: 15px;
        font-size: 14px;
      }
      .group-text {
        line-height: 2rem;
        text-indent: 2rem;
      }
      .line {
        border-left: 1px solid rgba(0, 0, 0, 0.4);
      }
      .list-group-title {
        font-size: 18px;
        font-weight: 700 !important;
      }
    }
  }
}
</style>
