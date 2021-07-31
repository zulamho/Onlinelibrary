const Client = require("../models/Clients.model");

module.exports.clientController = {
  addClient: async (req, res) => {
    try {
      await Client.create({
        name: req.body.name,
        isBlocked: false,
        booksClient: []
      });
      res.json("Клиент добавлен");
    } catch (err) {
      console.log(err);
    }
  },

  blockedClient: async (req , res) =>{
    try{
        await Client.findByIdAndUpdate(req.params.id)
       {}
    }
}
};
