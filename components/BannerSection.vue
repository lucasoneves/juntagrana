<template>
  <div class="banner-section xs:py-5 md:py-16">
    <Container>
      <h2 class="mb-2 mt-0 text-3xl md:text-5xl font-medium leading-tight text-success-50">
        {{ title }}
      </h2>
    </Container>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String
})
</script>

<style scoped lang="scss">
.banner-section {
  background: linear-gradient(to bottom right, #3c40c6, #575fcf);
}
</style>