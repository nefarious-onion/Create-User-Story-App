
import express from 'express';
const router = express.Router({ mergeParams: true });
import userService from './user.service';

router.post('/', async (req, res) => {
    const { body } = req
    const userData = body

    if (userData.password.length < 3 || !userData.password) {
        return res
            .status(400)
            .json({ error: 'Invalid Password - minimum length 3 characters' })
    }
    const newUser = userService.createUser(userData);

    res
        .status(201)
        .json(newUser)
})

router.get('/', async (req, res) => {
    const users = await userService.getUsers();
    res.json(users)
})

export { router }