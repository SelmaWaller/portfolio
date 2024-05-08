<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import Info from "~/src/components/sidebar/Info.vue";
import DesktopMenu from "~/src/components/sidebar/DesktopMenu.vue";
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
  <!-- mobile -->
  <div class="layout mq-md">
    <div class="sidebar">
      <div class="sidebar__switch">
        <Switch v-model="isLightMode" />
      </div>
      <div>
        <Info />
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
  <!-- desktop -->
  <div class="layout mq-lg">
    <div class="sidebar">
      <Info />
      <DesktopMenu :color="isLightMode ? '#3e4b5f' : '#f5f7fa'" />
      <Switch v-model="isLightMode" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
