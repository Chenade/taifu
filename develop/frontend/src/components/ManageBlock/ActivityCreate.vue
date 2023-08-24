<template>
  <section id="news-create">
    <div class="container">
      <form class="form row g-3 m-0" ref="form">
        <legend>新增</legend>
        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">類別</span>
            <select class="form-control" name="category">
              <option value="1">會員大會/新創論壇</option>
              <option value="2">每月分享會</option>
              <option value="3">企業、學術機構參訪</option>
              <option value="4">外館拜訪、國際交流或其他</option>
            </select>
          </div>
        </div>

        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">標題</span>
            <input type="text" name="title" class="form-control" />
          </div>
        </div>

        <div class="col-md-12">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-success" @click="addContent">
              +
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="contentList.pop()"
            >
              –
            </button>
          </div>
        </div>

        <div class="col-md-12">
          <ActivityContentVue
            v-for="(content, index) of contentList"
            :title="'段落' + (index + 1)"
            :key="index"
            v-model:inputText="contentList[index]"
          />
        </div>

        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">現在時間</span>
            <input
              type="number"
              name="ts"
              :value="NowTime"
              class="form-control"
            />
          </div>
        </div>

        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">排序</span>
            <input type="number" name="ord" value="1" class="form-control" />
          </div>
        </div>

        <div class="col-12">
          <button type="button" @click="send" class="send-btn btn btn-primary">
            送出
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import ActivityContentVue from './ActivityContent.vue';
const { proxy } = getCurrentInstance();

const contentList = ref([]);
const form = ref('form');
const NowTime = ref(Math.ceil(+new Date() / 1000));

addContent();
function addContent() {
  contentList.value.push({
    title: '',
    content: '',
  });
}

function send() {
  const data = new FormData(form.value);
  data.append('content', JSON.stringify(contentList.value));
  proxy.manage.post('/activity/create', data);
}
</script>

<style lang="scss" scoped>
#news-create {
  .form {
    padding: 2rem 0;
    .send-btn {
      background-color: var(--background-color-1);
    }
  }
}
</style>
