<template>
  <div class="main">
    <div class="line">
      <div class="box">
        <span class="text">404</span>
        <span class="text">NOT FOUND</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.main {
  background-color: rgba(26, 32, 44, 1);
  width: 100%;
  height: 100vh;
  @include flexCenter;
  .line {
    width: 100%;
    @include flexCenter;
    .box {
      @include flexCenter;
      .text {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
        letter-spacing: 0.05em;
        color: var(--color-light-1);
        font-size: 1.25rem;
        padding: 0 1rem;
        &:first-child {
          background-color: var(--background-color-1);
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
