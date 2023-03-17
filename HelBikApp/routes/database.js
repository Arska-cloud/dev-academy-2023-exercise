const express = require("express");
const router = express.Router();

// require controller modules
const journey_controller = require("../controllers/journeyController");

// GET catalog home page
router.get("/", journey_controller.index);

// GET request for creating a journey. NOTE This must come before routes that display Book (uses id).
router.get("/journey/create", journey_controller.journey_create_get);

// POST request for creating journey
router.post("/journey/create", journey_controller.journey_create_post);

// GET request to delete journey
router.get("/journey/:id/delete", journey_controller.journey_delete_get);

// POST request to delete journey
router.post("/journey/:id/delete", journey_controller.journey_delete_post);

// GET request to update journey
router.get("/journey/:id/update", journey_controller.journey_update_get);

// POST request to update journey
router.post("/journey/:id/update", journey_controller.journey_update_post);

// GET request for one journey
router.get("/journey/:id", journey_controller.journey_detail);

// GET request for list of all journey items
router.get("/journeys", journey_controller.journey_list);

module.exports = router;
