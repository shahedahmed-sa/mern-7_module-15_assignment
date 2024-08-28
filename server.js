// Import the http and fs modules
const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {
    // Set the content type as plain text
    res.setHeader('Content-Type', 'text/plain');

    // Handle different routes
    if (req.url === '/') {
        res.write('This is the Home Page');
        res.end(); // End the response

    } else if (req.url === '/about') {
        res.write('This is the About Page');
        res.end(); // End the response

    } else if (req.url === '/contact') {
        res.write('This is the Contact Page');
        res.end(); // End the response

    } else if (req.url === '/file-write') {
        // Use fs.writeFile() to create a file with the text "hello world"
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.write('Error writing file');
            } else {
                res.write('File "demo.txt" has been written with "hello world"');
            }
            res.end(); // End the response
        });

    } else {
        // Handle 404 for any other route
        res.write('404 - Page Not Found');
        res.end(); // End the response
    }
});

// Listen on port 5500
server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});
