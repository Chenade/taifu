<template>
  <section class="py-5 border-bottom" id="member">
    <div class="container my-5">
      <div class="row">
        <div class="col-md-4">
          <nav class="member-title navbar navbar-light bg-light p-3 rounded">
            <a class="navbar-brand" href="#member">會員大會 / 新創論壇</a>
            <nav class="nav-block nav nav-pills">
              <a
                class="nav-link"
                v-for="(_, year) of memberObj"
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
            class="member-content"
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            tabindex="0"
          >
            <section
              v-for="record of recordList"
              class="member-items pb-3 mb-4 border-bottom border-secondary"
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
                  class="col-md-6 col-sm-12"
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
  // return new URL(`/public/Image/${src}`, import.meta.url).href;
  // return new URL(`../../../public/public/Image/${src}`, import.meta.url).href;
}

const memberObj = ref({
  2022: [
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/1/12年度會員大會',
      foreword: [
        '台復新創會首席顧問家聲教授心得-',
        '選擇加入什麼樣的社群及結交什麼樣的朋友，比個人勤奮打拼追求成功更為重要！～台復會是科技及知識的社群終身學習平台！',
        '感謝台復會廖永源會長持續打造台復會成為台大EMBA一個創新創業的社群交流學習平台，並透過與各國在台經貿使節建立國際合作及拓展的平台，協助台灣企業拓展國際市場。在年度會員大會裡，除了國發會龔明鑫主委、工業局呂正華局長、商總理事長許舒博之外，還有近十個國家經貿官員的出席參與，盛況空前。',
      ],
      content: [
        '感謝前兩屆理事會及幹部等的經營，在永源會長的帶領下，每個月舉辦一次分享會，還有不定期的企業參訪，這已經種下了台復會獨特的組織文化基因：傳承著許多美好價值觀：透過服務他人，從中學習成長；重視利他的思維；共同學習、無私分享；走出台大的圈子，與社會各界，包含了北中南部大學、各種產業協會合作，推薦我們傑出學長積極參與前述的活動，嘉惠年輕學子，也透過與各產業協會的合作，進行跨業、跨域、多元化的合作，也讓我們認識各種不同產業的狀況及未來可能的合作，這種跨業合作代表了新時代的產業特色：行業、產業的無疆界化！商業模式的持續創新，打破傳統各行業的規則，也就是讓我們看到無窮的創新發展商機！',
        '這是我多年來伴隨永源會長的見學心得。相信永源會長打造的這種價值基因已經在社群裡鑄印了！而新任理事長楊大德，也是持續多年服務台復會擔任執行長，無限付出，經常也分享學霸級的點評；文海執行長也是持續分享及擔任講評的學霸！我們社群裡多是社會菁英、學霸級的人物，他們代表著時代成功的典範，在台復會社群裡，學霸級的挑戰，讓我們成為社會具有重大影響力的群體。因為我們相信：選擇什麼樣的朋友，選擇了什麼樣的社群，加入並結合這樣的一群人，成功或有意義的人生就是我們每日的生活。',
      ],
      end: '這是我多年來伴隨永源會長的見學心得。相信永源會長打造的這種價值基因已經在社群裡鑄印了！而新任理事長楊大德，也是持續多年服務台復會擔任執行長，無限付出，經常也分享學霸級的點評；文海執行長也是持續分享及擔任講評的學霸！我們社群裡多是社會菁英、學霸級的人物，他們代表著時代成功的典範，在台復會社群裡，學霸級的挑戰，讓我們成為社會具有重大影響力的群體。因為我們相信：選擇什麼樣的朋友，選擇了什麼樣的社群，加入並結合這樣的一群人，成功或有意義的人生就是我們每日的生活。',
      image: [imgUrl('7443ac5f-46b5-41c4-88f6-850b79c38d89.jpg'), imgUrl('fa09206f-f026-46a1-b8f3-231da1a19095.jpg'), imgUrl('a6a24cfd-0625-4675-8a11-665395f8c24e.jpg ')],
    },
  ],
});

const recordList = computed(() => {
  return memberObj.value[selectYear.value];
});

function toDate() {
  return proxy.dayjs(1651118400000).format('MM/DD');
}
</script>

<style lang="scss" scoped>
$height: calc(80vh);
#member {
  background: darken($color: #fff, $amount: 5);
  .row {
    .member-title {
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
    .member-content {
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
      .member-items {
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
