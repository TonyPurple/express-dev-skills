const skills = [
    { id: 123456, skill: 'HTML', level: '5', done: true, description: 'I have demonstrated ability to use this skill across a variety of applications' },
    { id: 123457, skill: 'CSS Flexbox/Grid, Responsive Design, Bootstrap', level: '5', done: true, description: 'I have demonstrated ability to use this skill across a variety of applications' },
    { id: 123458, skill: 'Git & GitHub', level: '4', done: true, description: 'I possess the ability needed for day-to-day Git repository workflow' },
    { id: 123459, skill: 'JavaScript', level: '4', done: true, description: 'I possess a solid foundation in JavaScript fundamentals' },
    { id: 123460, skill: 'MongoDB', level: '1', done: true, description: 'I have limited experience with this tool' },
    { id: 123461, skill: 'Big O Notation', level: '1', done: true, description: 'I have basic understanding of computer science topics' },
    { id: 123462, skill: 'NodeJS & Express.JS', level: '3', done: true, description: 'I have moderate experience with these frameworks' },
    { id: 123463, skill: 'React', level: '1', done: true, description: 'I have limited experience with this tool' },
    { id: 123464, skill: 'Python, Django, PostgreSQL', level: '1', done: true, description: 'I have limited experience with these tools' },
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