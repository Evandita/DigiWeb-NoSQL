const bcrypt = require("bcrypt");
const { Matkul, Course, Chapter } = require("../models/ContentModel");

async function createMatkul(req,res) {
    const {matkul_name, matkul_desc} = req.body;

    try {
        const matkul = new Matkul({
            matkul_name: matkul_name,
            matkul_desc: matkul_desc,
        });
        await matkul.save();
        res.status(200).json(matkul);
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

async function createCourse(req, res) {
    const {matkul_id, course_name, course_desc, course_image, course_start, course_end} = req.body;

    try {
        const course = new Course({
            matkul_id: matkul_id,
            course_name: course_name,
            course_desc: course_desc,
            course_image: course_image,
            course_start: course_start,
            course_end: course_end,
        });
        await course.save();
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

async function getAllCourses(req, res) {

    try {
        const courses = await Course.find().sort({ course_id: 1 });
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

async function getAllCoursesByMatkulId(req, res) {

    const matkulId = req.params.id;

    try {
        const courses = await Course.find({ matkul_id: matkulId });
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

async function getAllMatkuls(req, res) {

    try {
        const matkuls = await Matkul.find().sort({ matkul_id: 1 });
        res.status(200).json(matkuls);
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

async function createChapter(req, res) {
    const {course_id, chapter_no, chapter_title, chapter_link} = req.body;
    
    //janlup kasih handle ketika nomor chapter sudah ada atau nomor chapter null

    try {
        const chapter = new Chapter({
            course_id: course_id,
            chapter_no: chapter_no,
            chapter_title: chapter_title,
            chapter_link: chapter_link,
        })
        await chapter.save();
        res.status(200).json(chapter);
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

async function getAllChaptersByCourseId(req, res) {

    const courseId = req.params.id;

    try {
        const chapters = await Chapter.find({ course_id: courseId }).sort({ chapter_no: 1 });
        res.status(200).json(chapters);
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

async function updateCourse(req, res) {
    
    const {course_id, matkul_id, course_name, course_desc, course_image} = req.body;

    try {
        const course = await Course.findOneAndUpdate({ course_id: course_id }, {
            matkul_id: matkul_id,
            course_name: course_name,
            course_desc: course_desc,
            course_image: course_image,
        }, { new: true });
        res.status(200).json(course);
    } catch(err) {
        res.status(500).json({
            error: err
        })
    }
}

async function deleteCourse(req, res) {
    const {course_id} = req.body;

    try {
        const result = await Course.findOneAndDelete({ course_id: course_id });
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

async function deleteChapter(req, res) {
    const {chapter_id} = req.body;

    try {
        const result = await Chapter.findOneAndDelete({ chapte_id: chapter_id });
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

async function updateChapter(req, res) {
    
    const {chapter_id, chapter_title, chapter_no, chapter_link} = req.body;

    try {
        const chapter = await Chapter.findOneAndUpdate({ chapter_id: chapter_id }, {
            chapter_title: chapter_title,
            chapter_no: chapter_no,
            chapter_link: chapter_link,
        }, { new: true });
        res.status(200).json(chapter);
    } catch(err) {
        res.status(500).json({
            error: err
        })
    }
}

module.exports = {
    createMatkul,
    createCourse,
    getAllCourses,
    getAllCoursesByMatkulId,
    getAllMatkuls,
    createChapter,
    getAllChaptersByCourseId,
    updateCourse,
    deleteCourse,
    deleteChapter,
    updateChapter
}
