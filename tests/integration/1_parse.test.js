"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const baseUrl = '/api';
chai_1.should();
describe('Routes', () => {
    let server;
    let request;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        server = app_1.default.listen();
        request = supertest_1.default.agent(server);
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        server.close();
    }));
    afterEach(() => {
        sinon_1.default.restore();
    });
    describe('GET /_healthz', () => {
        it('should have a health check endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
            yield request
                .get('/_healthz')
                .expect(200);
        }));
    });
    describe('POST /api/v1/parse', () => {
        it('should parse data', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request
                .post('/api/v1/parse')
                .send({
                data: 'JOHN0000MICHAEL0009994567',
            })
                .expect(200);
            chai_1.expect(response.body.statusCode).to.be.equal(200);
            chai_1.expect(response.body.data.firstName).to.be.equal('JOHN0000');
            chai_1.expect(response.body.data.lastName).to.be.equal('MICHAEL000');
            chai_1.expect(response.body.data.clientId).to.be.equal('9994567');
        }));
    });
    describe('POST /api/v2/parse', () => {
        it('should parse data', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request
                .post('/api/v2/parse')
                .send({
                data: 'JOHN0000MICHAEL0009994567',
            })
                .expect(200);
            chai_1.expect(response.body.statusCode).to.be.equal(200);
            chai_1.expect(response.body.data.firstName).to.be.equal('JOHN');
            chai_1.expect(response.body.data.lastName).to.be.equal('MICHAEL');
            chai_1.expect(response.body.data.clientId).to.be.equal('9994567');
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMV9wYXJzZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiMV9wYXJzZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXNDO0FBQ3RDLGtEQUEwQjtBQUMxQiwwREFBa0M7QUFDbEMsd0RBQWdDO0FBRWhDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUN2QixhQUFNLEVBQUUsQ0FBQztBQUVULFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxPQUFPLENBQUM7SUFFWixNQUFNLENBQUMsR0FBUyxFQUFFO1FBQ2hCLE1BQU0sR0FBRyxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBUyxFQUFFO1FBQ2YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsZUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDN0IsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLEdBQVMsRUFBRTtZQUNuRCxNQUFNLE9BQU87aUJBQ1YsR0FBRyxDQUFDLFdBQVcsQ0FBQztpQkFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7UUFDbEMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQVMsRUFBRTtZQUNqQyxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU87aUJBQzNCLElBQUksQ0FBQyxlQUFlLENBQUM7aUJBQ3JCLElBQUksQ0FBQztnQkFDSixJQUFJLEVBQUUsMkJBQTJCO2FBQ2xDLENBQUM7aUJBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWYsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdELGFBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5RCxhQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtRQUNsQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBUyxFQUFFO1lBQ2pDLE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTztpQkFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDckIsSUFBSSxDQUFDO2dCQUNKLElBQUksRUFBRSwyQkFBMkI7YUFDbEMsQ0FBQztpQkFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFZixhQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsRCxhQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELGFBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVjdCwgc2hvdWxkIH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IHN1cGVydGVzdCBmcm9tICdzdXBlcnRlc3QnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9zcmMvYXBwJztcblxuY29uc3QgYmFzZVVybCA9ICcvYXBpJztcbnNob3VsZCgpO1xuXG5kZXNjcmliZSgnUm91dGVzJywgKCkgPT4ge1xuICBsZXQgc2VydmVyO1xuICBsZXQgcmVxdWVzdDtcblxuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgIHNlcnZlciA9IGFwcC5saXN0ZW4oKTtcbiAgICByZXF1ZXN0ID0gc3VwZXJ0ZXN0LmFnZW50KHNlcnZlcik7XG4gIH0pO1xuXG4gIGFmdGVyKGFzeW5jICgpID0+IHtcbiAgICBzZXJ2ZXIuY2xvc2UoKTtcbiAgfSk7XG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBzaW5vbi5yZXN0b3JlKCk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdHRVQgL19oZWFsdGh6JywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGF2ZSBhIGhlYWx0aCBjaGVjayBlbmRwb2ludCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldCgnL19oZWFsdGh6JylcbiAgICAgICAgLmV4cGVjdCgyMDApO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnUE9TVCAvYXBpL3YxL3BhcnNlJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcGFyc2UgZGF0YScsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAucG9zdCgnL2FwaS92MS9wYXJzZScpXG4gICAgICAgIC5zZW5kKHtcbiAgICAgICAgICBkYXRhOiAnSk9ITjAwMDBNSUNIQUVMMDAwOTk5NDU2NycsXG4gICAgICAgIH0pXG4gICAgICAgIC5leHBlY3QoMjAwKTtcblxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuc3RhdHVzQ29kZSkudG8uYmUuZXF1YWwoMjAwKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmRhdGEuZmlyc3ROYW1lKS50by5iZS5lcXVhbCgnSk9ITjAwMDAnKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmRhdGEubGFzdE5hbWUpLnRvLmJlLmVxdWFsKCdNSUNIQUVMMDAwJyk7XG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5kYXRhLmNsaWVudElkKS50by5iZS5lcXVhbCgnOTk5NDU2NycpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnUE9TVCAvYXBpL3YyL3BhcnNlJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcGFyc2UgZGF0YScsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAucG9zdCgnL2FwaS92Mi9wYXJzZScpXG4gICAgICAgIC5zZW5kKHtcbiAgICAgICAgICBkYXRhOiAnSk9ITjAwMDBNSUNIQUVMMDAwOTk5NDU2NycsXG4gICAgICAgIH0pXG4gICAgICAgIC5leHBlY3QoMjAwKTtcblxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuc3RhdHVzQ29kZSkudG8uYmUuZXF1YWwoMjAwKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmRhdGEuZmlyc3ROYW1lKS50by5iZS5lcXVhbCgnSk9ITicpO1xuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuZGF0YS5sYXN0TmFtZSkudG8uYmUuZXF1YWwoJ01JQ0hBRUwnKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmRhdGEuY2xpZW50SWQpLnRvLmJlLmVxdWFsKCc5OTk0NTY3Jyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=