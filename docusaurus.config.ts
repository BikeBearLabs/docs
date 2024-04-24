import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import lunrSearch from 'docusaurus-lunr-search';

const config: Config = {
  title: 'Bike Bear Docs',
  tagline: 'Maintenance documentation for Bike Bear-made sites',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://bikebearlabs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BikeBearLabs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/bikebearlabs/docs/edit/main',
          routeBasePath: '/',
          sidebarCollapsed: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '',
      hideOnScroll: true,
      logo: {
        alt: 'Bike Bear Logo',
        src: 'img/logo.gif',
        style: {
          filter: 'invert(1)',
          mixBlendMode: 'difference',
        },
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'main',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://bikebear.com.my',
          label: 'Return to Bike Bear',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Work with us on your next project',
          items: [
            {
              label: 'roar@bikebear.com.my',
              href: 'mailto:roar@bikebear.com.my',
            },
            {
              label: '+6012 677 5637',
              href: 'tel:60126775637',
            },
            {
              label: '+603 7622 4756',
              href: 'tel:60376224756',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Return to Bike Bear',
              href: 'https://bikebear.com.my',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/bikebearlabs/docs',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Bike Bear Sdn. Bhd. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      lunrSearch,
      {
        indexBaseUrl: true,
      },
    ],
  ],
};

export default config;
