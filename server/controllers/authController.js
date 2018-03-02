const id  = 0;

module.exports = {
    login: (req, res, next) => {
        const db = req.app.get('db');

        db.get_user(req.params.id).then(response => {
            let user = response[0]
            const { session } = req;
            if(user.username){
                session.user.userId = user.userid;
                session.user.username = user.username
                res.status(200).send(session.user)
            }else{
                next();
            }
        })
    },

    register: (req, res, next) => {
        const db = req.app.get('db');

        db.registerUser([req.body.username, req.body.password, req.body.id]).then(user => {
            const { username, password, id } = req.body;
            const { session } = req;

            session.user.userId = id;
            session.user.username = username;
            res.status(200).send(session.user);
        })
    },

    getIdentification: (req, res, next) => {
        const db = req.app.get('db');
        
        db.get_id().then(identification => {

            res.status(200).send(identification[0])
        }).catch(err => console.log(err))
    },

    logout: (req, res, next) => {
        const { session } = req;
        req.session.destroy();
        res.status(200).send(session.user);
    }
} 