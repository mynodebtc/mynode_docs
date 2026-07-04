const fs = require('fs')
const path = require('path')

const description = 'Documentation for setting up, running, and troubleshooting a self-hosted MyNode Bitcoin and Lightning node.'

function publisher(host) {
  return {
    '@type': 'Organization',
    name: 'MyNode',
    url: 'https://www.mynodebtc.com',
    logo: {
      '@type': 'ImageObject',
      url: `${host}/images/logo.png`,
    },
  }
}

function getStructuredData(host) {
  return {
    'index.html': [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'MyNode Docs',
        url: `${host}/`,
        description,
        publisher: publisher(host),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'MyNode',
        url: 'https://www.mynodebtc.com',
        logo: `${host}/images/logo.png`,
      },
    ],
    'intro/getting-started.html': [
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Getting Started with MyNode',
        description: 'Bring a new MyNode online, open the web interface, and start the initial Bitcoin sync.',
        totalTime: 'P6D',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Download and flash the image',
            text: 'Download the correct MyNode image for your device and flash it to an SD card or USB drive.',
          },
          {
            '@type': 'HowToStep',
            name: 'Connect and power on the device',
            text: 'Attach storage and Ethernet, then connect power to start the MyNode device.',
          },
          {
            '@type': 'HowToStep',
            name: 'Open the MyNode web interface',
            text: 'Visit mynode.local or the device IP address from another device on the same network.',
          },
          {
            '@type': 'HowToStep',
            name: 'Log in and choose your edition',
            text: 'Sign in with the default credentials and select Community Edition or enter your product key.',
          },
          {
            '@type': 'HowToStep',
            name: 'Wait for the initial Bitcoin sync',
            text: 'Allow the node to begin syncing the Bitcoin blockchain before using the main applications.',
          },
        ],
      },
    ],
    'advanced/flash-sd-card.html': [
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Flash MyNode OS Image',
        description: 'Write the MyNode image to an SD card to prepare the device for its first boot or perform a recovery.',
        tool: [
          'Balena Etcher',
          'SD card or USB flash drive',
        ],
        step: [
          {
            '@type': 'HowToStep',
            name: 'Download the MyNode image',
            text: 'Download the correct MyNode image for your device from mynodebtc.com/download.',
          },
          {
            '@type': 'HowToStep',
            name: 'Connect the target drive',
            text: 'Attach the SD card or USB drive to your computer with the correct adapter if needed.',
          },
          {
            '@type': 'HowToStep',
            name: 'Open Etcher and select the image',
            text: 'Launch Balena Etcher and choose the downloaded MyNode image file.',
          },
          {
            '@type': 'HowToStep',
            name: 'Choose the target drive',
            text: 'Select the correct SD card or USB drive and verify that the device size matches your expectation.',
          },
          {
            '@type': 'HowToStep',
            name: 'Flash the drive',
            text: 'Start the flash process and wait until the image has been written and verified.',
          },
        ],
      },
    ],
    'lightning/create.html': [
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Create a Lightning Wallet',
        description: 'Create a Lightning wallet on MyNode, record the seed phrase, and finish the initial wallet setup.',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Open Lightning Wallet',
            text: 'From the MyNode home page, open Lightning Wallet and choose Create Wallet.',
          },
          {
            '@type': 'HowToStep',
            name: 'Record the seed phrase',
            text: 'Write down the generated seed phrase and keep it private because it controls access to the wallet.',
          },
          {
            '@type': 'HowToStep',
            name: 'Verify the backup',
            text: 'Re-enter the seed phrase on the next screen to confirm that the backup was recorded correctly.',
          },
          {
            '@type': 'HowToStep',
            name: 'Create the wallet',
            text: 'Finish wallet creation and return to the main Lightning page.',
          },
          {
            '@type': 'HowToStep',
            name: 'Wait for setup to complete',
            text: 'Allow the wallet to sync and initialize before using Lightning apps like RTL or Thunderhub.',
          },
        ],
      },
    ],
    'bitcoin/overview.html': [
      {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Bitcoin Node Overview',
        description: 'See how MyNode runs and manages a full Bitcoin node, and why local verification matters.',
        mainEntityOfPage: `${host}/bitcoin/overview.html`,
        author: {
          '@type': 'Organization',
          name: 'MyNode',
        },
        publisher: publisher(host),
        about: [
          'Bitcoin full node',
          'blockchain verification',
          'self-custody',
        ],
      },
    ],
  }
}

function addStructuredData(outDir, host) {
  const structuredData = getStructuredData(host)

  for (const [relativePath, items] of Object.entries(structuredData)) {
    const filePath = path.join(outDir, relativePath)

    if (!fs.existsSync(filePath)) {
      continue
    }

    const html = fs.readFileSync(filePath, 'utf8')

    if (html.includes('data-mynode-structured-data="true"')) {
      continue
    }

    const tags = items.map(item => (
      `    <script type="application/ld+json" data-mynode-structured-data="true">${JSON.stringify(item)}</script>\n`
    )).join('')

    fs.writeFileSync(filePath, html.replace('</head>', `${tags}  </head>`))
  }
}

if (require.main === module) {
  const outDir = path.resolve(process.argv[2] || path.join(__dirname, '..', 'dist'))
  const host = String(process.argv[3] || '').replace(/\/+$/, '')

  if (!host) {
    throw new Error('Expected structured data host as the second argument.')
  }

  addStructuredData(outDir, host)
}

module.exports = addStructuredData