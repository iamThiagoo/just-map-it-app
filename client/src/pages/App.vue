<template>
  <main class="container mx-auto">
    <div
      class="border"
      style="height: 500px; width: 100%; margin-top: 200px; background: #1a192b"
    >
      <VueFlow
        v-model:nodes="nodes"
        v-model:edges="edges"
        fit-view-on-init
        :default-zoom="1.5"
        :min-zoom="0.1"
        :max-zoom="2"
      >
        <Background pattern-color="#aaa" :gap="10" />
        <MiniMap />
        <Controls />

        <template #node-custom="nodeProps">
          <CustomNode v-bind="nodeProps" />
        </template>

        <template #edge-custom="edgeProps">
          <CustomEdge v-bind="edgeProps" />
        </template>
      </VueFlow>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import { MiniMap } from '@vue-flow/minimap';
import { VueFlow, useVueFlow, type Node, type Edge } from '@vue-flow/core';
import CustomNode from '@/components/app/nodes/CustomNode.vue';
import CustomEdge from '@/components/app/edges/CustomEdge.vue';
import flowData from '@/mocks/output';

const { onConnect, addEdges } = useVueFlow();

const nodes = ref<Node[]>(
  flowData.nodes.map((node) => ({
    ...node,
    type: 'custom',
    data: {
      id: node.id,
      label: node.label,
      description: node.description,
    },
  }))
);

const edges = ref<Edge[]>(
  flowData.edges.map((edge) => ({
    source: edge.from,
    target: edge.to,
    id: `e${edge.from}-${edge.to}`,
  }))
);

onConnect((params) => {
  addEdges([params]);
});
</script>