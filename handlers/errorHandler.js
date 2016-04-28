module.exports = function(){
    this.onError = function(err, req, res, next) {
        console.log(err);
        if(process.env.NODE_ENV === 'development') {
            res.send(err);
        } else {
            if(err.status){
                res.status(err.status).send(err.name)
            } else {
                if(err.name === 'CastError'){
                    res.send('Element with ' + err.kind + ' of ' + err.value + ' was not found');
                }
            }
        }
    }
};