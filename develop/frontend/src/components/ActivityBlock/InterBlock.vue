<template>
  <section class="py-5 border-bottom" id="inter">
    <div class="container my-5">
      <div class="row">
        <div class="col-md-4 order-md-2">
          <nav class="inter-title navbar navbar-light bg-light p-3 rounded">
            <a class="navbar-brand" href="#inter">外館拜訪、國際交流或其他</a>
            <nav class="nav-block nav nav-pills">
              <a
                class="nav-link"
                v-for="(_, year) of interObj"
                @click="selectYear = year"
                href="#!"
                :key="year"
              >
                {{ year }}
              </a>
            </nav>
          </nav>
        </div>
        <div class="col-md-8 order-md-1">
          <div
            class="inter-content"
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            tabindex="0"
          >
            <section
              v-for="record of recordList"
              class="inter-items pb-3 mb-4 border-bottom border-secondary"
              :key="record.timestamps"
            >
              <div class="items-title">
                <h5>{{ record.title }}</h5>
              </div>
              <div class="items-foreword mb-4">
                <p v-for="text of record.foreword" class="mb-2" :key="text">
                  {{ text }}
                </p>
              </div>
              <div class="items-content mb-4">
                <p v-for="text of record.content" class="mb-2" :key="text">
                  {{ text }}
                </p>
              </div>
              <div class="items-end">
                <span>{{ record.end }}</span>
              </div>
              <div class="items-img row">
                <img
                  class="col-md-12"
                  v-for="src of record.image"
                  :src="src"
                  :key="src"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, getCurrentInstance, computed } from 'vue';
const { proxy } = getCurrentInstance();
const selectYear = ref(2022);

function imgUrl(src) {
  return ('/public/Image/' + src);
  // return new URL(`../../assets/img/${src}`, import.meta.url).href;
}

const interObj = ref({
  2022: [
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/01/21 瓜地馬拉',
      foreword: [
        '',
      ],
      content: [
        '',
      ],
      end: '',
      image: [imgUrl('f845229b-deb8-47ea-8cf2-14e857847294.jpg'),],
    },
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/02/18 泰國',
      foreword: [
        '',
      ],
      content: [
        '',
      ],
      end: '',
      image: [imgUrl('8ee6c655-9c55-4fac-956d-42a267255eed.jpg'),],
    },
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/02/21 法國',
      foreword: [
        '',
      ],
      content: [
        '',
      ],
      end: '',
      image: [imgUrl('32c87ae2-5c8e-4ea4-b425-1a208123db9d.jpg'),imgUrl('32f179af-4962-47b0-aa56-ddd316c71b66.jpg'),],
    },
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/02/24 加拿大',
      foreword: [
        '',
      ],
      content: [
        '',
      ],
      end: '',
      image: [imgUrl('0a9678fa-5f28-43b0-94ca-8c436e37dc49.jpg'),],
    },
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/04/26 以色列',
      foreword: [
        '',
      ],
      content: [
        '',
      ],
      end: '',
      image: [imgUrl('6b373004-4da2-4447-9774-180999a2f1ee.jpg'),],
    },
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/05/24 邁阿密',
      foreword: [
        '',
      ],
      content: [
        '',
      ],
      end: '',
      image: [imgUrl('335ce411-099a-45a7-a137-d7636c863fb1.jpg'),],
    },
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/06/13 瓜地馬拉',
      foreword: [
        '',
      ],
      content: [
        '',
      ],
      end: '',
      image: [imgUrl('291b769e-fc8c-4448-943a-047496b9e099.jpg'),],
    },
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/06/14 宏都拉斯',
      foreword: [
        '',
      ],
      content: [
        '',
      ],
      end: '',
      image: [imgUrl('fac91b1d-b4a8-44e0-939f-02ccb567886e.jpg'),],
    },
  ],
});

const recordList = computed(() => {
  return interObj.value[selectYear.value];
});

function toDate() {
  return proxy.dayjs(1651118400000).format('MM/DD');
}
</script>

<style lang="scss" scoped>
$height: calc(80vh);
#inter {
  background: darken($color: #fff, $amount: 5);
  .row {
    .inter-title {
      height: $height;
      overflow: auto;
      @include Medium() {
        height: auto;
        .navbar-brand {
          top: 0;
          left: 0;
          position: sticky;
        }
        .nav-block {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
        }
      }
    }
    .inter-content {
      overflow: auto;
      overflow: auto;
      height: $height;
      font-size: 16px;
      text-align: justify;
      line-height: 1.3rem;
      padding: 12px;
      @include Small() {
        font-size: 14px;
      }
      .inter-items {
        &:last-child {
          border-bottom: 0 !important;
        }
        .items-img {
          row-gap: 10px;
          margin: 10px;
        }
      }
    }
  }
}
</style>
