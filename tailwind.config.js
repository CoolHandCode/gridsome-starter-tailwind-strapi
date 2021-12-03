module.exports = {
    purge: {
        content: [
            "./src/**/*.vue",
            "./src/**/*.jsx",
            "./src/**/*.html",
            "./src/**/*.pug",
            "./src/**/*.md",
        ]
    },

    safelist: [

    ],
    theme: {
        fontFamily: {
            body: '"Roboto","DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            heading: '"Staatliches", "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            sans: '"Roboto","DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
            mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        },
        extend: {
            colors: {
                transparent: 'transparent',
                primaryBrand: '#720c15'
            },
        }
    },

    corePlugins: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ],
}