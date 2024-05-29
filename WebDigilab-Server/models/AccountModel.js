const mongoose = require('mongoose');
const { v4:uuidv4 } = require('uuid')

const aslabSchema = new mongoose.Schema({
    aslab_id: { type: String, default: uuidv4, unique: true },
    aslab_name: { type: String, required: true, unique: true },
    aslab_npm: { type: String, required: true, unique: true },
    aslab_profile_picture: String,
    aslab_bio: String,
    aslab_email: { type: String, required: true, unique: true },
    aslab_password: { type: String, required: true },
});
const Aslab = mongoose.model('Aslab', aslabSchema);

const praktikanSchema = new mongoose.Schema({
    praktikan_id: { type: String, default: uuidv4, unique: true },
    praktikan_name: { type: String, required: true, unique: true },
    praktikan_npm: { type: String, required: true, unique: true },
    praktikan_profile_picture: String,
    praktikan_bio: String,
    praktikan_email: { type: String, required: true, unique: true },
    praktikan_password: { type: String, required: true },
});
const Praktikan = mongoose.model('Praktikan', praktikanSchema);

module.exports = {
    Aslab,
    Praktikan,
};