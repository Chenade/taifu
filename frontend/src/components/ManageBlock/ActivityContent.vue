<template>
  <label class="form-label">{{ title }}</label>
  <div class="input-group mb-3">
    <span class="input-group-text">樣式</span>
    <select v-model="format" @change="emitVal" class="form-control">
      <option value="normal" selected>一般</option>
      <option value="b">粗體</option>
      <option value="i">斜體</option>
      <option value="u">底線</option>
      <option value="s">刪除線</option>
    </select>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text">內文</span>
    <component class="style" :is="format">
      <textarea
        class="form-control"
        v-model="content"
        @input="emitVal"
        rows="4"
      ></textarea>
    </component>
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
const format = ref(prop.inputText.format || 'normal');
const content = ref(prop.inputText.content.replaceAll('$?', '\n'));

function emitVal() {
  const val = {
    format: format.value,
    content: content.value.replaceAll('\n', '$?'),
  };
  emit('update:inputText', val);
}
</script>

<style lang="scss" scoped>
.style {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
</style>
