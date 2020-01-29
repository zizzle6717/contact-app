"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactsRouter_1 = __importDefault(require("./contactsRouter"));
const router = express_1.default.Router();
router.use('/v1', contactsRouter_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixzRUFBOEM7QUFFOUMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSx3QkFBYyxDQUFDLENBQUM7QUFFbEMsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29udGFjdHNSb3V0ZXIgZnJvbSAnLi9jb250YWN0c1JvdXRlcic7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci51c2UoJy92MScsIGNvbnRhY3RzUm91dGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19