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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUDTester = void 0;
var chai_1 = require("chai");
var axios_1 = __importDefault(require("axios"));
var CRUDTester = (function () {
    function CRUDTester(url, apiString) {
        this.url = url + "/" + apiString;
        this.lastId = 0;
        this.testData = {
            name: "test_" + Math.floor(Math.random() * 1000)
        };
    }
    CRUDTester.prototype.add = function () {
        var _this = this;
        it('add', function () { return __awaiter(_this, void 0, void 0, function () {
            var res, resData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios_1.default({
                            method: 'POST',
                            url: "" + this.url,
                            data: this.testData
                        })];
                    case 1:
                        res = _a.sent();
                        resData = res.data.data;
                        this.lastId = resData.lastInsertRowid;
                        chai_1.assert.equal(resData.changes, 1);
                        return [2];
                }
            });
        }); });
    };
    CRUDTester.prototype.list = function () {
        var _this = this;
        it('list', function () { return __awaiter(_this, void 0, void 0, function () {
            var res, resData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios_1.default({
                            method: 'GET',
                            url: "" + this.url,
                            params: this.testData
                        })];
                    case 1:
                        res = _a.sent();
                        resData = res.data.data;
                        console.log(resData);
                        chai_1.assert.isArray(resData);
                        return [2];
                }
            });
        }); });
    };
    CRUDTester.prototype.get = function () {
        var _this = this;
        it('get', function () { return __awaiter(_this, void 0, void 0, function () {
            var res, resData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios_1.default({
                            method: 'GET',
                            url: this.url + "/" + this.lastId
                        })];
                    case 1:
                        res = _a.sent();
                        resData = res.data.data;
                        chai_1.assert.equal(resData.name, this.testData.name);
                        return [2];
                }
            });
        }); });
    };
    CRUDTester.prototype.update = function () {
        var _this = this;
        it('update', function () { return __awaiter(_this, void 0, void 0, function () {
            var res, resData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios_1.default({
                            method: 'PUT',
                            url: this.url + "/" + this.lastId,
                            data: {
                                name: "new test_" + Math.floor(Math.random() * 1000)
                            }
                        })];
                    case 1:
                        res = _a.sent();
                        resData = res.data.data;
                        chai_1.assert.equal(resData, 'success');
                        return [2];
                }
            });
        }); });
    };
    CRUDTester.prototype.del = function () {
        var _this = this;
        it('delete', function () { return __awaiter(_this, void 0, void 0, function () {
            var res, resData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios_1.default({
                            method: 'DELETE',
                            url: this.url + "/" + this.lastId,
                        })];
                    case 1:
                        res = _a.sent();
                        resData = res.data.data;
                        chai_1.assert.equal(resData, 'success');
                        return [2];
                }
            });
        }); });
    };
    CRUDTester.prototype.run = function () {
        var _this = this;
        describe('crud test', function () {
            _this.add();
            _this.list();
            _this.get();
            _this.update();
            _this.del();
        });
    };
    return CRUDTester;
}());
exports.CRUDTester = CRUDTester;
//# sourceMappingURL=test.tester.js.map