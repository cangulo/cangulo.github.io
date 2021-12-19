const plugin = (options) => {
    const transformer = async (ast) => {

        let tables = ast.children.filter(x => x.type == 'table' && x.children.length > 1)
        if (tables.length > 0) {
            tables.forEach(table => {
                let index = ast.children.indexOf(table)
                ast.children.splice(index, 0,
                    {
                        type: 'jsx',
                        value: '<center>'
                    })

                ast.children.splice(index + 2, 0,
                    {
                        type: 'jsx',
                        value: '</center>'
                    })
            });
        }
    };
    return transformer;
};

module.exports = plugin;