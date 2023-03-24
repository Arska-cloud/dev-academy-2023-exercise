const Journey = require("../models/journeys");
const async = require("async");

exports.index = (req,res) => {
    async.parallel(
        {
            journey_count(callback) {
                Journey.countDocuments({}, callback); 
            },
            journey_instance_count(callback) {
                JourneyInstance.countDocuments({}, callback);
            },
        },
        (err, results) => {
            res.render("index", {
                title: "Helsinki Bike Journey",
                error: err,
                data: results,
            });
        }
    );
};

// display list of all journeys
exports.journey_list = (req,res,next) => {
    Journey.find({}, "start station")
    .sort({journey:1})
    .populate("station")
    .exec(function (err, list_journeys){
        if (err) {
            return next (err);
        }
        res.render("journey_list", { journey: "Journey List", journey_list: list_journeys});
    });
};

// display detail page for a specific journey
exports.journey_detail = (req,res) => {
    res.send(`NOT IMPLEMENTED: Journey detail: ${req.params.id}`);
};

// display journey create form on GET
exports.journey_create_get = (req,res) => {
    res.send("NOT IMPLEMENTED: Journey create GET");
};

// handle journey create on POST
exports.journey_create_post = (req,res) => {
    res.send("NOT IMPLEMENTED: Journey create POST");
};

// display journey delete form on GET
exports.journey_delete_get = (req,res) => {
    res.send("NOT IMPLEMENTED: Journey delete GET");
};

// handle journey delete on POST
exports.journey_delete_post = (req,res) => {
    res.send("NOT IMPLEMENTED: Journey delete POST");
};

// display journey update form on GET
exports.journey_update_get = (req,res) => {
    res.send("NOT IMPLEMENTED: Journey update GET");
};

// handle journey update on POST
exports.journey_update_post = (req,res) => {
    res.send("NOT IMPLEMENTED: Journey update POST");
};
