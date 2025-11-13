<template>
  <Header></Header>
  <TopSection></TopSection>
  <MidSection></MidSection>
  <BotSection></BotSection>
  <Footer></Footer>
</template>

<script setup lang="ts">
import BotSection from '~/components/index-page/bot-section.vue'
import MidSection from '~/components/index-page/mid-section.vue'
import TopSection from '~/components/index-page/top-section.vue'

useHead({
  title: 'Webphin - Home',
})
</script>
