<script setup lang="ts">
import projects from "~/data/web-apps.json";
import ProjectCardGrid from "~/src/components/global/ProjectCardGrid.vue";
</script>

<template>
  <div>
    <ProjectCardGrid :projects="projects.apps" />
  </div>
</template>
