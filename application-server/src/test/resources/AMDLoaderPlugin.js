(function() {

    var loadSource = function(file, onSourceLoad) {
        if (!file.fileSrc.match(/^\/test\//)) {
            return false;
        }

        var onSuccess = function() {
            onSourceLoad({
                file: file,
                success: true,
                message: ''
            });
        };

        var onError = function(err) {
            var msg = err.requireType;
            if (err.requireModules) {
                msg += ': ' + err.requireModules.join(', ');
            }
            onSourceLoad({
                file: file,
                success: false,
                message: msg
            });
        };

        require([file.fileSrc], onSuccess, onError);

        return true;
    };

    jstestdriver.pluginRegistrar.register({
        name: 'AMDLoaderPlugin',
        loadSource: loadSource
    });

})();