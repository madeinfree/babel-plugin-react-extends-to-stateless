export default function ({types: t}) {
  return {
    visitor: {
      ArrowFunctionExpression(path, state) {
        const { functionShadowed } = state.opts
        if (functionShadowed) {
          path.arrowFunctionToShadowed();
        }
      },
      ClassDeclaration(path) {
        const { node } = path
        const { superClass } = node
        const ref = node.id
        if (path.get('body').node.body.length > 1) {
          return
        }
        const render_block = path.get('body').node.body.filter((b) => {
          return b.key.name === 'render'
        })
        const block_expression = render_block[0].body.body[0].expression
        if(
          (superClass.object && superClass.property &&
           !t.isIdentifier(superClass.object, { name: 'react' }) &&
           !t.isIdentifier(superClass.property, { name: 'Component' })) ||
          (!t.isIdentifier(superClass, { name: 'Component' }))
        ) {
          path.stop()
          return
        }
        path.replaceWith(t.variableDeclaration('const', [
          t.variableDeclarator(ref, t.arrowFunctionExpression(
            [t.identifier('props')],
            t.blockStatement([t.returnStatement(block_expression)])
          ))
        ]))
      },
      MemberExpression(path) {
        const { node } = path
        if (!t.isThisExpression(node.object)) {
          return;
        }
        if (!t.isIdentifier(node.property, { name: 'props'})) {
          path.stop()
          return;
        }
        path.replaceWith(t.identifier('props'))
      }
    }
  };
}
