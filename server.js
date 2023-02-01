// Globals -------------------------------------------------------------------
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Connect to database -------------------------------------------------------
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '@LovatCopper5!',
        database: 'movie_db'
    },
    console.log(`Connected to the movies_db database.`)
);

// Routes --------------------------------------------------------------------
// movies table.
app.get('/api/movies', (req, res) => {
    query = db.query(`SELECT * FROM movies`, [], (err, result) => {
        if (err) {
            res.status(500).send("Error querying database");
        };
    if (result){
        res.status(200).json(result);
    } else {
        res.status(500).send("Query returned no results.")
    };
    });
});

app.post('/api/movies/:movie_title', (req, res) => {
    query = db.query('INSERT INTO movies (movie_name) VALUES (?)', [req.params.movie_title], (err, result) => {
        if (err) {
            res.status(500).send("Error querying database");
        };
    if (result){
        res.status(200).send(`${result.affectedRows} rows inserted into movies table.`)
    } else {
        res.status(500).send("Something went wrong.")
    };
    });
});

app.delete('/api/movies/:movie_id', (req, res) => {
    query = db.query('DELETE FROM movies WHERE id=?', [req.params.movie_id], (err, result) => {
        if (err) {
            res.status(500).send("Error querying database");
        };
    if (result){
        res.status(200).send(`${result.affectedRows} rows deleted from movies table.`)
    } else {
        res.status(500).send("Something went wrong.")
    };
    });
});

// reviews table.
app.get('/api/reviews', (req, res) => {
    query = db.query(`SELECT * FROM reviews`, [], (err, result) => {
        if (err) {
            res.status(500).send("Error querying database");
        };
    if (result){
        res.status(200).json(result);
    } else {
        res.status(500).send("Query returned no results.")
    };
    });
});

app.post('/api/reviews/:movie_id/:review_text', (req, res) => {
    query = db.query('INSERT INTO reviews (movie_id, review) VALUES (?, ?)', [req.params.movie_id, req.params.review_text], (err, result) => {
        if (err) {
            res.status(500).send("Error querying database");
        };
    if (result){
        res.status(200).send(`${result.affectedRows} rows inserted into movies table.`)
    } else {
        res.status(500).send("Something went wrong.")
    };
    });
});

app.delete('/api/reviews/:review_id', (req, res) => {
    query = db.query('DELETE FROM reviews WHERE id=?', [req.params.review_id], (err, result) => {
        if (err) {
            res.status(500).send("Error querying database");
        };
    if (result){
        res.status(200).send(`${result.affectedRows} rows deleted from movies table.`)
    } else {
        res.status(500).send("Something went wrong.")
    };
    });
});

//  Listener -----------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
