(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{711:function(n,s,a){"use strict";a.r(s),a.d(s,"default",(function(){return _}));var e=a(603),t=a.n(e),p=a(604),o=a.n(p),c=a(285),r=a.n(c),u=a(605),l=a.n(u),i=a(606),h=a.n(i),k=a(607),d=a.n(k),m=a(608),f=a.n(m),y=a(609),b=a.n(y),g=a(0),x=a.n(g),v=a(104);function z(n){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,e=d()(n);if(s){var t=d()(this).constructor;a=Reflect.construct(e,arguments,t)}else a=e.apply(this,arguments);return h()(this,a)}}function S(n){return x.a.createElement(n.tag,b()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function w(n){return x.a.createElement(S,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function C(n){return x.a.createElement(S,{tag:"style",html:n.style})}g.Component;var _=function(n){l()(a,n);var s=z(a);function a(){return t()(this,a),s.apply(this,arguments)}return o()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&Object(v.a)(document.documentElement,0,function n(s,a){for(;s;)return s.offsetTop&&"static"!==getComputedStyle(s).position&&(a+=s.offsetTop),n(s.parentNode,a);return a}(s,-9))}}},{key:"render",value:function(){return x.a.createElement("div",{className:"zandoc-react-container",key:null},x.a.createElement(C,{style:'img[alt="zent-theme"] {\n    width: 514px;\n    height: 319px;\n  }'}),x.a.createElement(w,{html:'<h2 class="anchor-heading"><a href="#themes">¶</a><a href="javascript:void(0)" id="themes" class="anchor-point"></a>Themes</h2>\n<p>Zent supports themes, only colors are customizable for now.</p>\n<p><img src="https://img.yzcdn.cn/zanui/react/zent-theme.png" alt="zent-theme"></p>\n<h3 class="anchor-heading"><a href="#customize-through-css-variable">¶</a><a href="javascript:void(0)" id="customize-through-css-variable" class="anchor-point"></a>Customize through CSS variables</h3>\n<p>Zent uses <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS Variables</a>, so it is possible to customize themes via custom CSS variables.</p>\n<p>Example (with default theme):</p>\n<pre><code class="language-css"><span class="token selector"><span class="token pseudo-class">:root</span> </span><span class="token punctuation">{</span>\n  <span class="token property">--theme-stroke-1</span><span class="token punctuation">:</span> <span class="token hexcode">#323233</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-stroke-2</span><span class="token punctuation">:</span> <span class="token hexcode">#646566</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-stroke-3</span><span class="token punctuation">:</span> <span class="token hexcode">#969799</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-stroke-4</span><span class="token punctuation">:</span> <span class="token hexcode">#c8c9cc</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-stroke-5</span><span class="token punctuation">:</span> <span class="token hexcode">#dcdee0</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-stroke-6</span><span class="token punctuation">:</span> <span class="token hexcode">#ebedf0</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-stroke-7</span><span class="token punctuation">:</span> <span class="token hexcode">#f2f3f5</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-stroke-8</span><span class="token punctuation">:</span> <span class="token hexcode">#f7f8fa</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-stroke-9</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-stroke-10</span><span class="token punctuation">:</span> <span class="token hexcode">#eaeaea</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-stroke-11</span><span class="token punctuation">:</span> <span class="token hexcode">#f4f5f5</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-primary-1</span><span class="token punctuation">:</span> <span class="token hexcode">#0a2a61</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-primary-2</span><span class="token punctuation">:</span> <span class="token hexcode">#10439b</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-primary-3</span><span class="token punctuation">:</span> <span class="token hexcode">#114db4</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-primary-4</span><span class="token punctuation">:</span> <span class="token hexcode">#155bd4</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-primary-5</span><span class="token punctuation">:</span> <span class="token hexcode">#3773da</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-primary-6</span><span class="token punctuation">:</span> <span class="token hexcode">#5487df</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-primary-7</span><span class="token punctuation">:</span> <span class="token hexcode">#94b4eb</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-primary-8</span><span class="token punctuation">:</span> <span class="token hexcode">#edf4ff</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-success-1</span><span class="token punctuation">:</span> <span class="token hexcode">#268d37</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-success-2</span><span class="token punctuation">:</span> <span class="token hexcode">#2da641</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-success-3</span><span class="token punctuation">:</span> <span class="token hexcode">#4cb35d</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-success-4</span><span class="token punctuation">:</span> <span class="token hexcode">#66be74</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-success-5</span><span class="token punctuation">:</span> <span class="token hexcode">#f0faf2</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-error-1</span><span class="token punctuation">:</span> <span class="token hexcode">#b40000</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-error-2</span><span class="token punctuation">:</span> <span class="token hexcode">#d40000</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-error-3</span><span class="token punctuation">:</span> <span class="token hexcode">#da2626</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-error-4</span><span class="token punctuation">:</span> <span class="token hexcode">#df4545</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-error-5</span><span class="token punctuation">:</span> <span class="token hexcode">#ffebeb</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-warn-1</span><span class="token punctuation">:</span> <span class="token hexcode">#ed6a0c</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-warn-2</span><span class="token punctuation">:</span> <span class="token hexcode">#f1924e</span><span class="token punctuation">;</span>\n  <span class="token property">--theme-warn-3</span><span class="token punctuation">:</span> <span class="token hexcode">#fff5ed</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 class="anchor-heading"><a href="#customize-through-rebuilding-s">¶</a><a href="javascript:void(0)" id="customize-through-rebuilding-s" class="anchor-point"></a>Customize through rebuilding SCSS</h3>\n<p>Styles in Zent are written in <a href="https://sass-lang.com">scss</a>, we have a builtin theme extension file to support custom themes. You can build custom styles using this extension file.</p>\n<p>This method is non-intrusive, but you have to manually build your custom theme every time you upgrade Zent.</p>\n<h4 class="anchor-heading"><a href="#build-steps">¶</a><a href="javascript:void(0)" id="build-steps" class="anchor-point"></a>Build Steps</h4>\n<ol>\n<li>Clone Zent from <a href="https://github.com/youzan/zent">github</a> and install dependencies</li>\n<li>Create a file named <a href="https://github.com/youzan/zent/blob/master/packages/zent/assets/theme/_override_.scss"><code>_override.scss</code></a> in <code>packages/zent/assets</code>, define your custom colors in this file. All customizable colors are defined in <a href="https://github.com/youzan/zent/blob/master/packages/zent/assets/theme/_default.scss"><code>_default.scss</code></a> within the same directory.</li>\n<li>Run <code>yarn theme</code> within <code>packages/zent</code></li>\n<li>Your custom theme styles are in <code>packages/zent/css</code>.</li>\n</ol>'}))}}]),a}(g.Component)}}]);