module.exports = function(grunt) {

  'use strict';

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var projectConfig = {
    dev:          'dev',
    dist:         'dist',
    // test:         'test',

    js:           'assets/js',
    css:          'assets/css',
    less:         'assets/less',
    img:          'assets/img'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cfg: projectConfig,

    clean: {
      dist: {
        files: [
          {
            src: [
              '<%= cfg.dist %>'
            ]
          }
        ]
      }
    },

    useminPrepare: {
      options: {
        dest: '<%= cfg.dist %>'
      },
      html: '<%= cfg.dev %>/index.html'
    },

    usemin: {
      options: {
        dirs: ['<%= cfg.dist %>']
      },
      html: ['<%= cfg.dist %>/index.html'],
      css: ['<%= cfg.dist %>/<%= cfg.css %>/{,*/}*.css']
    },

    htmlcompressor: {
      compile: {
        files: {
          '<%= cfg.dist %>/index.html': '<%= cfg.dist %>/index.html'
        },
        options: {
          type: 'html',
          preserveServerScript: true,
          preservePhp: true
          //compressJs: false,
          //compressCss: false
        }
      }
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= cfg.dev %>/',
            src: [
              'assets/img/**',
              'assets/fonts/**',
              'favicon.png',
              'robots.txt',
              '.htaccess',
              '*'
            ],
            dest: '<%= cfg.dist %>'
          }
        ]
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', '> 10%', 'android 4', 'ie 8']
      },
      dev: {
        files: {
          '<%= cfg.dev %>/<%= cfg.css %>/main.css': '<%= cfg.dev %>/<%= cfg.css %>/main.css'
        }
      },
      dist: {
        files: {
          '<%= cfg.dist %>/<%= cfg.css %>/main.css': '<%= cfg.dist %>/<%= cfg.css %>/main.css'
        }
      }
    },

    csso: {
      dist: {
        files : {
          '<%= cfg.dist %>/<%= cfg.css %>/main.css': ['<%= cfg.dist %>/<%= cfg.css %>/main.css']
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', '<%= cfg.dev %>/<%= cfg.js %>/**/*.js'],
      options: {
        ignores: ['<%= cfg.dev %>/<%= cfg.js %>/vendor/*.js', '<%= cfg.dev %>/<%= cfg.js %>/shim/*.js'],
        curly: true,
        eqeqeq: true,
        immed: true,
        newcap: true,
        eqnull: true,
        sub: true,
        browser: true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    uglify: {
      dist: {
        files: {
          '<%= cfg.dist %>/<%= cfg.js %>/shim/classlist.js': ['<%= cfg.dev %>/<%= cfg.js %>/shim/classlist.js']
        }
      }
    },

    less: {
      dev: {
        options: {
          paths: ['<%= cfg.dev %>/<%= cfg.less %>']
        },
        files: {
          '<%= cfg.dev %>/<%= cfg.css %>/normalize.css': '<%= cfg.dev %>/<%= cfg.less %>/normalize.less',
          '<%= cfg.dev %>/<%= cfg.css %>/main.css': '<%= cfg.dev %>/<%= cfg.less %>/main.less',
          '<%= cfg.dev %>/<%= cfg.css %>/helpers.css': '<%= cfg.dev %>/<%= cfg.less %>/helpers.less',
          '<%= cfg.dev %>/<%= cfg.css %>/print.css': '<%= cfg.dev %>/<%= cfg.less %>/print.less'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['<%= cfg.dev %>/*.html']
      },
      css: {
        files: ['<%= cfg.dev %>/<%= cfg.less %>/*.less'],
        tasks: ['less', 'autoprefixer:dev']
      },
      js: {
        files: ['Gruntfile.js', '<%= cfg.dev %>/<%= cfg.js %>/**/*.js'],
        tasks: ['jshint']
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          livereload: true,
          port: '9002',
          base: 'dev'
        }
      }
    },

    concurrent: {
      std: {
        tasks: ['watch', 'connect'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  grunt.registerTask('build', ['clean:dist', 'less', 'useminPrepare', 'cssmin', 'concat', 'uglify', 'copy:dist', 'usemin', 'autoprefixer:dist', 'csso', 'htmlcompressor']);
  grunt.registerTask('server', ['concurrent:std']);
};