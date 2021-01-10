const hbjs = require('handbrake-js')
 
hbjs.spawn({ input: 'D:/Video/Movies/Earth Girls Are Easy.avi', output: 'D:/Video/Movies/Earth Girls Are Easy.m4v' })
  .on('error', err => {
    // invalid user input, no video found etc
  })
  .on('progress', progress => {
    console.log(
      'Percent complete: %s, ETA: %s',
      progress.percentComplete,
      progress.eta
    )
  })