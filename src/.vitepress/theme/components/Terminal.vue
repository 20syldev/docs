<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

interface ApiRequest {
    method: 'GET' | 'POST';
    endpoint: string;
    body?: Record<string, string>;
    command: string;
}

function generateRequests(): ApiRequest[] {
    return [
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
}

function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const typed = ref('');
const response = ref('');
const typing = ref(true);
const showing = ref(false);
const body = ref<HTMLElement | null>(null);

function scrollToBottom() {
    nextTick(() => {
        if (body.value) {
            body.value.scrollTop = body.value.scrollHeight;
        }
    });
}

let requests: ApiRequest[] = [];
let index = 0;
let typingInterval: ReturnType<typeof setInterval> | null = null;
let responseInterval: ReturnType<typeof setInterval> | null = null;
let timeout: ReturnType<typeof setTimeout> | null = null;

async function fetchApi(request: ApiRequest): Promise<string> {
    try {
        const options: RequestInit = {
            method: request.method,
            headers: {}
        };

        if (request.method === 'POST' && request.body) {
            options.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
            options.body = new URLSearchParams(request.body).toString();
        }

        const res = await fetch(request.endpoint, options);
        const data = await res.json();
        return JSON.stringify(data, null, 2);
    } catch {
        return '{\n  "error": "Request failed"\n}';
    }
}

function typeCommand(command: string, onComplete: () => void) {
    let i = 0;
    typed.value = '';
    typing.value = true;

    typingInterval = setInterval(() => {
        if (i < command.length) {
            typed.value += command[i];
            i++;
            scrollToBottom();
        } else {
            if (typingInterval) clearInterval(typingInterval);
            typing.value = false;
            onComplete();
        }
    }, 35);
}

function typeResponse(text: string, onComplete: () => void) {
    let i = 0;
    response.value = '';
    showing.value = true;

    responseInterval = setInterval(() => {
        if (i < text.length) {
            response.value += text[i];
            i++;
            scrollToBottom();
        } else {
            if (responseInterval) clearInterval(responseInterval);
            onComplete();
        }
    }, 15);
}

async function runRequest(request: ApiRequest) {
    typeCommand(request.command, async () => {
        const result = await fetchApi(request);
        typeResponse(result, () => {
            timeout = setTimeout(() => {
                response.value = '';
                showing.value = false;
                index = (index + 1) % requests.length;
                runRequest(requests[index]);
            }, 3000);
        });
    });
}

onMounted(() => {
    requests = shuffle(generateRequests());
    runRequest(requests[0]);
});

onUnmounted(() => {
    if (typingInterval) clearInterval(typingInterval);
    if (responseInterval) clearInterval(responseInterval);
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
                <span class="terminal-command-wrapper"><span class="terminal-command">{{ typed }}</span><span class="terminal-cursor" v-if="typing"></span></span>
            </div>
            <pre class="terminal-response" v-if="showing">{{ response }}</pre>
        </div>
    </div>
</template>