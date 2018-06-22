module.exports = {
    extends: 'airbnb',
    rules: {
        'func-names': ['error', 'never'],
        'react/jsx-filename-extension': 0,
        'react/jsx-boolean-value': true,
        'jsx-a11y/accessible-emoji': false,
        'react/prop-types': 0,
        'arrow-body-style': 0,
        'no-debugger': 0,
        'no-duplicate-imports': [
            'error',
            {
                includeExports: true
            }
        ],
        'react/jsx-closing-bracket-location': [1, 'line-aligned'],
        'no-use-before-define': [2, {
            functions: false
        }],
        'react/jsx-no-bind': [
            true,
            {
                ignoreRefs: false,
                allowArrowFunctions: true,
                allowFunctions: false,
                allowBind: true
            }
        ]
    }
};