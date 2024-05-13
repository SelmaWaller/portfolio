<script setup lang="ts">
import { defineProps } from "vue";
import ProjectCard from "./ProjectCard.vue";

defineProps(["projects"]);
</script>

<template>
  <div class="grid">
    <div class="card" v-for="(project, index) in projects" :key="index">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>
