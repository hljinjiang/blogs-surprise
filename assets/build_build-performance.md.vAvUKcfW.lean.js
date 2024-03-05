import{_ as s,c as n,o as a,a4 as l}from"./chunks/framework.BEVO561w.js";const d=JSON.parse('{"title":"Build Performance Optimization","description":"","frontmatter":{},"headers":[],"relativePath":"build/build-performance.md","filePath":"build/build-performance.md","lastUpdated":1709617958000}'),p={name:"build/build-performance.md"},e=l(`<h1 id="build-performance-optimization" tabindex="-1">Build Performance Optimization <a class="header-anchor" href="#build-performance-optimization" aria-label="Permalink to &quot;Build Performance Optimization&quot;">​</a></h1><h2 id="cache" tabindex="-1">Cache <a class="header-anchor" href="#cache" aria-label="Permalink to &quot;Cache&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>缓存生成的 webpack 模块和 chunk，来改善构建速度。cache 会在开发 模式被设置成 type: &#39;memory&#39; 而且在 生产 模式 中被禁用</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    cache: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="optimization" tabindex="-1">Optimization <a class="header-anchor" href="#optimization" aria-label="Permalink to &quot;Optimization&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>对 build 时的 chunks 做出优化，优化可以手动配置</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  chunkIds: </span><span style="color:#E6DB74;">&quot;size&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">  // 分包的最小单位是module</span></span>
<span class="line"><span style="color:#F8F8F2;">  optimization: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    splitChunks: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      chunks: </span><span style="color:#E6DB74;">&quot;all&quot;</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 默认为async，可选all或者initial</span></span>
<span class="line"><span style="color:#F8F8F2;">      maxSize: </span><span style="color:#AE81FF;">3</span><span style="color:#F92672;"> *</span><span style="color:#AE81FF;"> 1024</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 控制包的最大字节数</span></span>
<span class="line"><span style="color:#F8F8F2;">      automaticNameDelimiter: </span><span style="color:#E6DB74;">&quot;.&quot;</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 新chunk名称的分隔符，默认为～</span></span>
<span class="line"><span style="color:#F8F8F2;">      minChunks: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 一个模块被多少个chunk使用时才会进行分包，默认为1</span></span>
<span class="line"><span style="color:#F8F8F2;">      minSize: </span><span style="color:#AE81FF;">3</span><span style="color:#F92672;"> *</span><span style="color:#AE81FF;"> 1024</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 生成 chunk 的最小体积（以 bytes 为单位），默认为 20000</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></div><h2 id="rules" tabindex="-1">Rules <a class="header-anchor" href="#rules" aria-label="Permalink to &quot;Rules&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>通过 include 和 exclude 匹配和排除某些目录，减少搜索时间<br> 该 loader 将 css 分离出去</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> MiniCssExtractPlugin </span><span style="color:#F92672;">=</span><span style="color:#A6E22E;"> require</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  module: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    rules: [</span></span>
<span class="line"><span style="color:#F8F8F2;">      {</span></span>
<span class="line"><span style="color:#F8F8F2;">        test:</span><span style="color:#E6DB74;"> /</span><span style="color:#AE81FF;">\\.</span><span style="color:#E6DB74;">css</span><span style="color:#F92672;">$</span><span style="color:#E6DB74;">/</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        include:</span><span style="color:#E6DB74;"> /src/</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">//应用于src目录下</span></span>
<span class="line"><span style="color:#F8F8F2;">        exclude:</span><span style="color:#E6DB74;"> /node_modules/</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">//排除某些文件或目录</span></span>
<span class="line"><span style="color:#88846F;">        // 从后向前处理，处理完成后交由 webpack打包合并到 bundle.js中</span></span>
<span class="line"><span style="color:#F8F8F2;">        use: [MiniCssExtractPlugin.loader, </span><span style="color:#E6DB74;">&quot;css-loader&quot;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">    ]</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  plugins: [</span></span>
<span class="line"><span style="color:#88846F;">    // 分离css</span></span>
<span class="line"><span style="color:#F92672;">    new</span><span style="color:#A6E22E;"> MiniCssExtractPlugin</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">      filename: </span><span style="color:#E6DB74;">&quot;css/[name].css&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    }),</span></span>
<span class="line"><span style="color:#F8F8F2;">  ]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></div><h2 id="gzip" tabindex="-1">Gzip <a class="header-anchor" href="#gzip" aria-label="Permalink to &quot;Gzip&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>将 build 出来的文件进行 gzip 算法压缩，以在响应时有更小的文件响应</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">// 定义压缩文件类型</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> productionGzipExtensions </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#E6DB74;">&quot;js&quot;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&quot;css&quot;</span><span style="color:#F8F8F2;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// gzip</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  plugins: [</span></span>
<span class="line"><span style="color:#F92672;">    new</span><span style="color:#A6E22E;"> CompressionWebpackPlugin</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">      filename: </span><span style="color:#E6DB74;">&quot;[path][base].gz&quot;</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// [file] 会被替换成原始资源。[path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串</span></span>
<span class="line"><span style="color:#F8F8F2;">      algorithm: </span><span style="color:#E6DB74;">&quot;gzip&quot;</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 压缩成gzip</span></span>
<span class="line"><span style="color:#88846F;">      // 所有匹配该正则的资源都会被处理。默认值是全部资源。</span></span>
<span class="line"><span style="color:#F8F8F2;">      test: </span><span style="color:#F92672;">new</span><span style="color:#A6E22E;"> RegExp</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;</span><span style="color:#AE81FF;">\\\\</span><span style="color:#E6DB74;">.(&quot;</span><span style="color:#F92672;"> +</span><span style="color:#F8F8F2;"> productionGzipExtensions.</span><span style="color:#A6E22E;">join</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;|&quot;</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">+</span><span style="color:#E6DB74;"> &quot;)$&quot;</span><span style="color:#F8F8F2;">),</span></span>
<span class="line"><span style="color:#F8F8F2;">      threshold: </span><span style="color:#AE81FF;">1024</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">//只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。</span></span>
<span class="line"><span style="color:#F8F8F2;">      minRatio: </span><span style="color:#AE81FF;">0.8</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">//只有压缩率小于这个值的资源才会被处理。默认值是 0.8。</span></span>
<span class="line"><span style="color:#F8F8F2;">    })</span></span>
<span class="line"><span style="color:#F8F8F2;">  ]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;nginx&quot;">​</a></h3><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">gzip_static </span><span style="color:#F8F8F2;">on;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h2 id="externals" tabindex="-1">Externals <a class="header-anchor" href="#externals" aria-label="Permalink to &quot;Externals&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>从输出的 bundle 中排除依赖，减少打包时间，还可以引入更小的 CDN min package</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  externals: process.env.NODE_ENV </span><span style="color:#F92672;">===</span><span style="color:#E6DB74;"> &quot;development&quot;</span><span style="color:#F92672;"> ?</span><span style="color:#F8F8F2;"> {} </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> { vue: </span><span style="color:#E6DB74;">&quot;Vue&quot;</span><span style="color:#F8F8F2;"> },</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="prefetch-preload" tabindex="-1">Prefetch/Preload <a class="header-anchor" href="#prefetch-preload" aria-label="Permalink to &quot;Prefetch/Preload&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><ol><li>prefetch(预获取)：将来某些导航下可能需要的资源 <ol><li>浏览器会在空闲状态取得这些资源，在取得资源之后搁在HTTP缓存以便于实现将来的请求</li></ol></li><li>preload(预加载)：当前导航下可能需要资源 <ol><li>浏览器页面在这次导航中必须的资源，只是会在之后才会被使用</li></ol></li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">import</span><span style="color:#F8F8F2;">(</span><span style="color:#88846F;">/* webpackPrefetch: true */</span><span style="color:#E6DB74;"> &quot;./assets/customJs.js&quot;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// output</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">link</span><span style="color:#A6E22E;"> rel</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot;prefetch&quot;</span><span style="color:#A6E22E;"> as</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot;script&quot;</span><span style="color:#A6E22E;"> href</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot;login-modal-chunk.js&quot;</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div>`,13),o=[e];function c(r,t,i,F,u,y){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{d as __pageData,m as default};
