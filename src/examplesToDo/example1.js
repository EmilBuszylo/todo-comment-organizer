function make_js(exp) {
  return js(exp);

  function js(exp) {
    switch (exp.type) {
      case 'num':
      case 'str':
      case 'bool':
        return js_atom(exp);
      case 'var':
        return js_var(exp);
      case 'binary':
        return js_binary(exp);
      case 'assign':
        return js_assign(exp);
      case 'let':
        return js_let(exp);
      case 'lambda':
        return js_lambda(exp);
      case 'if':
        return js_if(exp);
      case 'prog':
        return js_prog(exp);
      case 'call':
        return js_call(exp);
      default:
        throw new Error('Dunno how to make_js for ' + JSON.stringify(exp));
    }
  }
  // TODO make description of this file
  // NOTE, all the functions below will be embedded here.
}
