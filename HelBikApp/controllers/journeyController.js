const Journey = require("../models/journeys");

// display list of all journeys
exports.journey_list = (req,res) => {
    res.send("NOT IMPLEMENTED: Journey list");
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
