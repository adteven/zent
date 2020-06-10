(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{641:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return z}));var a=n(603),o=n.n(a),c=n(604),r=n.n(c),i=n(285),u=n.n(i),s=n(605),h=n.n(s),l=n(606),p=n.n(l),d=n(607),f=n.n(d),m=n(608),y=n.n(m),g=n(609),b=n.n(g),v=n(0),R=n.n(v),j=n(104);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=f()(t);if(e){var o=f()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return p()(this,n)}}function w(t){return R.a.createElement(t.tag,b()({},t.attributes,{dangerouslySetInnerHTML:{__html:t.html}}))}function E(t){return R.a.createElement(w,{tag:"section",html:t.html,attributes:{className:"zandoc-react-markdown"}})}function x(t){return R.a.createElement(w,{tag:"style",html:t.style})}v.Component;var z=function(t){h()(n,t);var e=k(n);function n(){return o()(this,n),e.apply(this,arguments)}return r()(n,[{key:"componentDidMount",value:function(){var t=location.hash;if(t){var e=document.querySelector('a[href="'.concat(t,'"]'));e&&Object(j.a)(document.documentElement,0,function t(e,n){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(n+=e.offsetTop),t(e.parentNode,n);return n}(e,-9))}}},{key:"render",value:function(){return R.a.createElement("div",{className:"zandoc-react-container",key:null},R.a.createElement(x,{style:""}),R.a.createElement(E,{html:'<h2 class="anchor-heading"><a href="#zent-2-1-0-sheng-ji-zhi-nan">¶</a><a href="javascript:void(0)" id="zent-2-1-0-sheng-ji-zhi-nan" class="anchor-point"></a>Zent 2.1.0 升级指南</h2>\n<p>这个版本主要升级了 React 版本到 15.5.x。</p>\n<h3 class="anchor-heading"><a href="#react-sheng-ji-dao-15-5-x">¶</a><a href="javascript:void(0)" id="react-sheng-ji-dao-15-5-x" class="anchor-point"></a>React 升级到 15.5.x</h3>\n<p>从 2.1.0 开始 Zent 的开发都是基于 React 15.5.x，和老版本的 React 一起使用时可能会在开发时出现 warning。</p>\n<p>详细的 React 升级方案请看<a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html">官方的说明文档</a>。</p>\n<p>推荐使用 Facebook 提供的 <a href="https://github.com/reactjs/react-codemod">codemod</a> 来自动化迁移工作。</p>\n<h3 class="anchor-heading"><a href="#button-mo-ren-de-type-bian-geng">¶</a><a href="javascript:void(0)" id="button-mo-ren-de-type-bian-geng" class="anchor-point"></a>Button 默认的 <code>type</code> 变更</h3>\n<p>Button 提供了一个 <code>htmlType</code> 属性，这个属性在 2.1.0 之前是没有默认值的，行为和原生的 button 一致，会在 form 里触发 submit。</p>\n<p>在 2.1.0 版本开始，<code>htmlType</code> 设置了默认值为 <code>"button"</code>，所以原来在表单里依赖 submit 行为的地方需要加上 <code>htmlType="submit"</code>。</p>'}))}}]),n}(v.Component)}}]);