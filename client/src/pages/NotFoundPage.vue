<template>
  <div class="flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-primary">404</h1>
      <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Page not found</h2>
      <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
      <div class="mt-5 flex items-center justify-center gap-x-6">
        <router-link
          to="/"
          class="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
        >
          Go back home
        </router-link>
        <a href="#" class="text-sm font-semibold text-gray-900 hover:opacity-90" @click.prevent="goBack">
          Go back <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<style lang="css" scoped>
/* You can add custom styles here if needed */
:root {
  --color-primary: #f56565; /* Default to a red color for the 404 page */
}

.text-primary {
  color: var(--color-primary);
}

.bg-primary {
  background-color: var(--color-primary);
}

.hover\:bg-primary\/90:hover {
  background-color: color-mix(in srgb, var(--color-primary) 90%, transparent);
}

.focus-visible\:outline-primary:focus-visible {
  outline-color: var(--color-primary);
}
</style>