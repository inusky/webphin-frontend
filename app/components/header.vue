<template>
  <header class="header">
    <div class="header_part1">
      <!-- Header title -->
      <NuxtLink to="/">
        <div class="title">
          <div class="logo">
            <img src="#" alt="Logo" />
          </div>
          <div class="name">
            <h1>Webphin</h1>
          </div>
        </div>
      </NuxtLink>
      <!-- Header NAV -->
      <nav class="navbar">
        <ul>
          <li>
            <NuxtLink to="/email-campaigns">Email Campaigns</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/websites">Websites</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/backend-services">Backend Services/SaaS</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Header CTA -->
    <div class="cta">
      <NuxtLink to="#">
        <img src="#" alt="Search" />
      </NuxtLink>
      <NuxtLink to="#">
        <button class="log-in">Log in</button>
      </NuxtLink>
      <NuxtLink to="#">
        <button class="sign-up">Sign up</button>
      </NuxtLink>
    </div>
  </header>
</template>
