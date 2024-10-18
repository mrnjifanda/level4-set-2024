const coursCreate = (request, response, next) => {

    const { detail, categorie, duree } = request.body;

    if (!detail || !categorie || !duree) {
        response.status(400).json({
            error: true,
            message: 'Toutes les informations doivent etre entrée',
        });

        return;
    }
    next();
};


module.exports = { coursCreate }