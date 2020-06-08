let db = require('../database/models/index.js');
const Sequelize = db.sequelize;
  const Actor = db.Actor;
   
    
    
    let actorsController = {
    list: function(req, res){
        Actor.findAll()
           .then(function(results) {
            let actorsAll = results
               return res.render('actors', { actorsAll });
           })

           .catch(e=> console.log(e))

        },
        
        detail: function(req, res) {
            Actor.findByPk(req.params.id)
              .then(function(result){
                  let actorsPK = result
                  return res.render('actorsDetail', {actorsPK});
              })
   
              .catch(e => console.log(e))
        },
        recommended: function(req, res) {
            Actor.findAll({
                where: { rating: {[ db.Sequelize.Op.gt]: 8}}
                  
            })
               .then(function(results) {
                let actorsRecommended = results
                   return res.render('actorsRecommended', {actorsRecommended});
               })
   
               .catch(e=> console.log(e))
   
           }

    }
        module.exports = actorsController;