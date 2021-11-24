// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const locales = require('./src/utils/locales')
module.exports = async function(api) {

    api.loadSource(async(store) => {

    })

    locales.forEach(async l => {

        await api.createPages(async({ graphql, createPage }) => {
            const { data } = await graphql(` {
  
            strapi {
            
                articles(locale: "${l.code}") {
                    slug
                    id
                    description
                    
                }
                categories(locale: "${l.code}") {
                    slug
                }
                
            }
        }
    
         `);
            console.log(data.strapi.articles)
                // somehow we need to pass in the ids of the other locales
            const articles = data.strapi.articles;
            createPage({
                path: `/${l.code}`,
                component: "./src/templates/Blog.vue",
                context: {
                    locale: l.code,
                },
            })

            // see here: https://forum.strapi.io/t/possible-bug-fetching-by-uid/12605
            articles.forEach((article) => {

                createPage({
                    path: `/articles/${article.slug}`,
                    component: "./src/templates/Article.vue",
                    context: {
                        slug: article.slug,
                        locale: l.code,

                    },
                })
            })

        })

    })
}