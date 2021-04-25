module.exports = {
  devServer: {
    before(app) {
      // app是一个express的实例
      app.get('/api/courses', (req, res) => {
        setTimeout(() => {
          res.json([{ name: 'zs', age: 20 }, { name: 'ls', age: 30 }])
        })
      })
    }
  }
}