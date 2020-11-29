import User from './user.model';
import bcrypt from 'bcrypt'

interface UserData {
    username: string;
    name: string;
    password: string;
}

const createUser = async (userData: UserData) => {
    const { username, name, password } = userData;
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username,
        name,
        passwordHash,
    })
    const savedUser = await user.save()

    return savedUser;
}

const getUsers = async () => {
    return await User.find({});
}

export default {
    createUser,
    getUsers,
}