module.exports = function(grunt) {
  'use strict';

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      app: {
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/styles/{,*/}*.css',
          '<%= yeoman.app %>/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      unit: {
        files: [
          'test/spec/{,*/}*.js'
        ],
        tasks: ['jshint', 'karma:unit:run']
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'app'
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.server.options.port %>'
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'karma.conf.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        'test/spec/{,*/}*.js',
        'test/e2e/{,*/}*.js'
      ]
    },
    shell: {
      install: {
        command: [
          './node_modules/protractor/bin/install_selenium_standalone',
          'bower install'
        ].join('&&'),
        options: { stdout: true }
      },
      selenium: {
        command: './selenium/start',
        options: { stdout: true }
      },
      protractor: {
        command: 'node_modules/.bin/protractor protractor.conf.js',
        options: { stdout: true }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['shell:install']);
  grunt.registerTask('server', ['jshint', 'connect:server', 'open', 'watch:app']);
  grunt.registerTask('selenium', ['shell:selenium']);
  grunt.registerTask('test:unit', ['jshint', 'karma:unit', 'watch:unit']);
  grunt.registerTask('test:e2e', ['jshint', 'shell:protractor']);

};
