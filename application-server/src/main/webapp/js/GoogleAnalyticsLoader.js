define('GoogleAnalyticsLoader',
['Constants'],
function(Constants) {
    return {
        load: function() {
            var googleAnalyticsAccount = Constants.GOOGLE_ANALYTICS_ACCOUNT;

            if(googleAnalyticsAccount !== '') {
                var _gaq=[['_setAccount', googleAnalyticsAccount],['_trackPageview']];
                (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
                    s.parentNode.insertBefore(g,s)}(document,'script'));
            }
        }
    };
});
