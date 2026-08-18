export type CodeLang = 'curl' | 'javascript' | 'python' | 'php';

export const CODE_LANGS: readonly CodeLang[] = ['curl', 'javascript', 'python', 'php'] as const;

export const CODE_LANG_LABELS: Record<CodeLang, string> = {
    curl: 'cURL',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
};

export interface SnippetOptions {
    method: 'get' | 'post' | 'patch' | 'delete';
    url: string;
    body?: Record<string, unknown>;
}

/**
 * Serializes a string key-value object as an indented JS object literal.
 *
 * @param obj - Key-value pairs to serialize
 * @param baseIndent - Number of spaces for the closing brace indentation
 * @returns A formatted JS object literal string
 */
function toJsObject(obj: Record<string, unknown>, baseIndent: number): string {
    const entries = Object.entries(obj);
    if (entries.length === 0) return '{}';
    const pad = ' '.repeat(baseIndent);
    const inner = ' '.repeat(baseIndent + 4);
    return `{\n${entries.map(([k, v]) => `${inner}"${k}": ${JSON.stringify(v)}`).join(',\n')}\n${pad}}`;
}

/**
 * Serializes a string key-value object as a Python dict literal.
 *
 * @param obj - Key-value pairs to serialize
 * @returns A formatted Python dict literal string
 */
function toPythonDict(obj: Record<string, unknown>): string {
    const entries = Object.entries(obj)
        .map(([k, v]) => `"${k}": ${JSON.stringify(v)}`)
        .join(', ');
    return `{${entries}}`;
}

/**
 * Generates a cURL command snippet for the given request options.
 *
 * @param opts - The request method, URL, and optional body
 * @returns A formatted cURL command string
 */
function curlSnippet({ method, url, body = {} }: SnippetOptions): string {
    const m = method.toUpperCase();
    if (method === 'post' || method === 'patch' || method === 'delete') {
        const json = JSON.stringify(body, null, 2).replace(/\n/g, '\n  ');
        return `curl -X ${m} \\\n  -H "Content-Type: application/json" \\\n  -d '${json}' \\\n  "${url}"`;
    }
    return `curl -X GET \\\n  "${url}"`;
}

/**
 * Generates a JavaScript fetch snippet for the given request options.
 *
 * @param opts - The request method, URL, and optional body
 * @returns A formatted JavaScript code snippet string
 */
function javascriptSnippet({ method, url, body = {} }: SnippetOptions): string {
    if (method === 'post' || method === 'patch' || method === 'delete') {
        return `const response = await fetch("${url}", {
    method: "${method.toUpperCase()}",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(${toJsObject(body, 4)})
});
const data = await response.json();`;
    }
    return `const response = await fetch("${url}");
const data = await response.json();`;
}

/**
 * Generates a Python requests snippet for the given request options.
 *
 * @param opts - The request method, URL, and optional body
 * @returns A formatted Python code snippet string
 */
function pythonSnippet({ method, url, body = {} }: SnippetOptions): string {
    if (method === 'post' || method === 'patch' || method === 'delete') {
        return `import requests

response = requests.${method}(
    "${url}",
    json=${toPythonDict(body)}
)
data = response.json()`;
    }
    return `import requests

response = requests.get("${url}")
data = response.json()`;
}

/**
 * Generates a PHP cURL snippet for the given request options.
 *
 * @param opts - The request method, URL, and optional body
 * @returns A formatted PHP code snippet string
 */
function phpSnippet({ method, url, body = {} }: SnippetOptions): string {
    if (method === 'post' || method === 'patch' || method === 'delete') {
        const json = JSON.stringify(body);
        return `$ch = curl_init("${url}");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${method.toUpperCase()}");
curl_setopt($ch, CURLOPT_POSTFIELDS, '${json}');
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$data = json_decode(curl_exec($ch), true);
curl_close($ch);`;
    }
    return `$response = file_get_contents("${url}");
$data = json_decode($response, true);`;
}

/**
 * Generates an HTTP request code snippet for the given language and options.
 *
 * @param lang - The target code language (`'curl'`, `'javascript'`, `'python'`, `'php'`)
 * @param opts - The request options (method, URL, body)
 * @returns A formatted code snippet string
 */
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
