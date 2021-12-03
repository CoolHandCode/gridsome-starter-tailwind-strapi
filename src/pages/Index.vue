<template>
  <Layout>
    <div class="bg-cover w-full">
      <NavigationBar />
      <ArticlesContainer :article-groups="articleGroups" />
    </div>
  </Layout>
</template>
<page-query>
    query {
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
        articles(locale: "en") {
          slug
          title
          description
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
import ArticlesContainer from '~/components/ArticlesContainer';
export default {
  components: { NavigationBar, ArticlesContainer },

  data() {
    return {
      articleGroups: [],
    };
  },

  mounted() {
    this.articleGroups = this.chunks(this.$page.strapi.articles,3);
    const locale = this.$store.state.locale || 'en'

    const pathLocale = this.$route.path.replace('/','')

    // If Url == '/'
    if(!pathLocale && locale !== 'en') {
      this.$router.push('/' + locale)
    }
    if(!pathLocale) {
      if(!this.$store.state.locale) {
        this.$store.set('locale','en')
        this.$store.set('languages','Languages')
      }

    } else {
      this.$store.set('locale',pathLocale)

    }

  },
  methods: {
    chunks: (a, size) =>
      Array.from(
        new Array(Math.ceil(a.length / size)),
        (_, i) => a.slice(i * size, i * size + size),
      ),
  },
};
</script>
