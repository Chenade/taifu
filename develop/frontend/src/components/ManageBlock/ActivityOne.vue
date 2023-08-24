<template>
  <section>
    <div class="container">
      <form
        class="form row g-3 m-0"
        v-for="(data, index) of dataList"
        :key="data.id"
      >
        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">標題</span>
            <input type="text" v-model="data.title" class="form-control" />
          </div>
        </div>

        <div class="col-md-12">
          <div class="btn-group" role="group">
            <button
              type="button"
              class="btn btn-success"
              @click="addContent(index)"
            >
              +
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="data.content.pop()"
            >
              –
            </button>
          </div>
        </div>

        <div class="col-md-12">
          <ActivityContent
            v-for="(content, index) of data.content"
            :title="'段落' + (index + 1)"
            v-model:inputText="data.content[index]"
            :key="index"
          />
        </div>

        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">現在時間</span>
            <input type="number" v-model="data.ts" class="form-control" />
          </div>
        </div>

        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">排序</span>
            <input type="number" v-model="data.ord" class="form-control" />
          </div>
        </div>

        <div class="col-md-12">
          <div class="input-group mb-3">
            <span class="input-group-text">圖片</span>
            <input
              type="file"
              accept="image/*"
              class="form-control image"
              multiple
              :ref="
                (el) => {
                  imageList[data.id] = el;
                }
              "
            />
          </div>
        </div>

        <div class="col-3" v-for="src of data.image" :key="src">
          <div class="card text-dark bg-light mb-3">
            <div class="card-header text-end">
              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click="deleteImage(data.id, src)"
              >
                X
              </button>
            </div>
            <div class="card-body">
              <ImageComponent :src="src" />
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
import ActivityContent from './ActivityContent.vue';
import ImageComponent from '../ImageComponent.vue';
const { proxy } = getCurrentInstance();

const dataList = ref([]);
const imageList = ref([]);
const chapters = 'activity';

function addContent(index) {
  dataList.value[index].content.push({
    format: '',
    content: '',
  });
}

function init() {
  proxy.api.get(`/${chapters}/list/cat/1`).then((response) => {
    dataList.value = response;
    for (const data of dataList.value) {
      data.image = data.image.split(';').filter((src) => src);
    }
  });
}

init();

function update(id) {
  const data = dataList.value.find((data) => data.id === id);
  const deepCopy = JSON.parse(JSON.stringify(data));
  deepCopy.content = JSON.stringify(deepCopy.content);
  proxy.manage.put(`/${chapters}/${id}`, deepCopy);
  postImage(id);
}

async function postImage(id) {
  const images = imageList.value[id].files;
  if (!images.length) return;
  for (const img of images) {
    const data = new FormData();
    data.append('image', img);
    try {
      await proxy.manage.post(`/${chapters}/${id}/store-image`, data);
    } catch (error) {
      console.log(error);
    }
  }
  init();
}

async function remove(id) {
  if (!confirm('確認刪除?')) return;
  const token = localStorage.getItem('token');
  await proxy.manage.delete(`/${chapters}/${id}/${token}`);
  init();
}

async function deleteImage(id, fileName) {
  if (!confirm('確認刪除?')) return;
  const body = {
    filename: fileName,
  };
  await proxy.manage.post(`/${chapters}/${id}/delete-image`, body);
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
