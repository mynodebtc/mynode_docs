module.exports = {
  title: "Guides and Documentation",
  description: "Helpful guides and documentation for using MyNode and getting the most out of all it has to offer!",
  base: "/",
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel : 'icon', href: '/favicon.ico' }],
    ['link', { rel : 'stylesheet', href: '/css/mynode.css' }],
    ['script',{async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-871EBBS9WR'},],
    ['script',{},["window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-871EBBS9WR');",],],
  ],
  themeConfig: {
    repo: 'mynodebtc/mynode_docs',
    repoLabel: 'Contribute!',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsDir: 'docs',
    lastUpdated: false,
    sidebarDepth: 0,
    nav: [
      { text: "Back to MyNode", link: "https://www.mynodebtc.com/"},
      { text: "Order Now!", link: "https://www.mynodebtc.com/order_now"}
    ],
    logo: "/images/logo.png",
    sidebar: [
      {
        collapsable: false,
        title: "Getting Started",
        children: [
          ["/intro/introduction", 'Introduction'],
          ["/intro/getting-started", 'Getting Started'],
        ]
      },
      {
        title: "Community Guides",
        children: [
          ["/videos/guides", 'Video Guides'],
          ["/community/guides", 'Community Guides'],
        ]
      },
      {
        title: "Device",
        children: [
          ["/device/changing-password", 'Changing your Password'],
          ["/device/forgot-password", 'Forgot your Password'],
          ["/device/upgrading-device", 'Upgrading your Device'],
          "/device/connect-wifi",
        ]
      },
      {
        title: "Bitcoin",
        children: [
          "/bitcoin/overview",
          "/bitcoin/bitcoin-status",
          "/bitcoin/manage",
          "/bitcoin/quicksync",
          "/bitcoin/data-from-other-node",
          "/bitcoin/troubleshoot"
        ]
      },
      {
        title: "Bitcoin Apps",
        children: [
          "/electrum/electrum",
          {
            title: "Bitcoin Explorers",
            children: [
                "/bitcoin/explorer",
                "/bitcoin/mempool",
            ]
          },
          {
            title: "Stores and Crowdfunding",
            children: [
                "/btcpay-server/setup.md",
            ]
          },
          {
            title: "Mixing",
            children: [
              "/coinjoin/joinmarket",
              //"/coinjoin/whirlpool", // Not ready
            ]
          },
          {
            title: "Multisig",
            children: [
                //"/multisig/caravan", // Not ready
                "/multisig/specter",
            ]
          }
        ]
      },
      {
        title: "Lightning",
        children: [
          "/lightning/create",
          "/lightning/restore",
          "/lightning/lnd-alias",
          "/lightning/pairing-wallets",
          "/lightning/lightning-terminal",
        ]
      },
      {
        title: "Lightning Apps",
        children: [
            '/lightning/alby'
            '/lightning/bluewallet',
            '/lightning/rtl',
            '/lightning/lnbits',
            '/lightning/thunderhub',
            '/lightning/zap',
            '/lightning/zeus',
        ]
      },
      {
        title: "Networking",
        children: [
          "/networking/tor",
          "/device/connect-wifi",
          "/advanced/find-device-ip",
        ]
      },
      {
        title: "Remote Access",
        children: [
            {
                title: "Remote Access via Tor",
                children: [
                  "/tor/setup",
                  "/tor/web-gui",
                  "/tor/electrum",
                  ["/tor/zeus", 'Zeus Wallet via Tor'],
                ]
              },
              {
                title: "Remote Access via VPN",
                children: [
                  "/vpn/setup",
                ]
              },
        ]
      },
      {
        title: "Premium+",
        children: [
            "/premium_plus/premium_plus",
            "/premium_plus/connect",
        ]
      },
      {
        title: "Advanced",
        children: [
          "/advanced/flash-sd-card",
          "/advanced/linux-terminal",
          "/advanced/customize-config",
          "/advanced/clone-tool",
          "/advanced/custom-app-versions",
          "/advanced/verify-restore-bluewallet.md",
          "/advanced/netdata",
          "/advanced/ssh",
          "/advanced/install-pc-server",
          "/advanced/install-virtual-box",
          "/advanced/upgrade-to-beta",
        //   {
        //     title: "Setup Base Images",
        //     children: [
        //       ["/advanced/setup-base-images/setup_base_image_raspi4", 'Raspberry Pi 4'],
        //       ["/advanced/setup-base-images/setup_base_image_raspi3", 'Raspberry Pi 3'],
        //       ["/advanced/setup-base-images/setup_base_image_rockpro64", 'RockPro64'],
        //       ["/advanced/setup-base-images/setup_base_image_rock64", 'Rock64'],
        //       ["/advanced/setup-base-images/setup_base_image_debian", 'Debian'],
        //       ["/advanced/setup-base-images/setup_base_image_other", 'Other'],
        //     ]
        //   },
        ]
      },
      {
        title: "Troubleshooting",
        children: [
          "/troubleshooting/device-not-booting",
          "/troubleshooting/device-did-not-upgrade",
          "/troubleshooting/https-error",
          "/troubleshooting/stuck-formatting",
          "/troubleshooting/stuck-copying-files",
          "/troubleshooting/drive-not-found",
          "/troubleshooting/bitcoin-error",
          "/troubleshooting/bitcoin-sync-slow",
          "/troubleshooting/electrum-connection-error",
          "/troubleshooting/voltage-error",
          "/troubleshooting/sd-card-full-error",
          "/troubleshooting/sd-card-readonly-error",
          "/troubleshooting/drive-readonly-error",
          "/troubleshooting/fsck-error"
        ]
      },
      {
        title: "Developer",
        children: [
          "/developer/add-app.md",
          "/developer/custom-scripts.md"
        ]
      }
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    //['@vuepress/google-analytics', {'ga': 'G-871EBBS9WR'}],
    ['seo', {
        siteTitle: (_, $site) => $site.title,
        title: ($page, $site) => $page.title + " | " + $site.title,
        description: ($page, $site) => $page.frontmatter.description || ($page.title + " - " + $site.description),
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),

        customMeta: (add, context) => {
            const {
                $site, // Site configs provided by Vuepress
                $page, // Page configs provided by Vuepress

                // All the computed options from above:
                siteTitle, title, description, author, tags,
                twitterCard, type, url, image, publishedAt, modifiedAt,
            } = context

            add('twitter:site', '@mynodebtc')
            add('twitter:creator', '@mynodebtc')
            add('twitter:image', 'http://mynodebtc.com/images/vertical_lightning_white_bg.png')

            add('google-site-verification','5e94KreZz8Uzer4hwYMp3vodynZ5Yw7pLYXcXGtn8SA')
        },
    }],
  ]
}
