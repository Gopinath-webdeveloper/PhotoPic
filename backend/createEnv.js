const fs = require('fs');
const path = require('path');

const envContent = `PORT=5000
NODE_ENV=development
API_BASE_URL=http://localhost:5000
CORS_ORIGIN=http://localhost:3000

MONGO_URI=mongodb://localhost:27017/photopic
JWT_SECRET=your_jwt_secret
`;

const envPath = path.join(__dirname, '.env');

fs.writeFileSync(envPath, envContent, { encoding: 'utf8' });
console.log('.env file has been created/updated successfully!'); 