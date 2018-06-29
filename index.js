var os = require('os');
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdout.write('Witaj, podaj komende' + '\n')
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
            	process.stdout.write('info o systemie' + '\n')
            	OSinfo.print();
            	break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});