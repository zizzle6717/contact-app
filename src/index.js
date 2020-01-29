"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const app_1 = __importDefault(require("./app"));
let devServer;
if (!process.env.PORT) {
    console.log('Missing ENV varaibles...Exiting!');
    process.exit(1);
}
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}
// Run npm start <custom-port>
const PORT = (process.env.NODE_ENV === 'development' && parseInt(process.argv[2], 10))
    || parseInt(process.env.PORT, 10);
// Start server
if (process.env.NODE_ENV !== 'development') {
    const options = {
        key: fs_1.default.readFileSync(process.env.CERT_KEY || ''),
        cert: fs_1.default.readFileSync(process.env.CERT_FILE || ''),
    };
    https_1.default.createServer(options, app_1.default).listen(PORT);
}
else {
    devServer = app_1.default.listen(process.env.PORT, () => {
        console.info(`server started on ${PORT}`);
    });
}
if (devServer && module.hot) {
    module.hot.accept();
    module.hot.dispose(() => devServer.close());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUFvQjtBQUNwQixrREFBMEI7QUFDMUIsZ0RBQXdCO0FBRXhCLElBQUksU0FBUyxDQUFDO0FBRWQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2pCO0FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztDQUN0QztBQUVELDhCQUE4QjtBQUM5QixNQUFNLElBQUksR0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLGFBQWEsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztPQUN6RixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFcEMsZUFBZTtBQUNmLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssYUFBYSxFQUFFO0lBQzFDLE1BQU0sT0FBTyxHQUFHO1FBQ2QsR0FBRyxFQUFFLFlBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQ2hELElBQUksRUFBRSxZQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztLQUNuRCxDQUFDO0lBRUYsZUFBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQy9DO0tBQU07SUFDTCxTQUFTLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDNUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztDQUNKO0FBb0JELElBQUksU0FBUyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztDQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7XG5cbmxldCBkZXZTZXJ2ZXI7XG5cbmlmICghcHJvY2Vzcy5lbnYuUE9SVCkge1xuICBjb25zb2xlLmxvZygnTWlzc2luZyBFTlYgdmFyYWlibGVzLi4uRXhpdGluZyEnKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufVxuXG5pZiAoIXByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID0gJ2RldmVsb3BtZW50Jztcbn1cblxuLy8gUnVuIG5wbSBzdGFydCA8Y3VzdG9tLXBvcnQ+XG5jb25zdCBQT1JUOiBudW1iZXIgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgcGFyc2VJbnQocHJvY2Vzcy5hcmd2WzJdLCAxMCkpXG4gIHx8IHBhcnNlSW50KHByb2Nlc3MuZW52LlBPUlQsIDEwKTtcblxuLy8gU3RhcnQgc2VydmVyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBrZXk6IGZzLnJlYWRGaWxlU3luYyhwcm9jZXNzLmVudi5DRVJUX0tFWSB8fCAnJyksXG4gICAgY2VydDogZnMucmVhZEZpbGVTeW5jKHByb2Nlc3MuZW52LkNFUlRfRklMRSB8fCAnJyksXG4gIH07XG5cbiAgaHR0cHMuY3JlYXRlU2VydmVyKG9wdGlvbnMsIGFwcCkubGlzdGVuKFBPUlQpO1xufSBlbHNlIHtcbiAgZGV2U2VydmVyID0gYXBwLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JULCAoKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKGBzZXJ2ZXIgc3RhcnRlZCBvbiAke1BPUlR9YCk7XG4gIH0pO1xufVxuXG4vLyBIb3QgTW9kdWxlIFJlbG9hZGluZ1xudHlwZSBNb2R1bGVJZCA9IHN0cmluZyB8IG51bWJlcjtcblxuaW50ZXJmYWNlIFdlYnBhY2tIb3RNb2R1bGUge1xuICBob3Q/OiB7XG4gICAgZGF0YTogYW55O1xuICAgIGFjY2VwdChcbiAgICAgIGRlcGVuZGVuY2llczogc3RyaW5nW10sXG4gICAgICBjYWxsYmFjaz86ICh1cGRhdGVkRGVwZW5kZW5jaWVzOiBNb2R1bGVJZFtdKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG4gICAgYWNjZXB0KGRlcGVuZGVuY3k6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKTogdm9pZDtcbiAgICBhY2NlcHQoZXJySGFuZGxlcj86IChlcnI6IEVycm9yKSA9PiB2b2lkKTogdm9pZDtcbiAgICBkaXNwb3NlKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKTogdm9pZDtcbiAgfTtcbn1cblxuZGVjbGFyZSBjb25zdCBtb2R1bGU6IFdlYnBhY2tIb3RNb2R1bGU7XG5cbmlmIChkZXZTZXJ2ZXIgJiYgbW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4gZGV2U2VydmVyLmNsb3NlKCkpO1xufVxuIl19