var a = 1

// if (a) {
//   console.log(a)
// }

function delay (duration) {
  return new Promise(resolve => {
    document.title = '123'

    console.log('delay')

    setTimeout(resolve, duration)
  })
}

delay(1000)
