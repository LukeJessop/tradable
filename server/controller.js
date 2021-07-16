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
        console.log(loginUsername, loginPassword)
    },
    loginEmail: async (req, res) => {
        const db = req.app.get('db')
        const {loginEmail, loginPassword} = req.body

    },
    logout: (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req, res) => {
        res.status(200).send(req.session.user)
    }
}