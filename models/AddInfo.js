const mongoose = require('mongoose');
const AddInfoSchema = require('../schemas/AddInfoSchema');
const AddInfo = mongoose.model('info', AddInfoSchema);
module.exports = AddInfo;