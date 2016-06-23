var assert = require('assert');
var expect = require("chai").expect;

describe('function_definition_count', function() {
    it('Should be able to require `function_definition_count` as a function', function () {
        var function_definition_count = require("../../lib/parse-tree-analyzer").function_definition_count;
        assert(function_definition_count);
        assert(typeof(function_definition_count), "function");
    });

    it("Should have 1 function", function(){
        var function_definition_count = require("../../lib/parse-tree-analyzer").function_definition_count;
        var translation_unit = require("../../lib/rules").translation_unit;
        var arrow = { "pointer": 0 };
        /*
        *   #include <stdio.h>
        *
        *   int main(){
        *       printf("Hello world !!!");
        *       return 0;
        *   }
        * */
        var token_stream = [ 
		  { lexeme: 'int',
			row: 3,
			col: 1,
			tokenClass: 'INT',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: 'main',
			row: 3,
			col: 5,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: '(',
			row: 3,
			col: 9,
			tokenClass: '(',
			parent: null,
			children: null },
		  { lexeme: ')',
			row: 3,
			col: 10,
			tokenClass: ')',
			parent: null,
			children: null },
		  { lexeme: '{',
			row: 3,
			col: 11,
			tokenClass: '{',
			parent: null,
			children: null },
		  { lexeme: 'printf',
			row: 4,
			col: 5,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: '(',
			row: 4,
			col: 11,
			tokenClass: '(',
			parent: null,
			children: null },
		  { lexeme: '"Hello world !!!"',
			row: 4,
			col: 12,
			tokenClass: 'STRING_LITERAL',
			parent: null,
			children: null },
		  { lexeme: ')',
			row: 4,
			col: 29,
			tokenClass: ')',
			parent: null,
			children: null },
		  { lexeme: ';',
			row: 4,
			col: 30,
			tokenClass: ';',
			parent: null,
			children: null },
		  { lexeme: 'return',
			row: 5,
			col: 5,
			tokenClass: 'RETURN',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: '0',
			row: 5,
			col: 12,
			tokenClass: 'CONSTANT',
			parent: null,
			children: null },
		  { lexeme: ';',
			row: 5,
			col: 13,
			tokenClass: ';',
			parent: null,
			children: null },
		  { lexeme: '}',
			row: 6,
			col: 1,
			tokenClass: '}',
			parent: null,
			children: null } 
		];

        parse_tree = translation_unit(token_stream, arrow);
		var n = function_definition_count(parse_tree);
        expect(n).to.equal(1);
    });

    it("Should have 1 function definition", function(){
        var function_definition_count = require("../../lib/parse-tree-analyzer").function_definition_count;
        var translation_unit = require("../../lib/rules").translation_unit;
        var arrow = { "pointer": 0 };
        /*
        *   #include <stdio.h>
        *
        *   int a;
        *
        *   int main(){
        *       printf("Hello world !!!");
        *       return 0;
        *   }
        * */
        var token_stream = [ 
	      { lexeme: 'int',
			row: 3,
			col: 1,
			tokenClass: 'INT',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: 'a',
			row: 3,
			col: 5,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: ';',
			row: 3,
			col: 6,
			tokenClass: ';',
			parent: null,
			children: null },
		  { lexeme: 'int',
			row: 5,
			col: 1,
			tokenClass: 'INT',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: 'main',
			row: 5,
			col: 5,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: '(',
			row: 5,
			col: 9,
			tokenClass: '(',
			parent: null,
			children: null },
		  { lexeme: ')',
			row: 5,
			col: 10,
			tokenClass: ')',
			parent: null,
			children: null },
		  { lexeme: '{',
			row: 5,
			col: 11,
			tokenClass: '{',
			parent: null,
			children: null },
		  { lexeme: 'printf',
			row: 6,
			col: 5,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: '(',
			row: 6,
			col: 11,
			tokenClass: '(',
			parent: null,
			children: null },
		  { lexeme: '"Hello world !!!"',
			row: 6,
			col: 12,
			tokenClass: 'STRING_LITERAL',
			parent: null,
			children: null },
		  { lexeme: ')',
			row: 6,
			col: 29,
			tokenClass: ')',
			parent: null,
			children: null },
		  { lexeme: ';',
			row: 6,
			col: 30,
			tokenClass: ';',
			parent: null,
			children: null },
		  { lexeme: 'return',
			row: 7,
			col: 5,
			tokenClass: 'RETURN',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: '0',
			row: 7,
			col: 12,
			tokenClass: 'CONSTANT',
			parent: null,
			children: null },
		  { lexeme: ';',
			row: 7,
			col: 13,
			tokenClass: ';',
			parent: null,
			children: null },
		  { lexeme: '}',
			row: 8,
			col: 1,
			tokenClass: '}',
			parent: null,
			children: null } ];

        parse_tree = translation_unit(token_stream, arrow);
		var n = function_definition_count(parse_tree);
        expect(n).to.equal(1);
    });

    it("Should have 2 function definitions", function(){
        var function_definition_count = require("../../lib/parse-tree-analyzer").function_definition_count;
        var translation_unit = require("../../lib/rules").translation_unit;
        var arrow = { "pointer": 0 };
        /*
        *   int func(int b){
        *       return b;
        *   }
        *
        *   int main(){
        *       int c = 1, d = 2;
        *       c = func(d);
        *       return 0;
        *   }
        * */
        var token_stream = [ 
	      { lexeme: 'int',
			row: 1,
			col: 1,
			tokenClass: 'INT',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: 'func',
			row: 1,
			col: 5,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: '(',
			row: 1,
			col: 9,
			tokenClass: '(',
			parent: null,
			children: null },
		  { lexeme: 'int',
			row: 1,
			col: 10,
			tokenClass: 'INT',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: 'b',
			row: 1,
			col: 14,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: ')',
			row: 1,
			col: 15,
			tokenClass: ')',
			parent: null,
			children: null },
		  { lexeme: '{',
			row: 1,
			col: 16,
			tokenClass: '{',
			parent: null,
			children: null },
		  { lexeme: 'return',
			row: 2,
			col: 5,
			tokenClass: 'RETURN',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: 'b',
			row: 2,
			col: 12,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: ';',
			row: 2,
			col: 13,
			tokenClass: ';',
			parent: null,
			children: null },
		  { lexeme: '}',
			row: 3,
			col: 1,
			tokenClass: '}',
			parent: null,
			children: null },
		  { lexeme: 'int',
			row: 5,
			col: 1,
			tokenClass: 'INT',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: 'main',
			row: 5,
			col: 5,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: '(',
			row: 5,
			col: 9,
			tokenClass: '(',
			parent: null,
			children: null },
		  { lexeme: ')',
			row: 5,
			col: 10,
			tokenClass: ')',
			parent: null,
			children: null },
		  { lexeme: '{',
			row: 5,
			col: 11,
			tokenClass: '{',
			parent: null,
			children: null },
		  { lexeme: 'int',
			row: 6,
			col: 5,
			tokenClass: 'INT',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: 'c',
			row: 6,
			col: 9,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: '=',
			row: 6,
			col: 11,
			tokenClass: '=',
			parent: null,
			children: null },
		  { lexeme: '1',
			row: 6,
			col: 13,
			tokenClass: 'CONSTANT',
			parent: null,
			children: null },
		  { lexeme: ',',
			row: 6,
			col: 14,
			tokenClass: ',',
			parent: null,
			children: null },
		  { lexeme: 'd',
			row: 6,
			col: 16,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: '=',
			row: 6,
			col: 18,
			tokenClass: '=',
			parent: null,
			children: null },
		  { lexeme: '2',
			row: 6,
			col: 20,
			tokenClass: 'CONSTANT',
			parent: null,
			children: null },
		  { lexeme: ';',
			row: 6,
			col: 21,
			tokenClass: ';',
			parent: null,
			children: null },
		  { lexeme: 'c',
			row: 7,
			col: 5,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: '=',
			row: 7,
			col: 7,
			tokenClass: '=',
			parent: null,
			children: null },
		  { lexeme: 'func',
			row: 7,
			col: 9,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: '(',
			row: 7,
			col: 13,
			tokenClass: '(',
			parent: null,
			children: null },
		  { lexeme: 'd',
			row: 7,
			col: 14,
			tokenClass: 'IDENTIFIER',
			parent: null,
			children: null },
		  { lexeme: ')',
			row: 7,
			col: 15,
			tokenClass: ')',
			parent: null,
			children: null },
		  { lexeme: ';',
			row: 7,
			col: 16,
			tokenClass: ';',
			parent: null,
			children: null },
		  { lexeme: 'return',
			row: 8,
			col: 5,
			tokenClass: 'RETURN',
			keyword: true,
			parent: null,
			children: null },
		  { lexeme: '0',
			row: 8,
			col: 12,
			tokenClass: 'CONSTANT',
			parent: null,
			children: null },
		  { lexeme: ';',
			row: 8,
			col: 13,
			tokenClass: ';',
			parent: null,
			children: null },
		  { lexeme: '}',
			row: 9,
			col: 1,
			tokenClass: '}',
			parent: null,
			children: null } 
        ];

        parse_tree = translation_unit(token_stream, arrow);
		var n = function_definition_count(parse_tree);
        expect(n).to.equal(2);
    });

    it("Should have 1 function definition", function(){
        var function_definition_count = require("../../lib/parse-tree-analyzer").function_definition_count;
        var translation_unit = require("../../lib/rules").translation_unit;
        var arrow = { "pointer": 0 };
        /*
        *   int main(){
        *       int a = 1, b = 2, c;
        *       c = b;
        *       b = a;
        *       a = c;
        *       return 0;
        *   }
        * */
        var token_stream = [ 
          { lexeme: 'int',
            row: 1,
            col: 1,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'main',
            row: 1,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '(',
            row: 1,
            col: 9,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 10,
            tokenClass: ')',
            parent: null,
            children: null },
          { lexeme: '{',
            row: 1,
            col: 11,
            tokenClass: '{',
            parent: null,
            children: null },
          { lexeme: 'int',
            row: 2,
            col: 5,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 2,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 2,
            col: 11,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 2,
            col: 13,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ',',
            row: 2,
            col: 14,
            tokenClass: ',',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 2,
            col: 16,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 2,
            col: 18,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: '2',
            row: 2,
            col: 20,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ',',
            row: 2,
            col: 21,
            tokenClass: ',',
            parent: null,
            children: null },
          { lexeme: 'c',
            row: 2,
            col: 23,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 2,
            col: 24,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'c',
            row: 3,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 3,
            col: 7,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 3,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 3,
            col: 10,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 4,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 4,
            col: 7,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 4,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 4,
            col: 10,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 5,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 5,
            col: 7,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: 'c',
            row: 5,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 5,
            col: 10,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'return',
            row: 6,
            col: 5,
            tokenClass: 'RETURN',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: '0',
            row: 6,
            col: 12,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 6,
            col: 13,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: '}',
            row: 7,
            col: 1,
            tokenClass: '}',
            parent: null,
            children: null } 
        ];

        parse_tree = translation_unit(token_stream, arrow);
		var n = function_definition_count(parse_tree);
        expect(n).to.equal(1);
    });

    it("Should have 1 function definition", function(){
        var function_definition_count = require("../../lib/parse-tree-analyzer").function_definition_count;
        var translation_unit = require("../../lib/rules").translation_unit;
        var arrow = { "pointer": 0 };
        /*
        *   int main(){
        *       int a = 1, b = 2;
        *       b = a ^ b;
        *       a = b ^ a;
        *       b = b ^ a;
        *       return 0;
        *   }
        * */
        var token_stream = [ 
          { lexeme: 'int',
            row: 1,
            col: 1,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'main',
            row: 1,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '(',
            row: 1,
            col: 9,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 10,
            tokenClass: ')',
            parent: null,
            children: null },
          { lexeme: '{',
            row: 1,
            col: 11,
            tokenClass: '{',
            parent: null,
            children: null },
          { lexeme: 'int',
            row: 2,
            col: 5,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 2,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 2,
            col: 11,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 2,
            col: 13,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ',',
            row: 2,
            col: 14,
            tokenClass: ',',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 2,
            col: 16,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 2,
            col: 18,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: '2',
            row: 2,
            col: 20,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 2,
            col: 21,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 3,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 3,
            col: 7,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 3,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '^',
            row: 3,
            col: 11,
            tokenClass: '^',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 3,
            col: 13,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 3,
            col: 14,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 4,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 4,
            col: 7,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 4,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '^',
            row: 4,
            col: 11,
            tokenClass: '^',
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 4,
            col: 13,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 4,
            col: 14,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 5,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 5,
            col: 7,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 5,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '^',
            row: 5,
            col: 11,
            tokenClass: '^',
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 5,
            col: 13,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 5,
            col: 14,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'return',
            row: 6,
            col: 5,
            tokenClass: 'RETURN',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: '0',
            row: 6,
            col: 12,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 6,
            col: 13,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: '}',
            row: 7,
            col: 1,
            tokenClass: '}',
            parent: null,
            children: null } 
        ];

        parse_tree = translation_unit(token_stream, arrow);
		var n = function_definition_count(parse_tree);
        expect(n).to.equal(1);
    });

    it("Should have 2 function definitions", function(){
        var function_definition_count = require("../../lib/parse-tree-analyzer").function_definition_count;
        var translation_unit = require("../../lib/rules").translation_unit;
        var arrow = { "pointer": 0 };
        /*
         *  int func(int a);
         *
         *  int main(){
         *      int a = 1, b = 2;
         *      a = func(b);
         *      return 0;
         *  }
         *
         *  int func(int a){
         *      return a;
         *  }
         * */
        var token_stream = [ 
          { lexeme: 'int',
            row: 1,
            col: 1,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'func',
            row: 1,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '(',
            row: 1,
            col: 9,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: 'int',
            row: 1,
            col: 10,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 1,
            col: 14,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 15,
            tokenClass: ')',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 1,
            col: 16,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'int',
            row: 3,
            col: 1,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'main',
            row: 3,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '(',
            row: 3,
            col: 9,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: ')',
            row: 3,
            col: 10,
            tokenClass: ')',
            parent: null,
            children: null },
          { lexeme: '{',
            row: 3,
            col: 11,
            tokenClass: '{',
            parent: null,
            children: null },
          { lexeme: 'int',
            row: 4,
            col: 5,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 4,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 4,
            col: 11,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 4,
            col: 13,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ',',
            row: 4,
            col: 14,
            tokenClass: ',',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 4,
            col: 16,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 4,
            col: 18,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: '2',
            row: 4,
            col: 20,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 4,
            col: 21,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 5,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 5,
            col: 7,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: 'func',
            row: 5,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '(',
            row: 5,
            col: 13,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: 'b',
            row: 5,
            col: 14,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ')',
            row: 5,
            col: 15,
            tokenClass: ')',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 5,
            col: 16,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: 'return',
            row: 6,
            col: 5,
            tokenClass: 'RETURN',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: '0',
            row: 6,
            col: 12,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 6,
            col: 13,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: '}',
            row: 7,
            col: 1,
            tokenClass: '}',
            parent: null,
            children: null },
          { lexeme: 'int',
            row: 9,
            col: 1,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'func',
            row: 9,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '(',
            row: 9,
            col: 9,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: 'int',
            row: 9,
            col: 10,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 9,
            col: 14,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ')',
            row: 9,
            col: 15,
            tokenClass: ')',
            parent: null,
            children: null },
          { lexeme: '{',
            row: 9,
            col: 16,
            tokenClass: '{',
            parent: null,
            children: null },
          { lexeme: 'return',
            row: 10,
            col: 5,
            tokenClass: 'RETURN',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 10,
            col: 12,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 10,
            col: 13,
            tokenClass: ';',
            parent: null,
            children: null },
          { lexeme: '}',
            row: 11,
            col: 1,
            tokenClass: '}',
            parent: null,
            children: null } 
        ];

        parse_tree = translation_unit(token_stream, arrow);
		var n = function_definition_count(parse_tree);
        expect(n).to.equal(2);
    });
});