const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Name is Required"],
    min: 3,
    max: 20,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: 6,
    select: false, // for added security
  },
}, {
    timestamps: true,
    collection: 'User'
});


const User = model('User', UserSchema)
module.exports = User

// sequelize implementation
// const { DataTypes, Model } = require("sequelize");
// let dbConnect = require("../dbConnect");

// const sequelizeInstance = dbConnect.Sequelize;

// class User extends Model { }

// // Sequelize will create this table if it doesn't exist on startup
// User.init({
//  id: {
//  type: DataTypes.INTEGER, allowNull: false, autoIncrement:
// true, primaryKey: true
//  },
//  firstName: {
//  type: DataTypes.STRING, allowNull: false, required: true
//  },
//  lastName: {
//  type: DataTypes.STRING, allowNull: false, required: true
//  },
//  emailId: {
//  type: DataTypes.STRING, allowNull: false, required: true,
// unique: true
//  },
//  password: {
//  type: DataTypes.STRING, allowNull: false, required: true
//  }},
//  {
//  sequelize: sequelizeInstance, modelName: 'users', // use lowercase plural format
//  timestamps: true, freezeTableName: true
//  }
// )
// module.exports = User;
