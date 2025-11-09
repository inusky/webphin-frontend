<template>
  <div class="header">
    <h2>Contact</h2>
  </div>
  <div class="content">
    <p>Please feel free to reach us via email or phone:</p>
    <ul>
      <li>
        <strong>Email: </strong>
        <NuxtLink to="mailto:user@example.com">user@example.com</NuxtLink>
      </li>
      <li>
        <strong>Phone: </strong>
        <NuxtLink to="/contact">+1-000-000-0000</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Webphin - Contact',
})
</script>
