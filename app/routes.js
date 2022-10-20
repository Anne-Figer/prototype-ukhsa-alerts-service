var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient('ukhsa-48468bed-4b77-4ee0-a312-6eb0cc37b3c9-873bf1b0-35de-4766-843b-a674a1bbcfdc');

const express = require('express')
const router = express.Router()

const { User } = require('../models');

// Add your routes here - above the module.exports line

module.exports = router

router.get('/users', function (req, res) {
    return User.findAll()
    .then((users) => { 
        res.send(users) 
    })
    .catch((err) => {
        return res.send(err)
    });
})

router.post('/signup', async function (req, res) {
    const user = await User.create({ email: req.params.email });
    res.render('index');
})



router.post('/emailnotify', function (req, res) {
    console.log("first step!");
    notify
  .sendEmail("589b05b0-5cbb-4a1b-9fc6-23bd1e2fb2dd", 'michael.devlin@hackney.gov.uk', {
    personalisation: {
        'first_name': 'Anne',
        'application_number': '300241'
      },
    reference: "your_reference_here"
  })
  .then(response => console.log(response.data))
  .catch(err => console.error(err))

})