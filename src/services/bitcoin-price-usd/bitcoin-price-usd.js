import { BitcoinPriceUsdService, getOptions } from './bitcoin-price-usd.class.js'
import { bitcoinPriceUsdPath, bitcoinPriceUsdMethods } from './bitcoin-price-usd.shared.js'

export * from './bitcoin-price-usd.class.js'

// A configure function that registers the service and its hooks via `app.configure`
export const bitcoinPriceUsd = (app) => {
  // Register our service on the Feathers application
  app.use(bitcoinPriceUsdPath, new BitcoinPriceUsdService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: bitcoinPriceUsdMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(bitcoinPriceUsdPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      find: [],
      get: [],
      create: [],
      patch: [],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
