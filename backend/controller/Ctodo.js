const {Todo} = require('../models/index');

exports.TodoLists = async (req, res) => {
    try {
        const lists = await Todo.findAll();
        res.json(lists);
        console.log('lists ?>? ', {data});
    } catch(error) {
        console.log(error);
    }
}