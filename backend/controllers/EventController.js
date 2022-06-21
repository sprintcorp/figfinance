const asyncHandler = require("express-async-handler")
const Event = require("../models/Event");

exports.getEvents = asyncHandler(async(req,res,next)=>{
    const events = await Event.find().populate({'path':'category','select':'name'});
    res.status(200).json({data:events});

});

exports.getEventByCategory = asyncHandler(async(req,res,next)=>{
    const events = await Event.find({'category':req.query.category})
      .populate({'path':'category','select':'name'});

    res.status(200).json({data:events});
});

exports.createEvent = asyncHandler(async (req,res,next)=>{
    req.body.user = req.user.id;
    const event = await Event.create(req.body);

    res.status(201).json({ success: true, data: event });
});

exports.getUserCreatedEvent = asyncHandler(async(req,res,next)=>{
    console.log(req.user);
    const events = await Event.find({user: req.user.id})
      .populate({'path':'category','select':'name'});

    res.status(200).json({data:events});
});

exports.deleteEvent = asyncHandler(async(req, res, next) => {
    const checkIfEventExist = await Event.findById(req.params.id);
    if (!checkIfEventExist) {
        return next(
          new Error(`Event not found with id of ${req.params.id}`, 404)
        );
    }

    if (checkIfEventExist.user != req.user.id) {
        return next(
          new Error(`User cannot delete another user event`, 401)
        );
    }

    const event = await Event.findByIdAndDelete(req.params.id)
    if (event) {
        res.status(200).json({ success: true, data: "event Successfully deleted" });
    }
});

exports.updateEvent = asyncHandler(async(req, res, next) => {
    const checkIfEventExist = await Event.findById(req.params.id);
    if (!checkIfEventExist) {
        return next(
          new Error(`Event not found with id of ${req.params.id}`, 404)
        );
    }

    if (checkIfEventExist.user != req.user.id) {
        return next(
          new Error(`User cannot edit another user event`, 401)
        );
    }

    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (event) {
        res.status(200).json({ success: true, data: "event Successfully updated" });
    }
});
