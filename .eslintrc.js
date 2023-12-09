module.exports = {
	env: {
		"browser": false
	},
	extends: [
		"semistandard"
	],
	parserOptions: {
		"ecmaVersion": 2015
	},
	rules: {
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"quote-props": ["off"],
		"no-multi-spaces": ["warn", { "ignoreEOLComments": true, exceptions: { "VariableDeclarator": true } }],
		"quotes": ["error", "double", { "avoidEscape": true }],
		"no-var": ["off"],
		"no-multiple-empty-lines": ["warn", { "max": 2 }],
		"spaced-comment": ["off"],
		"eqeqeq": ["off"],
		"no-redeclare": ["error", { "builtinGlobals": true }],
		"space-before-function-paren": ["warn", { "anonymous": "always", "named": "never" }],
		"no-trailing-spaces": ["warn", { "ignoreComments": true }],
		"func-call-spacing": ["warn"],
		"no-caller": "off",
		"brace-style": ["error", "stroustrup", { "allowSingleLine": true }]
	}
};
