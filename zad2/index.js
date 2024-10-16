
const { saveData } = require('./saveUserData');

const jsonFilePath = './2-read-write-users.json';
const folderName = 'user_data';
const overwrite = true; 

saveData(jsonFilePath, folderName, overwrite);
