<script setup lang="ts">
import ProjectCardElement from "../svg/ProjectCardElement.vue";

const project = {
  heading: "Project X",
  subheading: "2021",
  subheadingLink: "#",
  subheadingLinkText: "hobby project",
  preview: "url(https://picsum.photos/200/300)",
  description: "Redesign av sikkerhetsdistributoren.no",
  buttonText: "Open in Figma",
  projectUrl: "https://figma.com",
};

const openProject = (url: string) => {
  window.open(url, "_blank");
};
</script>

<template>
  <div class="card">
    <div class="card__preview">
      <div
        class="card__preview--img"
        :style="{ backgroundImage: project.preview }"
      ></div>
      <div class="hide-shadow"></div>
    </div>
    <div class="card__info">
      <h4>{{ project.heading }}</h4>
      <p>
        {{ project.subheading }} -
        <a :href="project.subheadingLink" target="_blank">{{
          project.subheading
        }}</a>
      </p>
      <p>{{ project.description }}</p>
      <button class="button" @click="openProject(project.projectUrl)">
        {{ project.buttonText }}
      </button>
    </div>
  </div>
</template>
