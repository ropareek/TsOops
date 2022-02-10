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
var Person = /** @class */ (function () {
    function Person() {
        this.name = '';
        this.role = '';
    }
    return Person;
}());
var basketballPlayer = /** @class */ (function (_super) {
    __extends(basketballPlayer, _super);
    function basketballPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    basketballPlayer.prototype.setName = function (name) {
        this.name = name;
        this.role = 'BasketBall Player';
    };
    basketballPlayer.prototype.getName = function () {
        return "User name: ".concat(this.name, " Role: ").concat(this.role);
    };
    return basketballPlayer;
}(Person));
var golfPlayer = /** @class */ (function (_super) {
    __extends(golfPlayer, _super);
    function golfPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    golfPlayer.prototype.setName = function (name) {
        this.name = name;
        this.role = 'Golf Player';
    };
    golfPlayer.prototype.getName = function () {
        return "User name: ".concat(this.name, " Role: ").concat(this.role);
    };
    return golfPlayer;
}(Person));
var person1 = new basketballPlayer();
var person2 = new golfPlayer();
person1.setName('Kevin Odongo');
person2.setName('Kevin Odongo');
console.log(person1.getName());
console.log(person2.getName());
