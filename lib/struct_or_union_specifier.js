
/* jshint sub:true */

/*
 *  struct_or_union_specifier -> struct_or_union IDENTIFIER '{' struct_declaration_list '}'
 *                             | struct_or_union '{' struct_declaration_list '}'
 *                             | struct_or_union IDENTIFIER
 * */

var iterate_over_rules = require("./commons").iterate_over_rules;
var TERMINAL = require("./commons").TERMINAL;
var struct_or_union = require("./struct_or_union").struct_or_union;
var struct_declaration_list = require("./struct_declaration_list").struct_declaration_list;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        var child_4 = null;
        var child_5 = null;
        child_1 = struct_or_union(token_stream, arrow);
        if(child_1) child_2 = TERMINAL(token_stream, arrow, 'identifier');
        if(child_2) child_3 = TERMINAL(token_stream, arrow, '{');
        if(child_3) child_4 = struct_declaration_list(token_stream, arrow);
        if(child_4) child_5 = TERMINAL(token_stream, arrow, '}');
        if(child_5){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
            node["children"].push(child_4);
            node["children"].push(child_5);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        var child_4 = null;
        child_1 = struct_or_union(token_stream, arrow);
        if(child_1) child_2 = TERMINAL(token_stream, arrow, '{');
        if(child_2) child_3 = struct_declaration_list(token_stream, arrow);
        if(child_3) child_4 = TERMINAL(token_stream, arrow, '}');
        if(child_4){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
            node["children"].push(child_4);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = struct_or_union(token_stream, arrow);
        if(child_1) child_2 = TERMINAL(token_stream, arrow, 'identifier');
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
];

var struct_or_union_specifier = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "struct_or_union_specifier";
    new_node["children"] = [];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.struct_or_union_specifier = struct_or_union_specifier;