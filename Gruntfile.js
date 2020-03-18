module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: 'index.html',
          dest: 'dist/index.html'
        }
        },
        cssmin: {
            "dist/index.css": "index.css"
        },
        uglify: {
            release:{
                files:{
                    "dist/index.js":"index.js",
                    "dist/jquery/jquery-3.0.0.min.js":"./jquery/jquery-3.0.0.min.js"
                }
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['uglify','cssmin','htmlmin']);
 
};