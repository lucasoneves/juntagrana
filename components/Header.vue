<template>
  <!-- Main navigation container -->
  <header
    class="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-5 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start p-4">
    <div class="flex w-full flex-wrap items-center justify-between px-3">

      <h2>junta grana</h2>

      <nav class="flex justify-center gap-20 items-center">
        <ul class="flex gap-10">
          <NuxtLink to="/">
            Meus Desafios
          </NuxtLink>
          <NuxtLink to="/new-challenge">
            Criar desafio
          </NuxtLink>
          <NuxtLink to="/contact">
            Contato
            </NuxtLink>
        </ul>
        <Avatar />
      </nav>
      

    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped></style>
