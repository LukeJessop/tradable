const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {Username, Email, Phone, Password} = req.body

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(Password, salt)

        const [newUser] = await db.user.create_user([Username, Email, Phone, hash])
        req.session.user = newUser
        res.status(200).send(req.session.user)
    },

    loginUsername: async (req, res) => {
        const db = req.app.get('db')
        const {loginUsername, loginPassword} = req.body
        const [foundUser] = await db.user.check_login_username(loginUsername)
        if(!foundUser){
            return res.status(404).send('Incorrect login info')
        }
        bcrypt.compare(loginPassword, foundUser.password, (err, match) => {
            if(err){
                res.status(500).send('comparison error', err)
            } else if (!match){
                res.status(401).send('Incorrect login info')
            } else {
                req.session.user = {
                    userId: foundUser.userId,
                    username: foundUser.username
                }
                res.status(200).send(req.session.user)
            }
        })
    },
    loginEmail: async (req, res) => {
        const db = req.app.get('db')
        const {loginEmail, loginPassword} = req.body
        const [foundUser] = await db.user.check_login_email(loginEmail)
        if(!foundUser){
            return res.status(401).send('Incorrect login info')
        }
        bcrypt.compare(loginPassword, foundUser.password, (err, match) => {
            if(err){
                res.status(500).send('comparison error', err)
            } else if (!match){
                res.status(401).send('Incorrect login info')
            } else {
                req.session.user = {
                    id: foundUser.userId,
                    username: foundUser.username,
                    email: foundUser.email,
                    pfp: foundUser.pfp,
                    bio: foundUser.bio,
                    website: foundUser.website,
                    showemail: foundUser.showemail,
                    showphone: foundUser.showphone
                }
                res.status(200).send(req.session.user)
            }
        })
    },

    logout: (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req, res) => {
        res.status(200).send(req.session.user)
    }
}