export const v4 = {
    '/v4/en/': [
        {
            text: 'Introduction',
            items: [
                { text: 'Getting Started', link: '/v4/en/' },
                { text: 'Authentication', link: '/v4/en/authentication' },
            ],
        },
        {
            text: 'Endpoints',
            collapsed: false,
            items: [
                { text: 'Algorithms', link: '/v4/en/algorithms', badge: 'GET' },
                { text: 'Captcha', link: '/v4/en/captcha', badge: 'GET' },
                {
                    text: 'Chat',
                    collapsed: true,
                    items: [
                        { text: '/v4/chat', link: '/v4/en/chat', badge: 'POST' },
                        { text: '/v4/chat', link: '/v4/en/chat/messages', badge: 'GET' },
                        {
                            text: '/v4/chat/:token',
                            link: '/v4/en/chat/clear',
                            badge: 'DELETE',
                        },
                        {
                            text: '/v4/chat/private',
                            link: '/v4/en/chat/private',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Color', link: '/v4/en/color', badge: 'GET' },
                { text: 'Convert', link: '/v4/en/convert', badge: 'GET' },
                { text: 'Dice', link: '/v4/en/dice', badge: 'GET' },
                { text: 'Domain', link: '/v4/en/domain', badge: 'GET' },
                { text: 'Encode', link: '/v4/en/encode', badge: 'GET' },
                { text: 'Geo', link: '/v4/en/geo', badge: 'GET' },
                { text: 'Hash', link: '/v4/en/hash', badge: 'POST' },
                { text: 'Hyperplanning', link: '/v4/en/hyperplanning', badge: 'POST' },
                { text: 'Infos', link: '/v4/en/infos', badge: 'GET' },
                { text: 'Levenshtein', link: '/v4/en/levenshtein', badge: 'GET' },
                { text: 'Palette', link: '/v4/en/palette', badge: 'GET' },
                { text: 'Personal', link: '/v4/en/personal', badge: 'GET' },
                { text: 'Placeholder', link: '/v4/en/placeholder', badge: 'GET' },
                { text: 'QR Code', link: '/v4/en/qrcode', badge: 'GET' },
                { text: 'Statistics', link: '/v4/en/statistics', badge: 'GET' },
                { text: 'Text', link: '/v4/en/text', badge: 'GET' },
                {
                    text: 'Tic-Tac-Toe',
                    collapsed: true,
                    items: [
                        {
                            text: '/v4/tic-tac-toe',
                            link: '/v4/en/tic-tac-toe',
                            badge: 'POST',
                        },
                        {
                            text: '/v4/tic-tac-toe/:game',
                            link: '/v4/en/tic-tac-toe/play',
                            badge: 'PATCH',
                        },
                        {
                            text: '/v4/tic-tac-toe/:game',
                            link: '/v4/en/tic-tac-toe/forfeit',
                            badge: 'DELETE',
                        },
                        {
                            text: '/v4/tic-tac-toe/fetch',
                            link: '/v4/en/tic-tac-toe/fetch',
                            badge: 'POST',
                        },
                        {
                            text: '/v4/tic-tac-toe/list',
                            link: '/v4/en/tic-tac-toe/list',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Time', link: '/v4/en/time', badge: 'GET' },
                { text: 'Token', link: '/v4/en/token', badge: 'POST' },
                { text: 'Username', link: '/v4/en/username', badge: 'GET' },
                { text: 'Validate', link: '/v4/en/validate', badge: 'GET' },
            ],
        },
        {
            text: 'Tools',
            items: [
                { text: 'Playground', link: '/v4/en/playground' },
                {
                    text: 'Changelog',
                    collapsed: true,
                    items: [
                        { text: 'Overview', link: '/v4/en/changelog' },
                        { text: '4.5.0', link: '/v4/en/changelog/4.5.0' },
                        { text: '4.4.0', link: '/v4/en/changelog/4.4.0' },
                        { text: '4.3.0', link: '/v4/en/changelog/4.3.0' },
                        { text: '4.2.0', link: '/v4/en/changelog/4.2.0' },
                        { text: '4.1.0', link: '/v4/en/changelog/4.1.0' },
                        { text: '4.0.0', link: '/v4/en/changelog/4.0.0' },
                    ],
                },
            ],
        },
        {
            text: 'Other',
            items: [{ text: 'Pricing', link: '/v4/en/pricing' }],
        },
    ],
    '/v4/fr/': [
        {
            text: 'Introduction',
            items: [
                { text: 'Commencer', link: '/v4/fr/' },
                { text: 'Authentification', link: '/v4/fr/authentication' },
            ],
        },
        {
            text: 'Endpoints',
            collapsed: false,
            items: [
                { text: 'Algorithms', link: '/v4/fr/algorithms', badge: 'GET' },
                { text: 'Captcha', link: '/v4/fr/captcha', badge: 'GET' },
                {
                    text: 'Chat',
                    collapsed: true,
                    items: [
                        { text: '/v4/chat', link: '/v4/fr/chat', badge: 'POST' },
                        { text: '/v4/chat', link: '/v4/fr/chat/messages', badge: 'GET' },
                        {
                            text: '/v4/chat/:token',
                            link: '/v4/fr/chat/clear',
                            badge: 'DELETE',
                        },
                        {
                            text: '/v4/chat/private',
                            link: '/v4/fr/chat/private',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Color', link: '/v4/fr/color', badge: 'GET' },
                { text: 'Convert', link: '/v4/fr/convert', badge: 'GET' },
                { text: 'Dice', link: '/v4/fr/dice', badge: 'GET' },
                { text: 'Domain', link: '/v4/fr/domain', badge: 'GET' },
                { text: 'Encode', link: '/v4/fr/encode', badge: 'GET' },
                { text: 'Geo', link: '/v4/fr/geo', badge: 'GET' },
                { text: 'Hash', link: '/v4/fr/hash', badge: 'POST' },
                { text: 'Hyperplanning', link: '/v4/fr/hyperplanning', badge: 'POST' },
                { text: 'Infos', link: '/v4/fr/infos', badge: 'GET' },
                { text: 'Levenshtein', link: '/v4/fr/levenshtein', badge: 'GET' },
                { text: 'Palette', link: '/v4/fr/palette', badge: 'GET' },
                { text: 'Personal', link: '/v4/fr/personal', badge: 'GET' },
                { text: 'Placeholder', link: '/v4/fr/placeholder', badge: 'GET' },
                { text: 'QR Code', link: '/v4/fr/qrcode', badge: 'GET' },
                { text: 'Statistics', link: '/v4/fr/statistics', badge: 'GET' },
                { text: 'Text', link: '/v4/fr/text', badge: 'GET' },
                {
                    text: 'Tic-Tac-Toe',
                    collapsed: true,
                    items: [
                        {
                            text: '/v4/tic-tac-toe',
                            link: '/v4/fr/tic-tac-toe',
                            badge: 'POST',
                        },
                        {
                            text: '/v4/tic-tac-toe/:game',
                            link: '/v4/fr/tic-tac-toe/play',
                            badge: 'PATCH',
                        },
                        {
                            text: '/v4/tic-tac-toe/:game',
                            link: '/v4/fr/tic-tac-toe/forfeit',
                            badge: 'DELETE',
                        },
                        {
                            text: '/v4/tic-tac-toe/fetch',
                            link: '/v4/fr/tic-tac-toe/fetch',
                            badge: 'POST',
                        },
                        {
                            text: '/v4/tic-tac-toe/list',
                            link: '/v4/fr/tic-tac-toe/list',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Time', link: '/v4/fr/time', badge: 'GET' },
                { text: 'Token', link: '/v4/fr/token', badge: 'POST' },
                { text: 'Username', link: '/v4/fr/username', badge: 'GET' },
                { text: 'Validate', link: '/v4/fr/validate', badge: 'GET' },
            ],
        },
        {
            text: 'Outils',
            items: [
                { text: 'Playground', link: '/v4/fr/playground' },
                {
                    text: 'Changelog',
                    collapsed: true,
                    items: [
                        { text: 'Aperçu', link: '/v4/fr/changelog' },
                        { text: '4.5.0', link: '/v4/fr/changelog/4.5.0' },
                        { text: '4.4.0', link: '/v4/fr/changelog/4.4.0' },
                        { text: '4.3.0', link: '/v4/fr/changelog/4.3.0' },
                        { text: '4.2.0', link: '/v4/fr/changelog/4.2.0' },
                        { text: '4.1.0', link: '/v4/fr/changelog/4.1.0' },
                        { text: '4.0.0', link: '/v4/fr/changelog/4.0.0' },
                    ],
                },
            ],
        },
        {
            text: 'Autre',
            items: [{ text: 'Tarification', link: '/v4/fr/pricing' }],
        },
    ],
};
