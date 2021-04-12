const {Sequelize,sequelize} = require('./connection')

const Users = sequelize.define('users',{
    name:{
        type: Sequelize.STRING,
    },
    lasName:{
        type:Sequelize.STRING
    },
    age:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})

Users.create({
    name:'Alex',
    lasName:'Oliveira',
    age:25,
    email:'alex.oliveira@viannasempre.com.br'
})


// Users.sync({force:true})