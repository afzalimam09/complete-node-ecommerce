const path = require('path');

// module.exports = path.dirname(process.mainModule.filename); mainModule is depricated
module.exports = path.dirname(require.main.filename);