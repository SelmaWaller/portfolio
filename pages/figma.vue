<script setup lang="ts">
import projects from "~/data/figma.json";
import ProjectCardGrid from "~/src/components/global/ProjectCardGrid.vue";
</script>

<template>
  <div>
    <ProjectCardGrid :projects="projects.projects" />
  </div>
</template>
