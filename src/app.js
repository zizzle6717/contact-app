"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const v1_1 = __importDefault(require("./routes/v1"));
const v2_1 = __importDefault(require("./routes/v2"));
// App config
const app = express_1.default();
const base = '/api';
// Middleware
app.use(helmet_1.default());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
// Routes
app.use('/coverage', express_1.default.static('coverage/'));
app.use('/_healthz', (req, res) => { res.status(200).json('OK'); });
app.use(base, v1_1.default);
app.use(base, v2_1.default);
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQXFDO0FBQ3JDLGdEQUF3QjtBQUN4QixzREFBOEI7QUFDOUIsb0RBQTRCO0FBQzVCLHFEQUFtQztBQUNuQyxxREFBbUM7QUFFbkMsYUFBYTtBQUNiLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixNQUFNLElBQUksR0FBRyxNQUFNLENBQUM7QUFFcEIsYUFBYTtBQUNiLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sRUFBRSxDQUFDLENBQUM7QUFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRWhCLFNBQVM7QUFDVCxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ2xELEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVwRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFRLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFRLENBQUMsQ0FBQztBQUV4QixrQkFBZSxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGhlbG1ldCBmcm9tICdoZWxtZXQnO1xuaW1wb3J0IHYxUm91dGVyIGZyb20gJy4vcm91dGVzL3YxJztcbmltcG9ydCB2MlJvdXRlciBmcm9tICcuL3JvdXRlcy92Mic7XG5cbi8vIEFwcCBjb25maWdcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IGJhc2UgPSAnL2FwaSc7XG5cbi8vIE1pZGRsZXdhcmVcbmFwcC51c2UoaGVsbWV0KCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoY29ycygpKTtcblxuLy8gUm91dGVzXG5hcHAudXNlKCcvY292ZXJhZ2UnLCBleHByZXNzLnN0YXRpYygnY292ZXJhZ2UvJykpO1xuYXBwLnVzZSgnL19oZWFsdGh6JywgKHJlcSwgcmVzKSA9PiB7IHJlcy5zdGF0dXMoMjAwKS5qc29uKCdPSycpOyB9KTtcblxuYXBwLnVzZShiYXNlLCB2MVJvdXRlcik7XG5hcHAudXNlKGJhc2UsIHYyUm91dGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl19