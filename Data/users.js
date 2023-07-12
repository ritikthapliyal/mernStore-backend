const bcrypt = require('bcryptjs')


const users = [
    {
        name:"Admin User",
        email:'admin@email.com',
        password: bcrypt.hashSync('123456',12),
        isAdmin:true
    },
    {
        name:"Ritik Thapliyal",
        email:'ritikthapliyal123@email.com',
        password: bcrypt.hashSync('kickass123',12),
        isAdmin: false
    },
    {
        name:"Naman Parihar",
        email:'namanpari@email.com', 
        password: bcrypt.hashSync('123456',12),
        isAdmin:false
    },
]

module.exports = users