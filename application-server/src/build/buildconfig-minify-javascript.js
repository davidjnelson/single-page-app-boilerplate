({
    baseUrl: "../main/webapp/js",
    mainConfigFile: '../main/webapp/js/main.js',
    locale: "en_us",
    optimize: "closure",
    inlineText: true,
    name: '../../../build/almond-0.1.3',
    include: ['main'],
    insertRequire: ['main'],
    out: '../../target/minified-output/js/require.js',
    wrap: true
})
