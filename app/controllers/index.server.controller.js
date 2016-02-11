exports.render = function (req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        res.render('index', {
            lastVisit: req.session.lastVisit,
            title: 'hello Michael',
            name: 'Michael',
            myPic: 'img/myPic.jpg'
        });
    }
    else {
        req.session.lastVisit = new Date();

        res.render('index', {
            title: 'hello Michael',
            name: 'Michael',
            myPic: 'img/myPic.jpg',
            lastVisit: 'N/A'
        });
    }
    
    
    

};