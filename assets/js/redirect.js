$(document).ready(function() {
    $(() => /^\/v\d+\/[^/]+$/.test(location.pathname) && location.replace('/' + (navigator.language.startsWith('en') ? 'en' : 'fr') + location.pathname));
});