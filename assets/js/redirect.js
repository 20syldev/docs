$(() => {
    if (!document.cookie.includes('user_language_preference=')) {
        let lang = navigator.language.startsWith('en') ? 'en' : 'fr';
        let path = location.pathname.match(/^\/(v\d+)(\/.*)?$/);
        if (path) return location.replace(`/${path[1]}/${lang}${path[2] || ''}`);
        fetch('https://api.sylvain.pro/latest')
            .then(r => r.json())
            .then(({ version }) => location.replace(`/${version}/${lang}`));
    }
});