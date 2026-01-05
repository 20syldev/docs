export const v2 = {
    '/v2/en/': [
        {
            text: 'Introduction',
            items: [
                { text: 'Getting Started', link: '/v2/en/' },
                { text: 'Authentication', link: '/v2/en/authentication' },
            ],
        },
        {
            text: 'Endpoints',
            collapsed: false,
            items: [
                { text: 'Algorithms', link: '/v2/en/algorithms', badge: 'GET' },
                { text: 'Captcha', link: '/v2/en/captcha', badge: 'GET' },
                {
                    text: 'Chat',
                    collapsed: true,
                    items: [
                        { text: '/v2/chat', link: '/v2/en/chat', badge: 'GET POST' },
                        {
                            text: '/v2/chat/private',
                            link: '/v2/en/chat/private',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Color', link: '/v2/en/color', badge: 'GET' },
                { text: 'Convert', link: '/v2/en/convert', badge: 'GET' },
                { text: 'Domain', link: '/v2/en/domain', badge: 'GET' },
                { text: 'Hash', link: '/v2/en/hash', badge: 'POST' },
                { text: 'Infos', link: '/v2/en/infos', badge: 'GET' },
                { text: 'Personal', link: '/v2/en/personal', badge: 'GET' },
                { text: 'QR Code', link: '/v2/en/qrcode', badge: 'GET' },
                {
                    text: 'Tic-Tac-Toe',
                    collapsed: true,
                    items: [
                        {
                            text: '/v2/tic-tac-toe',
                            link: '/v2/en/tic-tac-toe',
                            badge: 'POST',
                        },
                        {
                            text: '/v2/tic-tac-toe/fetch',
                            link: '/v2/en/tic-tac-toe/fetch',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Token', link: '/v2/en/token', badge: 'POST' },
                { text: 'Username', link: '/v2/en/username', badge: 'GET' },
            ],
        },
        {
            text: 'Other',
            items: [{ text: 'Pricing', link: '/v2/en/pricing' }],
        },
    ],
    '/v2/fr/': [
        {
            text: 'Introduction',
            items: [
                { text: 'Commencer', link: '/v2/fr/' },
                { text: 'Authentification', link: '/v2/fr/authentication' },
            ],
        },
        {
            text: 'Endpoints',
            collapsed: false,
            items: [
                { text: 'Algorithms', link: '/v2/fr/algorithms', badge: 'GET' },
                { text: 'Captcha', link: '/v2/fr/captcha', badge: 'GET' },
                {
                    text: 'Chat',
                    collapsed: true,
                    items: [
                        { text: '/v2/chat', link: '/v2/fr/chat', badge: 'GET POST' },
                        {
                            text: '/v2/chat/private',
                            link: '/v2/fr/chat/private',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Color', link: '/v2/fr/color', badge: 'GET' },
                { text: 'Convert', link: '/v2/fr/convert', badge: 'GET' },
                { text: 'Domain', link: '/v2/fr/domain', badge: 'GET' },
                { text: 'Hash', link: '/v2/fr/hash', badge: 'POST' },
                { text: 'Infos', link: '/v2/fr/infos', badge: 'GET' },
                { text: 'Personal', link: '/v2/fr/personal', badge: 'GET' },
                { text: 'QR Code', link: '/v2/fr/qrcode', badge: 'GET' },
                {
                    text: 'Tic-Tac-Toe',
                    collapsed: true,
                    items: [
                        {
                            text: '/v2/tic-tac-toe',
                            link: '/v2/fr/tic-tac-toe',
                            badge: 'POST',
                        },
                        {
                            text: '/v2/tic-tac-toe/fetch',
                            link: '/v2/fr/tic-tac-toe/fetch',
                            badge: 'POST',
                        },
                    ],
                },
                { text: 'Token', link: '/v2/fr/token', badge: 'POST' },
                { text: 'Username', link: '/v2/fr/username', badge: 'GET' },
            ],
        },
        {
            text: 'Autre',
            items: [{ text: 'Tarification', link: '/v2/fr/pricing' }],
        },
    ],
};