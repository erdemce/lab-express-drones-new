require('../configs/db.config.js')
const mongoose = require('mongoose')
let Drone = require('../models/Drone.model.js')


const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];


  Drone.create(drones)
  .then(() => {
      console.log('data seeded')
      mongoose.connection.close()
  })
  .catch((err) => {
      console.log('error occurred', err)
  })