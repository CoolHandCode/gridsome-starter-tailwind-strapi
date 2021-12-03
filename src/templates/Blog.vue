<template>
  <Layout>
    <div class="bg-cover w-full">
      <NavigationBar />
      <ArticlesContainer :article-groups="articleGroups" />
    </div>
  </Layout>
</template>
<page-query>
    query($locale: String!) {
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
        articles(locale: $locale) {
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
  computed: {

  },
  mounted() {
    this.articleGroups = this.chunks(this.$page.strapi.articles,3);
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
