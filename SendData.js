function SendData(addresss)
{
  const iotaLibrary = require('@iota/core')
  const Converter = require('@iota/converter')

  const iota = iotaLibrary.composeAPI({
    provider: 'https://nodes.devnet.thetangle.org:443'
  })

  // Use a random seed as there is no tokens being sent.
  const seed =
    'NEWEWYASHHNEWEWYASHHNEWEWYASHHNEWEWYASHHNEWEWYASHHNEWEWYASHHNEWEWYASHHNEWEWWORL9D'

  // Create a variable for the address we will send too
  const address =addresss
    //'JB9BCZAVZRCHIKUHYERPAW99KFXBSFJXWXPO9PZFIKZBTTCQPQVAKPXUJGNDZHCYYNJBSZWGDTORJUKOB'

  const message = Converter.asciiToTrytes(
    `HelloBOYS `
  )

  const transfers = [
    {
      value: 0,
      address: address, // Where the data is being sent
      message: message // The message converted into trytes
    }
  ]

  return iota
    .prepareTransfers(seed, transfers)
    .then(trytes => iota.sendTrytes(trytes, 3, 9))
    .then(bundle => {
      console.log('Transfer successfully sent')
      bundle.map(tx => console.log(tx))
      return bundle
    })
    .catch(err => {
      console.log(err)
    })

}
let promise=SendData('JB9BCZAVZRCHIKUHYERPAW99KFXBSFJXWXPO9PZFIKZBTTCQPQVAKPXUJGNDZHCYYNJBSZWGDTORJUKOB');
promise.then((res)=>{ console.log(33,'complete');});
