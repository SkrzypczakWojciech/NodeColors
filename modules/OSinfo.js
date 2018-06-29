var os = require('os');
var timeformatter = require('../modules/timeformatter2');
var colors = require('colors');


function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.green, type);
    console.log('Release:'.rainbow, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime: ~'.bgRed, (uptime / 3600).toFixed(0), 'h');
    console.log('User name:'.bgBlue, userInfo.username);
    console.log('Home dir:'.cyan, userInfo.homedir);
}

exports.print = getOSinfo;