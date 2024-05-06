<script setup lang="ts">
import ProjectCard from "~/src/components/global/ProjectCard.vue";
import projects from "~/data/figma.json";
</script>

<template>
  <div><ProjectCard :projects="projects.projects" /></div>
</template>
