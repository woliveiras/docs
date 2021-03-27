export function getRaguVueComponent(url) {
  return `<template>
    <RaguComponent src="${url}" />
</template>

<script>
import RaguComponent from 'ragu-client-vue';

export default {
  name: 'App',
  components: {
    RaguComponent
  }
}
</script>`;
}
