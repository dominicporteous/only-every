const onlyEvery = (
  fn, timeout, context
) => {

  const orgFn = fn
  let result

  return function () {

    if (fn) {

      result = fn.apply(context || this, arguments)
      fn = null

      setTimeout(() => {

        fn = orgFn

      }, timeout || 1000)

    }

    return result

  }

}

module.exports = onlyEvery
