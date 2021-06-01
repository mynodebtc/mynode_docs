module.exports = {
  title: "MyNode Docs",
  description: "Documentation for myNode project",
  base: "/",
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel : 'icon', href: '/favicon.ico' }],
    ['link', { rel : 'stylesheet', href: '/css/mynode.css' }]
  ],
  themeConfig: {
    //repo: 'mynodebtc/mynode_docs',
    //repoLabel: 'Contribute!',
    editLinks: true,
    docsDir: 'docs',
    lastUpdated: false,
    sidebarDepth: 0,
    nav: [
      { text: "Back to myNode", link: "https://www.mynodebtc.com/"}
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
        title: "Video Guides",
        children: [
          ["/videos/guides", 'Video Guides'],
        ]
      },
      {
        title: "Device",
        children: [
          ["/device/changing-password", 'Changing your Password'],
          ["/device/forgot-password", 'Forgot your Password'],
          ["/device/upgrading-device", 'Upgrading your Device'],
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
          "/bitcoin/explorer",
          "/bitcoin/mempool",
        ]
      },
      {
        title: "Lightning",
        children: [
          "/lightning/create",
          "/lightning/restore",
          "/lightning/lnd-alias",
          "/lightning/pairing-wallets",
        ]
      },
      {
        title: "Lightning Apps",
        children: [
            '/lightning/bluewallet',
            '/lightning/rtl',
            '/lightning/lnbits',
            '/lightning/thunderhub',
            '/lightning/zap',
            '/lightning/zeus',
        ]
      },
      {
        title: "Multisig Apps",
        children: [
          "/multisig/caravan",
          "/multisig/specter",
        ]
      },
      {
        title: "CoinJoin / Mixing Apps",
        children: [
          "/coinjoin/joinmarket",
          "/coinjoin/whirlpool",
        ]
      },
      {
        title: "Remote Access (Tor)",
        children: [
          "/tor/setup",
          "/tor/web-gui",
          "/tor/electrum",
          ["/tor/zeus", 'Zeus Wallet via Tor'],
        ]
      },
      {
        title: "Remote Access (VPN)",
        children: [
          "/vpn/setup",
        ]
      },
      {
        title: "Advanced",
        children: [
          "/advanced/find-device-ip",
          "/advanced/customize-config",
          "/advanced/memory-usage-cap",
          "/advanced/netdata",
          "/advanced/ssh",
          {
            title: "Setup Base Images",
            children: [
              ["/advanced/setup-base-images/setup_base_image_raspi4", 'Raspberry Pi 4'],
              ["/advanced/setup-base-images/setup_base_image_raspi3", 'Raspberry Pi 3'],
              ["/advanced/setup-base-images/setup_base_image_rockpro64", 'RockPro64'],
              ["/advanced/setup-base-images/setup_base_image_rock64", 'Rock64'],
              ["/advanced/setup-base-images/setup_base_image_debian", 'Debian'],
              ["/advanced/setup-base-images/setup_base_image_other", 'Other'],
            ]
          },
        ]
      },
      {
        title: "Troubleshooting",
        children: [
          ["/troubleshooting/stuck-copying-files", 'My Device Gets Stuck Copying Files'],
        ]
      },
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/google-analytics', {'ga': 'UA-140888540-4'}],
  ]
}
