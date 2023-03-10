<template>
  <div>
    <router-view v-slot="{ Component }">
      <suspense>
        <div>
          <component :is="Component"></component>
        </div>
      </suspense>
    </router-view>
  </div>
</template>
<script setup>
</script>
