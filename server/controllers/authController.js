const id  = 0;

module.exports = {
    login: (req, res, next) => {
        const db = req.app.get('db');


    },

    register: (req, res, next) => {
        const db = req.app.get('db');

        db.registerUser([req.body.username, req.body.password]).then(user => {
            const { username, password } = req.body;
            const { session } = req;
            let id = '';
            console.log(session.user);

            session.user.username = username;
            // console.log(id.userid)
            res.status(200).send(session.user);
        })
    },

    getIdentification: (req, res, next) => {
        const db = req.app.get('db');
        
        db.get_id(req.params.id).then(identification => {
            res.status(200).send(identification);
        })
    },
}