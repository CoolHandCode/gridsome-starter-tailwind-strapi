<template>
  <div class="bg-white p-3 col-span-1 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
    <g-link :to="link">
      <g-image width="100%" class="w-full" :src="getStrapiMedia(article.image.url)"> </g-image
    ></g-link>
    <div class="flex flex-col ml-4">
      <g-link :to="link">
        <h1 class="font-heading text-2xl mb-3 lg:mt-6">{{ article.title }}</h1>
      </g-link>
      <div>
        <p class="mb-10">{{ article.description }}</p>

        <g-image
          class="inline object-cover w-10 h-10 mr-2 rounded-full"
          :src="getStrapiMedia(article.author.picture.url)"
          alt="Profile image"
        />
        <h3 v-if="article.author" class="inline font-base text-sm">{{ article.author.name }}</h3>
      </div>
    </div>
  </div>
</template>
<script type="ts">
import { getStrapiMedia } from "~/utils/medias";
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {
          title: '',
        }
      },
    },
  },
  data() {
    return {
      link: '/articles/' + this.article.slug,
    };
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
