var isUrl = require('is-url');

module.exports = function *(input, flag) {
	if(isUrl(input) || flag) {
		return {
			title: 'Open URL: ' + input,
			action: 'xdg-open ' + input
		};
	}
};