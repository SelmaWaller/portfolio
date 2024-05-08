<script setup lang="ts">
defineProps(["projects"]);

const openProject = (url: string) => {
  window.open(url, "_blank");
};
</script>

<template>
  <div class="grid">
    <div class="card" v-for="(project, index) in projects" :key="index">
      <div class="card__preview">
        <div
          class="card__preview--img"
          :style="{ backgroundImage: 'url(' + project.preview + ')' }"
        ></div>
        <div class="hide-shadow"></div>
        <div class="corner-element"></div>
      </div>
      <div class="card__intro">
        <h3>{{ project.title }}</h3>
        <p class="card__intro--subheading">
          {{ project.subtitle }} -
          <a
            v-if="project.subtitleLink"
            class="link"
            :href="project.subtitleLink"
            target="_blank"
            >{{ project.subtitleLinkText }}</a
          >
          <span v-else>{{ project.subtitleNoLinkText }}</span>
        </p>
        <p class="card__intro--description">{{ project.description }}</p>
        <button
          v-if="project.projectUrl"
          class="button"
          @click="openProject(project.projectUrl)"
        >
          {{ project.buttonText }}
        </button>
        <button v-else class="button" disabled>{{ project.buttonText }}</button>
      </div>
    </div>
  </div>
</template>
