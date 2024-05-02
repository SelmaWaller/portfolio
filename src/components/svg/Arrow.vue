<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 18,
  },
  height: {
    type: Number,
    default: 18,
  },
  color: {
    type: String,
    default: "#f5f7fa",
  },
});
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.36377 4L12.7277 10.364L6.36377 16.7279"
      :stroke="color"
      stroke-width="1.17"
    />
  </svg>
</template>
