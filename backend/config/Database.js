import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'root', 'aditya', {
    host: '127.0.0.1',  // Gunakan IP ini untuk koneksi lokal
    dialect: 'mysql'
});


export default db;