const plugin = (options) => {

    const transformer = async (ast) => {

        let isFullBody = ast.children.filter(x => x.type == 'comment' && x.value.includes('truncate')).length > 0
        if (isFullBody) {
            ast.children.push({
                type: 'import',
                value: "import { ShareDocusaurus } from '@cangulo-blog/components'\n"
            })
            ast.children.push({
                type: 'jsx',
                value: '<ShareDocusaurus preSlug={frontMatter.group} slug={ frontMatter.slug } title={ frontMatter.title } tags={ frontMatter.tags } />'
            })
        }
    };
    return transformer;
};

module.exports = plugin;