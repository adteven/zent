(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{709:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var e=a(603),s=a.n(e),o=a(604),c=a.n(o),r=a(285),p=a.n(r),i=a(605),u=a.n(i),l=a(606),f=a.n(l),d=a(607),h=a.n(d),k=a(608),m=a.n(k),g=a(609),v=a.n(g),y=a(0),w=a.n(y),C=a(104);function b(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,e=h()(n);if(t){var s=h()(this).constructor;a=Reflect.construct(e,arguments,s)}else a=e.apply(this,arguments);return f()(this,a)}}function E(n){return w.a.createElement(n.tag,v()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function S(n){return w.a.createElement(E,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return w.a.createElement(E,{tag:"style",html:n.style})}y.Component;var x=function(n){u()(a,n);var t=b(a);function a(){return s()(this,a),t.apply(this,arguments)}return c()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&Object(C.a)(document.documentElement,0,function n(t,a){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(a+=t.offsetTop),n(t.parentNode,a);return a}(t,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(j,{style:""}),w.a.createElement(S,{html:'<h2 class="anchor-heading"><a href="#i18n">¶</a><a href="javascript:void(0)" id="i18n" class="anchor-point"></a>I18n</h2>\n<p>The default language of Zent is Simplified Chinese, if you want switch to Engilish, you can follow the instruction below.</p>\n<h4 class="anchor-heading"><a href="#i18nprovider">¶</a><a href="javascript:void(0)" id="i18nprovider" class="anchor-point"></a>I18nProvider</h4>\n<p>Zent provides a React Component I18nProvider used to configure the locale text. Components using context, a feature of React, to achieve global effectiveness by wrapping your app.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> I18nProvider <span class="token keyword">as</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">\'zent/es/i18n/en-US\'</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>Provider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>enUS<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>App</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>Provider</span><span class="token punctuation">></span></span></code></pre>\n<p>At present, only Chinese / English language packs are available, corresponding to two files of <code>en-US.js</code> /<code>zh-CN.js</code> in i18n folder.</p>'}))}}]),a}(y.Component)}}]);