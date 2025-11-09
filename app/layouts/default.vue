<template class="poppins-regular">
  <div>
    <div class="header-container-parent">
      <header class="header-container">
        <h1>Webphin</h1>
      </header>
      <nav class="header-container">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
ul {
  border: none;
}
</style>
