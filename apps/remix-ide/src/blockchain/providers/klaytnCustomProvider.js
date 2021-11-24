const Web3 = require('web3')

class KlaytnCustomProvider {
  constructor (executionContext, url) {
    this.executionContext = executionContext
    this.provider = new Web3.providers.HttpProvider(url)
  }

  getAccounts (cb) {
    const accounts = []
    for (let i = 0; i < this.executionContext.web3().eth.accounts.wallet.length; i++) {
      accounts.push(this.executionContext.web3().eth.accounts.wallet[i].address)
    }
    return cb(null, accounts)
  }

  newAccount (keyPromptCb, cb) {
    keyPromptCb((key, passphrase, errorAlert) => {
      let newAccount

      // If passphrase is existed, decrypt keystore
      try {
        if (passphrase) {
          localStorage.removeItem('keystoreFileText')   // eslint-disable-line
          newAccount = this.executionContext.web3().eth.accounts.decrypt(key, passphrase)
          this.executionContext.web3().eth.accounts.wallet.add(newAccount)
        } else {
          newAccount = this.executionContext.web3().eth.accounts.wallet.add(key)
        }
      } catch (e) {
        const errorMsg = passphrase ? 'Invalid keystoreFile or password' : `Invalid private key string: ${e}`
        errorAlert(errorMsg)
        return
      }
      cb(null, newAccount.address)
    })
  }

  resetEnvironment () {
    this.executionContext.web3().setProvider(this.provider)
  }

  getBalanceInEther (address, cb) {
    this.executionContext.web3().eth.getBalance(address, (err, res) => {
      if (err) {
        return cb(err)
      }
      cb(null, Web3.utils.fromWei(res.toString(10), 'ether'))
    })
  }

  getGasPrice (cb) {
    this.executionContext.web3().eth.getGasPrice(cb)
  }

  signMessage (message, account, passphrase, cb) {
    try {
      this.executionContext.web3().accounts.sign(message, account, (error, signedData) => {
        cb(error, '0x' + signedData.messageHash, signedData.signature)
      })
    } catch (e) {
      cb(e.message)
    }
  }

  getProvider () {
    return this.executionContext.web3().currentProvider.host.includes('cypress') ? 'cypress' : 'baobab'
  }
}

module.exports = KlaytnCustomProvider
