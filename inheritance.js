var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TeslaCompany = /** @class */ (function () {
    function TeslaCompany(cred) {
        this.credentials = '';
        this.departments = [];
        this.employees = [];
        this.credentials = cred;
    }
    TeslaCompany.prototype.addDepartment = function (value) {
        this.departments = __spreadArray(__spreadArray([], this.departments, true), [value], false);
    };
    TeslaCompany.prototype.addEmployee = function (value) {
        this.employees = __spreadArray(__spreadArray([], this.employees, true), [value], false);
    };
    TeslaCompany.role = "Admin";
    return TeslaCompany;
}());
var TeslaEmployee = /** @class */ (function (_super) {
    __extends(TeslaEmployee, _super);
    function TeslaEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.new_employee = { name: '', age: 0 };
        return _this;
    }
    TeslaEmployee.prototype.setName = function (name) {
        this.new_employee = name;
    };
    return TeslaEmployee;
}(TeslaCompany));
var newTeslaEmployee = new TeslaEmployee('123456');
newTeslaEmployee.setName({ name: 'Kevin Odongo', age: 36 });
newTeslaEmployee.addDepartment({ name: 'Finance' });
newTeslaEmployee.addEmployee({ name: 'Kevin Odongo', age: 36 });
console.log(newTeslaEmployee);
