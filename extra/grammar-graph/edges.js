// http://blog.thomsonreuters.com/index.php/mobile-patent-suits-graphic-of-the-day/
var links = [
  {source: "translation_unit", target: "external_declaration", type: "suit"},
  {source: "translation_unit", target: "translation_unit_p", type: "suit"},
  {source: "translation_unit_p", target: "external_declaration", type: "suit"},
  {source: "external_declaration", target: "function_definition", type: "suit"},
  {source: "external_declaration", target: "declaration", type: "suit"},
  {source: "function_definition", target: "declaration_specifiers", type: "suit"},
  {source: "function_definition", target: "declarator", type: "suit"},
  {source: "function_definition", target: "declaration_list", type: "suit"},
  {source: "function_definition", target: "compound_stmt", type: "suit"},
  {source: "declaration", target: "declaration_specifiers", type: "suit"},
  {source: "declaration", target: "init_declarator_list", type: "suit"},
  {source: "declaration_specifiers", target: "storage_class_specifier", type: "suit"},
  {source: "declaration_specifiers", target: "type_specifier", type: "suit"},
  {source: "declaration_specifiers", target: "type_qualifier", type: "suit"},
  {source: "declarator", target: "pointer", type: "suit"},
  {source: "declarator", target: "direct_declarator", type: "suit"},
  {source: "declaration_list", target: "declaration", type: "suit"},
  {source: "declaration_list", target: "declaration_list_p", type: "suit"},
  {source: "declaration_list_p", target: "declaration", type: "suit"},
  {source: "compound_stmt", target: "declaration_list", type: "suit"},
  {source: "compound_stmt", target: "stmt_list", type: "suit"},
  {source: "init_declarator_list", target: "init_declarator", type: "suit"},
  {source: "init_declarator_list", target: "init_declarator_list_p", type: "suit"},
  {source: "init_declarator_list_p", target: "init_declarator", type: "suit"},
  {source: "type_specifier", target: "struct_or_union_specifier", type: "suit"},
  {source: "type_specifier", target: "enum_specifier", type: "suit"},
  {source: "pointer", target: "type_qualifier_list", type: "suit"},
  {source: "direct_declarator", target: "declarator", type: "suit"},
  {source: "direct_declarator", target: "direct_declarator_p", type: "suit"},
  {source: "direct_declarator_p", target: "constant_expr", type: "suit"},
  {source: "direct_declarator_p", target: "parameter_type_list", type: "suit"},
  {source: "direct_declarator_p", target: "identifier_list", type: "suit"},
  {source: "stmt_list", target: "stmt_list_p", type: "suit"},
  {source: "stmt_list", target: "stmt", type: "suit"},
  {source: "stmt_list_p", target: "stmt", type: "suit"},
  {source: "init_declarator", target: "declarator", type: "suit"},
  {source: "init_declarator", target: "initializer", type: "suit"},
  {source: "struct_or_union_specifier", target: "struct_or_union", type: "suit"},
  {source: "struct_or_union_specifier", target: "struct_declaration_list", type: "suit"},
  {source: "enum_specifier", target: "enumerator_list", type: "suit"},
  {source: "type_qualifier_list", target: "type_qualifier_list_p", type: "suit"},
  {source: "type_qualifier_list", target: "type_qualifier", type: "suit"},
  {source: "type_qualifier_list_p", target: "type_qualifier", type: "suit"},
  {source: "constant_expr", target: "conditional_expr", type: "suit"},
  {source: "parameter_type_list", target: "parameter_list", type: "suit"},
  {source: "identifier_list", target: "identifier_list_p", type: "suit"},
  {source: "identifier_list_p", target: "initializer", type: "suit"},
  {source: "stmt", target: "labeled_stmt", type: "suit"},
  {source: "stmt", target: "compound_stmt", type: "suit"},
  {source: "stmt", target: "expression_stmt", type: "suit"},
  {source: "stmt", target: "selection_stmt", type: "suit"},
  {source: "stmt", target: "iteration_stmt", type: "suit"},
  {source: "stmt", target: "jump_stmt", type: "suit"},
  {source: "initializer", target: "assignment_expr", type: "suit"},
  {source: "initializer", target: "initializer_list", type: "suit"},
  {source: "struct_declaration_list", target: "struct_declaration_list_p", type: "suit"},
  {source: "struct_declaration_list", target: "struct_declaration", type: "suit"},
  {source: "struct_declaration_list_p", target: "struct_declaration", type: "suit"},
  {source: "enumerator_list", target: "enumerator", type: "suit"},
  {source: "enumerator_list", target: "enumerator_list_p", type: "suit"},
  {source: "enumerator_list_p", target: "enumerator", type: "suit"},
  {source: "conditional_expr", target: "logical_or_expr", type: "suit"},
  {source: "conditional_expr", target: "expr", type: "suit"},
  {source: "parameter_list", target: "parameter_list_p", type: "suit"},
  {source: "parameter_list", target: "parameter_declaration", type: "suit"},
  {source: "parameter_list_p", target: "parameter_declaration", type: "suit"},
  {source: "labeled_stmt", target: "conditional_expr", type: "suit"},
  {source: "labeled_stmt", target: "stmt", type: "suit"},
  {source: "expression_stmt", target: "expression_stmt_p", type: "suit"},
  {source: "selection_stmt", target: "expr", type: "suit"},
  {source: "selection_stmt", target: "stmt", type: "suit"},
  {source: "iteration_stmt", target: "expr", type: "suit"},
  {source: "iteration_stmt", target: "stmt", type: "suit"},
  {source: "iteration_stmt", target: "expression_stmt", type: "suit"},
  {source: "jump_stmt", target: "expr", type: "suit"},
  {source: "assignment_expr", target: "conditional_expr", type: "suit"},
  {source: "assignment_expr", target: "unary_expr", type: "suit"},
  {source: "assignment_expr", target: "assignment_operator", type: "suit"},
  {source: "initializer_list", target: "initializer", type: "suit"},
  {source: "initializer_list", target: "initializer_list_p", type: "suit"},
  {source: "initializer_list_p", target: "initializer", type: "suit"},
  {source: "logical_or_expr", target: "logical_and_expr", type: "suit"},
  {source: "logical_or_expr", target: "logical_or_expr_p", type: "suit"},
  {source: "logical_or_expr_p", target: "logical_and_expr", type: "suit"},
  {source: "expr", target: "expr_p", type: "suit"},
  {source: "expr", target: "assignment_expr", type: "suit"},
  {source: "expr_p", target: "assignment_expr", type: "suit"},
  {source: "parameter_declaration", target: "declaration_specifiers", type: "suit"},
  {source: "parameter_declaration", target: "declarator", type: "suit"},
  {source: "parameter_declaration", target: "abstract_declarator", type: "suit"},
  {source: "unary_expr", target: "postfix_expr", type: "suit"},
  {source: "unary_expr", target: "unary_operator", type: "suit"},
  {source: "unary_expr", target: "cast_expr", type: "suit"},
  {source: "unary_expr", target: "type_name", type: "suit"},
  {source: "logical_and_expr", target: "inclusive_or_expr", type: "suit"},
  {source: "logical_and_expr", target: "logical_and_expr_p", type: "suit"},
  {source: "logical_and_expr_p", target: "inclusive_or_expr", type: "suit"},
  {source: "abstract_declarator", target: "pointer", type: "suit"},
  {source: "abstract_declarator", target: "direct_abstract_declarator", type: "suit"},
  {source: "postfix_expr", target: "primary_expr", type: "suit"},
  {source: "postfix_expr", target: "postfix_expr_p", type: "suit"},
  {source: "postfix_expr_p", target: "expr", type: "suit"},
  {source: "postfix_expr_p", target: "argument_expr_list", type: "suit"},
  {source: "cast_expr", target: "unary_expr", type: "suit"},
  {source: "cast_expr", target: "type_name", type: "suit"},
  {source: "type_name", target: "specifier_qualifier_list", type: "suit"},
  {source: "type_name", target: "abstract_declarator", type: "suit"},
  {source: "inclusive_or_expr", target: "inclusive_or_expr_p", type: "suit"},
  {source: "inclusive_or_expr", target: "exclusive_or_expr", type: "suit"},
  {source: "inclusive_or_expr_p", target: "exclusive_or_expr", type: "suit"},
  {source: "direct_abstract_declarator", target: "abstract_declarator", type: "suit"},
  {source: "direct_abstract_declarator", target: "constant_expr", type: "suit"},
  {source: "direct_abstract_declarator", target: "direct_abstract_declarator_p", type: "suit"},
  {source: "direct_abstract_declarator", target: "parameter_type_list", type: "suit"},
  {source: "direct_abstract_declarator_p", target: "abstract_declarator", type: "suit"},
  {source: "direct_abstract_declarator_p", target: "constant_expr", type: "suit"},
  {source: "direct_abstract_declarator_p", target: "direct_abstract_declarator_p", type: "suit"},
  {source: "direct_abstract_declarator_p", target: "parameter_type_list", type: "suit"},
  {source: "primary_expr", target: "expr", type: "suit"},
  {source: "argument_expr_list", target: "assignment_expr", type: "suit"},
  {source: "argument_expr_list", target: "argument_expr_list_p", type: "suit"},
  {source: "argument_expr_list_p", target: "assignment_expr", type: "suit"},
  {source: "specifier_qualifier_list", target: "type_specifier", type: "suit"},
  {source: "specifier_qualifier_list", target: "type_qualifier", type: "suit"},
  {source: "exclusive_or_expr", target: "exclusive_or_expr_p", type: "suit"},
  {source: "exclusive_or_expr", target: "and_expr", type: "suit"},
  {source: "exclusive_or_expr_p", target: "and_expr", type: "suit"},
  {source: "and_expr", target: "and_expr_p", type: "suit"},
  {source: "and_expr", target: "equality_expr", type: "suit"},
  {source: "and_expr_p", target: "equality_expr", type: "suit"},
  {source: "equality_expr", target: "equality_expr_p", type: "suit"},
  {source: "equality_expr", target: "relational_expr", type: "suit"},
  {source: "equality_expr_p", target: "relational_expr", type: "suit"},
  {source: "relational_expr", target: "relational_expr_p", type: "suit"},
  {source: "relational_expr", target: "shift_expr", type: "suit"},
  {source: "relational_expr_p", target: "shift_expr", type: "suit"},
  {source: "shift_expr", target: "shift_expr_p", type: "suit"},
  {source: "shift_expr", target: "additive_expr", type: "suit"},
  {source: "shift_expr_p", target: "additive_expr", type: "suit"},
  {source: "additive_expr", target: "additive_expr_p", type: "suit"},
  {source: "additive_expr", target: "multiplicative_expr", type: "suit"},
  {source: "additive_expr_p", target: "multiplicative_expr", type: "suit"},
  {source: "multiplicative_expr", target: "multiplicative_expr_p", type: "suit"},
  {source: "multiplicative_expr", target: "cast_expr", type: "suit"},
  {source: "multiplicative_expr_p", target: "cast_expr", type: "suit"},
  {source: "enumerator", target: "constant_expr", type: "suit"},
  {source: "struct_declaration", target: "specifier_qualifier_list", type: "suit"},
  {source: "struct_declaration", target: "struct_declarator_list", type: "suit"},
  {source: "struct_declarator_list", target: "struct_declarator", type: "suit"},
  {source: "struct_declarator_list", target: "struct_declarator_list_p", type: "suit"},
  {source: "struct_declarator_list_p", target: "struct_declarator", type: "suit"},
  {source: "struct_declarator", target: "declarator", type: "suit"},
  {source: "struct_declarator", target: "constant_expr", type: "suit"},
];
