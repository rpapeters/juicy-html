module.exports = function(grunt) {

    grunt.initConfig({
        bump: {
          options: {
            files: ['package.json', 'bower.json', 'juicy-html.js'],
            commit: true,
            commitMessage: '%VERSION%',
            commitFiles: ['package.json', 'bower.json', 'juicy-html.js'],
            createTag: true,
            tagName: '%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: false,
            globalReplace: false,
            prereleaseName: false,
            regExp: false
          }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
};
