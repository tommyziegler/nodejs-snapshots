var AdmZip = require('adm-zip'),
    fs	   = require('fs');
    
//var zip = new AdmZip('./Test.zip');
//fs.mkdirSync('./Test');
//zip.extractAllTo('./Test', true);


require('child_process').execFile('ditto', ['-k', '-x', './PackageDownloader_Mac.zip', './'], function(err, stdout, stderr) {
    console.log('err: ' + err);
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    
if(err == null) {
    console.log('Success!');
    } else {
    console.log('Error!');
    }
});
