const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    let token;
   
    const authHeader = req.headers['authorization'];
    const authToken = req.cookies['token'];

    if (authHeader) {
        token = authHeader.split(' ')[1];
    } else if (authToken) {
        token = authToken;
    }
    
    if (!token) {
        return res.status(401).json({ error: 'Acesso negado. Nenhum token fornecido.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Token inválido.' });
    }
}

module.exports = userMiddleware;