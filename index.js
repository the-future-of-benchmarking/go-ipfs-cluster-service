var binwrap = require("binwrap");
var path = require("path");

var packageInfo = require(path.join(__dirname, "package.json"));
// const v = packageInfo.version.replace(/-[0-9]+/, '')
const v = "0.13.2"
const root = `https://dist.ipfs.io/ipfs-cluster-service/v${v}/ipfs-cluster-service_v${v}_`

module.exports = binwrap({
  dirname: __dirname,
  binaries: [
    'ipfs-cluster-service'
  ],
  binariesPath: 'ipfs-cluster-service',
  urls: {
    'darwin-x64': root + 'darwin-amd64.tar.gz',

    'freebsd-x32': root + 'freebsd-386.tar.gz',
    'freebsd-x64': root + 'freebsd-amd64.tar.gz',
    'freebsd-arm': root + 'freebsd-arm.tar.gz',

    'linux-x32': root + 'linux-386.tar.gz',
    'linux-x64': root + 'linux-amd64.tar.gz',
    'linux-arm': root + 'linux-arm.tar.gz',
    'linux-arm64': root + 'linux-arm64.tar.gz',

    'win32-ia32': root + 'windows-386.zip',
    'win32-x64': root + 'windows-amd64.zip'
  }
})