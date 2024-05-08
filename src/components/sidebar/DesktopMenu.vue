<script setup lang="ts">
import MenuItems from "../global/MenuItems.vue";

const props = defineProps({
  color: String,
  modelValue: Boolean,
});

const emits = defineEmits(["update:modelValue"]);
function toggleMenu() {
  emits("update:modelValue", !props.modelValue);
}
</script>

<template>
  <div class="menu__mq-lg" @click="toggleMenu">
    <MenuItems :color="color" />
  </div>
</template>
