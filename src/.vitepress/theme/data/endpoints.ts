export interface EndpointParam {
    name: string;
    required: boolean;
    default?: string;
    options?: string[];
}

export interface EndpointDef {
    name: string;
    path: string;
    method: 'get' | 'post';
    params: EndpointParam[];
    group: string;
}

export const endpoints: EndpointDef[] = [
    // Standalone GET endpoints
    {
        name: 'Algorithms',
        path: '/algorithms',
        method: 'get',
        group: 'Endpoints',
        params: [
            {
                name: 'method',
                required: true,
                options: [
                    'anagram',
                    'bubblesort',
                    'factorial',
                    'gcd',
                    'isprime',
                    'fibonacci',
                    'palindrome',
                    'primelist',
                    'primefactors',
                    'reverse',
                    'roman',
                ],
            },
            { name: 'value', required: true },
            { name: 'value2', required: false },
        ],
    },
    {
        name: 'Captcha',
        path: '/captcha',
        method: 'get',
        group: 'Endpoints',
        params: [{ name: 'text', required: true }],
    },
    {
        name: 'Chat (GET)',
        path: '/chat',
        method: 'get',
        group: 'Chat',
        params: [],
    },
    {
        name: 'Chat (POST)',
        path: '/chat',
        method: 'post',
        group: 'Chat',
        params: [
            { name: 'username', required: true },
            { name: 'message', required: true },
            { name: 'token', required: false },
        ],
    },
    {
        name: 'Chat Private',
        path: '/chat/private',
        method: 'post',
        group: 'Chat',
        params: [
            { name: 'username', required: true },
            { name: 'token', required: true },
        ],
    },
    {
        name: 'Dice',
        path: '/dice',
        method: 'get',
        group: 'Endpoints',
        params: [{ name: 'roll', required: true }],
    },
    {
        name: 'Encode',
        path: '/encode',
        method: 'get',
        group: 'Endpoints',
        params: [
            {
                name: 'method',
                required: true,
                options: [
                    'base64encode',
                    'base64decode',
                    'urlencode',
                    'urldecode',
                    'morse',
                    'unmorse',
                    'rot13',
                    'caesar',
                    'binary',
                    'unbinary',
                ],
            },
            { name: 'text', required: true },
            { name: 'shift', required: false },
        ],
    },
    {
        name: 'Color',
        path: '/color',
        method: 'get',
        group: 'Endpoints',
        params: [],
    },
    {
        name: 'Geo',
        path: '/geo',
        method: 'get',
        group: 'Endpoints',
        params: [
            { name: 'lat1', required: true },
            { name: 'lon1', required: true },
            { name: 'lat2', required: true },
            { name: 'lon2', required: true },
        ],
    },
    {
        name: 'Convert',
        path: '/convert',
        method: 'get',
        group: 'Endpoints',
        params: [
            { name: 'value', required: true },
            { name: 'from', required: true, options: ['celsius', 'fahrenheit', 'kelvin'] },
            { name: 'to', required: true, options: ['celsius', 'fahrenheit', 'kelvin'] },
        ],
    },
    {
        name: 'Domain',
        path: '/domain',
        method: 'get',
        group: 'Endpoints',
        params: [],
    },
    {
        name: 'Hash',
        path: '/hash',
        method: 'post',
        group: 'Endpoints',
        params: [
            { name: 'text', required: true },
            { name: 'method', required: true, options: ['md5', 'sha1', 'sha256', 'sha384', 'sha512', 'blake2b512'] },
        ],
    },
    {
        name: 'Hyperplanning',
        path: '/hyperplanning',
        method: 'post',
        group: 'Endpoints',
        params: [
            { name: 'url', required: true },
            { name: 'detail', required: false, options: ['full', 'list'] },
        ],
    },
    {
        name: 'Infos',
        path: '/infos',
        method: 'get',
        group: 'Endpoints',
        params: [],
    },
    {
        name: 'Levenshtein',
        path: '/levenshtein',
        method: 'get',
        group: 'Endpoints',
        params: [
            { name: 'str1', required: true },
            { name: 'str2', required: true },
        ],
    },
    {
        name: 'Personal',
        path: '/personal',
        method: 'get',
        group: 'Endpoints',
        params: [],
    },
    {
        name: 'Statistics',
        path: '/statistics',
        method: 'get',
        group: 'Endpoints',
        params: [{ name: 'values', required: true }],
    },
    {
        name: 'Text',
        path: '/text',
        method: 'get',
        group: 'Endpoints',
        params: [
            { name: 'method', required: true, options: ['stats', 'slug', 'lorem', 'number'] },
            { name: 'value', required: false },
            { name: 'type', required: false, options: ['words', 'sentences', 'paragraphs'] },
            { name: 'count', required: false },
            { name: 'lang', required: false, options: ['en', 'fr'] },
        ],
    },
    {
        name: 'Validate',
        path: '/validate',
        method: 'get',
        group: 'Endpoints',
        params: [
            { name: 'type', required: true, options: ['luhn', 'iban', 'email'] },
            { name: 'value', required: true },
        ],
    },
    {
        name: 'Palette',
        path: '/palette',
        method: 'get',
        group: 'Endpoints',
        params: [
            { name: 'color', required: true },
            {
                name: 'type',
                required: true,
                options: ['complementary', 'triadic', 'analogous', 'tetradic', 'split-complementary'],
            },
        ],
    },
    {
        name: 'Placeholder',
        path: '/placeholder',
        method: 'get',
        group: 'Endpoints',
        params: [
            { name: 'type', required: true, options: ['image', 'skeleton'] },
            { name: 'width', required: false },
            { name: 'height', required: false },
            { name: 'bg', required: false },
            { name: 'color', required: false },
            { name: 'text', required: false },
            { name: 'rows', required: false },
            { name: 'avatar', required: false, options: ['circle', 'rounded', 'square'] },
            { name: 'animate', required: false, options: ['shimmer', 'pulse', 'none'] },
            { name: 'speed', required: false },
            { name: 'radius', required: false },
        ],
    },
    {
        name: 'QR Code',
        path: '/qrcode',
        method: 'get',
        group: 'Endpoints',
        params: [{ name: 'url', required: true }],
    },
    {
        name: 'Tic-Tac-Toe',
        path: '/tic-tac-toe',
        method: 'post',
        group: 'Tic-Tac-Toe',
        params: [
            { name: 'username', required: true },
            { name: 'move', required: true },
            { name: 'session', required: true },
            { name: 'game', required: true },
        ],
    },
    {
        name: 'Tic-Tac-Toe Fetch',
        path: '/tic-tac-toe/fetch',
        method: 'post',
        group: 'Tic-Tac-Toe',
        params: [
            { name: 'username', required: true },
            { name: 'game', required: false },
            { name: 'private', required: false, options: ['true', 'false'] },
        ],
    },
    {
        name: 'Tic-Tac-Toe List',
        path: '/tic-tac-toe/list',
        method: 'post',
        group: 'Tic-Tac-Toe',
        params: [],
    },
    {
        name: 'Time',
        path: '/time',
        method: 'get',
        group: 'Endpoints',
        params: [
            { name: 'type', required: false, options: ['live', 'random'] },
            {
                name: 'format',
                required: false,
                options: [
                    'iso',
                    'utc',
                    'timestamp',
                    'locale',
                    'date',
                    'time',
                    'year',
                    'month',
                    'day',
                    'hour',
                    'minute',
                    'second',
                    'ms',
                    'dayOfWeek',
                    'dayOfYear',
                    'weekNumber',
                    'timezone',
                ],
            },
            { name: 'timezone', required: false },
            { name: 'start', required: false },
            { name: 'end', required: false },
        ],
    },
    {
        name: 'Token',
        path: '/token',
        method: 'post',
        group: 'Endpoints',
        params: [
            { name: 'len', required: false, default: '24' },
            {
                name: 'type',
                required: false,
                options: ['alpha', 'alphanum', 'base64', 'hex', 'num', 'punct', 'urlsafe', 'uuid'],
            },
        ],
    },
    {
        name: 'Username',
        path: '/username',
        method: 'get',
        group: 'Endpoints',
        params: [],
    },
];
