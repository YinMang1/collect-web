
module.exports = function (source) {
    const callback = this.async()
    const result = source.replace('this', 'that')
    setTimeout(() => {
        console.log(result)
        callback(null, result)
    }, 100)
    return result
}