let db = require('../database/models/index.js');
const Sequelize = db.sequelize;
  const Movie = db.Movie;
   
    
    
    let moviesController = {
    list: function(req, res){
        Movie.findAll()
           .then(function(results) {
            let moviesAll = results
               return res.render('movies', { moviesAll });
           })

           .catch(e=> console.log(e))

        },

     detail: function(req, res) {
         Movie.findByPk(req.params.id)
           .then(function(result){
               let moviesPK = result
               return res.render('moviesDetail', {moviesPK});
           })

           .catch(e => console.log(e))
     },

     new: function(req, res) {
         Movie.findAll({
             order:[
                 ['release_date', 'DESC']
             ],
             limit:5
         })
            .then(function(results) {
             let moviesNew = results
                return res.render('moviesNew', {moviesNew});
            })

            .catch(e=> console.log(e))

        },

        recommended: function(req, res) {
          Movie.findAll({
              where: { rating: {[ db.Sequelize.Op.gt]: 8}}
                
          })
             .then(function(results) {
              let moviesRecommended = results
                 return res.render('moviesRecommended', {moviesRecommended});
             })
 
             .catch(e=> console.log(e))
 
         },

              search: function(req, res) {
                Movie.findAll({
                     where: { 
                        title: {[db.Sequelize.Op.like]: '%' + req.body.buscador +'%'}
                    },
                      order: [
                         [req.body.filter, 'DESC'],
                      ]
        
                  
                    })
                  .then(function(results) {
                      let moviesSearch = results
                       return res.render('moviesSearch', {moviesSearch});
                   
                   })
   
                   .catch(e=> console.log(e))
   
               }
    }


    module.exports = moviesController;
