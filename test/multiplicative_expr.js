var assert = require('assert');

describe('multiplicative_expr', function() {
    it('Should be able to require `multiplicative_expr` as a function', function () {
        var multiplicative_expr = require("../lib/rules").multiplicative_expr;
        assert(multiplicative_expr);
        assert(typeof(multiplicative_expr), "function");
    });
});
