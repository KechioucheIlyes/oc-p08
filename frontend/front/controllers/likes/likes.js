require("../../db/db")
const Likes = require("../../Model/Likes")

exports.getLikes = (req, res) => {
    Likes.findOne({})
        .then(like => {
            console.log(like)
            res.json({ like: like });
        })
}


exports.postLikes = (req, res) => {

    Likes.findOne({})
        .then(like => {
            if (like) {
                like.nbLikes += 1;
                return like.save();
            }
            else {
                const newLike = new Likes({ nbLikes: 1 });
                return newLike.save();
            }
        })
        .then(updatedLike => {
            res.json({ message: "Nombre de likes incrémenté avec succès", like: updatedLike });
        })
        .catch(error => {
            res.status(500).json({ error: "Une erreur est survenue lors de l'incrémentation du nombre de likes" });
        });

}
