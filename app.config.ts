import 'dotenv/config';

export default {
    name: 'Chess App',
    slug: 'chess-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
    },
    updates: {
        fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        bundleIdentifier: 'com.akshitkrnagpal.chess',
        supportsTablet: true,
    },
    android: {
        package: 'com.akshitkrnagpal.chess',
        adaptiveIcon: {
            foregroundImage: './assets/icon.png',
            backgroundColor: '#FFFFFF',
        },
    },
    web: {
        favicon: './assets/icon.png',
    },
    hooks: {
        postPublish: [
            {
                file: 'sentry-expo/upload-sourcemaps',
                config: {
                    organization: "your sentry organization's short name here",
                    project: "your sentry project's name here",
                },
            },
        ],
    },
    plugins: ['sentry-expo'],
    extra: {
        SENTRY_DSN: process.env.SENTRY_DSN,
    },
};
