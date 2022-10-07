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
    chainMenus.push({ header: 'CHAINS' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://github.com/lesnikutsa/lesnik_utsa/blob/main/logo/logo.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
    chainMenus.push({
    title: 'Blog lesnik 🌲 UTSA',
    href: 'https://teletype.in/@lesnik13utsa',
    icon: 'ChromeIcon',
  })
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

  return chainMenus
}

export default processMenu()
