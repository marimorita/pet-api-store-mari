"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.post('/login', (req, res) => {
            res.json({ message: 'login' });
        });
        router.post('/register', (req, res) => {
            res.json({ message: 'register' });
        });
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
