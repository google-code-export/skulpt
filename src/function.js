/**
 * @constructor
 *
 * @param {Function} code the javascript implementation of this function
 * @param {Object=} globals the globals where this function was defined.
 * Can be undefined (which will be stored as null) for builtins. (is
 * that ok?)
 *
 */
Sk.builtin.func = function(code, globals, closure)
{
    this.func_code = code;
    this.func_globals = globals || null;
    this.func_closure = closure;
};

Sk.builtin.func.prototype.tp$name = "function";
Sk.builtin.func.prototype.tp$descr_get = function(obj, objtype)
{
    goog.asserts.assert(obj !== undefined && objtype !== undefined)
    if (obj == null) return this;
    return new Sk.builtin.method(this, obj);
};
Sk.builtin.func.prototype.tp$call = function(args, kw)
{
    // note: functions expect 'this' to be globals to avoid having to
    // slice/unshift onto the main args
    if (this.func_closure)
    {
        // todo; OK to modify?
        args.unshift(this.func_closure);
    }

    if (kw)
    {
        // bind the kw args
        var kwlen = kw.length;
        for (var i = 0; i < kwlen; i += 2)
        {
            // todo; make this a dict mapping name to offset
            var varnames = this.func_code.co_varnames;
            var numvarnames = varnames.length;
            for (var j = 0; j < numvarnames; ++j)
            {
                if (kw[i] === varnames[j])
                    break;
            }
            args[j] = kw[i+1];
        }
    }

    return this.func_code.apply(this.func_globals, args); 
};

Sk.builtin.func.prototype.ob$type = Sk.builtin.type.makeTypeObj('function', new Sk.builtin.func(null, null));

Sk.builtin.func.prototype.tp$repr = function()
{
    return new Sk.builtin.str("<function " + this.func_code.co_name.v + ">");
};
