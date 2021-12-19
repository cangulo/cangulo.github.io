const plugin = (options) => {
    const transformer = async (ast) => {

        ast.children.push({
            type: 'import',
            value: "import Comments from '/src/components/blog/comments.js'\n"
        })
        ast.children.push({
            type: 'jsx',
            value: '<Comments />'
        })
    };
    return transformer;
};

module.exports = plugin;