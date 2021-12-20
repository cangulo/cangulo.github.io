const PropTypes = require('prop-types')

function addJsxCode(options = {}) {

    const transformer = async (ast) => {

        let isFullBody = ast.children.filter(x => x.type == 'comment' && x.value.includes('truncate')).length > 0
        if (isFullBody && (options.importStatement || options.jsx)) {

            if (options.importStatement) {
                ast.children.push({
                    type: 'import',
                    value: options.importStatement
                })
            }

            if (options.jsx) {
                ast.children.push({
                    type: 'jsx',
                    value: options.jsx
                })
            }
        }
    };
    return transformer;
};

module.exports = addJsxCode;