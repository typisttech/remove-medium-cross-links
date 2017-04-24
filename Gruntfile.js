/*
 * Remove Medium cross links
 *
 * Remove Medium cross links footer from WordPress posts.
 *
 * @package RMCL
 *
 * @author Typist Tech <remove-medium-cross-links@typist.tech>
 * @copyright 2017 Typist Tech
 * @license GPL-2.0+
 *
 * @see https://www.typist.tech/projects/remove-medium-cross-links
 * @see https://wordpress.org/plugins/remove-medium-cross-links/
 */

module.exports = function (grunt) {

    'use strict';

    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        addtextdomain: {
            options: {
                textdomain: '<%= pkg.name %>',
                updateDomains: true
            },
            target: {
                files: {
                    src: [
                        '*.php',
                        'src/**/*.php',
                        'vendor/**/*.php'
                    ]
                }
            }
        },

        makepot: {
            target: {
                options: {
                    include: [
                        '.*.php',
                        'src/.*',
                        'vendor/.*'
                    ],
                    mainFile: '<%= pkg.name %>.php',
                    potHeaders: {
                        poedit: true,
                        'Project-Id-Version': '<%= pkg.name %> <%= pkg.version %>',
                        'language-team': '<%= pkg.pot.languageteam %>',
                        'last-translator': '<%= pkg.pot.lasttranslator %>',
                        'report-msgid-bugs-to': '<%= pkg.pot.reportmsgidbugsto %>'
                    },
                    type: 'wp-plugin',
                    updateTimestamp: true
                }
            }
        },

        // Bump version numbers
        version: {
            changelog: {
                options: {
                    prefix: 'future-release='
                },
                src: ['.github_changelog_generator']
            },
            php: {
                options: {
                    prefix: '\\* Version:\\s+'
                },
                src: ['<%= pkg.name %>.php']
            },
            readme: {
                options: {
                    prefix: 'Stable tag:\\s+'
                },
                src: ['README.txt']
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.util.linefeed = '\n';

};
