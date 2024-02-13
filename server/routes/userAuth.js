const express = require('express')
const User = require('../model/user')
const bcrypt = require('bcrypt')
const app = express.Router()

// User route
app.route('/user').post(async (req, res) => {
  let found_user = ''
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ msg: 'All fields required' })
  }
  // check if email exists
  try {
    if (email) {
      found_user = await User.findOne({ email: email }).exec()
    }
    if (!found_user) return res.status(401).json({ msg: 'Invalid credentials' })

    // decode password
    const match = await bcrypt.compare(password, found_user.password)
    if (match) {
      const data = {
        id: found_user._id,
        email: found_user.email,
    
        firstName: found_user.first_name,
        lastName: found_user.last_name,
       
       
      }
      res.status(200).json({ msg: 'Login successful', data: data })
    } else {
      res.status(401).json({ msg: 'Invalid credentials' })
    }
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong' })
  }
})

module.exports = app
