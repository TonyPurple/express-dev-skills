const skills = [
    { id: 123456, skill: 'HTML', level: '5', done: true, description: 'Sees overall picture and alternative approaches, has vision of what may be possible' },
    { id: 123457, skill: 'CSS Flexbox/Grid, Responsive Design, Bootstrap', level: '5', done: true, description: 'Sees overall picture and alternative approaches, has vision of what may be possible' },
    { id: 123458, skill: 'Git & GitHub', level: '4', done: true, description: 'Able to take full responsibility for own work (and that of others where applicable)' },
    { id: 123459, skill: 'JavaScript', level: '4', done: true, description: 'Proficient depth of understanding of JavaScript disciplines and areas of practice' },
    { id: 123460, skill: 'MongoDB & Mongoose', level: '2', done: false, description: 'Has basic knowledge of key aspects of the practice' },
    { id: 123461, skill: 'Big O Notation', level: '1', done: false, description: 'Novice textbook knowledge of how to deal with complexity in isolation' },
    { id: 123462, skill: 'NodeJS & Express.JS', level: '3', done: false, description: 'Able to competently achieve most tasks using own judgement' },
    { id: 123463, skill: 'React', level: '1', done: false, description: 'Has minimal textbook knowledge without connecting it to the practice' },
    { id: 123464, skill: 'Python, Django, PostgreSQL', level: '1', done: false, description: 'Has minimal textbook knowledge without connecting it to the practice' },
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
    skill.done ? 'checked' : ''
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}