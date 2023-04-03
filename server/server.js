const app = require('./app');

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port at http://localhost:${PORT}`);
});

