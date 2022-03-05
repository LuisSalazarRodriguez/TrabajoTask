const taskController = {}
const Task = require('../models/Task');

taskController.getAll = async (req,res) => {
    try{
        const tasks = await Task.findAll()
        res.json({
            status:true,
            content: tasks
        })

    } catch(error){
        console.log(error);
        res.json({
            status:false,
            content:'ocurrio un problema'
        });
    }
}

taskController.create = async(req,res)=>{
    const {name, done, projectid} = req.body;
    try {
        let newTask = await Task.create({
            name, done, projectid
        });
        if (newTask){
            return res.json({
                status: true,
                content:newTask
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:false,
            content: 'error en el registro: ' + error
        })
    }
}

taskController.update = async (req,res)=>{
    const {id} = req.params;
    const {name, done, projectid} = req.body;
    try {
        const updateTask = await Task.findByPk(id);
        if (updateTask){
            updateTask.update({
                name, done, projectid
            });
        }            
        return res.json({
            status:true,
            content:updateTask
        })

    } catch (error) {
        res.json({
            status:false,
            content: 'error: ' + error
        })
    }
}

taskController.delTask = async (req,res)=>{
    const {id} = req.params;
    try {
        const deleteTask = await Task.findByPk(id);
        if (deleteTask){
            deleteTask.destroy()
        }
        return res.json({
            status:true,
            content:deleteTask
        })

    } catch (error) {
        res.json({
            status:false,
            content: 'error: ' + error
        })
    }
}

module.exports = taskController