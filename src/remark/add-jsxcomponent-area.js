const PropTypes = require('prop-types')

function addJsxCode(options = {}) {

    const transformer = async (ast) => {

        let isFullBody = ast.children.filter(x => x.type == 'comment' && x.value.includes('truncate')).length > 0
        if (isFullBody && (options.importStatement || options.jsx)) {

            if (typeof options.importStatement === 'string') {
                insertCode(ast, 'import', options.importStatement);
            } else {
                options.importStatement.forEach(statement => {
                    insertCode(ast, 'import', statement);
                });
            }

            if (typeof options.jsx === 'string') {
                insertCode(ast, 'jsx', options.jsx);
            } else {
                options.jsx.forEach(code => {
                    insertCode(ast, 'jsx', code);
                });
            }
        }
    };
    return transformer;

    function insertCode(ast, type, value) {
        ast.children.push({
            type: type,
            value: value
        });
    }
};

module.exports = addJsxCode;