const express = require("express");
const{getEvents,createEvent,getEventByCategory,getUserCreatedEvent,deleteEvent,updateEvent} = require("../controllers/EventController");
const { protect } = require('../middlewares/AuthHandler');
const eventRoute = express.Router();

eventRoute.route('/').get(getEvents).post(protect,createEvent);
eventRoute.get('/filter',getEventByCategory);
eventRoute.get('/user',protect,getUserCreatedEvent);
eventRoute.route('/:id').delete(protect,deleteEvent).put(protect,updateEvent);

module.exports = eventRoute;
