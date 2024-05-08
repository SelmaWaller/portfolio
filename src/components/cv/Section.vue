<script setup lang="ts">
defineProps({
  title: String,
  bodyContent: Boolean,
});
</script>

<template>
  <div class="section">
    <div v-show="bodyContent" class="section__divider"></div>
    <h3>{{ title }}</h3>
    <div class="heading-element"></div>
    <div class="section__content">
      <slot></slot>
    </div>
  </div>
</template>
