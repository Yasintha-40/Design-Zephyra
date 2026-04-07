const fs = require('fs/promises');
const path = require('path');

const dbPath = path.join(__dirname, '..', process.env.DATABASE_FILE || 'db.json');

const initDB = async () => {
    try {
        await fs.access(dbPath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(dbPath, JSON.stringify({ users: [] }, null, 2));
        }
    }
};

const readDB = async () => {
    await initDB();
    const data = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(data);
};

const writeDB = async (data) => {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
};

module.exports = {
    readDB,
    writeDB,
};
