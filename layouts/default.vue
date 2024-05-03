<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import Info from "~/src/components/sidebar/Info.vue";
import Links from "~/src/components/sidebar/Links.vue";
import Switch from "~/src/components/sidebar/Switch.vue";

const isLightMode = ref(true);

onMounted(() => {
  watch(
    isLightMode,
    (newValue) => {
      if (newValue) {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
      } else {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      }
    },
    { immediate: true }
  );
});
</script>
<template>
  <div class="layout">
    <div class="sidebar">
      <Info />
      <Links :color="isLightMode ? '#3e4b5f' : '#f5f7fa'" />
      <Switch v-model="isLightMode" />
    </div>
    <main class="content">
      <slot />
    </main>
  </div>
</template>
