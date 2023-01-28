
interface createUserData {
    name: string;
    email: string;
    password: string;
}

export default function createUser( { name, email, password } : createUserData ) {
    const user = {
        name,
        email,
        password
    }

    return user
}