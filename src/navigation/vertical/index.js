import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://github.com/lesnikutsa/lesnik_utsa/blob/main/logo/tpr.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://ping.pub',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Explorer',
      href: 'http://exp.utsa.tech/',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/lesnikutsa',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Discord',
    href: 'lesnik_utsa#4480',
    icon: 'EyeIcon',
  })
  chainMenus.push({
    title: 'Blog',
    href: 'https://teletype.in/@lesnik13utsa',
    icon: 'EyeIcon',
  })

  return chainMenus
}

export default processMenu()
