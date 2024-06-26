import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Lincoln Math Club',
  tagline: 'Building a community from pure math upwards',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lincoln-math-club.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config. 
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LincolnMathClub', // Usually your GitHub org/user name.
  projectName: 'LincolnMathClub', // Usually your repo name.

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
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/lincoln-math-social-card.jpg',
    navbar: {
      title: 'Lincoln Math Club',
      logo: {
        alt: 'Lincoln Lynx Logo',
        src: 'img/lynx.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Summer Program',
        },
        {to: 'https://lincoln-math-competition-website.vercel.app/', label: 'Our Math Competition', position: 'left'},
        {
          href: 'https://github.com/LincolnMathClub/LincolnMathClub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/lincolnmathgroup/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/HXNgtvhk',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            }
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Email',
              href: 'mailto:lincolnmathclubseattle@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lincoln Math Club.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
