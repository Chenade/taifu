<template>
  <section class="py-5 border-bottom">
    <div class="container my-5">
      <div class="row">
        <div class="col-md-4">
          <nav class="content-title navbar navbar-light bg-light p-3 rounded">
            <a class="navbar-brand">{{ title }}</a>
            <nav class="nav-block nav nav-pills">
              <button
                class="nav-link"
                v-for="year of Object.keys(dataObject).reverse()"
                @click="selectYear = year"
                :key="year"
              >
                {{ year }}
              </button>
            </nav>
          </nav>
        </div>
        <div class="col-md-8">
          <div
            class="content-content"
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            tabindex="0"
          >
            <section
              v-for="record of renderList"
              class="content-items pb-3 mb-4 border-bottom border-secondary"
              :key="record.id"
            >
              <div class="items-title">
                <h5>{{ record.title }}</h5>
              </div>
              <div class="items-content mb-4">
                <div
                  v-for="content of record.content"
                  class="mb-4"
                  :key="content.content"
                >
                  <component class="style" :is="content.format">
                    <p
                      class="mb-2"
                      v-for="(content, index) of content.content"
                      :key="content + index"
                    >
                      {{ content }}
                    </p>
                  </component>
                </div>
              </div>
              <div class="items-img row">
                <ImageComponent
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
import { ref, computed } from 'vue';
import ImageComponent from '../ImageComponent.vue';
const props = defineProps({
  title: String,
  data: Array,
});

function deep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const selectYear = ref(null);
const title = ref(props.title);
const dataObject = ref({});

for (const data of props.data) {
  const FullYear = new Date(data.ts * 1000).getFullYear();
  if (!dataObject.value.hasOwnProperty(FullYear))
    dataObject.value[FullYear] = [];
  const temp = deep(data);
  temp.image = temp.image.split(';');
  for (const content of temp.content) {
    content.content = content.content.split('$?');
  }
  dataObject.value[FullYear].push(temp);
  if (selectYear.value === null) selectYear.value = FullYear;
}

const renderList = computed(() => {
  return dataObject.value[selectYear.value];
});
</script>

<style lang="scss" scoped>
$height: calc(80vh);
.content-title {
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
.content-content {
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
  .content-items {
    &:last-child {
      border-bottom: 0 !important;
    }
    .item-content {
      font-size: 16px;
    }
    .items-img {
      row-gap: 10px;
      margin: 10px;
    }
  }
}
</style>
