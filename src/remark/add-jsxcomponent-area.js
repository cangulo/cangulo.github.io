const PropTypes = require('prop-types')

function addJsxCode(options = {}) {

    const transformer = async (ast) => {

        let isFullBody = ast.children.filter(x => x.type == 'comment' && x.value.includes('truncate')).length > 0
        if (isFullBody && (options.importStatement || options.jsx)) {

            if (typeof options.importStatement === 'string') {
                ast.children.push({
                    type: 'import',
                    value: options.importStatement
                })
            } else {
                options.importStatement.forEach(statement => {
                    ast.children.push({
                        type: 'import',
                        value: statement

                    });
                });
            }

            if (typeof options.jsx === 'string') {
                ast.children.push({
                    type: 'jsx',
                    value: options.jsx
                })
            } else {
                options.jsx.forEach(code => {
                    ast.children.push({
                        type: 'jsx',
                        value: code
                    })
                });
            }
        }
    };
    return transformer;
};

module.exports = addJsxCode;