// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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

            // these options are optional, as they are copies of the default values...
            options: {
                tailwindConfig: './tailwind.config.js',
                presetEnvConfig: {},
                shouldImport: false,
                shouldTimeTravel: true
            }
        },
        {
            use: '@gridsome/source-graphql',
            options: {
                url: (process.env.GRIDSOME_STRAPI_URL || 'http://localhost:1337') + '/graphql',
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
                endpoint: (process.env.GRIDSOME_STRAPI_URL || 'http://localhost:1337') + '/i18n/locales',
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
    templates: {


    },
}