export const envConfig = {
    performance: {
        environment: {
            protocol: 'https',
            url: 'test.k6.io'
        },
        timeout: {
            setupTimeout: '15m',
            requestTimeout: '15m'
        }
    }
}
