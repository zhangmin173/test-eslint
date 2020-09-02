var a = 1

// if (a) {
//   console.log(a)
// }
$('#app').innerHtml = '123'

function delay (duration: number): void {
  new window.Promise(resolve => {
    document.title = '123'

    console.log('delay')

    setTimeout(resolve, duration)
  })
}

delay(1000)
