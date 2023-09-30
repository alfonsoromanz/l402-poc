export const bitcoinPriceUsdPath = 'bitcoin-price-usd'

export const bitcoinPriceUsdMethods = ['find', 'get', 'create', 'patch', 'remove']

export const bitcoinPriceUsdClient = (client) => {
  const connection = client.get('connection')

  client.use(bitcoinPriceUsdPath, connection.service(bitcoinPriceUsdPath), {
    methods: bitcoinPriceUsdMethods
  })
}
