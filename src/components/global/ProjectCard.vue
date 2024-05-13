<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps(["project"]);

const isHovering = ref(false);

const backgroundImage = computed(() => {
  return isHovering.value ? props.project.previewGif : props.project.previewImg;
});

function openProject(url: string) {
  window.open(url, "_blank");
}
</script>

<template>
  <div
    class="card__wrapper"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div class="card__preview">
      <div
        class="card__preview--img mq-lg"
        :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
      ></div>
      <div
        class="card__preview--img mq-md"
        :style="{ backgroundImage: 'url(' + project.previewGif + ')' }"
      ></div>
      <div class="hide-shadow"></div>
      <div class="corner-element"></div>
    </div>
    <div class="card__info">
      <h3>{{ project.title }}</h3>
      <p class="card__info--subheading">
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
      <p class="card__info--description">{{ project.description }}</p>
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
</template>
