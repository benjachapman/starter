// -- Grunt Boilerplate

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // -- SASS Compilation

        sass:{
            dist:{
                files: {
                    "assets/css/main.css": "assets/scss/main.scss"
                }
            }
        },

        // -- CSS Minification

        cssmin: {
            combine: {
                files: {
                    'main.css': [
                        'assets/css/main.css',
                    ]
                },

                options:{
                    report: 'min'
                }
            }
        },
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["reactify"]
                    ],
                    alias: [
                        'lodash:',
                        'jquery:'
                    ]
                },
                files: {
                    'main.js': ['assets/js/dev.js'],
                }
            }
        },
        // browserify: {
        //     dist: {
        //         options: {
        //             alias: [
        //                 'lodash:',
        //                 'jquery:'
        //             ]
        //         },
        //         files: [{
        //             src: '',
        //             dest: 'main.js'
        //         }]
        //     }
        // }

        // -- Javascript Concatenation

        // concat: {
        //     dist: {
        //         src: [
        //             'js/dev.js'
        //         ],
        //         dest: 'js/build/main.js',
        //     }
        // },

        // -- Javascript Minification

        // uglify: {
        //     build: {
        //         src: 'js/main.js',
        //         dest: 'js/main.min.js'
        //     }
        // },

        // -- Watch -

        watch: {

            scripts: {
                files: ['assets/js/dev.js', 'assets/jsx/*.jsx', 'assets/jsx/pages/*.jsx'],
                tasks: ['browserify'],
                options: {
                    spawn: false,
                }
            },

            css: {
                files: ['assets/scss/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // -- Plugins

    require('load-grunt-tasks')(grunt);



    grunt.registerTask('default', ['sass', 'cssmin','browserify:dist']);
};
