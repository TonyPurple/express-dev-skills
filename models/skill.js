const skills = [
    { id: 123456, skill: 'Fundamentals of JavaScript, HTML & CSS', done: true },
    { id: 123457, skill: 'DOM Manipulation & Events', done: true },
    { id: 123458, skill: 'Structuring a Browser App', done: true },
    { id: 123459, skill: 'CSS Flexbox, Grid & Responsive Design', done: true },
    { id: 123460, skill: 'JS Callback Functions, Classes, jQuery, this Keyword, Array Iterator Methods & Playing Audio', done: true },
    { id: 123461, skill: 'Big O Notation', done: true },
    { id: 123462, skill: 'Project Deployment to GitHub Pages', done: true },
    { id: 123463, skill: 'Client-Server: HTTP Communications & REST', done: true },
    { id: 123464, skill: 'NodeJS & ExpressJS Framework', done: true },
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}