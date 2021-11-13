const visit = require('unist-util-visit');

const plugin = (options) => {
    const transformer = async (ast) => {
        let number = 1;
        visit(ast, 'heading', (node) => {
            if (node.depth === 1 && node.children.length > 0) {
                if (node.children[0].type === 'text' && node.children[0].value == 'aboutme') {
                    node.children[0].type = `html`;
                    node.children[0].value = `<p>holaaaa</p>`;
                } else {
                    node.children.unshift({
                        type: 'html',
                        value: `<p>holaaaa</p>`,
                    });
                }
            }
        });
    };
    return transformer;
};

module.exports = plugin;