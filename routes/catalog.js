const express = require("express");
const router = express.Router();

// Require our controllers.
const movie_controller = require("../controllers/movieController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");


/// movie ROUTES ///

// GET catalog home page.
router.get("/", movie_controller.index);

// GET request for creating a movie. NOTE This must come before routes that display movie (uses id).
router.get("/movie/create", movie_controller.movie_create_get);

// POST request for creating movie.
router.post("/movie/create", movie_controller.movie_create_post);

// GET request to delete movie.
router.get("/movie/:id/delete", movie_controller.movie_delete_get);

// POST request to delete movie.
router.post("/movie/:id/delete", movie_controller.movie_delete_post);

// GET request to update movie.
router.get("/movie/:id/update", movie_controller.movie_update_get);

// POST request to update movie.
router.post("/movie/:id/update", movie_controller.movie_update_post);

// GET request for one movie.
router.get("/movie/:id", movie_controller.movie_detail);

// GET request for list of all movie.
router.get("/movies", movie_controller.movie_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/director/create", author_controller.author_create_get);

// POST request for creating Author.
router.post("/director/create", author_controller.author_create_post);

// GET request to delete Author.
router.get("/director/:id/delete", author_controller.author_delete_get);

// POST request to delete Author
router.post("/director/:id/delete", author_controller.author_delete_post);

// GET request to update Author.
router.get("/director/:id/update", author_controller.author_update_get);

// POST request to update Author.
router.post("/director/:id/update", author_controller.author_update_post);

// GET request for one Author.
router.get("/director/:id", author_controller.author_detail);

// GET request for list of all Authors.
router.get("/authors", author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genres", genre_controller.genre_list);


module.exports = router;
