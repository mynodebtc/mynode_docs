module.exports = {
  title: "MyNode Docs",
  description: "Documentation for myNode project",
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel : 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    repo: 'mynodebtc/mynode_docs',
    repoLabel: 'Contribute!',
    editLinks: true,
    docsDir: 'docs',
    lastUpdated: false,
    // nav: [
    //   { text: "GitHub", link: "https://github.com/mynodebtc/mynode"},
    //   { text: "Website", link: "https://www.mynodebtc.com/"}
    // ],
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
        title: "Device",
        children: [
          ["/device/changing-password", 'Change Your Password'],
          ["/device/existing-node", 'Using Data from Existing Node'],
          ["/device/upgrading-device", 'Upgrading your Device'],
        ]
      },
      {
        title: "Bitcoin",
        children: [
          ["/bitcoin/bitcoin-status", 'Check Bitcoin Status'],
          ["/bitcoin/independent-sync", 'Independently Sync Blockchain'],
          "/bitcoin/explorer",
          "/bitcoin/mempool"
        ]
      },
      {
        title: "Lightning",
        children: [
          "/lightning/create",
          "/lightning/restore",
          "/lightning/lnd-alias",
          "/lightning/lnd-connect",
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
          ["/electrum/electrum-remote-access", 'Remote Electrum Access'],
        ]
      },
      {
        title: "Samourai",
        children: [
          ["samourai", 'Using Dojo'],
        ]
      },
      {
        title: "Tor",
        children: [
          ["/tor/setup-tor-access", 'Setup Your Device for Tor'],
          ["/tor/web-gui", 'Web GUI Via Tor'],
          ["/tor/remote-electrum-access", 'Remote Electrum Access'],
          ["/tor/zeus-wallet", 'Zeus Wallet via Tor'],
        ]
      },
      {
        title: "VPN",
        children: [
          ["/vpn/remote-vpn", 'Remote Access Via VPN'],
        ]
      },
      {
        title: "BTCPay Server",
        children: [
          "/btcpay-server/setup"
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
          ["/advanced/customize-config", 'Customize your Configurations'],
          ["/advanced/ssh", 'SSH Key Authentication'],
          "/advanced/netdata",
          "/advanced/glances",
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
  ]
}
