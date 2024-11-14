const { names, address, year, database, student } = require("../database/db")
const { v4: uuidv4 } = require('uuid');
const User = require("../database/user")


exports.userAll = async (req, res, next) => {
    const rekursiya = (count) => {
        if (count > 0) {

            // Malumotlarni random holatida yaratib olish
            const user = new Object(
                {
                    name: names[Math.floor(Math.random() * names.length)],
                    address: address[Math.floor(Math.random() * address.length)],
                    year: year[Math.floor(Math.random() * year.length)],
                }
            )
            database.push(user)

            rekursiya(count - 1) // 2-5000 marta chaqirildi
        }
    }
    rekursiya(5000) //  1 marta chaqirildi
    res.json(database)
}
exports.userCreate = async (req, res, next) => {
    const { NAME, SURNAME, ADDRESS, AGE, CAR } = req.body;
    if (NAME == "" || !NAME || SURNAME == "" || !SURNAME || ADDRESS == "" || !ADDRESS || AGE == "" || !AGE || CAR == "" || !CAR) {
        res.json({
            message: "Ma'lumotlarni kiriting 🤢"
        })
    }
    else {
        const user = {
            id: uuidv4(),
            ism: NAME,
            familiya: SURNAME,
            manzil: ADDRESS,
            yosh: AGE,
            mashina: CAR,
        }
        student.push(user)

        res.json({
            message: "Yaratildi",
            data: user
        })
    }
}
exports.userList = async (req, res, next) => {
    res.json(student)
}
exports.userSearch = async (req, res, next) => {
    const { startDate, endDate, name, address } = req.query;
    const result = User.filter((item) => {
        if (
            String(item.name).toLowerCase().includes(String(name).toLowerCase()) == true &&
            startDate < item.year &&
            endDate > item.year &&
            address == item.address

        ) {
            return item
        }
    })
    res.json({
        count: result.length,
        data: result
    })
}
exports.userFilter = async (req, res, next) => {
    const { year, address } = req.params
    const result = User.filter((item) => {
        return item.year == year && item.address == address
    })
    res.json({
        count: result.length,
        data: result
    })
}
exports.userAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    res.json(authorization)
}