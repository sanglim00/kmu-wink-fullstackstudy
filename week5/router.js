module.exports = function(app,User)
{
    app.post('/board', function(req, res){
        var user = new User();
        user.title = req.body.title;
        user.body = req.body.body;

        user.save(function(err){
            if(err){
                console.error(err);
                res.json({message : 'fail'});
                return;
            }
            res.json({message : 'success'});
        });
    });
}
