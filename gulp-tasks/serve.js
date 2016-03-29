var gulp = require('gulp');
var express = require('express');
var app = express();
var path = require('path');

gulp.task('serve', function() {

    app.use('/', express.static(path.resolve('./app')));
    app.use('/build', express.static(path.resolve('./build')));

    app.get('/', function (req, res) {
        res.sendFile('./index.html');
    });

    app.listen(3000);

    console.log('Running at Port 3000');
});