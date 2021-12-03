// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
console.log(process.env.GRIDSOME_STRAPI_URL)
module.exports = {
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')

    },
    siteName: 'Gridsome Portfolio Starter with Typescript, Tailwind, Strapi CMS',

    transformers: {

    },

    plugins: [

        {
            use: "gridsome-plugin-tailwindcss",

            options: {
                tailwindConfig: './tailwind.config.js',
                presetEnvConfig: {},
                shouldImport: false,
                shouldTimeTravel: false
            }
        },
        {
            use: '@gridsome/source-graphql',
            options: {
                url: (process.env.GRIDSOME_STRAPI_URL || 'https://strapi1.digitalstate.co.uk') + '/graphql',
                queryLimit: 50,
                fieldName: 'strapi',
                typeName: 'strapiTypes',

            },
        },
        {
            use: "gridsome-source-rest",
            options: {
                debug: false,
                axiosConfig: undefined,
                endpoint: (process.env.GRIDSOME_STRAPI_URL || 'https://strapi1.digitalstate.co.uk') + '/i18n/locales',
                typeName: "Locale",
                isStatic: false,
                isCollection: true,
                responseInterceptor: undefined
            }
        },
        {
            use: 'gridsome-plugin-typescript',
        },
    ],

}