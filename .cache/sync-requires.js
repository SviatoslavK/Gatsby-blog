// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/sviatoslav/project/Gatsby-blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/sviatoslav/project/Gatsby-blog/.cache/dev-404-page.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/sviatoslav/project/Gatsby-blog/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/home/sviatoslav/project/Gatsby-blog/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/sviatoslav/project/Gatsby-blog/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/sviatoslav/project/Gatsby-blog/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/layout-index.json"),
  "react-gatsby-blog.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/react-gatsby-blog.json"),
  "layout-index.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/layout-index.json"),
  "404.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/404.json"),
  "layout-index.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/layout-index.json"),
  "index.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/index.json"),
  "layout-index.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/layout-index.json"),
  "page-2.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/page-2.json"),
  "layout-index.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/layout-index.json"),
  "404-html.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/404-html.json"),
  "layout-index.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/layout-index.json"),
  "react.json": require("/home/sviatoslav/project/Gatsby-blog/.cache/json/react.json")
}