<template>
  <div style="height: 50vh; width: 50%">
    <VueFlow
      v-model:nodes="nodes"
      v-model:edges="edges"
      fit-view-on-init
      class="vue-flow-basic-example"
      :default-zoom="1"
      :min-zoom="0.2"
      :max-zoom="2"
    >
      <Background pattern-color="#aaa" :gap="8" />
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { VueFlow, useVueFlow, type Node, type Edge } from '@vue-flow/core'
import CustomNode from '@/components/app/nodes/CustomNode.vue'
import CustomEdge from '@/components/app/edges/CustomEdge.vue'
import flowData from '@/mocks/output'

const { onConnect, addEdges } = useVueFlow()

const nodes = ref<Node[]>(
  flowData.nodes.map(node => ({
    ...node,
    type: 'custom'
  }))
)

const edges = ref<Edge[]>(
  flowData.edges.map(edge => ({
    ...edge,
    id: `e${edge.source}-${edge.target}`,
    type: 'custom'
  }))
)

onConnect((params) => {
  addEdges([params])
})
</script>