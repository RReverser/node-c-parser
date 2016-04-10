var assert = require('assert');

describe('logical_and_expr_p', function() {
    it('Should be able to require `logical_and_expr_p` as a function', function () {
        var logical_and_expr_p = require("../lib/rules").logical_and_expr_p;
        assert(logical_and_expr_p);
        assert(typeof(logical_and_expr_p), "function");
    });
});
