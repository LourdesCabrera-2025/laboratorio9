import bcrypt, { hash } from "bcrypt";

exports.hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

exports.comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
};

