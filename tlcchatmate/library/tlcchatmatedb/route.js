import mysql from "mysql2/promise"

export const tlcchatmatedb = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "tlcchatmate"
})