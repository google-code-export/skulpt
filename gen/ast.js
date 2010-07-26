// abstract syntax node definitions
// 
// This file is automatically generated by pgen/astgen.py

(function() {

Sk.Ast = {};

Sk.Ast.OP_ASSIGN = 'OP_ASSIGN';
Sk.Ast.OP_DELETE = 'OP_DELETE';
Sk.Ast.OP_APPLY = 'OP_APPLY';

Sk.Ast.SC_LOCAL = 1;
Sk.Ast.SC_GLOBAL = 2;
Sk.Ast.SC_FREE = 3;
Sk.Ast.SC_CELL = 4;
Sk.Ast.SC_UNKNOWN = 5;

Sk.Ast.CO_OPTIMIZED = 0x0001;
Sk.Ast.CO_NEWLOCALS = 0x0002;
Sk.Ast.CO_VARARGS = 0x0004;
Sk.Ast.CO_VARKEYWORDS = 0x0008;
Sk.Ast.CO_NESTED = 0x0010;
Sk.Ast.CO_GENERATOR = 0x0020;
Sk.Ast.CO_GENERATOR_ALLOWED = 0;
Sk.Ast.CO_FUTURE_DIVISION = 0x2000;
Sk.Ast.CO_FUTURE_ABSIMPORT = 0x4000;
Sk.Ast.CO_FUTURE_WITH_STATEMENT = 0x8000;
Sk.Ast.CO_FUTURE_PRINT_FUNCTION = 0x10000;

function flatten(seq)
{
    var l = [];
    for (var i = 0; i < seq.length; ++i)
    {
        if (seq[i].length)
        {
            var subf = flatten(seq[i]);
            for (var j = 0; j < subf.length; ++j)
            {
                l.push(subf[j]);
            }
        }
        else
        {
            l.push(seq[i]);
        }
    }
    return l;
}

//"""

// --------------------------------------------------------
Sk.Ast.Add = function Add(left, right, lineno)
{
    this.nodeName = "Add";
    this.left = left;
    this.right = right;
    this.lineno = lineno;
}

Sk.Ast.Add.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.left, args);
    if (ret !== undefined) this.left = ret;
    ret = handler.visit(this.right, args);
    if (ret !== undefined) this.right = ret;
};


// --------------------------------------------------------
Sk.Ast.And = function And(nodes, lineno)
{
    this.nodeName = "And";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.And.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.AssAttr = function AssAttr(expr, attrname, flags, lineno)
{
    this.nodeName = "AssAttr";
    this.expr = expr;
    this.attrname = attrname;
    this.flags = flags;
    this.lineno = lineno;
}

Sk.Ast.AssAttr.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
    ret = handler.visit(this.attrname, args);
    if (ret !== undefined) this.attrname = ret;
    ret = handler.visit(this.flags, args);
    if (ret !== undefined) this.flags = ret;
};


// --------------------------------------------------------
Sk.Ast.AssList = function AssList(nodes, lineno)
{
    this.nodeName = "AssList";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.AssList.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.AssName = function AssName(name, flags, lineno)
{
    this.nodeName = "AssName";
    this.name = name;
    this.flags = flags;
    this.lineno = lineno;
}

Sk.Ast.AssName.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.name, args);
    if (ret !== undefined) this.name = ret;
    ret = handler.visit(this.flags, args);
    if (ret !== undefined) this.flags = ret;
};


// --------------------------------------------------------
Sk.Ast.AssTuple = function AssTuple(nodes, lineno)
{
    this.nodeName = "AssTuple";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.AssTuple.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.Assert = function Assert(test, fail, lineno)
{
    this.nodeName = "Assert";
    this.test = test;
    this.fail = fail;
    this.lineno = lineno;
}

Sk.Ast.Assert.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.test, args);
    if (ret !== undefined) this.test = ret;
    ret = handler.visit(this.fail, args);
    if (ret !== undefined) this.fail = ret;
};


// --------------------------------------------------------
Sk.Ast.Assign = function Assign(nodes, expr, lineno)
{
    this.nodeName = "Assign";
    this.nodes = nodes;
    this.expr = expr;
    this.lineno = lineno;
}

Sk.Ast.Assign.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
};


// --------------------------------------------------------
Sk.Ast.AugAssign = function AugAssign(node, op, expr, lineno)
{
    this.nodeName = "AugAssign";
    this.node = node;
    this.op = op;
    this.expr = expr;
    this.lineno = lineno;
}

Sk.Ast.AugAssign.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.node, args);
    if (ret !== undefined) this.node = ret;
    ret = handler.visit(this.op, args);
    if (ret !== undefined) this.op = ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
};


// --------------------------------------------------------
Sk.Ast.AugGetattr = function AugGetattr(node, lineno)
{
    this.nodeName = "AugGetattr";
    this.node = node;
    this.lineno = lineno;
}

Sk.Ast.AugGetattr.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.node, args);
    if (ret !== undefined) this.node = ret;
};


// --------------------------------------------------------
Sk.Ast.AugName = function AugName(node, lineno)
{
    this.nodeName = "AugName";
    this.node = node;
    this.lineno = lineno;
}

Sk.Ast.AugName.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.node, args);
    if (ret !== undefined) this.node = ret;
};


// --------------------------------------------------------
Sk.Ast.AugSlice = function AugSlice(node, lineno)
{
    this.nodeName = "AugSlice";
    this.node = node;
    this.lineno = lineno;
}

Sk.Ast.AugSlice.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.node, args);
    if (ret !== undefined) this.node = ret;
};


// --------------------------------------------------------
Sk.Ast.AugSubscript = function AugSubscript(node, lineno)
{
    this.nodeName = "AugSubscript";
    this.node = node;
    this.lineno = lineno;
}

Sk.Ast.AugSubscript.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.node, args);
    if (ret !== undefined) this.node = ret;
};


// --------------------------------------------------------
Sk.Ast.Backquote = function Backquote(expr, lineno)
{
    this.nodeName = "Backquote";
    this.expr = expr;
    this.lineno = lineno;
}

Sk.Ast.Backquote.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
};


// --------------------------------------------------------
Sk.Ast.Bitand = function Bitand(nodes, lineno)
{
    this.nodeName = "Bitand";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.Bitand.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.Bitor = function Bitor(nodes, lineno)
{
    this.nodeName = "Bitor";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.Bitor.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.Bitxor = function Bitxor(nodes, lineno)
{
    this.nodeName = "Bitxor";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.Bitxor.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.Break_ = function Break_(lineno)
{
    this.nodeName = "Break_";
    this.lineno = lineno;
}

Sk.Ast.Break_.prototype.walkChildren = function(handler, args)
{
    return;
};


// --------------------------------------------------------
Sk.Ast.CallFunc = function CallFunc(node, args, star_args, dstar_args, lineno)
{
    this.nodeName = "CallFunc";
    this.node = node;
    this.args = args;
    this.star_args = star_args;
    this.dstar_args = dstar_args;
    this.lineno = lineno;
}

Sk.Ast.CallFunc.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.node, args);
    if (ret !== undefined) this.node = ret;
    for (var i_args = 0; i_args < this.args.length; i_args += 1)
    {
        ret = handler.visit(this.args[i_args], args);
        if (ret !== undefined) this.args[i_args] = ret;
    }
    ret = handler.visit(this.star_args, args);
    if (ret !== undefined) this.star_args = ret;
    ret = handler.visit(this.dstar_args, args);
    if (ret !== undefined) this.dstar_args = ret;
};


// --------------------------------------------------------
Sk.Ast.Class_ = function Class_(name, bases, doc, code, decorators, lineno)
{
    this.nodeName = "Class_";
    this.name = name;
    this.bases = bases;
    this.doc = doc;
    this.code = code;
    this.decorators = decorators;
    this.lineno = lineno;
}

Sk.Ast.Class_.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.name, args);
    if (ret !== undefined) this.name = ret;
    for (var i_bases = 0; i_bases < this.bases.length; i_bases += 1)
    {
        ret = handler.visit(this.bases[i_bases], args);
        if (ret !== undefined) this.bases[i_bases] = ret;
    }
    ret = handler.visit(this.doc, args);
    if (ret !== undefined) this.doc = ret;
    ret = handler.visit(this.code, args);
    if (ret !== undefined) this.code = ret;
    ret = handler.visit(this.decorators, args);
    if (ret !== undefined) this.decorators = ret;
};


// --------------------------------------------------------
Sk.Ast.Compare = function Compare(expr, ops, lineno)
{
    this.nodeName = "Compare";
    this.expr = expr;
    this.ops = ops;
    this.lineno = lineno;
}

Sk.Ast.Compare.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
    for (var i_ops = 0; i_ops < this.ops.length; i_ops += 1)
    {
        ret = handler.visit(this.ops[i_ops], args);
        if (ret !== undefined) this.ops[i_ops] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.Const_ = function Const_(value, lineno)
{
    this.nodeName = "Const_";
    this.value = value;
    this.lineno = lineno;
}

Sk.Ast.Const_.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.value, args);
    if (ret !== undefined) this.value = ret;
};


// --------------------------------------------------------
Sk.Ast.Continue_ = function Continue_(lineno)
{
    this.nodeName = "Continue_";
    this.lineno = lineno;
}

Sk.Ast.Continue_.prototype.walkChildren = function(handler, args)
{
    return;
};


// --------------------------------------------------------
Sk.Ast.Decorators = function Decorators(nodes, lineno)
{
    this.nodeName = "Decorators";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.Decorators.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.Dict = function Dict(items, lineno)
{
    this.nodeName = "Dict";
    this.items = items;
    this.lineno = lineno;
}

Sk.Ast.Dict.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_items = 0; i_items < this.items.length; i_items += 1)
    {
        ret = handler.visit(this.items[i_items], args);
        if (ret !== undefined) this.items[i_items] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.Discard = function Discard(expr, lineno)
{
    this.nodeName = "Discard";
    this.expr = expr;
    this.lineno = lineno;
}

Sk.Ast.Discard.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
};


// --------------------------------------------------------
Sk.Ast.Div = function Div(left, right, lineno)
{
    this.nodeName = "Div";
    this.left = left;
    this.right = right;
    this.lineno = lineno;
}

Sk.Ast.Div.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.left, args);
    if (ret !== undefined) this.left = ret;
    ret = handler.visit(this.right, args);
    if (ret !== undefined) this.right = ret;
};


// --------------------------------------------------------
Sk.Ast.Ellipsis = function Ellipsis(lineno)
{
    this.nodeName = "Ellipsis";
    this.lineno = lineno;
}

Sk.Ast.Ellipsis.prototype.walkChildren = function(handler, args)
{
    return;
};


// --------------------------------------------------------
Sk.Ast.Exec = function Exec(expr, locals, globals, lineno)
{
    this.nodeName = "Exec";
    this.expr = expr;
    this.locals = locals;
    this.globals = globals;
    this.lineno = lineno;
}

Sk.Ast.Exec.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
    ret = handler.visit(this.locals, args);
    if (ret !== undefined) this.locals = ret;
    ret = handler.visit(this.globals, args);
    if (ret !== undefined) this.globals = ret;
};


// --------------------------------------------------------
Sk.Ast.FloorDiv = function FloorDiv(left, right, lineno)
{
    this.nodeName = "FloorDiv";
    this.left = left;
    this.right = right;
    this.lineno = lineno;
}

Sk.Ast.FloorDiv.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.left, args);
    if (ret !== undefined) this.left = ret;
    ret = handler.visit(this.right, args);
    if (ret !== undefined) this.right = ret;
};


// --------------------------------------------------------
Sk.Ast.For_ = function For_(assign, list, body, else_, lineno)
{
    this.nodeName = "For_";
    this.assign = assign;
    this.list = list;
    this.body = body;
    this.else_ = else_;
    this.lineno = lineno;
}

Sk.Ast.For_.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.assign, args);
    if (ret !== undefined) this.assign = ret;
    ret = handler.visit(this.list, args);
    if (ret !== undefined) this.list = ret;
    ret = handler.visit(this.body, args);
    if (ret !== undefined) this.body = ret;
    ret = handler.visit(this.else_, args);
    if (ret !== undefined) this.else_ = ret;
};


// --------------------------------------------------------
Sk.Ast.From = function From(modname, names, level, lineno)
{
    this.nodeName = "From";
    this.modname = modname;
    this.names = names;
    this.level = level;
    this.lineno = lineno;
}

Sk.Ast.From.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.modname, args);
    if (ret !== undefined) this.modname = ret;
    ret = handler.visit(this.names, args);
    if (ret !== undefined) this.names = ret;
    ret = handler.visit(this.level, args);
    if (ret !== undefined) this.level = ret;
};


// --------------------------------------------------------
Sk.Ast.Function_ = function Function_(decorators, name, argnames, defaults, varargs, kwargs, doc, code, lineno)
{
    this.nodeName = "Function_";
    this.decorators = decorators;
    this.name = name;
    this.argnames = argnames;
    this.defaults = defaults;
    this.varargs = varargs;
    this.kwargs = kwargs;
    this.doc = doc;
    this.code = code;
    this.lineno = lineno;
}

Sk.Ast.Function_.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.decorators, args);
    if (ret !== undefined) this.decorators = ret;
    ret = handler.visit(this.name, args);
    if (ret !== undefined) this.name = ret;
    ret = handler.visit(this.argnames, args);
    if (ret !== undefined) this.argnames = ret;
    for (var i_defaults = 0; i_defaults < this.defaults.length; i_defaults += 1)
    {
        ret = handler.visit(this.defaults[i_defaults], args);
        if (ret !== undefined) this.defaults[i_defaults] = ret;
    }
    ret = handler.visit(this.varargs, args);
    if (ret !== undefined) this.varargs = ret;
    ret = handler.visit(this.kwargs, args);
    if (ret !== undefined) this.kwargs = ret;
    ret = handler.visit(this.doc, args);
    if (ret !== undefined) this.doc = ret;
    ret = handler.visit(this.code, args);
    if (ret !== undefined) this.code = ret;
};


// --------------------------------------------------------
Sk.Ast.GenExpr = function GenExpr(code, lineno)
{
    this.nodeName = "GenExpr";
    this.code = code;
    this.lineno = lineno;
    this.argnames = ['.0'];
    this.varargs = this.kwargs = null;

}

Sk.Ast.GenExpr.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.code, args);
    if (ret !== undefined) this.code = ret;
};


// --------------------------------------------------------
Sk.Ast.GenExprFor = function GenExprFor(assign, iter, ifs, lineno)
{
    this.nodeName = "GenExprFor";
    this.assign = assign;
    this.iter = iter;
    this.ifs = ifs;
    this.lineno = lineno;
    this.is_outmost = false;
}

Sk.Ast.GenExprFor.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.assign, args);
    if (ret !== undefined) this.assign = ret;
    ret = handler.visit(this.iter, args);
    if (ret !== undefined) this.iter = ret;
    for (var i_ifs = 0; i_ifs < this.ifs.length; i_ifs += 1)
    {
        ret = handler.visit(this.ifs[i_ifs], args);
        if (ret !== undefined) this.ifs[i_ifs] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.GenExprIf = function GenExprIf(test, lineno)
{
    this.nodeName = "GenExprIf";
    this.test = test;
    this.lineno = lineno;
}

Sk.Ast.GenExprIf.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.test, args);
    if (ret !== undefined) this.test = ret;
};


// --------------------------------------------------------
Sk.Ast.GenExprInner = function GenExprInner(expr, quals, lineno)
{
    this.nodeName = "GenExprInner";
    this.expr = expr;
    this.quals = quals;
    this.lineno = lineno;
}

Sk.Ast.GenExprInner.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
    for (var i_quals = 0; i_quals < this.quals.length; i_quals += 1)
    {
        ret = handler.visit(this.quals[i_quals], args);
        if (ret !== undefined) this.quals[i_quals] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.GenExprTransformed = function GenExprTransformed(node, lineno)
{
    this.nodeName = "GenExprTransformed";
    this.node = node;
    this.lineno = lineno;
}

Sk.Ast.GenExprTransformed.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.node, args);
    if (ret !== undefined) this.node = ret;
};


// --------------------------------------------------------
Sk.Ast.Getattr = function Getattr(expr, attrname, lineno)
{
    this.nodeName = "Getattr";
    this.expr = expr;
    this.attrname = attrname;
    this.lineno = lineno;
}

Sk.Ast.Getattr.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
    ret = handler.visit(this.attrname, args);
    if (ret !== undefined) this.attrname = ret;
};


// --------------------------------------------------------
Sk.Ast.Global = function Global(names, lineno)
{
    this.nodeName = "Global";
    this.names = names;
    this.lineno = lineno;
}

Sk.Ast.Global.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.names, args);
    if (ret !== undefined) this.names = ret;
};


// --------------------------------------------------------
Sk.Ast.IfExp = function IfExp(test, then, else_, lineno)
{
    this.nodeName = "IfExp";
    this.test = test;
    this.then = then;
    this.else_ = else_;
    this.lineno = lineno;
}

Sk.Ast.IfExp.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.test, args);
    if (ret !== undefined) this.test = ret;
    ret = handler.visit(this.then, args);
    if (ret !== undefined) this.then = ret;
    ret = handler.visit(this.else_, args);
    if (ret !== undefined) this.else_ = ret;
};


// --------------------------------------------------------
Sk.Ast.If_ = function If_(tests, else_, lineno)
{
    this.nodeName = "If_";
    this.tests = tests;
    this.else_ = else_;
    this.lineno = lineno;
}

Sk.Ast.If_.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_tests = 0; i_tests < this.tests.length; i_tests += 1)
    {
        ret = handler.visit(this.tests[i_tests], args);
        if (ret !== undefined) this.tests[i_tests] = ret;
    }
    ret = handler.visit(this.else_, args);
    if (ret !== undefined) this.else_ = ret;
};


// --------------------------------------------------------
Sk.Ast.Import_ = function Import_(names, lineno)
{
    this.nodeName = "Import_";
    this.names = names;
    this.lineno = lineno;
}

Sk.Ast.Import_.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.names, args);
    if (ret !== undefined) this.names = ret;
};


// --------------------------------------------------------
Sk.Ast.Interactive = function Interactive(node, lineno)
{
    this.nodeName = "Interactive";
    this.node = node;
    this.lineno = lineno;
}

Sk.Ast.Interactive.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.node, args);
    if (ret !== undefined) this.node = ret;
};


// --------------------------------------------------------
Sk.Ast.Invert = function Invert(expr, lineno)
{
    this.nodeName = "Invert";
    this.expr = expr;
    this.lineno = lineno;
}

Sk.Ast.Invert.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
};


// --------------------------------------------------------
Sk.Ast.Keyword = function Keyword(name, expr, lineno)
{
    this.nodeName = "Keyword";
    this.name = name;
    this.expr = expr;
    this.lineno = lineno;
}

Sk.Ast.Keyword.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.name, args);
    if (ret !== undefined) this.name = ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
};


// --------------------------------------------------------
Sk.Ast.Lambda = function Lambda(argnames, defaults, varargs, kwargs, code, lineno)
{
    this.nodeName = "Lambda";
    this.argnames = argnames;
    this.defaults = defaults;
    this.varargs = varargs;
    this.kwargs = kwargs;
    this.code = code;
    this.lineno = lineno;
}

Sk.Ast.Lambda.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.argnames, args);
    if (ret !== undefined) this.argnames = ret;
    for (var i_defaults = 0; i_defaults < this.defaults.length; i_defaults += 1)
    {
        ret = handler.visit(this.defaults[i_defaults], args);
        if (ret !== undefined) this.defaults[i_defaults] = ret;
    }
    ret = handler.visit(this.varargs, args);
    if (ret !== undefined) this.varargs = ret;
    ret = handler.visit(this.kwargs, args);
    if (ret !== undefined) this.kwargs = ret;
    ret = handler.visit(this.code, args);
    if (ret !== undefined) this.code = ret;
};


// --------------------------------------------------------
Sk.Ast.LeftShift = function LeftShift(left, right, lineno)
{
    this.nodeName = "LeftShift";
    this.left = left;
    this.right = right;
    this.lineno = lineno;
}

Sk.Ast.LeftShift.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.left, args);
    if (ret !== undefined) this.left = ret;
    ret = handler.visit(this.right, args);
    if (ret !== undefined) this.right = ret;
};


// --------------------------------------------------------
Sk.Ast.List = function List(nodes, lineno)
{
    this.nodeName = "List";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.List.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.ListComp = function ListComp(expr, quals, lineno)
{
    this.nodeName = "ListComp";
    this.expr = expr;
    this.quals = quals;
    this.lineno = lineno;
}

Sk.Ast.ListComp.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
    for (var i_quals = 0; i_quals < this.quals.length; i_quals += 1)
    {
        ret = handler.visit(this.quals[i_quals], args);
        if (ret !== undefined) this.quals[i_quals] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.ListCompFor = function ListCompFor(assign, list, ifs, lineno)
{
    this.nodeName = "ListCompFor";
    this.assign = assign;
    this.list = list;
    this.ifs = ifs;
    this.lineno = lineno;
}

Sk.Ast.ListCompFor.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.assign, args);
    if (ret !== undefined) this.assign = ret;
    ret = handler.visit(this.list, args);
    if (ret !== undefined) this.list = ret;
    for (var i_ifs = 0; i_ifs < this.ifs.length; i_ifs += 1)
    {
        ret = handler.visit(this.ifs[i_ifs], args);
        if (ret !== undefined) this.ifs[i_ifs] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.ListCompIf = function ListCompIf(test, lineno)
{
    this.nodeName = "ListCompIf";
    this.test = test;
    this.lineno = lineno;
}

Sk.Ast.ListCompIf.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.test, args);
    if (ret !== undefined) this.test = ret;
};


// --------------------------------------------------------
Sk.Ast.Mod = function Mod(left, right, lineno)
{
    this.nodeName = "Mod";
    this.left = left;
    this.right = right;
    this.lineno = lineno;
}

Sk.Ast.Mod.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.left, args);
    if (ret !== undefined) this.left = ret;
    ret = handler.visit(this.right, args);
    if (ret !== undefined) this.right = ret;
};


// --------------------------------------------------------
Sk.Ast.Module = function Module(doc, node, lineno)
{
    this.nodeName = "Module";
    this.doc = doc;
    this.node = node;
    this.lineno = lineno;
}

Sk.Ast.Module.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.doc, args);
    if (ret !== undefined) this.doc = ret;
    ret = handler.visit(this.node, args);
    if (ret !== undefined) this.node = ret;
};


// --------------------------------------------------------
Sk.Ast.Mul = function Mul(left, right, lineno)
{
    this.nodeName = "Mul";
    this.left = left;
    this.right = right;
    this.lineno = lineno;
}

Sk.Ast.Mul.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.left, args);
    if (ret !== undefined) this.left = ret;
    ret = handler.visit(this.right, args);
    if (ret !== undefined) this.right = ret;
};


// --------------------------------------------------------
Sk.Ast.Name = function Name(name, lineno)
{
    this.nodeName = "Name";
    this.name = name;
    this.lineno = lineno;
}

Sk.Ast.Name.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.name, args);
    if (ret !== undefined) this.name = ret;
};


// --------------------------------------------------------
Sk.Ast.Not = function Not(expr, lineno)
{
    this.nodeName = "Not";
    this.expr = expr;
    this.lineno = lineno;
}

Sk.Ast.Not.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
};


// --------------------------------------------------------
Sk.Ast.Or = function Or(nodes, lineno)
{
    this.nodeName = "Or";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.Or.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.Pass = function Pass(lineno)
{
    this.nodeName = "Pass";
    this.lineno = lineno;
}

Sk.Ast.Pass.prototype.walkChildren = function(handler, args)
{
    return;
};


// --------------------------------------------------------
Sk.Ast.Power = function Power(left, right, lineno)
{
    this.nodeName = "Power";
    this.left = left;
    this.right = right;
    this.lineno = lineno;
}

Sk.Ast.Power.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.left, args);
    if (ret !== undefined) this.left = ret;
    ret = handler.visit(this.right, args);
    if (ret !== undefined) this.right = ret;
};


// --------------------------------------------------------
Sk.Ast.Print = function Print(nodes, dest, nl, lineno)
{
    this.nodeName = "Print";
    this.nodes = nodes;
    this.dest = dest;
    this.nl = nl;
    this.lineno = lineno;
}

Sk.Ast.Print.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
    ret = handler.visit(this.dest, args);
    if (ret !== undefined) this.dest = ret;
    ret = handler.visit(this.nl, args);
    if (ret !== undefined) this.nl = ret;
};


// --------------------------------------------------------
Sk.Ast.Raise = function Raise(expr1, expr2, expr3, lineno)
{
    this.nodeName = "Raise";
    this.expr1 = expr1;
    this.expr2 = expr2;
    this.expr3 = expr3;
    this.lineno = lineno;
}

Sk.Ast.Raise.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr1, args);
    if (ret !== undefined) this.expr1 = ret;
    ret = handler.visit(this.expr2, args);
    if (ret !== undefined) this.expr2 = ret;
    ret = handler.visit(this.expr3, args);
    if (ret !== undefined) this.expr3 = ret;
};


// --------------------------------------------------------
Sk.Ast.Return_ = function Return_(value, lineno)
{
    this.nodeName = "Return_";
    this.value = value;
    this.lineno = lineno;
}

Sk.Ast.Return_.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.value, args);
    if (ret !== undefined) this.value = ret;
};


// --------------------------------------------------------
Sk.Ast.RightShift = function RightShift(left, right, lineno)
{
    this.nodeName = "RightShift";
    this.left = left;
    this.right = right;
    this.lineno = lineno;
}

Sk.Ast.RightShift.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.left, args);
    if (ret !== undefined) this.left = ret;
    ret = handler.visit(this.right, args);
    if (ret !== undefined) this.right = ret;
};


// --------------------------------------------------------
Sk.Ast.Slice = function Slice(expr, flags, lower, upper, lineno)
{
    this.nodeName = "Slice";
    this.expr = expr;
    this.flags = flags;
    this.lower = lower;
    this.upper = upper;
    this.lineno = lineno;
}

Sk.Ast.Slice.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
    ret = handler.visit(this.flags, args);
    if (ret !== undefined) this.flags = ret;
    ret = handler.visit(this.lower, args);
    if (ret !== undefined) this.lower = ret;
    ret = handler.visit(this.upper, args);
    if (ret !== undefined) this.upper = ret;
};


// --------------------------------------------------------
Sk.Ast.Sliceobj = function Sliceobj(nodes, lineno)
{
    this.nodeName = "Sliceobj";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.Sliceobj.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.Stmt = function Stmt(nodes, lineno)
{
    this.nodeName = "Stmt";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.Stmt.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.Sub = function Sub(left, right, lineno)
{
    this.nodeName = "Sub";
    this.left = left;
    this.right = right;
    this.lineno = lineno;
}

Sk.Ast.Sub.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.left, args);
    if (ret !== undefined) this.left = ret;
    ret = handler.visit(this.right, args);
    if (ret !== undefined) this.right = ret;
};


// --------------------------------------------------------
Sk.Ast.Subscript = function Subscript(expr, flags, subs, lineno)
{
    this.nodeName = "Subscript";
    this.expr = expr;
    this.flags = flags;
    this.subs = subs;
    this.lineno = lineno;
}

Sk.Ast.Subscript.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
    ret = handler.visit(this.flags, args);
    if (ret !== undefined) this.flags = ret;
    for (var i_subs = 0; i_subs < this.subs.length; i_subs += 1)
    {
        ret = handler.visit(this.subs[i_subs], args);
        if (ret !== undefined) this.subs[i_subs] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.TryExcept = function TryExcept(body, handlers, else_, lineno)
{
    this.nodeName = "TryExcept";
    this.body = body;
    this.handlers = handlers;
    this.else_ = else_;
    this.lineno = lineno;
}

Sk.Ast.TryExcept.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.body, args);
    if (ret !== undefined) this.body = ret;
    for (var i_handlers = 0; i_handlers < this.handlers.length; i_handlers += 1)
    {
        ret = handler.visit(this.handlers[i_handlers], args);
        if (ret !== undefined) this.handlers[i_handlers] = ret;
    }
    ret = handler.visit(this.else_, args);
    if (ret !== undefined) this.else_ = ret;
};


// --------------------------------------------------------
Sk.Ast.TryFinally = function TryFinally(body, final_, lineno)
{
    this.nodeName = "TryFinally";
    this.body = body;
    this.final_ = final_;
    this.lineno = lineno;
}

Sk.Ast.TryFinally.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.body, args);
    if (ret !== undefined) this.body = ret;
    ret = handler.visit(this.final_, args);
    if (ret !== undefined) this.final_ = ret;
};


// --------------------------------------------------------
Sk.Ast.Tuple = function Tuple(nodes, lineno)
{
    this.nodeName = "Tuple";
    this.nodes = nodes;
    this.lineno = lineno;
}

Sk.Ast.Tuple.prototype.walkChildren = function(handler, args)
{
    var ret;
    for (var i_nodes = 0; i_nodes < this.nodes.length; i_nodes += 1)
    {
        ret = handler.visit(this.nodes[i_nodes], args);
        if (ret !== undefined) this.nodes[i_nodes] = ret;
    }
};


// --------------------------------------------------------
Sk.Ast.UnaryAdd = function UnaryAdd(expr, lineno)
{
    this.nodeName = "UnaryAdd";
    this.expr = expr;
    this.lineno = lineno;
}

Sk.Ast.UnaryAdd.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
};


// --------------------------------------------------------
Sk.Ast.UnarySub = function UnarySub(expr, lineno)
{
    this.nodeName = "UnarySub";
    this.expr = expr;
    this.lineno = lineno;
}

Sk.Ast.UnarySub.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
};


// --------------------------------------------------------
Sk.Ast.While_ = function While_(test, body, else_, lineno)
{
    this.nodeName = "While_";
    this.test = test;
    this.body = body;
    this.else_ = else_;
    this.lineno = lineno;
}

Sk.Ast.While_.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.test, args);
    if (ret !== undefined) this.test = ret;
    ret = handler.visit(this.body, args);
    if (ret !== undefined) this.body = ret;
    ret = handler.visit(this.else_, args);
    if (ret !== undefined) this.else_ = ret;
};


// --------------------------------------------------------
Sk.Ast.With_ = function With_(expr, vars, body, lineno)
{
    this.nodeName = "With_";
    this.expr = expr;
    this.vars = vars;
    this.body = body;
    this.lineno = lineno;
}

Sk.Ast.With_.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.expr, args);
    if (ret !== undefined) this.expr = ret;
    ret = handler.visit(this.vars, args);
    if (ret !== undefined) this.vars = ret;
    ret = handler.visit(this.body, args);
    if (ret !== undefined) this.body = ret;
};


// --------------------------------------------------------
Sk.Ast.Yield_ = function Yield_(value, lineno)
{
    this.nodeName = "Yield_";
    this.value = value;
    this.lineno = lineno;
}

Sk.Ast.Yield_.prototype.walkChildren = function(handler, args)
{
    var ret;
    ret = handler.visit(this.value, args);
    if (ret !== undefined) this.value = ret;
};



}());

