<template>
    <router-view v-slot="{ Component }">
      <suspense>
        <component :is="Component"></component>
      </suspense>
    </router-view>
</template>
<script setup>

</script>
<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>