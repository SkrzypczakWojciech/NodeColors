function timeformatter() {
	console.log('Uptime in minutes: ~', (uptime / 60).toFixed(0), 'min' + '\n');
	console.log('Uptime in hours: ~', (uptime / 3660).toFixed(0), 'h' + '\n');
}
exports.print = timeformatter;