const plugin = (options) => {

    const transformer = async (ast) => {

        let isFullBody = ast.children.filter(x => x.type == 'comment' && x.value.includes('truncate')).length > 0
        if (isFullBody) {


            if (options.position === 'start') {
                ast.children.splice(0, 0, {
                    type: 'import',
                    value: options.importStatement
                })

            } else if (options.position === 'end') {
                ast.children.push({
                    type: 'import',
                    value: options.importStatement
                })

                if (options.jsx) {
                    ast.children.push({
                        type: 'jsx',
                        value: options.jsx
                    })
                }
            }
        }
    };
    return transformer;
};

module.exports = plugin;