// rename-project.js

const fs = require('fs');
const path = require('path');

const newName = process.argv[2];

if (!newName) {
    console.error('Please provide a new project name. Usage: npm run rename-project <new-name>');
    process.exit(1);
}


const renamePackageJson = (newName) => {
    const packageJsonPath = path.join(__dirname, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    packageJson.name = newName;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    console.log(`Updated project name to '${newName}' in package.json`);
};


const renameProjectFolder = (newName) => {
    const currentDir = path.basename(process.cwd());
    const newDir = path.join(path.dirname(process.cwd()), newName);

    if (currentDir !== newName) {
        fs.renameSync(process.cwd(), newDir);
        console.log(`Renamed project folder from '${currentDir}' to '${newName}'`);
    } else {
        console.log(`Project folder is already named '${newName}'`);
    }
};

try {
    renamePackageJson(newName);
    renameProjectFolder(newName);
} catch (err) {
    console.error('An error occurred while renaming the project:', err);
    process.exit(1);
}
