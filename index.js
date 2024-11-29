const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background: linear-gradient(135deg, #89f7fe, #66a6ff);
                }
                .container {
                    text-align: center;
                    background: #ffffff;
                    padding: 20px 40px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #555;
                }
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    border: none;
                    border-radius: 5px;
                    background-color: #66a6ff;
                    color: white;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #5595e9;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>App in EC2</h1>
                <p>Hello World in JS and EC2</p>
                <button id="alertButton">Start</button>
            </div>
            <script>
                document.getElementById('alertButton').addEventListener('click', () => {
                    alert('this project is with continuous integration with EC2 and Docker');
                });
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor Running`);
});