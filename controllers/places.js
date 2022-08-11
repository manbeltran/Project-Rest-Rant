const router = require('express').Router()
const rests = require("../models/rests.js")


router.get('/new', (req,res) => {
  res.render('places/new')

})


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat-coffee.jpg'
      }]
      
    res.render('places/index', { places })
  })

// router.post('/places', (req,res) => {

//     res.send('post stub')
//   })

//CREATE

router.post('/', (req, res) => {
  
  rests.push(req.body)
  res.redirect('/places')
})

// router.get('/places', (req, res) => {
  
//   rests.push(req.body)
//   res.redirect('/places')
// })


module.exports = router
