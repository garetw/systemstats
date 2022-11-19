import { info } from './index.js'
import assert from 'assert'

// const MODULES = ["uuid", "cpu", "networkInterfaces"];
const MODULES = ['uuid', 'currentLoad', 'mem', 'graphics', 'networkInterfaces']

describe('info', function () {
  // it should return system information
  it('should return system information', async function () {
    const data = await info(MODULES)
    assert(data)
  })

  // it should return NVIDIA graphics information
  // if a card is available
  it('should return NVIDIA graphics information', async function () {
    let data = await info(['graphics'])
    data = data[0].controllers.filter((c) => c.vendor === 'NVIDIA')
    console.log(data)
  })
})
