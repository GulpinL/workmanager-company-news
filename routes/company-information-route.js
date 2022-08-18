var express = require('express');
var router = express.Router();
const company_information_controller = require("../routes/company-information-controller");


/* GET home page. */
// router.get('/', company_information_controller.render_company_list_information);
// router.get('/foods', company_information_controller.test_get_mongoose_food);
router.get('/', company_information_controller.get_company_list_information_api);
router.post('/', company_information_controller.post_company_list_information_api);


module.exports = router;
