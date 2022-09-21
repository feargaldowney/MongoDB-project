const express = require('express'); // creates html server on selected port
const articles = require('../models/article');
const articleRouter = express.Router();

articleRouter.route('/create')
.get((req,res,next) => {
    res.render('newArticle', { title: 'Feargal\'s Blog', });   
})
.post((req, res, next) => {
    articles.create(req.body)
    .then((
        created) => {
        articles.find()
         .then((articleList) => {
                res.render('allArticles',{'articleList' : articleList, title:'Feargal\'s Blog'} );

        }, (err) => next(err))
    .catch((err) => next(err));
    }, (err) => next(err))
    .catch((err) => next(err));
})

articleRouter.route('/articleList')
.get((req,res,next) => {
    articles.find()
    .then((articlesfound) => {
           res.render('allArticles',{'articleList' : articlesfound, title:'Feargal\'s Blog'} );
   }, (err) => next(err))
})

articleRouter.route('/update')
.get((req,res,next) => {
    articles.find()
    .then((articleList) => {
        res.render('allArticles.ejs', {'articleList' : articleList, title: 'Feargal\'s Blog'});
    }, (err) => next (err))
})

articleRouter.route('/update/:id')
.get((req,res,next) => {
    articleId = req.params.id
    articles.findById(articleId)
    .then((article) => {
        res.render('updateArticles', {'article' : article, title: 'Feargal\'s Blog'}); 
    }, (err) => next (err))
})

articleRouter.route('/update/:id')
.post((req,res,next) => {
    articleId = req.params.id
    articles.findByIdAndUpdate(articleId, req.body)
    .then((article) => {
        articles.find()
        .then((article) => {
            res.render('updateArticles', { 'article' : article, title: 'Feargal\'s Blog'});  
        }, (err) => next(err))
    }, (err) => next(err))
})

articleRouter.route('/delete/:id')
.get((req,res,next) => {
    articleId = req.params.id
    console.log(articleId)
    articles.findById(articleId)
    .then((article) => {
        res.render('deleteArticles', {'article' : article, title: 'Feargal\'s Blog'});
        }, (err) => next (err))
})

articleRouter.route('/delete/:id')
.post((req,res,next) => {
    articleId = req.params.id
    articles.findByIdAndRemove(articleId, req.body)
    .then((article) => {
        articles.find()
        .then((article) => {
            res.render('deleteArticles', { 'article' : article, title: 'Feargal\'s Blog'});  
        }, (err) => next(err))
    }, (err) => next(err))
})

articleRouter.route('/articleList/search')
.get((req,res,next) => {
    articles.find()
    .then((article) => {
           res.render('searchArticles',{'article' : article, title:'Feargal\'s Blog'} );

   }, (err) => next(err))
})

articleRouter.route('/help')
.get((req,res,next) => {
    res.render('help', { title: 'Feargal\'s Blog' });   
})

articleRouter.route('/about')
.get((req,res,next) => {
    res.render('about', { title: 'Feargal\'s Blog' });   
})

module.exports = articleRouter;