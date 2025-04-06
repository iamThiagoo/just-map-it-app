
<template>
  <div class="min-h-screen mx-auto bg-white text-foreground">
    <Header />

    <!-- Main Content -->
    <main>
      <div class="container mx-auto px-4 flex justify-center items-center" style="min-height: calc(100vh - 8.5rem);">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/app/footer/Footer.vue';
import Header from '@/components/app/header/Header.vue';
</script>