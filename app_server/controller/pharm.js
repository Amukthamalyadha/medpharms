module.exports.homelist=function(req,res){
    res.render('pharm-list',{title:'Home'});
};
module.exports.pharmInfo=function(req,res){
    res.render('pharm-info',{title:'Pharm Info'});
};
module.exports.pharmInfo2=function(req,res){
    res.render('pharm-info2',{title:'Pharm Info'});
};
module.exports.pharmInfo3=function(req,res){
    res.render('pharm-info3',{title:'Pharm Info'});
};
module.exports.addReview=function(req,res){
    res.render('pharm-review',{title:'Add review'});
};