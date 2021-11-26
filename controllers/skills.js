const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    req.body.done = req.body.done === 'on';
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    });
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    req.body.done = req.body.done === 'on';
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new')
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        date: req.date,
        level: req.level
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    });
}