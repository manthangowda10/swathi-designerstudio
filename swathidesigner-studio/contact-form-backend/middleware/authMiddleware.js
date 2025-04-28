const jwt =  require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({message:'Token missing or invalid'});
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_secret);
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
        }
    }


module.exports = { verifyToken };
