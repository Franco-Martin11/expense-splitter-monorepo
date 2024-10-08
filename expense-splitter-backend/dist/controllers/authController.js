// src/controllers/authController.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validateUser } from '../utils/validation';
import { createUser, findUserByEmail } from '../services/userService';
// Registro de Usuario
export const register = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({ email, password: hashedPassword });
    res.status(201).json({ id: user.id, email: user.email });
};
// Inicio de Sesión
export const login = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user)
        return res.status(400).send('Usuario no encontrado');
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
        return res.status(400).send('Contraseña incorrecta');
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    res.json({ token });
};
