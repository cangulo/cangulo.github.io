const addJsxCode = (options) => {

    const transformer = async (ast) => {

        let isFullBody = ast.children.filter(x => x.type == 'comment' && x.value.includes('truncate')).length > 0
        if (isFullBody) {
            ast.children.push({
                type: 'import',
                value: options.importStatement
            })
            ast.children.push({
                type: 'jsx',
                value: options.jsx
            })
        }
    };
    return transformer;
};

module.exports = addJsxCode;