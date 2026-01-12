<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

interface ApiRequest {
    method: 'GET' | 'POST';
    endpoint: string;
    body?: Record<string, string>;
    command: string;
}

const requests: ApiRequest[] = [
    {
        method: 'GET',
        endpoint: 'https://api.sylvain.pro/v3/algorithms?method=fibonacci&value=10',
        command: 'curl -X GET \\\n  "https://api.sylvain.pro/v3/algorithms?method=fibonacci&value=10"'
    },
    {
        method: 'GET',
        endpoint: 'https://api.sylvain.pro/v3/domain',
        command: 'curl -X GET \\\n  "https://api.sylvain.pro/v3/domain"'
    },
    {
        method: 'POST',
        endpoint: 'https://api.sylvain.pro/v3/hash',
        body: { text: 'hello', method: 'sha256' },
        command: 'curl -X POST \\\n  -d "text=hello&method=sha256" \\\n  "https://api.sylvain.pro/v3/hash"'
    },
    {
        method: 'GET',
        endpoint: 'https://api.sylvain.pro/v3/infos',
        command: 'curl -X GET \\\n  "https://api.sylvain.pro/v3/infos"'
    },
    {
        method: 'GET',
        endpoint: 'https://api.sylvain.pro/v3/personal',
        command: 'curl -X GET \\\n  "https://api.sylvain.pro/v3/personal"'
    },
    {
        method: 'GET',
        endpoint: 'https://api.sylvain.pro/v3/time?format=iso',
        command: 'curl -X GET \\\n  "https://api.sylvain.pro/v3/time?format=iso"'
    },
    {
        method: 'POST',
        endpoint: 'https://api.sylvain.pro/v3/token',
        body: { len: '24', type: 'alphanum' },
        command: 'curl -X POST \\\n  -d "len=48&type=alphanum" \\\n  "https://api.sylvain.pro/v3/token"'
    },
    {
        method: 'GET',
        endpoint: 'https://api.sylvain.pro/v3/username',
        command: 'curl -X GET \\\n  "https://api.sylvain.pro/v3/username"'
    }
];

const command = ref('');
const response = ref('');
const cursor = ref<'command' | 'response' | null>('command');
const body = ref<HTMLElement | null>(null);

let index = 0;
let interval: ReturnType<typeof setInterval> | null = null;
let timeout: ReturnType<typeof setTimeout> | null = null;

function scroll() {
    nextTick(() => {
        if (body.value) body.value.scrollTop = body.value.scrollHeight;
    });
}

async function fetchApi(request: ApiRequest): Promise<string> {
    try {
        const options: RequestInit = { method: request.method, headers: {} };
        if (request.method === 'POST' && request.body) {
            options.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
            options.body = new URLSearchParams(request.body).toString();
        }
        const res = await fetch(request.endpoint, options);
        return JSON.stringify(await res.json(), null, 2);
    } catch {
        return '{\n  "error": "Request failed"\n}';
    }
}

function typeText(text: string, target: typeof command, speed: number, onComplete: () => void) {
    let i = 0;
    target.value = '';
    interval = setInterval(() => {
        if (i < text.length) {
            target.value += text[i++];
            scroll();
        } else {
            clearInterval(interval!);
            onComplete();
        }
    }, speed);
}

async function runRequest() {
    const request = requests[index];
    cursor.value = 'command';

    typeText(request.command, command, 35, async () => {
        cursor.value = 'response';
        const result = await fetchApi(request);

        typeText(result, response, 15, () => {
            cursor.value = null;
            timeout = setTimeout(() => {
                response.value = '';
                index = (index + 1) % requests.length;
                runRequest();
            }, 3000);
        });
    });
}

onMounted(() => {
    requests.sort(() => Math.random() - 0.5);
    runRequest();
});

onUnmounted(() => {
    if (interval) clearInterval(interval);
    if (timeout) clearTimeout(timeout);
});
</script>

<template>
    <div class="terminal">
        <div class="terminal-header">
            <div class="terminal-buttons">
                <span class="terminal-btn close"></span>
                <span class="terminal-btn minimize"></span>
                <span class="terminal-btn maximize"></span>
            </div>
            <span class="terminal-title">sylvain@api</span>
        </div>
        <div class="terminal-body" ref="body">
            <div class="terminal-line">
                <span class="terminal-prompt">$</span>
                <span class="terminal-command-wrapper"><span class="terminal-command">{{ command }}<span class="terminal-cursor" v-if="cursor === 'command'">_</span></span></span>
            </div>
            <pre class="terminal-response" v-if="response">{{ response }}<span class="terminal-cursor" v-if="cursor === 'response'">_</span></pre>
        </div>
    </div>
</template>
