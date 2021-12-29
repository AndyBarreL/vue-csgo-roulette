<template>
  <div>
    123
  </div>
</template>

<script>
export default {
  name: 'category-list',
  async mounted() {
    await this.$store.dispatch('marketplace/getMarketPlaceList', 730);
  }
}
</script>