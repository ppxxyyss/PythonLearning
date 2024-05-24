import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PythonLearning',
    favicon: 'img/python-logo.png',


    url: 'https://python.docs.xxyyss.com',

    baseUrl: '/',

    organizationName: 'PythonLearning',
    projectName: 'PythonLearning',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'zh',
        locales: ['zh'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    path: 'docs/',
                    routeBasePath: '/',

                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'PythonLearning',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/python-logo.png',
                },
                items: [],
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
