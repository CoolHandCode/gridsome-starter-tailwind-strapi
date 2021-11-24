<template>
  <div class="bg-white p-3 col-span-2 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
    <g-image class="w-full" :src="getStrapiMedia(article.image.url)"></g-image>
    <div class="flex flex-col ml-4">
      <div>
        <g-link :to="link">
          <h1 class="font-heading text-2xl mb-3 lg:mt-6">
            {{ article.title }}
          </h1>
        </g-link>
      </div>
      <div>
        <p class="mb-10">This is a synopsis</p>
        <g-image
          class="inline object-cover w-10 h-10 mr-2 rounded-full"
          src="~/assets/images/head-shot-1.jpg"
          alt="Profile image"
        />
        <h3 class="inline font-base text-sm">John Smith</h3>
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
