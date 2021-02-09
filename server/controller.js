module.exports = {
  getMovies: (req, res) => {
    const db = req.app.get("db");
    //# get all movies and send them back on res
    db.get_movies()
      .then((movies) => {
        res.status(200).send(movies);
      })
      .catch((err) => res.status(500).send(err));
  },
  addMovie: (req, res) => {
    const db = req.app.get("db");
    const { title, rating } = req.body;

    db.add_movie([title, rating])
      .then((movies) => {
        res.status(200).send(movies);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  editMovie: (req, res) => {
    const db = req.app.get("db");
    const { rating } = req.body;
    const { id } = req.params;

    db.edit_movie([rating, +id])
      .then((movies) => {
        res.status(200).send(movies);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  deleteMovie: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_movie([+id])
      .then((movies) => {
        res.status(200).send(movies);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
