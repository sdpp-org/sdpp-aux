// function to send token to specific address

async function SendPayment(targetAddress) {
    const iotaLibrary = require('@iota/core')

    const iota = iotaLibrary.composeAPI({
      provider: 'https://nodes.devnet.thetangle.org:443'
    })

    // Replace this with the seed you sent tokens too!
    const seed = targetAddress;

    // Generate a different address from your seed
    const receivingAddress = await iota.getNewAddress(seed, {
      index: 0,
      total: 1
    })

    // Construct a TX to our new address
    const transfers = [
      {
        value: 0,
        address: receivingAddress[0],
        tag: 'MYMAGIC'
      }
    ]
    console.log('Sending 0i to ' + receivingAddress)

    try {
      // Construct bundle and convert to trytes
      const trytes = await iota.prepareTransfers(seed, transfers)
      // Send bundle to node.
      const response = await iota.sendTrytes(trytes, 3, 9)

      console.log('Completed TXs')
      // response.map(tx => console.log(tx));

      return response;
    } catch (e) {
      console.log(e)
    }
  }

  const promise = SendPayment('NEWEWYASHHNEWEWYASHHNEWEWYASHHNEWEWYASHHNEWEWYASHHNEWEWYASHHNEWEWYASHHNEWEWWORL9D');
  promise.then((res) => {
    console.log(33, 'complete');
  });
