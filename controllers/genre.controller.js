const Genre = require("../routes/genre.route");

module.exports.genreController = {
  addGenre: async (req, res) => {
    try {
      await Genre.create({ name: req.body.name });
      res.json("Жанр добавлен!");
    } catch (err) {
      console.log(err);
    }
  },

  deleteGenre: async (req, res) => {
    try {
      await Genre.findById(req.body.id);
      res.json("Жанр удален!");
    } catch (err) {
      consol.rlog(err);
    }
  },
};
