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
    default: "#fff",
  },
});
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.28822 5.2013C2.94953 5.2013 0.61084 3.33035 0.61084 0.523926V5.2013H5.28822Z"
      :fill="color"
    />
  </svg>
</template>
