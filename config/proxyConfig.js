const proxy_url = 'http://cangdu.org:8001';

module.exports = {
    proxy: {
        '/apis': {
            target: proxy_url,
            changeOrigin: true,
            pathRewrite: {
                '^/apis': ''
            }
        },
    }
}