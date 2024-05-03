<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Moon from "../svg/Moon.vue";
import Sun from "../svg/Sun.vue";

const props = defineProps({
  modelValue: Boolean,
});

const emits = defineEmits(["update:modelValue"]);

function toggleTheme() {
  emits("update:modelValue", !props.modelValue);
}
</script>

<template>
  <button
    type="button"
    class="switch"
    :class="{ 'dark-mode': !props.modelValue }"
    @click="toggleTheme"
  >
    <span><Moon :color="props.modelValue ? '#3e4b5f' : '#f5f7fa'" /></span>
    <div class="switch__handle"></div>
    <span><Sun /></span>
  </button>
</template>
