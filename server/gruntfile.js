module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('default', ['jshint', 'express:dev', 'mochaTest']);

  // Print a timestamp (useful for when watching)
  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });

  grunt.initConfig({
    jshint: {
      files: [],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        globals: {
          'it': true,
          'describe': true,
          'before': true,
          'after': true,
          'done': true
        }
      }
    },
    express: {
      dev: {
        options: {
          script: './server.js'
        }
      }
    },
    watch: {
      all: {
        files: ['./lib/**/index.js', 'config.js', 'gruntFile.js', './models/*.js'],
        tasks: ['default']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          timeout: '10000'
        },
        src: ['test/api/*.js', 'test/api/**/*.js', 'test/unit/*.js', 'test/record/*.js', 'test/*.js']
      }
    }
  });

};