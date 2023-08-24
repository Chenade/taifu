<template>
  <section class="py-5 border-bottom" id="company">
    <div class="container my-5">
      <div class="row">
        <div class="col-md-4">
          <nav class="company-title navbar navbar-light bg-light p-3 rounded">
            <a class="navbar-brand" href="#company">企業、學術機構參訪</a>
            <nav class="nav-block nav nav-pills">
              <a
                class="nav-link"
                v-for="(_, year) of companyObj"
                @click="selectYear = year"
                href="#!"
                :key="year"
              >
                {{ year }}
              </a>
            </nav>
          </nav>
        </div>
        <div class="col-md-8">
          <div
            class="company-content"
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            tabindex="0"
          >
            <section
              v-for="record of recordList"
              class="company-items pb-3 mb-4 border-bottom border-secondary"
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
const selectYear = ref(2021);

function imgUrl(src) {
  return ('/public/Image/' + src);
  // return new URL(`../../assets/img/${src}`, import.meta.url).href;
}


const companyObj = ref({
  2021: [
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2021/03/04 理律法律事務所',
      foreword: [
        '',
      ],
      content: [
        '',
      ],
      end: '',
      image: [imgUrl('00552762-bc12-4d69-b00a-ce713de629ac.jpg'),imgUrl('460c5253-0439-4654-82de-925675f88bf4.jpg'),],
    },
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2021/11/11 大同公司',
      foreword: [
        '',
      ],
      content: [
        '',
      ],
      end: '',
      image: [imgUrl('25782fee-dda3-41d5-8c10-4d4fd1e5b16d.jpg'),imgUrl('3156484a-ba6d-4cd3-947c-2cb0cd6ecdea.jpg'),],
    },
  ],
});

const recordList = computed(() => {
  return companyObj.value[selectYear.value];
});

function toDate() {
  return proxy.dayjs(1651118400000).format('MM/DD');
}
</script>

<style lang="scss" scoped>
$height: calc(80vh);
#company {
  background: darken($color: #fff, $amount: 5);
  .row {
    .company-title {
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
    .company-content {
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
      .company-items {
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
