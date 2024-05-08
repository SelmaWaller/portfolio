<script setup lang="ts">
import Dropdown from "./Dropdown.vue";
</script>

<template>
  <div class="sidebar__intro">
    <div class="sidebar__intro--img">
      <NuxtLink to="/"></NuxtLink>
    </div>
    <div class="sidebar__intro--text">
      <p>
        Hi there, I'm Selma. Mother of two amazing boys, and the lucky wife of
        <a class="link" href="https://github.com/krijoh92" target="_blank"
          >Kristinn</a
        >. I work as a junior frontend developer and like being creative.
      </p>
      <div class="sidebar__dropdown mq-md">
        <Dropdown />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
