const express = require("express");
const router = express.Router();

router.route("/").post(async (req, res, next) => {

    // const { error } = schemaLogin.validate(req.body)
    // if (error) return res.status(400).json({ error: error.details[0].message })


    // // Validaciond e existencia
    // const user = await UserModel.findOne({ username: req.body.username })
    // if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })

    // // Validacion de password en la base de datos
    // const validPassword = req.body.password === user.password;
    // if (!validPassword) return res.status(400).json({ error: 'Contraseña invalida' })

    // res.json({
    //         id_user: user._id,
    //         username: user.username,
    //         rol: user.rol,
    //         fecha_acceso: user.fecha_acceso,
    //         token: 'fkajsdkf'
    // })

    res.json({
        mac: req.mac,
        ip: req.ip,
        user: req.username
    })
});

module.exports = router;