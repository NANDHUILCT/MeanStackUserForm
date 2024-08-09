const getUsers = (req,res)=>{
    res.send('Get Users Succesful');
}

const addUser = (req,res)=>{
    console.log(req.body);
    res.json({status:"User added Succesfully"})
}
const editUser = (req,res)=>{
    console.log(req.body);
    res.json({status:"updates succesfully"})
}
const deleteUser = (req,res)=>{
    console.log(req.body);
    res.json({status:"deleted succesfully"})
}
module.exports = {getUsers,addUser,editUser,deleteUser}