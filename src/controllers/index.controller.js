const User = require('../models/User');

const createCours = (request, response) => {
    const body = request.body;
    const newCours = new Cours({
        detail: body.detail,
        categorie: body.categorie,
        duree: body.duree,
    })

    newCours.save().then(cours => {
        response.status(201).json({
            error: false,
            message: 'Cours cree avec success'
        });
    }).catch(error => {
        response.status(500).json({
            error: true,
            message: 'Error pendant creation du cours'
        });
    })
};

const getCours = (request, response) => {

    User.find().then(cours => {
        response.status(201).json({
            error: false,
            mesage: 'Cours trouve'
        })
    }).catch(error => {
        response.status(500).json({
            error: true,
            message: 'Aucun cours trouve'
        });
    });
};

const updatedCours = (request, response) => {

    const id = request.params.id;
    const body = request.body;

    User.findByIdAndUpdate(id, {...body}).then(cours => {
        response.status(201).json({
            error: false,
            message: 'Cours modifie avec success'
        })
    }).catch(error => {
        response.status(500).json({
            error: true,
            message: 'Erreur lors de la modification du cours'
        });
    })
};

const deleteCours = (request, response) => {

    User.findByIdAndDelete(request.params.id).then(cours => {
        response.status(201).json({
            error: false,
            message: 'Cours supprime avec success'
        })
    }).catch(error => {
        response.status(500).json({
            error: true,
            message: 'Cours non existant'
        });
    });
};


module.exports = {
    createCours,
    getCours,
    updatedCours,
    deleteCours,
};