function addCommentArea(options) {
    const transformer = async (ast) => {

        let isFullBody = ast.children.filter(x => x.type == 'comment' && x.value.includes('truncate')).length > 0
        if (isFullBody) {
            ast.children.push({
                type: 'import',
                value: "import Comments from '/src/components/blog/comments.js'\n"
            })
            ast.children.push({
                type: 'jsx',
                value: '<Comments />'
            })
        }
    };
    return transformer;
};

module.exports = addCommentArea;