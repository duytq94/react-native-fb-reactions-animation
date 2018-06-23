const fs = require('fs')
const path = require('path')
const open = require("open")
const express = require('express')
const request = require('request')

var buildDir = path.join(__dirname, 'dist')
var port = 3000
//@nhancv: Find Ip address
var address, ifaces = require('os').networkInterfaces()
for (var dev in ifaces) {
  ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address : undefined)
  if (address) break
}
var host = `http://${address}:${port}`

//@nhancv: Replace LOCAL_HOST in manifest.plist
new Promise(function (resolve, reject) {
  var manifestPath = path.join(buildDir, 'ios', 'manifest.plist')
  if (fs.existsSync(manifestPath)) {
    var data = fs.readFileSync(manifestPath, 'utf8')
    var result = data.replace(/<string>LOCAL_HOST/g, `<string>${host}`)
    fs.writeFileSync(manifestPath, result, 'utf8')

    //@nhancv: Upload manifest.plist to heroku
    var formData = {
      file: fs.createReadStream(manifestPath)
    }
    request.post({ url: 'https://ncjsupload.herokuapp.com', formData: formData }, function optionalCallback(err, httpResponse, body) {
      if (err) {
        console.error('Upload manifest failed:', err)
      } else {
        console.log('Upload manifest successful!')
      }
      resolve()
    })
  } else {
    resolve()
  }
}).then(() => {
  //@nhancv: Create server
  const app = express()
  app.use('/dist', express.static(buildDir))
  app.use(express.static(path.join(__dirname, 'public')))
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
  });

  //@nhancv: Start distribute server
  app.listen(port, () => {
    console.log(`Server: ${host}`)
    open(`${host}`)
  })
})



