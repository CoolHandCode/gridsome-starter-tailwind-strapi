<template>
  <section class="min-h-screen items-center justify-center">
    <div
      class="
        bg-clip-padding
        backdrop-blur-sm backdrop-contrast-10 backdrop-filter
        bg-opacity-60
        border border-gray-400
        bg-gray-300
        grid
        lg:grid-cols-4
        grid-cols-2
        gap-4
        p-6
        lg:p-12
      "
    >
      <div class="p-3 lg:col-span-4 col-span-2 rounded">
        <h1 class="font-heading text-6xl lg:text-8xl">
          {{ $page.strapi.homepage.hero.title }}
        </h1>
      </div>

      <template v-for="articles in articleGroups">
        <two-column-article :key="articles.key" v-if="articles[0]" :article="articles[0]" />
        <one-column-article :key="articles.key" v-if="articles[1]" :article="articles[1]" />
        <one-column-article :key="articles.key" v-if="articles[2]" :article="articles[2]" />
      </template>
    </div>
  </section>
</template>

<script>
import OneColumnArticle from '~/components/OneColumnArticle'
import TwoColumnArticle from '~/components/TwoColumnArticle'

export default {
  components: { OneColumnArticle, TwoColumnArticle },

  props: {
    articleGroups: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
}
</script>
