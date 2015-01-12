YUI().use('node-base', 'node-event-delegate', function (Y) {
        var menuButton = Y.one('.nav-menu-button'),
         nav= Y.one('#nav');
         menuButton.on('click', function (e) {nav.toggleClass('active');});
    });
YUI().use('node-base', 'node-event-delegate', function (Y) {
    Y.one('body').delegate('click', function (e) {e.preventDefault();}, 'a[href="#"]');
});