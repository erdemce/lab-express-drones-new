const express = require('express');
const drone = require("../models/Drone.model")

const router = express.Router();

router.get('/drones', (req, res, next) => {
  drone.find()
    .then((drones) => {
      res.render("drones/list.hbs", {
        drones
      })
    })
    .catch((err) => {
      console.log(err);
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  const {
    name,
    propellers,
    maxSpeed
  } = req.body
  let newDrone = {
    name,
    propellers,
    maxSpeed
  }

  drone.create(newDrone)
    .then(() => {
      res.redirect("/drones")
    })
    .catch(() => {
      res.render('drones/create-form.hbs', {
        problem: true
      })
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  let id = req.params.id;
  drone.findById(id)
    .then((drone) => {
      res.render("drones/update-form.hbs", {
        drone
      })
    })
    .catch(() => {
      console.log("Update fetched failed")
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  let id = req.params.id;
  const {
    name,
    propellers,
    maxSpeed
  } = req.body
  let updatedDrone = {
    name,
    propellers,
    maxSpeed
  }

  drone.findByIdAndUpdate(id, updatedDrone)
    .then(() => {
      res.redirect("/drones")
    })
    .catch(() => {
      res.render('/drones/update-form.hbs', {
        problem: true
      })
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  let id = req.params.id;
  drone.findByIdAndDelete(id)
    .then((drone) => {
      res.redirect("/drones")
    })
    .catch(() => {
      res.render('/drones', {
        problem: true
      })
    })
});

module.exports = router;