const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  // Add query to get all genres
  const movieId = req.params;
  const queryText = `SELECT "genres"."name" FROM "genres"
  JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
  JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
  WHERE "movies"."id" = $1;`;

  pool
    .query(queryText, [movieId.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "genres"`;
  pool
    .query(queryText)
    .then((response) => {
      console.log(response.rows)
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error with getting all genre, ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
