<template>
  <header :class="{ active: drawer }">
    <div class="header-box">
      <div class="header-logo">
        <div class="drawer" @click="drawer = !drawer">
          <i
            class="q-icon notranslate material-icons"
            aria-hidden="true"
            role="img"
            >menu</i
          >
        </div>

        <router-link class="header-title" to="/">台灣台復新創學會</router-link>
      </div>

      <div class="header-content">
        <ul
          class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 router-list"
        >
          <li v-for="link of linkList" :key="link.url">
            <router-link :to="link.url" class="nav-link px-2 link-secondary">{{
              link.name
            }}</router-link>
          </li>
        </ul>
      </div>

      <div class="header-detail">
        <!-- <select class="form-select" v-model="$i18n.locale">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
            {{ $t(`lang.${locale}`) }}
          </option>
        </select> -->
      </div>
    </div>

    <div class="header-mobile" :class="{ active: drawer }">
      <div id="header">
        <div class="header-logo">
          <div class="drawer" @click="drawer = !drawer">
            <i
              class="q-icon notranslate material-icons"
              aria-hidden="true"
              role="img"
              >menu</i
            >
          </div>

          <span class="header-title">台灣台復新創學會</span>
        </div>
      </div>

      <ul
        class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 router-list"
      >
        <li v-for="link of linkList" :key="link.url">
          <router-link :to="link.url" class="nav-link px-2 link-secondary">{{
            link.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(false);
const linkList = ref([
  {
    name: '關於台復新創會',
    url: '/',
  },
  {
    name: '活動紀錄',
    url: '/active',
  },
  {
    name: '訊息公告',
    url: '/message',
  },
]);
</script>

<style lang="scss" scoped>
$header-height: 68px;
$padding-header: 8px;
@mixin headerLogo() {
  padding: 0 $padding-header;
  display: flex;
  min-height: $header-height;
  align-items: center;
  @include Medium() {
    width: 240px;
  }
  .drawer {
    min-width: 40px;
  }
  .header-title {
    font-family: 'Lekton';
    text-decoration: unset;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    @include Medium() {
      font-size: 20px;
    }
  }
}

header {
  padding: 0 $padding-header;
  top: 0;
  z-index: 2000;
  width: 100%;
  position: sticky;
  background-color: #aa9a9a;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  color: #fefdfb;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  .header-box {
    overflow: hidden;
    height: $header-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-logo {
      @include headerLogo;
      width: calc(240px - #{$padding-header}) !important;
    }
    .header-content {
      .router-list {
        flex-direction: row;
      }
      .router-link-exact-active::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: white;
      }
      @include Medium() {
        display: none;
      }
    }
    .header-detail {
      display: flex;
      justify-content: flex-end;
      width: calc(240px - #{$padding-header});
      @include Medium() {
        width: auto;
      }
      .form-select {
        cursor: pointer;
        display: inline-block;
        background-color: unset;
        border: unset;
        width: auto;
        option {
          background-color: black;
          border: unset;
        }
      }
    }
  }
  * {
    color: #fefdfb;
  }
  .header-mobile {
    position: absolute;
    top: 0;
    left: -240px;
    z-index: 1;
    background-color: darken(#aa9a9a, 5%);
    height: 100vh;
    width: 240px;
    overflow: hidden;
    transition: 300ms;
    @include Medium() {
      &.active {
        left: 0;
      }
    }
    #header {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      .header-logo {
        @include headerLogo;
      }
    }
    .router-list {
      flex-direction: column;
      margin-top: 15px;
      row-gap: 3px;
      font-size: 16px;
    }
  }
}
.drawer {
  cursor: pointer;
  font-size: 32px;
  display: none;
  @include Medium() {
    display: block;
  }
}
.nav-link:hover {
  color: darken(#fefdfb, 10%);
}
</style>
