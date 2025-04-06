<template>
  <section class="h-full flex flex-col w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Section -->
        <div class="space-y-6">
          <div class="flex flex-col space-y-1.5">
            <h2 class="text-2xl font-semibold tracking-tight">Create Your Mental Map</h2>
            <p class="text-sm text-muted-foreground">Enter your ideas or upload a file to generate a visual mental map.</p>
          </div>
          
          <!-- Text input -->
          <div class="space-y-2">
            <label for="map-content" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Enter your ideas/text
            </label>
            <textarea
              id="map-content"
              v-model="mapContent"
              rows="10"
              class="flex min-h-[180px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder=""
            ></textarea>
          </div>
          
          <!-- File upload -->
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Or upload a file
            </label>
            <div 
              class="border-2 border-dashed border-gray-700 rounded-lg px-6 py-11 text-center transition-colors hover:border-sky-600/80"
              :class="{ 'border-sky-600 bg-sky-600/50': isDragging }"
              @dragover.prevent="isDragging = true"
              @dragleave.prevent="isDragging = false"
              @drop.prevent="onFileDrop"
            >
              <div class="flex flex-col items-center gap-2">
                <div class="rounded-full bg-sky-600/30 p-3">
                  <v-icon name="md-fileupload-outlined" class="size-6 text-sky-600" />
                </div>
                <div class="text-sm text-muted-foreground">
                  <label for="file-upload" class="relative cursor-pointer text-sky-600 text-primary underline-offset-4 hover:underline">
                    <span>Choose a file</span>
                    <input 
                      id="file-upload" 
                      type="file" 
                      class="sr-only" 
                      accept=".txt,.md,.csv, .pdf, .docx, .pptx"
                      @change="onFileChange"
                    />
                  </label>
                  <span> or drag and drop</span>
                </div>
                <p class="text-xs text-muted-foreground">
                  TXT, MD, CSV up to 10MB
                </p>
              </div>
              <div v-if="selectedFile" class="mt-4 flex items-center justify-center gap-2 text-sm">
                <FileIcon class="size-4" />
                <!-- <span>{{ selectedFile.name }}</span> -->
                <button @click.prevent="removeFile" class="rounded-full bg-muted p-1 hover:bg-muted-foreground/10">
                  <XIcon class="size-3" />
                </button>
              </div>
            </div>
          </div>

          <!-- Action buttons -->
          <div class="flex justify-end gap-2">
            <button 
            @click="clearAll" 
              class="cursor-pointer on-click inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input h-9 px-4 py-2"
            >
              Clear
            </button>
            <button 
              class="bg-sky-600 cursor-pointer text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 on-click"
            >
              Generate Map
            </button>
          </div>
        </div>

        <!-- Right section -->
        <div class="space-y-6">
          <div class="flex flex-col space-y-1.5">
            <h2 class="text-2xl font-semibold tracking-tight">Mental Map Preview</h2>
            <p class="text-sm text-muted-foreground">Visualize your ideas in a hierarchical structure.</p>
          </div>
          
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="p-6">
              <div v-if="!mapGenerated" class="flex flex-col items-center justify-center h-[450px] text-center">
                <div class="rounded-full bg-sky-600/30 p-2 mb-4">
                  <v-icon name="la-brain-solid" class="size-12 pt-0.5 text-sky-600" />
                </div>
                <p class="text-lg font-medium">Your mental map will appear here</p>
                <p class="text-sm text-muted-foreground mt-2 max-w-md">Enter your ideas or upload a file and click "Generate Map" to visualize your thoughts</p>
              </div>
              
              <div v-else class="h-[450px] overflow-auto pr-2">
                
              </div>
            </div>
            <div class="flex items-center justify-between p-4 border-t">
              <p class="text-xs text-muted-foreground font-bold">
                {{ mapGenerated ? 'Mental map generated successfully' : 'No mental map generated yet' }}
              </p>
              <div class="flex gap-2">
                <button 
                  v-if="mapGenerated"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                >
                  <DownloadIcon class="size-3.5 mr-2" />
                  Export
                </button>
                <button 
                  v-if="mapGenerated"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                >
                  <ShareIcon class="size-3.5 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const mapContent = ref('');
const selectedFile = ref(null);
const isDragging = ref(false);
const mapGenerated = ref(false);
const parsedMapData = ref([]);

const clearAll = () => {
  mapContent.value = '';
  selectedFile.value = null;
  mapGenerated.value = false;
  parsedMapData.value = [];
};

const onFileChange = (event : any) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
    readFileContent(file);
  }
};

const onFileDrop = (event : any) => {
  isDragging.value = false;
  const file = event.dataTransfer.files[0];
  if (file) {
    selectedFile.value = file;
    readFileContent(file);
  }
};

const readFileContent = (file : any) => {
  const reader = new FileReader();
  reader.onload = (e : any) => {
    mapContent.value = e.target.result;
  };
  reader.readAsText(file);
};

const removeFile = () => {
  selectedFile.value = null;
};

</script>