var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Suryamukhi
 * @author Suryamukhi
 */
var BaseSuryamukhi = /** @class */ (function () {
    function BaseSuryamukhi() {
    }
    ;
    return BaseSuryamukhi;
}());
var Suryamukhi = /** @class */ (function (_super) {
    __extends(Suryamukhi, _super);
    function Suryamukhi() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Suryamukhi.prototype.init = function () {
        console.log(Suryamukhi.SON_OF_SUN);
    };
    Suryamukhi.getSuryamukhi = function (numberOfSuryamukhi) {
        if (numberOfSuryamukhi === void 0) { numberOfSuryamukhi = 0; }
        return Suryamukhi.SON_OF_SUN;
    };
    Suryamukhi.SON_OF_SUN = '太陽の子';
    return Suryamukhi;
}(BaseSuryamukhi));
