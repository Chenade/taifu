<template>
  <section id="signup" class="pt-4">
    <div class="container">
      <form class="form row g-3" ref="form">
        <legend>登入</legend>
        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">帳號</span>
            <input type="text" v-model.trim="account" class="form-control" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">密碼</span>
            <input
              type="password"
              v-model.trim="password"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-12">
          <button
            type="button"
            @click="send"
            class="send-btn btn btn-primary border-danger"
          >
            送出
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const account = ref('');
const password = ref('');

const Axios = axios.create({
  baseURL: '/api',
});

function send() {
  Axios.post('/login', { account: account.value, password: password.value })
    .then((response) => {
      const { data } = response;
      const { success, message } = data;
      if (!success) return;
      localStorage.setItem('token', message);
      alert('Log in successed');
    })
    .catch((err) => {
      alert(err);
    });
}
</script>

<style lang="scss" scoped></style>
