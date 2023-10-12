const clientPort = process.env.CLIENT_PORT || 3000;

const corsOptions = {
    origin: `http://localhost:${clientPort}`,
};

module.exports = corsOptions;