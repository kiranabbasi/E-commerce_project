import jwt from "jsonwebtoken";

const AdminAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({ success: false, message: "No Login" });
        }

        // Verify the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Assuming the token has an 'email' property
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: "Not Authorized Login" });
        }

        next(); // Proceed to the next middleware or route handler

    } catch (error) {
        console.error(error);
        return res.status(403).json({ success: false, message: error.message });
    }
};

export default AdminAuth;
