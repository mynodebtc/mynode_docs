module.exports = {
  title: "MyNode Docs",
  description: "Documentation for myNode project",
  base: "/",
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel : 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    //repo: 'mynodebtc/mynode_docs',
    //repoLabel: 'Contribute!',
    editLinks: true,
    docsDir: 'docs',
    lastUpdated: false,
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
          "/bitcoin/explorer",
          "/bitcoin/mempool",
          "/bitcoin/data-from-other-node",
          "/bitcoin/troubleshoot"
        ]
      },
      {
        title: "Lightning",
        children: [
          "/lightning/create",
          "/lightning/restore",
          "/lightning/lnd-alias",
          "/lightning/pairing-wallets",
          '/lightning/lnd-hub',
          '/lightning/rtl',
          '/lightning/lnbits',
          '/lightning/thunderhub'
        ]
      },
      {
        title: "Electrum",
        children: [
          ["/electrum/electrum", 'Using Electrum'],
        ]
      },
      {
        title: "Remote Access (Tor)",
        children: [
          ["/tor/setup-tor-access", 'Setup Your Device for Tor'],
          ["/tor/web-gui", 'Web GUI Via Tor'],
          ["/tor/remote-electrum-access", 'Remote Electrum Access'],
          ["/tor/zeus-wallet", 'Zeus Wallet via Tor'],
        ]
      },
      {
        title: "Remote Access (VPN)",
        children: [
          ["/vpn/remote-vpn", 'Remote Access Via VPN'],
        ]
      },
      {
        title: "Multisig",
        children: [
          "/multisig/caravan",
          "/multisig/specter",
        ]
      },
      {
        title: "CoinJoin",
        children: [
          "/coinjoin/joinmarket",
          "/coinjoin/whirlpool",
        ]
      },
      {
        title: "Advanced",
        children: [
          "/advanced/customize-config",
          "/advanced/glances",
          "/advanced/memory-usage-cap",
          "/advanced/netdata",
          "/advanced/ssh",
          "/advanced/webssh",
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
    //['minimal-analytics', {ga: 'UA-140888540-4'}],
  ]
}
