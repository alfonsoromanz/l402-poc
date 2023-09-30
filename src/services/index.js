import { bitcoinPriceUsd } from './bitcoin-price-usd/bitcoin-price-usd.js'

export const services = (app) => {
  app.configure(bitcoinPriceUsd)

  // All services will be registered here
}
