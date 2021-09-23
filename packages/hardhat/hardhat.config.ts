import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import '@typechain/hardhat'
import 'hardhat-watcher'
import 'hardhat-deploy'
import { HardhatUserConfig } from 'hardhat/types'
import dotenv from 'dotenv'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: '0.8.4', settings: {} }],
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   url: 'https://rpc-mumbai.matic.today',
    //   accounts: [process.env.PRIVATE_KEY as string],
    // },
    // rinkeby: {
    //   // url: `https://eth-rinkeby.alchemyapi.io/v2/${}`,
    //   accounts:
    //     'd62197785b627595f62a08ac9b88b82e066bf71aea7e9488a6214170add12af6',
    //   ],
    // },
  },
  paths: {
    artifacts: '../next/artifacts',
  },
  namedAccounts: {
    deployer: 0,
  },
}

export default config
