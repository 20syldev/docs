export type CodeLang = 'curl' | 'javascript' | 'python' | 'php';

export const CODE_LANGS: readonly CodeLang[] = ['curl', 'javascript', 'python', 'php'] as const;

export const CODE_LANG_LABELS: Record<CodeLang, string> = {
    curl: 'cURL',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
};

export interface SnippetOptions {
    method: 'get' | 'post';
    url: string;
    body?: Record<string, string>;
}

function toPythonDict(obj: Record<string, string>): string {
    const entries = Object.entries(obj)
        .map(([k, v]) => `"${k}": "${v}"`)
        .join(', ');
    return `{${entries}}`;
}

function curlSnippet({ method, url, body = {} }: SnippetOptions): string {
    if (method === 'post') {
        const data = Object.entries(body)
            .map(([k, v]) => `${k}=${v}`)
            .join('&');
        return `curl -X POST \\\n  -d "${data}" \\\n  "${url}"`;
    }
    return `curl -X GET \\\n  "${url}"`;
}

function javascriptSnippet({ method, url, body = {} }: SnippetOptions): string {
    if (method === 'post') {
        const bodyObj = JSON.stringify(body, null, 4);
        return `const response = await fetch("${url}", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(${bodyObj})
});
const data = await response.json();`;
    }
    return `const response = await fetch("${url}");
const data = await response.json();`;
}

function pythonSnippet({ method, url, body = {} }: SnippetOptions): string {
    if (method === 'post') {
        return `import requests

response = requests.post(
    "${url}",
    data=${toPythonDict(body)}
)
data = response.json()`;
    }
    return `import requests

response = requests.get("${url}")
data = response.json()`;
}

function phpSnippet({ method, url, body = {} }: SnippetOptions): string {
    if (method === 'post') {
        const fields = Object.entries(body)
            .map(([k, v]) => `    "${k}" => "${v}"`)
            .join(',\n');
        return `$ch = curl_init("${url}");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
${fields}
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$data = json_decode(curl_exec($ch), true);
curl_close($ch);`;
    }
    return `$response = file_get_contents("${url}");
$data = json_decode($response, true);`;
}

export function generateSnippet(lang: CodeLang, opts: SnippetOptions): string {
    switch (lang) {
        case 'curl':
            return curlSnippet(opts);
        case 'javascript':
            return javascriptSnippet(opts);
        case 'python':
            return pythonSnippet(opts);
        case 'php':
            return phpSnippet(opts);
    }
}
