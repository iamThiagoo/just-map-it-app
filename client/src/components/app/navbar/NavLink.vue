<template>
  <RouterLink
    v-if="!externalLink"
    :to="to"
    class="text-sm font-medium transition-all hover:text-sky-600 duration-200 ease-in on-click"
  >
    {{ label }}
  </RouterLink>

  <a v-else
    :href="externalLink"
    target="_blank"
    rel="noopener noreferrer"
    class="text-sm font-medium transition-all hover:text-sky-600 duration-200 ease-in on-click"
  >
    {{ label }}
  </a>
</template>

<script setup lang="ts">

defineProps({
  to: {
    type: String,
    required: true,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  externalLink: {
    type: String,
    required: false
  }
})

</script>