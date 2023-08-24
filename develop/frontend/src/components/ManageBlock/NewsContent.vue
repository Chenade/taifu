<template>
  <label class="form-label">{{ title }}</label>
  <div class="input-group mb-3">
    <span class="input-group-text">標題</span>
    <input type="text" v-model="header" @input="emitVal" class="form-control" />
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text">內文</span>
    <textarea
      class="form-control"
      v-model="content"
      @input="emitVal"
      rows="4"
    ></textarea>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits(['update:inputText']);

const prop = defineProps({
  title: {
    type: String,
    required: true,
  },
  inputText: {
    type: Object,
    required: true,
  },
});
const title = ref(prop.title);
const header = ref(prop.inputText.title);
const content = ref(prop.inputText.content.replaceAll('$?', '\n'));

function emitVal() {
  const val = {
    title: header.value,
    content: content.value.replaceAll('\n', '$?'),
  };
  emit('update:inputText', val);
}
</script>

<style lang="scss" scoped></style>
