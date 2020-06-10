(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{710:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return E}));var a=t(612),s=t.n(a),o=t(613),c=t.n(o),r=t(286),i=t.n(r),l=t(614),p=t.n(l),u=t(615),d=t.n(u),h=t(616),f=t.n(h),m=t(617),y=t.n(m),g=t(618),k=t.n(g),b=t(0),v=t.n(b),w=t(104);function z(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,a=f()(n);if(e){var s=f()(this).constructor;t=Reflect.construct(a,arguments,s)}else t=a.apply(this,arguments);return d()(this,t)}}function S(n){return v.a.createElement(n.tag,k()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function R(n){return v.a.createElement(S,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return v.a.createElement(S,{tag:"style",html:n.style})}b.Component;var E=function(n){p()(t,n);var e=z(t);function t(){return s()(this,t),e.apply(this,arguments)}return c()(t,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var e=document.querySelector('a[href="'.concat(n,'"]'));e&&Object(w.a)(document.documentElement,0,function n(e,t){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(t+=e.offsetTop),n(e.parentNode,t);return t}(e,-9))}}},{key:"render",value:function(){return v.a.createElement("div",{className:"zandoc-react-container",key:null},v.a.createElement(j,{style:""}),v.a.createElement(R,{html:'<h2 class="anchor-heading"><a href="#babel-plugin-zent">¶</a><a href="javascript:void(0)" id="babel-plugin-zent" class="anchor-point"></a>babel-plugin-zent</h2>\n<p>Pay what you use for Zent.</p>\n<p>This plugin can reduce your bundle size by importing only the parts of zent you use in your project.</p>\n<h3 class="anchor-heading"><a href="#prerequisite">¶</a><a href="javascript:void(0)" id="prerequisite" class="anchor-point"></a>Prerequisite</h3>\n<p>This plugin requires Zent >= 3.0.0.</p>\n<h3 class="anchor-heading"><a href="#features">¶</a><a href="javascript:void(0)" id="features" class="anchor-point"></a>Features</h3>\n<ul>\n<li>Smaller bundle size</li>\n<li>Automatic component JavaScript import rewrite</li>\n<li>Automatically import styles for the components you use</li>\n</ul>\n<h3 class="anchor-heading"><a href="#usage">¶</a><a href="javascript:void(0)" id="usage" class="anchor-point"></a>Usage</h3>\n<p><code>yarn add babel-plugin-zent -D</code></p>\n<p>Configuration example:</p>\n<pre><code class="language-js"><span class="token comment">// In your .babelrc</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"zent"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p>In your component Javascript files, use zent like this: <code>import { Button, Dialog } from \'zent\'</code>, the plugin will take care of the rest.</p>\n<h3 class="anchor-heading"><a href="#options">¶</a><a href="javascript:void(0)" id="options" class="anchor-point"></a>Options</h3>\n<ul>\n<li><code>libraryName</code>: Library to transform</li>\n<li><code>noModuleRewrite</code>: disable JavaScript module import rewrite，use with bundle tool\'s tree-shaking feature.</li>\n<li><code>automaticStyleImport</code>: <code>true</code> to enable styles imports for component.</li>\n<li><code>useRawStyle</code>: should be used with <code>automaticStyleImport</code>, imports sass source files if set to <code>true</code>. <strong>Requires Zent >= 7.0.0</strong></li>\n</ul>\n<pre><code class="language-js"><span class="token comment">// defaults</span>\n<span class="token punctuation">{</span>\n  libraryName<span class="token punctuation">:</span> <span class="token string">\'zent\'</span><span class="token punctuation">,</span>\n  noModuleRewrite<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  automaticStyleImport<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  useRawStyle<span class="token punctuation">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span></code></pre>'}))}}]),t}(b.Component)}}]);