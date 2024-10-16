const fs = require('fs');
const path = require('path');

async function saveData(jsonFilePath, folderName, overwrite) {
    try {
        const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
        
        const folderPath = path.join(__dirname, folderName);
        
        if (fs.existsSync(folderPath)) {
            if (!overwrite) {
                console.log(`Folder '${folderName}' już istnieje.`);
                return;
            }
            fs.rmSync(folderPath, { recursive: true });
        }
        
        fs.mkdirSync(folderPath);

        data.forEach(user => {
            const fileName = `${user.id}-${user.name}-${user.surname}.txt`;
            const filePath = path.join(folderPath, fileName);
            const content = `Name: ${user.name}\nSurname: ${user.surname}\nStreet: ${user.address.street}\nZip Code: ${user.address.zip}\nCity: ${user.address.city}\nPhone: ${user.phone}`;
            fs.writeFileSync(filePath, content);
        });

        console.log(`Dane użytkowników zostały zapisane w folderze '${folderName}'.`);
    } catch (error) {
        console.error('Wystąpił błąd: ', error.message);
    }
}

module.exports = { saveData };