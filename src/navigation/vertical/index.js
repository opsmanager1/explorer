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
      icon: 'https://raw.githubusercontent.com/lesnikutsa/lesnik_utsa/main/logo/tpr.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://ping.pub',
      icon: 'ChromeIcon',
    })
  } 
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/opsmanager1',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Blog',
    href: 'https://medium.com/@bitnodes',
    icon: 'EyeIcon',
  })

  return chainMenus
}

export default processMenu()
