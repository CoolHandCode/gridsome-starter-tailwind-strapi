<template>
  <Layout>
    <NavigationBar
      :localizations="localizations"
      :article="article"
      @locale-changed="onChangeLocale"
    />
    <div
      class="
        bg-clip-padding
        backdrop-blur-sm backdrop-contrast-10 backdrop-filter
        bg-opacity-70
        border border-gray-400
        bg-gray-300
      "
    >
      <section class="container mx-auto px-4 xl:px-0 py-6 sm:py-12">
        <div>
          <p class="mb-4 mb-3 text-primaryBrand text-2xl">
            {{ article.category ? article.category.title : 'Health' }}
          </p>
          <h1 class="font-heading uppercase text-5xl text-gray-800 font-medium mb-8">
            {{ article.title }}
          </h1>
          <p class="text-gray-700 text-2xl mb-8 font-heading">20th September 2020</p>
          <div class="flex items-center justify-between mb-10">
            <p class="text-gray-600 text-xl font-heading">
              #lifestyle &nbsp; #productivity &nbsp; #rest &nbsp; #sleep
            </p>
            <div class="text-gray-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-heart"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 icon icon-tabler icon-tabler-bookmark"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
              </svg>
            </div>
          </div>
          <div class="h-50% w-full relative border-b border-gray-300 mb-12">
            <g-image
              :src="getStrapiMedia(article.image.url)"
              alt=""
              class="h-full w-full object-cover overflow-hidden shadow"
            />
          </div>
          <div class="flex justify-center">
            <div class="w-full sm:w-2/3 leading-9">
              <article class="prose lg:prose-xl">
                {{ article.content }}
              </article>

              <div class="flex mb-8"></div>
            </div>
          </div>
        </div>
      </section>

      <div class="flex justify-center items-center">
        <div class="w-full sm:w-2/4 leading-9">
          <div class="py-8 px-4">
            <h1 class="text-gray-800 font-semibold text-2xl mb-6">Submit a comment</h1>
            <div class="shadow sm:pr-4 pb-3 w-full">
              <textarea
                class="
                  text-gray-700
                  py-3
                  px-4
                  h-24
                  focus:outline-none
                  resize-none
                  w-full
                  text-gray-800
                "
                placeholder="Tell us what is on your mind"
              ></textarea>
              <div class="flex justify-end w-full">
                <div class="flex">
                  <button
                    class="
                      mr-2
                      focus:outline-none
                      text-primaryBrand
                      rounded
                      hover:text-primaryBrand
                      focus:text-primaryBrand
                      bg-white
                      text-sm
                      py-2
                      px-4
                      transition
                      ease-in-out
                      duration-150
                    "
                  >
                    Cancel
                  </button>
                  <button
                    class="
                      focus:outline-none
                      bg-primaryBrand
                      rounded
                      hover:bg-primaryBrand
                      focus:bg-primaryBrand
                      text-white text-sm
                      py-2
                      px-4
                      transition
                      ease-in-out
                      duration-150
                    "
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
            <h4 class="text-2xl my-10 text-gray-800 font-semibold">Comments (3)</h4>
            <div class="h-full" id="scrollbar">
              <div class="flex mb-10 px-2 px-2">
                <div class="h-8 w-8 relative rounded-full flex-shrink-0">
                  <g-image
                    src="~/assets/images/head-shot-1.jpg"
                    alt=""
                    class="rounded-full h-full w-full object-cover overflow-hidden shadow"
                  />
                </div>
                <div class="ml-2">
                  <div class="mb-3 flex justify-between">
                    <p class="text-gray-700 font-bold">Catherine James</p>
                    <p class="text-gray-700 text-xs">a week ago</p>
                  </div>
                  <p class="text-gray-700 mb-4">Nice article, please write some more</p>
                  <div class="flex justify-between items-center text-gray-600">
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 icon icon-tabler icon-tabler-heart"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-message-circle"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                        <line x1="12" y1="12" x2="12" y2="12.01" />
                        <line x1="8" y1="12" x2="8" y2="12.01" />
                        <line x1="16" y1="12" x2="16" y2="12.01" />
                      </svg>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-dots"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex mb-10 px-2">
                <div class="h-8 w-8 relative rounded-full flex-shrink-0">
                  <g-image
                    src="~/assets/images/head-shot-1.jpg"
                    alt=""
                    class="rounded-full h-full w-full object-cover overflow-hidden shadow"
                  />
                </div>
                <div class="ml-2">
                  <div class="mb-3 flex justify-between">
                    <p class="text-gray-700 font-bold">Catherine James</p>
                    <p class="text-gray-700 text-xs">a week ago</p>
                  </div>
                  <p class="text-gray-700 mb-4">Go for it, lift more, lift heavier</p>
                  <div class="flex justify-between items-center text-gray-600">
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 icon icon-tabler icon-tabler-heart"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-message-circle"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                        <line x1="12" y1="12" x2="12" y2="12.01" />
                        <line x1="8" y1="12" x2="8" y2="12.01" />
                        <line x1="16" y1="12" x2="16" y2="12.01" />
                      </svg>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-dots"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex px-2">
                <div class="h-8 w-8 relative rounded-full flex-shrink-0">
                  <g-images
                    src="~/assets/images/head-shot-1.jpg"
                    alt=""
                    class="rounded-full h-full w-full object-cover overflow-hidden shadow"
                  />
                </div>
                <div class="ml-2">
                  <div class="mb-3 flex justify-between">
                    <p class="text-gray-700 font-bold">Catherine James</p>
                    <p class="text-gray-700 text-xs">a week ago</p>
                  </div>
                  <p class="text-gray-700 mb-4">But what about squats and deadlifts!</p>
                  <div class="flex justify-between items-center text-gray-600">
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 icon icon-tabler icon-tabler-heart"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-message-circle"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                        <line x1="12" y1="12" x2="12" y2="12.01" />
                        <line x1="8" y1="12" x2="8" y2="12.01" />
                        <line x1="16" y1="12" x2="16" y2="12.01" />
                      </svg>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-dots"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
    query($locale: String!, $slug: String!) {
      strapi {        
        global {
          siteName
          favicon {
            url
          }
          defaultSeo {
            metaTitle
            metaDescription
            shareImage {
              url
            }
          }
        }
        homepage {
          hero {
            title
          }
          seo {
            metaTitle
            metaDescription
            shareImage {
              url
            }
          }
        }
        articles(where: { slug: $slug, _locale: $locale })   {
          id
          slug
          title

          content
          localizations {
            id
            locale
          }
          category {
            title
          }
          image {
            url
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
  }
</page-query>
<script type="ts">
import NavigationBar from '~/components/NavigationBar';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios').default;
import { getStrapiMedia } from "~/utils/medias";

export default {
  components: { NavigationBar },

  data() {
    return {
      article: {
        image: {
          url: 'http://',
        },
      },
      localizations: [],
    };
  },
  computed: {

  },
  async mounted() {
    console.log(this.article)
    this.article = this.$page.strapi.articles[0]
    // Not yet found a way to do this easily at build time
    const url = process.env.GRIDSOME_STRAPI_URL || 'http://localhost:1337'
    const promises = []
    this.$page.strapi.articles[0].localizations.forEach((loc) => {
      promises.push(axios.get(url + '/articles?id_eq=' + loc.id + '&_locale=' + loc.locale))
    })
    const results = await Promise.all(promises)
    this.localizations = results.map((r) => r.data[0])
  },
  methods: {
    onChangeLocale: function(article)  {
      console.log('e')
      this.article = article
    },
    getStrapiMedia,

  },
}
</script>
