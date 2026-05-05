const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end(`
        <html>
            <head><title>My Azure Node App</title></head>
            <body>
                <h1>🚀 Hello from Azure VM</h1>
                <p>Deployed using GitHub Actions CI/CD</p>
            </body>
        </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});