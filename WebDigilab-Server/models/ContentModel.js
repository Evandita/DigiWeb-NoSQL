const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const matkulSchema = new mongoose.Schema({
    matkul_id: { type: Number, unique: true },
    matkul_name: { type: String, required: true },
    matkul_desc: String,
});
matkulSchema.plugin(AutoIncrement, { inc_field: 'matkul_id' });
const Matkul = mongoose.model('Matkul', matkulSchema);

const courseSchema = new mongoose.Schema({
    course_id: { type: Number, unique: true },
    matkul_id: { type: Number, required: true },
    course_name: { type: String, required: true },
    course_desc: String,
    course_image: String,
    course_start: Date,
    course_end: Date,
});
courseSchema.plugin(AutoIncrement, { inc_field: 'course_id' });
const Course = mongoose.model('Course', courseSchema);

const chapterSchema = new mongoose.Schema({
    chapter_id: { type: Number, unique: true },
    course_id: { type: Number, required: true },
    chapter_no: Number,
    chapter_title: String,
    chapter_link: String,
});
chapterSchema.plugin(AutoIncrement, { inc_field: 'chapter_id' });
const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = {
    Matkul,
    Course,
    Chapter
}