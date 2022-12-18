/**
 *****************************************
 * Created by edonet@163.com
 * Created on 2020-06-14 16:15:22
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 配置
 *****************************************
 */
export = {

  /* 环境变量 */
  env: {
    browser: true,
    node: true,
    es6: true,
    es2020: true,
    commonjs: true,
    amd: true,
    worker: true,
    jest: true,
  },

  /* 全局配置 */
  globals: {
    $: true,
    Vue: true,
    angular: true,
    JSX: true,
    NodeJS: true,
  },

  /* 基本设置 */
  settings: {
    react: {

      // Pragma to use, default to 'React'
      pragma: 'React',

      // React version, default to the latest React stable release
      version: 'detect',
    },
  },

  /* 编译器 */
  parser: '@typescript-eslint/parser',

  /* 编译选项 */
  parserOptions: {

    // 指定ECMAScript支持的版本，6为ES6
    ecmaVersion: 2020,

    // 指定来源的类型，有两种”script”或”module”
    sourceType: 'module',

    // 无需指定配置文件
    requireConfigFile: false,

    // 指定【ecma】特性
    ecmaFeatures: {

      // 全局返回
      globalReturn: false,

      // 默认严格模式
      impliedStrict: true,

      // 支持jsx文件
      jsx: true,
    },
  },

  /* 插件 */
  plugins: [
    '@typescript-eslint',
    'html',
    'react',
    'react-hooks',
  ],

  /* 扩展 */
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],

  /* 规则 */
  rules: {

    // 严格模式
    'strict': ['off', 'safe'],

    // 循环或者条件语句必须使用花括号包围
    'curly': 'warn',

    // 双峰驼命名格式
    'camelcase': 'off',

    // 强制使用三等号
    'eqeqeq': 'warn',

    // 使用单引号
    'quotes': ['error', 'single'],

    // jsx 属性使用双引号
    'jsx-quotes': ['error', 'prefer-double'],

    // 强制 const 声明
    'prefer-const': 'off',

    // 换行符风格
    'linebreak-style': ['error', 'unix'],

    // 缩进
    'indent': ['off', 2],

    // 使用未定义的变量
    'no-use-before-define': ['error', { functions: false }],

    // 未定义变量
    'no-undef': ['error', { typeof: false }],

    // 变量定义了但未使用
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],

    // Symbol 不需要 new 关键字
    'no-new-symbol': 'error',

    // 重复定义
    'no-redeclare': 'error',

    // 不使用 with 关键字
    'no-with': 'error',

    // 实例化类时应该使用 new 关键字
    'new-cap': 'off',

    // 禁用 arguments.caller 和 arguments.callee
    'no-caller': 'error',

    // 允许 console
    'no-console': 'off',

    // 允许 debug
    'no-debugger': 'off',

    // 禁用 eval
    'no-eval': 'error',

    // 禁止扩展原生类
    'no-extend-native': 'error',

    // 禁止 case 击穿
    'no-fallthrough': 'error',

    // 禁用隐示 eval 语句
    'no-implied-eval': 'error',

    // 禁用 label 语法
    'no-labels': 'error',

    // 禁用独立的块
    'no-lone-blocks': 'error',

    // 禁止在循环中定义函数
    'no-loop-func': 'error',

    // 校验多余空格
    'no-multi-spaces': 'warn',

    // 禁止与自己比较
    'no-self-compare': 'error',

    // 禁止没有更新的循环条件
    'no-unmodified-loop-condition': 'error',

    // 校验无效的表达式
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: true,
    }],

    // 不允许末尾空格
    'no-trailing-spaces': ['error'],

    // 校验无效的返回
    'no-void': 'error',

    // 语句后的分号
    'semi': ['error', 'always'],

    // 分号前后空格
    'semi-spacing': ['error'],

    // 无效的 typeof 判断
    'valid-typeof': 'error',

    // 指定数组的元素之间要以空格隔开(,后面):
    // - never参数：[ 之前和 ] 之后不能带空格，
    // - always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': ['error', 'never'],

    // 对象空格
    'object-curly-spacing': ['error', 'always'],

    // 键空格
    'key-spacing': ['error'],

    // 函数参数空格
    'space-in-parens': ['error', 'never'],

    // 注释前空格
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+', '*'] }],

    // 关键字后加空格
    'keyword-spacing': ['error'],

    // 一元操作空格
    'space-unary-ops': ['error'],

    // 函数名空格
    'space-before-function-paren': ['error', {
      named: 'never',
      anonymous: 'always',
      asyncArrow: 'always',
    }],

    // 在块级作用域外访问块内定义的变量是否报错提示
    'block-scoped-var': 'warn',

    // if while function 后面的{必须与if在同一行，java风格。
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 数组和对象键值对最后一个逗号:
    // - never参数：不能带末尾的逗号,
    // - always参数：必须带末尾的逗号，
    // - always-multiline：多行模式必须带逗号，单行模式不能带逗号
    'comma-dangle': ['error', 'always-multiline'],

    // 控制逗号前后的空格
    'comma-spacing': ['error', { before: false, after: true }],

    // 控制逗号在行尾出现还是在行首出现
    // http://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],

    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    'computed-property-spacing': ['error', 'never'],

    // switch语句强制default分支，也可添加 // no default 注释取消此次警告
    'default-case': 'error',

    // 强制object.key 中 . 的位置，参数:
    // - property，'.'号应与属性在同一行
    // - object, '.' 号应与对象名在同一行
    'dot-location': ['error', 'property'],

    // 文件末尾强制换行
    'eol-last': 'error',

    // 方法定义风格，参数：
    // - declaration: 强制使用方法声明的方式，function f(){} e.g [2, 'declaration']
    // - expression：强制使用方法表达式的方式，var f = function() {}  e.g [2, 'expression']
    // - allowArrowFunctions: declaration风格中允许箭头函数。 e.g [2, 'declaration', { allowArrowFunctions: true }]
    'func-style': 'off',

    // 在 for-in 中使用 hasOwnProperty 过滤
    'guard-for-in': 'error',


    // eslint-plugin-react
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-sort-prop-types': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-multi-comp': 'off',
    'react/no-unknown-property': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'react/wrap-multilines': 'off',


    // eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // typescript eslint
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
  },

  /* 覆盖配置 */
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        'no-undef': 'off',
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
      },
    },
  ],
};
