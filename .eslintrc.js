module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "import/no-extraneous-dependencies": ["error", {
            "devDependencies": [
                "**/*.stories.js"
            ]
        }],
        "import/order": ["error", {
            "newlines-between": "always"
        }],
        "react/jsx-filename-extension": ["error", {
            "extensions": [".js"]
        }],
        "react/jsx-max-props-per-line": "error"
    }
};
