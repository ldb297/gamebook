'use strict';
const bcrypt = require('bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.comment)
      models.user.belongsToMany(models.post, {through: 'usersPosts'})
    }
  };
  user.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [4, 24],
          msg: 'username must be between 4 and 24 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'invalid email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 30],
          msg: 'password must be between 8 and 30 characters'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });

user.addHook('beforeCreate', (newUser) =>{
  let hash = bcrypt.hashSync(newUser.password, 6)
  newUser.password = hash
})

user.prototype.validPassword = function(passedword) {
  let isCorrectPassword = bcrypt.compareSync(passedword, this.password)
  return isCorrectPassword
}

user.prototype.toJSON = function(){
  let userData = this.get()
  delete userData.password
  return userData
}

  return user;
};