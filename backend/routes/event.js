const express = require("express");
const{getEvents,createEvent,getEventByCategory} = require("../controllers/EventController");

const eventRoute = express.Router();

eventRoute.route('/').get(getEvents).post(createEvent);
eventRoute.get('/:category',getEventByCategory);

module.exports = eventRoute;
