const Bundler = require('parcel-bundler');
const Path = require('path');

// Single entrypoint file location:
const entryFiles = Path.join(__dirname,'client','/index.html');
const port=3500
const options = {
    outDir: './build', 
    outFile: 'index.html',

    watch: true, 
    cache: false, 
    target: 'electron',
    logLevel: 3,
    sourceMaps: true,
};
async function runBundle() {
    const bundler = new Bundler(entryFiles, options);
    bundler.on('buildError', error => {
        console.log(error)
    })
    const bundle = await bundler.bundle();
    const server= await bundler.serve()
    server.on('listening', function() {
        console.log("Ready")
    });
}
  
runBundle();  