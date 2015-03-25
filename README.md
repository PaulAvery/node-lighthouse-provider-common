lighthouse-provider-common
==========================
Some useful providers for the [lighthouse-provider](https://github.com/PaulAvery/node-lighthouse-provider) module.

Usage
-----
Open installed applications via lighthouse

	var common = require('lighthouse-provider-common');
	var lighthouse = new Lighthouse();
	lighthouse.attach(common.xdg);

	process.stdin.pipe(lighthouse).pipe(process.stdout);


Providers
---------
### xdg
Reads output from `xdg_menu` and provides fuzzy matching (like SublimeText) to search through your installed applications. Requires `xdg_menu` to be available.

### open
Treats your input as a path and opens it with its default application. Requires `file`, `xdg-mime` and `xdg-open` to be available on the system.

### exec
Simply run your input directly.

### url
If a url is detected, you may open it in your default browser. Requires `xdg-open` to be available on the system.