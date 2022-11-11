<template>
  <section id="board-leader">
    <div class="container">
      <form class="form row g-3">
        <legend>理事長｜楊大德</legend>

        <div class="col-md-12">
          <label class="form-label">內容</label>
          <textarea
            class="form-control"
            v-model="data.content"
            rows="8"
            placeholder="Content"
          ></textarea>
        </div>

        <div class="col-md-12">
          <label class="form-label">圖片</label>
          <input
            class="form-control"
            ref="image"
            type="file"
            accept="image/*"
          />
        </div>

        <div class="col-3" v-if="data.image">
          <div class="card text-dark bg-light mb-3">
            <div class="card-body">
              <ImageComponent :src="data.image" :key="data.image" />
            </div>
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
import { getCurrentInstance, ref } from 'vue';
import ImageComponent from '../../components/ImageComponent.vue';

const { proxy } = getCurrentInstance();
const data = ref({});
const image = ref(null);

init();

function init() {
  proxy.api.get('/board/leader').then((response) => {
    data.value = response;
  });
}

async function postImage() {
  const img = image.value.files[0];
  if (img === undefined) return;
  const imageForm = new FormData();
  imageForm.append('image', img);
  await proxy.manage.post('/board/1/store-image', imageForm);
  init();
}

function send() {
  proxy.manage.put('/board/leader', { content: data.value.content });

  postImage();
}
</script>

<style lang="scss" scoped>
#board-leader {
  background-color: var(--background-color-4);
  .form {
    padding: 4rem 0;
    .send-btn {
      background-color: var(--background-color-1);
    }
  }
}
</style>
