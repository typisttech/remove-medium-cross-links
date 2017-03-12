module.exports = function ( grunt ) {

	'use strict';
	var banner = '/**\n * <%= pkg.homepage %>\n * Copyright (c) <%= grunt.template.today("yyyy") %>\n * This file is generated automatically. Do not edit.\n */\n';
	// Project configuration
	grunt.initConfig( {

		pkg: grunt.file.readJSON( 'package.json' ),

		addtextdomain: {
			options: {
				textdomain: '<%= pkg.name %>',
			},
			target: {
				files: {
					src: [
						'*.php',
						'**/*.php',
						'!bin/**',
						'!build/**',
						'!node_modules/**',
						'!php-tests/**',
						'!tests/**',
						'!tmp/**',
						'!release/**',
						'!vendor/**',
					],
				},
			},
		},

		wp_readme_to_markdown: {
			your_target: {
				files: {
					'README.md': 'readme.txt'
				}
			},
		},

		makepot: {
			target: {
				options: {
					domainPath: '/languages',
					exclude: [
						'bin/.*',
						'build/.*',
						'node_modules/.*',
						'php-tests/.*',
						'tests/.*',
						'tmp/.*',
						'release/.*',
						'vendor/.*',
					],
					mainFile: '<%= pkg.name %>.php',
					potFilename: '<%= pkg.name %>.pot',
					potHeaders: {
						poedit: true,
						'language-team': 'Tang Rufus <support@typist.tech>',
						'last-translator': 'Tang Rufus <support@typist.tech>',
						'report-msgid-bugs-to': 'https://www.typist.tech',
						'Project-Id-Version': '<%= pkg.name %> <%= pkg.version %>',
						'language': 'en_US',
						'plural-forms': 'nplurals=2; plural=(n != 1);',
						'x-poedit-basepath': '../',
						'x-poedit-bookmarks': '',
						'x-poedit-country': 'United States',
						'x-poedit-keywordslist': true,
						'x-poedit-searchpath-0': '.',
						'x-poedit-sourcecharset': 'utf-8',
						'x-textdomain-support': 'yes',
						'x-generator': 'Remove Medium Cross Links Build Server',
					},
					type: 'wp-plugin',
					updateTimestamp: true
				}
			}
		},

		// Bump version numbers
		version: {
			composer: {
				options: {
					prefix: '"version"\\:\\s+"'
				},
				src: ['composer.json'],
			},
			readme: {
				options: {
					prefix: 'Stable tag\\:\\s+'
				},
				src: ['readme.txt'],
			},
			php: {
				options: {
					prefix: '\\* Version:\\s+'
				},
				src: ['<%= pkg.name %>.php'],
			}
		},

		// Clean the build folder
		clean: {
			build: {
				src: [
					'build/',
					'release/',
				],
			},
		},

		// Copy to build folder
		copy: {
			build: {
				expand: true,
				src: [
					'**',
					'!.distignore',
					'!.editorconfig',
					'!.git/**',
					'!.gitignore',
					'!.gitlab-ci.yml',
					'!.travis.yml',
					'!.DS_Store',
					'!Thumbs.db',
					'!behat.yml',
					'!bin/**',
					'!build/**',
					'!CHANGELOG.md',
					'!codeception.yml',
					'!codeception.dist.yml',
					'!circle.yml',
					'!composer.json',
					'!composer.lock',
					'!Gruntfile.js',
					'!package.json',
					'!phpunit.xml',
					'!multisite.xml',
					'!phpunit.xml.dist',
					'!ruleset.xml',
					'!README.md',
					'!readme.md',
					'!release/**',
					'!wp-cli.local.yml',
					'!tests/**',
					'!vendor/**',
					'!node_modules/**',
					'!*.zip',
					'!*.tar.gz',
				],
				dest: 'build/',
			},
		},

		compress: {
			build: {
				options: {
					archive: 'release/<%= pkg.name %>.zip'
				},
				expand: true,
				files: [
					{
						expand: true,
						dest: '<%= pkg.name %>/',
						cwd: 'build/',
						src: ['**'],
					},
				]
			}
		},

		wp_deploy: {
			deploy: {
				options: {
					plugin_slug: '<%= pkg.name %>',
					svn_user: 'tangrufus',
					build_dir: 'build', //relative path to your build directory
					assets_dir: 'wp-assets' //relative path to your assets directory (optional).
				},
			}
		},

	} );

	require( 'load-grunt-tasks' )( grunt );
	grunt.registerTask( 'i18n', ['addtextdomain', 'makepot'] );
	grunt.registerTask( 'readme', ['wp_readme_to_markdown'] );
	grunt.registerTask( 'precommit', ['version', 'readme', 'i18n'] );
	grunt.registerTask( 'build', ['clean', 'copy', 'compress'] );
	grunt.registerTask( 'svn-deploy', ['build', 'wp_deploy'] );

	grunt.util.linefeed = '\n';

};
