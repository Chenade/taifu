<template>
  <section>
    <div class="container">
      <form class="form row g-3 m-0" v-for="data of dataList" :key="data.id">
        <div class="col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-text">職稱</span>
            <input type="text" v-model="data.role" class="form-control" />
          </div>
        </div>

        <div class="col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-text">名稱</span>
            <input type="text" v-model="data.name" class="form-control" />
          </div>
        </div>

        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">標題</span>
            <input type="text" v-model="data.title" class="form-control" />
          </div>
        </div>

        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">圖片</span>
            <input
              type="file"
              accept="image/*"
              class="form-control image"
              :ref="
                (el) => {
                  imageList[data.id] = el;
                }
              "
            />
          </div>
        </div>

        <div class="col-3" v-if="data.image">
          <div class="card text-dark bg-light mb-3">
            <div class="card-body">
              <ImageComponent :src="data.image" :key="data.image" />
            </div>
          </div>
        </div>

        <div class="col-12 pb-3">
          <div class="btn-group" role="group">
            <button
              type="button"
              @click="update(data.id)"
              class="send-btn btn btn-primary"
            >
              修改
            </button>
            <button
              type="button"
              @click="remove(data.id)"
              class="send-btn btn btn-danger"
            >
              刪除
            </button>
          </div>
        </div>
        <hr class="border border-secondary" />
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import ImageComponent from '../ImageComponent.vue';
const { proxy } = getCurrentInstance();

const dataList = ref([]);
const imageList = ref([]);
const chapters = 'teams';

function init() {
  proxy.api.get(`/${chapters}/list`).then((response) => {
    dataList.value = response;
  });
}

init();

function update(id) {
  const data = dataList.value.find((data) => data.id === id);
  const deepCopy = JSON.parse(JSON.stringify(data));
  proxy.manage.put(`/${chapters}/${id}`, deepCopy);
  postImage(id);
}

async function postImage(id) {
  const image = imageList.value[id].files[0];
  if (!image) return;
  const data = new FormData();
  data.append('image', image);
  await proxy.manage.post(`/${chapters}/${id}/store-image`, data);
  init();
}

async function remove(id) {
  if (!confirm('確認刪除?')) return;
  const token = localStorage.getItem('token');
  await proxy.manage.delete(`/${chapters}/${id}/${token}`);
  init();
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
