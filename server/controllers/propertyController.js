module.exports = {
    makeProperty: (req, res, next) => {
        const db = req.app.get('db');

        db.newProperty(
            req.body.propid,
            req.body.name,
            req.body.description,
            req.body.address,
            req.body.city,
            req.body.state,
            req.body.zip,
            req.body.url,
            req.body.loan,
            req.body.mortgage,
            req.body.rent
        ).then(property => {
            res.status(200).send(property);
        })
    },

    getProperty: (req, res, next) => {
        const db = req.app.get('db');
        

        db.getProperty().then(properties => {
            console.log(req.query)
            if (req.query.propid == req.session.user.userId) {
                properties = properties.filter( (elem, i) => {
                    return elem.propid == req.query.propid;
                })
            }
            if (req.query.desiredRent > 0) {
                properties = properties.filter((elem, i) => {
                    console.log('res', elem)
                    return elem.desired_rent > req.query.desiredRent;
                })
            }
            res.send(properties)
        })
    },

    deleteProperty: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.params)

        db.delete_property([req.params.id]).then(deletedProp => {
            res.status(200).send(deletedProp)
        })
    }
}