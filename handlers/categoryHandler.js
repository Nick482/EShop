var CategoryModel = require('../models/Category');
var validator = require('validator');

module.exports = function() {
    this.getCategories = function(req, res, next){
        var name = req.query.name;

        if(name) {
            var condition = new RegExp('^'+ name, 'i');
            CategoryModel.find({name: condition}, function(err, categories){
                if(err){
                    next(err);
                } else {
                    res.status(200).send(categories);
                }
            })
        } else {
            CategoryModel.find({}, function (err, categories) {
                if (err) {
                    next(err);
                } else {
                    res.status(200).send(categories);
                }
            })
        }
    };
    this.getCategory = function(req, res, next){
        CategoryModel.findOne({_id: req.params.id})
            .populate('products')
            .exec(function(err, category){
            if(err){
                next(err);
            } else {
                res.status(200).send(category);
            }
        })
    };
    this.addCategory = function(req, res, next){
        var body = req.body;
        var category = new CategoryModel(body);

        if(!body.name){
            return res.status(400).send('Name not specified');
        }
        if(!validator.isAlpha(body.name)){
            return res.status(400).send('Category name must contain only letters')
        }

        category.save(function(err, category){
            if(err){
                next(err);
            }
            res.status(200).send(category);
        });
    };
    this.updateCategory = function(req, res, next){
        var id = req.params.id;

        if(!body.name){
            return res.status(400).send('Name not specified');
        }
        if(!validator.isAlpha(body.name)){
            return res.status(400).send('Category name must contain only letters')
        }

        CategoryModel.findByIdAndUpdate(
            id,
            req.body,
            function(err, category){
                if (err){
                    next(err);
                } else {
                    res.status(200).send(category);
                }
            }
        )
    };
    this.deleteCategory = function(req, res, next){
        var id = req.params.id;

        CategoryModel.findByIdAndRemove(id, function(err, category){
            if(err){
                next(err);
                } else {
                res.status(200).send(category._id);
                }
            }
        )
    };

    return {
        getCategories: this.getCategories,
        getCategory: this.getCategory,
        addCategory: this.addCategory,
        updateCategory: this.updateCategory,
        deleteCategory: this.deleteCategory
    }
};