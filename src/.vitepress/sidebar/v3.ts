export const v3 = {
    '/v3/en/': [
        {
            text: 'Introduction',
            items: [
                { text: 'Getting Started', link: '/v3/en/' },
                { text: 'Authentication', link: '/v3/en/authentication' },
            ],
        },
        {
            text: 'Endpoints',
            collapsed: false,
            items: [
                { text: 'Algorithms', link: '/v3/en/algorithms', badge: 'GET' },
                { text: 'Captcha', link: '/v3/en/captcha', badge: 'GET' },
                {
                    text: 'Chat',
                    collapsed: true,
                    items: [
                        { text: '/v3/chat', link: '/v3/en/chat', badge: 'GET POST' },
                        {
                            text: '/v3/chat/private',
                            link: '/v3/en/chat/private',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Color', link: '/v3/en/color', badge: 'GET' },
                { text: 'Convert', link: '/v3/en/convert', badge: 'GET' },
                { text: 'Domain', link: '/v3/en/domain', badge: 'GET' },
                { text: 'Hash', link: '/v3/en/hash', badge: 'POST' },
                { text: 'Hyperplanning', link: '/v3/en/hyperplanning', badge: 'POST' },
                { text: 'Infos', link: '/v3/en/infos', badge: 'GET' },
                { text: 'Levenshtein', link: '/v3/en/levenshtein', badge: 'GET' },
                { text: 'Personal', link: '/v3/en/personal', badge: 'GET' },
                { text: 'QR Code', link: '/v3/en/qrcode', badge: 'GET' },
                {
                    text: 'Tic-Tac-Toe',
                    collapsed: true,
                    items: [
                        {
                            text: '/v3/tic-tac-toe',
                            link: '/v3/en/tic-tac-toe',
                            badge: 'POST',
                        },
                        {
                            text: '/v3/tic-tac-toe/fetch',
                            link: '/v3/en/tic-tac-toe/fetch',
                            badge: 'POST',
                        },
                        {
                            text: '/v3/tic-tac-toe/list',
                            link: '/v3/en/tic-tac-toe/list',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Time', link: '/v3/en/time', badge: 'GET' },
                { text: 'Token', link: '/v3/en/token', badge: 'POST' },
                { text: 'Username', link: '/v3/en/username', badge: 'GET' },
            ],
        },
        {
            text: 'Other',
            items: [{ text: 'Pricing', link: '/v3/en/pricing' }],
        },
    ],
    '/v3/fr/': [
        {
            text: 'Introduction',
            items: [
                { text: 'Commencer', link: '/v3/fr/' },
                { text: 'Authentification', link: '/v3/fr/authentication' },
            ],
        },
        {
            text: 'Endpoints',
            collapsed: false,
            items: [
                { text: 'Algorithms', link: '/v3/fr/algorithms', badge: 'GET' },
                { text: 'Captcha', link: '/v3/fr/captcha', badge: 'GET' },
                {
                    text: 'Chat',
                    collapsed: true,
                    items: [
                        { text: '/v3/chat', link: '/v3/fr/chat', badge: 'GET POST' },
                        {
                            text: '/v3/chat/private',
                            link: '/v3/fr/chat/private',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Color', link: '/v3/fr/color', badge: 'GET' },
                { text: 'Convert', link: '/v3/fr/convert', badge: 'GET' },
                { text: 'Domain', link: '/v3/fr/domain', badge: 'GET' },
                { text: 'Hash', link: '/v3/fr/hash', badge: 'POST' },
                { text: 'Hyperplanning', link: '/v3/fr/hyperplanning', badge: 'POST' },
                { text: 'Infos', link: '/v3/fr/infos', badge: 'GET' },
                { text: 'Levenshtein', link: '/v3/fr/levenshtein', badge: 'GET' },
                { text: 'Personal', link: '/v3/fr/personal', badge: 'GET' },
                { text: 'QR Code', link: '/v3/fr/qrcode', badge: 'GET' },
                {
                    text: 'Tic-Tac-Toe',
                    collapsed: true,
                    items: [
                        {
                            text: '/v3/tic-tac-toe',
                            link: '/v3/fr/tic-tac-toe',
                            badge: 'POST',
                        },
                        {
                            text: '/v3/tic-tac-toe/fetch',
                            link: '/v3/fr/tic-tac-toe/fetch',
                            badge: 'POST',
                        },
                        {
                            text: '/v3/tic-tac-toe/list',
                            link: '/v3/fr/tic-tac-toe/list',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Time', link: '/v3/fr/time', badge: 'GET' },
                { text: 'Token', link: '/v3/fr/token', badge: 'POST' },
                { text: 'Username', link: '/v3/fr/username', badge: 'GET' },
            ],
        },
        {
            text: 'Autre',
            items: [{ text: 'Tarification', link: '/v3/fr/pricing' }],
        },
    ],
};