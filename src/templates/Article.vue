<template>
  <Layout>
    <NavigationBar
      :localizations="localizations"
      :article="article"
      @locale-changed="onChangeLocale"
    />
    <section
      class="bg-cover w-full"
      style="
        background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100');
      "
    >
      <div class="grid grid-cols-1 p-2">
        <div class="bg-black">
          <g-image class="w-full" src="~/assets/images/climate-change-2.jpg"></g-image>
        </div>
      </div>
    </section>
    <section class="bg-white flex items-center justify-center">
      <div class="grid grid-cols-1 p-2">
        <div class="bg-white">
          <h1 class="font-heading text-6xl lg:text-8xl">{{ article.title }}</h1>
        </div>
      </div>
    </section>
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
export default {
  components: { NavigationBar },

  data() {
    return {
      article: {},
      localizations: [],
    };
  },
  computed: {

  },
  async mounted() {
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
  },
}
</script>
