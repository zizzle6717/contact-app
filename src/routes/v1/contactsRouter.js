"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contacts_1 = require("../../controllers/v1/contacts");
const router = express_1.default.Router();
router.post('/parse', contacts_1.parseData);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHNSb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0c1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qiw0REFFdUM7QUFFdkMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxvQkFBUyxDQUFDLENBQUM7QUFFakMsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1xuICBwYXJzZURhdGEsXG59IGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL3YxL2NvbnRhY3RzJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoJy9wYXJzZScsIHBhcnNlRGF0YSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==