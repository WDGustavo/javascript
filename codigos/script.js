function getAdmins(map){
    let admins = [];
    for([key, value]of map){
        if(value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}
const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Matt','Admin');
usuarios.set('Antoni','User');
usuarios.set('Kevin','Admin');

console.log(getAdmins(usuarios));