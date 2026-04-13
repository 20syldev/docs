export type TranslationSchema = {
    nav: {
        onThisPage: string;
        search: string;
        home: string;
        prevPage: string;
        nextPage: string;
        editPage: string;
        lastUpdated: string;
    };
    lang: {
        label: string;
        en: string;
        fr: string;
        appearance: string;
    };
    version: {
        latest: string;
        current: string;
    };
    notFound: {
        title: string;
        message: string;
        link: string;
    };
    banner: {
        migrationTitle: string;
        migrationText: string;
        legacyTitle: string;
        legacyText: string;
        link: string;
    };
    playground: {
        selectEndpoint: string;
        codeExamples: string;
        playground: string;
        select: string;
        response: string;
        send: string;
        run: string;
        loading: string;
        history: string;
        clearHistory: string;
        responseTime: string;
        copyCode: string;
        tryIt: string;
    };
    footer: {
        changelog: string;
        issue: string;
    };
    features: {
        algorithms: string;
        captcha: string;
        color: string;
        convert: string;
        dice: string;
        domain: string;
        encode: string;
        geo: string;
        hash: string;
        hyperplanning: string;
        infos: string;
        levenshtein: string;
        palette: string;
        personal: string;
        placeholder: string;
        qrcode: string;
        statistics: string;
        text: string;
        time: string;
        token: string;
        username: string;
        validate: string;
    };
};

type FlattenKeys<T, Prefix extends string = ''> =
    T extends Record<string, unknown>
        ? {
              [K in keyof T & string]: T[K] extends Record<string, unknown>
                  ? FlattenKeys<T[K], `${Prefix}${K}.`>
                  : `${Prefix}${K}`;
          }[keyof T & string]
        : never;

export type TranslationKey = FlattenKeys<TranslationSchema>;
