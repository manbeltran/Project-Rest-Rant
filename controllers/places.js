const router = require('express').Router()
const places = require('../models/places.js')
const rests = require("../models/places.js")


router.get('/new', (req,res) => {
  res.render('places/new')

})


router.get('/', (req, res) => {
    // let places = [{
    //     name: 'H-Thai-ML',
    //     city: 'Seattle',
    //     state: 'WA',
    //     cuisines: 'Thai, Pan-Asian',
    //     pic: '/images/thai-food.jpg'
    //   }, {
    //     name: 'Coding Cat Cafe',
    //     city: 'Phoenix',
    //     state: 'AZ',
    //     cuisines: 'Coffee, Bakery',
    //     pic: '/images/cat-coffee.jpg'
    //   }]
      
    res.render('places/index', { places })
  })

// router.post('/places', (req,res) => {

//     res.send('post stub')
//   })

//CREATE

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//Show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id] })
  }
})






// router.get('/places', (req, res) => {
  
//   rests.push(req.body)
//   res.redirect('/places')
// })


module.exports = router
