// system information modules
import * as sysinfo from 'systeminformation'

////////////////////////////////////////

const log = console.log

// system information report
// takes an array of modules to report on
// i.e. ['uuid', 'currentLoad', 'mem', 'graphics', 'networkInterfaces'
// check systeminformation docs for more info

function info(modules) {
  try {
    return Promise.all(modules.map((m) => sysinfo[m]()))
  } catch (error) {
    log(error.toStringa())
  }
}

export { info }
