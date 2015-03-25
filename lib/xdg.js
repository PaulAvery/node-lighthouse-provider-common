var fuzzy = require('fuzzy');
var execSync = require('child_process').execSync;
var regex = /"(.*)" EXEC (.*)/;

//Load menu contents on start and parse out data
var menu = execSync('xdg_menu').toString().split('\n').reduce(function(sum, element) {
	var res = regex.exec(element);

	if(res) {
		sum.push({
			name: res[1],
			cmd: res[2]
		});
	}

	return sum;
}, []);

module.exports = function *(input) {
	return fuzzy.filter(input, menu, {
		extract: function(el) {
			return el.name;
		}
	}).map(function(el) {
		return {
			title: el.original.name,
			action: el.original.cmd
		}
	});
}