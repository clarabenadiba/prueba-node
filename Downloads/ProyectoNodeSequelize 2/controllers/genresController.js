let db = require('../database/models/index.js');
const Sequelize = db.sequelize;
  const Genre = db.Genre;
   
    
    
    let genresController = {
    list: function(req, res){
        Genre.findAll()
           .then(function(results) {
            let genresAll = results
               return res.render('genres', { genresAll });
           })

           .catch(e=> console.log(e))

        },
        
        detail: function(req, res) {
            Genre.findByPk(req.params.id)
              .then(function(result){
                  let genresPK = result
                  return res.render('genresDetail', {genresPK});
              })
   
              .catch(e => console.log(e))
        },
        recommended: function(req, res) {
            Genre.findAll({
                where: { ranking: {[ db.Sequelize.Op.lt]: 4}}
                  
            })
               .then(function(results) {
                let genresRecommended = results
                   return res.render('genresRecommended', {genresRecommended});
               })
   
               .catch(e=> console.log(e))
   
           }

    }
        module.exports = genresController;