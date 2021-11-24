<template>
  <Layout>
    <div
      class="bg-cover w-full"
      style="
        background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100');
      "
    >
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
  computed: {

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
