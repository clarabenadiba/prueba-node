module.exports = (sequelize, dataTypes) =>{

    let alias = 'Movie';
    let cols = {
        id:{
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true  
        } ,
        title: {
          type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        awards: {
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    };

    let config = {
        timestamps: true
    };


const Movie = sequelize.define(alias, cols, config);
    return Movie;
}