const mongoose = require('mongoose')

const connectAndListen = async (app) =>{
    
    try {
        await mongoose.connect('mongodb+srv://project-1:kickass123@cluster0.kgmw1aq.mongodb.net/NATOURS?retryWrites=true&w=majority')
        console.log("Database connected")
        app.listen(5000, () => {
          console.log(`Server running on port 5000`)
        })
    } catch (error) {
        console.error("Error connecting to the database:", error)
    }
}

module.exports = {connectAndListen}