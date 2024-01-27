<template>
  <main class="px10 py20">
    <slot />
    <Footer />
    <div class="mx-auto mt5 text-center text-sm opacity-35">
      藏 [<a href="https://cang.im">CANG.IM</a>] @ {{ new Date().getFullYear() }}
    </div>
  </main>
</template>
