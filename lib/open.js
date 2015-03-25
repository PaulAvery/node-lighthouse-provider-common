var exec = require('child_process').exec;

module.exports = function *(input) {
	try {
		var mime = (yield exec.bind(null, 'file --mime-type -b ' + input))[0].slice(0, -1);
		var app = (yield exec.bind(null, 'xdg-mime query default ' + mime))[0].slice(0, -1);		
	} catch(e) {
		return
	};

	if(app) return {
		title: 'Open with: ' + app,
		action: 'xdg-open ' + input
	};
}