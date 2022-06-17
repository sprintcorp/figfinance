const asyncHandler = require("express-async-handler")
const Event = require("../models/Event");
const paginate = require('../middlewares/Paginate');

exports.getEvents = asyncHandler(async(req,res,next)=>{
    const { page = 1, limit = 10 } = req.query;
    res.status(200).json({data:await Event.find()});
});

exports.getEventByCategory = asyncHandler(async(req,res,next)=>{
    const events = await Event.find({'category':req.params.category});
    res.status(200).json({data:events});
});

exports.createEvent = asyncHandler(async (req,res,next)=>{
    const event = await Event.create(req.body);
    res.status(201).json({ success: true, data: event });
});
