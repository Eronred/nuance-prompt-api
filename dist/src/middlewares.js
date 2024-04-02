"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}
  Here are some endpoints that you can try:
  POST /api/v1/ollama
  POST /api/v1/openai
  `);
    next(error);
}
exports.notFound = notFound;
function errorHandler(err, req, res, next) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
    });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=middlewares.js.map