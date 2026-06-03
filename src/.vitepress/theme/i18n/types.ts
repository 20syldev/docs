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
        viewDocs: string;
    };
    footer: {
        changelog: string;
        issue: string;
    };
    features: {
        address: string;
        agent: string;
        algorithms: string;
        asymmetric: string;
        avatar: string;
        barcode: string;
        captcha: string;
        case: string;
        chart: string;
        color: string;
        convert: string;
        credit: string;
        cron: string;
        dice: string;
        domain: string;
        encode: string;
        evaluate: string;
        geo: string;
        hash: string;
        headers: string;
        hyperplanning: string;
        infos: string;
        ip: string;
        jwt: string;
        levenshtein: string;
        matrix: string;
        otp: string;
        palette: string;
        password: string;
        personal: string;
        placeholder: string;
        qrcode: string;
        regex: string;
        statistics: string;
        symmetric: string;
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
