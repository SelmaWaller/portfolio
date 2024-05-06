<script setup lang="ts">
import ProjectCard from "~/src/components/global/ProjectCard.vue";
import projects from "~/data/web-apps.json";
</script>

<template>
  <div><ProjectCard :projects="projects.apps" /></div>
</template>
