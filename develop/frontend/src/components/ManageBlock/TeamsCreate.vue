<template>
  <section id="news-create">
    <div class="container">
      <form class="form row g-3 m-0" ref="form">
        <legend>新增</legend>

        <div class="col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-text">職稱</span>
            <input type="text" name="role" class="form-control" />
          </div>
        </div>

        <div class="col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-text">名稱</span>
            <input type="text" name="name" class="form-control" />
          </div>
        </div>

        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">標題</span>
            <input type="text" name="title" class="form-control" />
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
const { proxy } = getCurrentInstance();

const form = ref('form');

function send() {
  const data = new FormData(form.value);
  proxy.manage.post('/teams/create', data);
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
