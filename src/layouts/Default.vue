<template>
  <div>
    <slot />
  </div>

  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
