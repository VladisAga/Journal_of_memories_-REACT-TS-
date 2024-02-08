// module.exports = {
//     'env': {
//         'browser': true,
//         'es2021': true
//     },
//     'extends': [
//         'eslint:recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:react/recommended'
//     ],
//     'overrides': [
//         {
//             'env': {
//                 'node': true
//             },
//             'files': [
//                 '.eslintrc.{js,cjs}'
//             ],
//             'parserOptions': {
//                 'sourceType': 'script'
//             }
//         }
//     ],
//     'parser': '@typescript-eslint/parser',
//     'parserOptions': {
//         'ecmaVersion': 'latest',
//         'sourceType': 'module'
//     },
//     plugins: [
//         '@typescript-eslint',
//         'react',
//         'react-refresh'
//     ],
//     rules: {
//         'react/react-in-jsx-scope': 'off',
//         'react-refresh/only-export-components': [
//             'warn',
//             {
//                 allowConstantExport: true
//             }
//         ],
//         'semi': [
//             'error',
//             'always',
//             {
//                 'omitLastInOneLineBlock': false
//             }
//         ],
//         'comma-dangle': ['error', 'never'],
//         quotes: ['error', 'single']
//     }
// };