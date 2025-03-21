$(() => {
    if (document.cookie.includes('user_language_preference=')) return;
    let lang = navigator.language.startsWith('en') ? 'en' : 'fr', p = location.pathname;
    let v = p.match(/^\/(v\d+)(\/.*)?$/);
    if (v) return location.replace(`/${v[1]}/${lang}${v[2] || ''}`);
    fetch('https://api.sylvain.pro/latest').then(r => r.json()).then(({ version }) =>
        location.replace(`/${version}/${lang}${/^\/pricing(\.html)?$/.test(p) ? '/pricing' : ''}`)
    );
});
