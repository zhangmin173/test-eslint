module.exports = {
  environments: {
    tuia: {
      globals: {
        $: false,
        Promise: false,
        document: false,
        console: false,
        setTimeout: false,
        Tuia: true
      }
    }
  }
}