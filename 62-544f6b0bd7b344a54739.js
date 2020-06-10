(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{727:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return P}));var t=s(609),p=s.n(t),o=s(603),e=s.n(o),c=s(604),l=s.n(c),u=s(285),i=s.n(u),r=s(605),k=s.n(r),d=s(606),m=s.n(d),g=s(607),f=s.n(g),w=s(608),h=s.n(w),v=s(0),D=s.n(v),y=s(104),C=s(79);function E(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=f()(n);if(a){var p=f()(this).constructor;s=Reflect.construct(t,arguments,p)}else s=t.apply(this,arguments);return m()(this,s)}}var b=function(){var n=C.ib.MenuItem;return D.a.createElement(C.x,{position:C.C.AutoBottomLeft},D.a.createElement(C.z,null,D.a.createElement(C.y,{type:"primary"},"Click")),D.a.createElement(C.A,null,D.a.createElement(C.ib,null,D.a.createElement(n,null,"Food"),D.a.createElement(n,null,"Clothing"))))},M=function(){var n=C.ib.MenuItem;return D.a.createElement(C.x,{position:C.C.AutoBottomLeft},D.a.createElement(C.B,null,D.a.createElement(C.y,{type:"primary"},"Hover")),D.a.createElement(C.A,null,D.a.createElement(C.ib,null,D.a.createElement(n,null,"Food"),D.a.createElement(n,null,"Clothing"))))},I=function(){var n=C.ib.MenuItem,a=function(a){k()(t,a);var s=E(t);function t(){var n;e()(this,t);for(var a=arguments.length,p=new Array(a),o=0;o<a;o++)p[o]=arguments[o];return n=s.call.apply(s,[this].concat(p)),h()(i()(n),"state",{visible:!1}),n}return l()(t,[{key:"render",value:function(){var a=this;return D.a.createElement(C.x,{visible:this.state.visible,onVisibleChange:function(n){return a.setState({visible:n})},position:C.C.AutoBottomLeft},D.a.createElement(C.z,null,D.a.createElement(C.y,{type:"primary"},"Click")),D.a.createElement(C.A,null,D.a.createElement(C.ib,{onClick:function(){return a.setState({visible:!1})}},D.a.createElement(n,null,"Close menu"),D.a.createElement(n,null,"Close menu"))))}}]),t}(v.Component);return D.a.createElement(a,null)};function B(n){return D.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function z(n){return D.a.createElement(B,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function _(n){return D.a.createElement(B,{tag:"style",html:n.style})}var A=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),h()(i()(n),"state",{showCode:!1}),h()(i()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return D.a.createElement("div",{className:"zandoc-react-demo"},D.a.createElement("div",{className:"zandoc-react-demo__preview"},p),D.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},D.a.createElement("div",{className:"zandoc-react-demo__title"},D.a.createElement("p",null,s||"")),D.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&D.a.createElement("pre",{className:"zandoc-react-demo__code"},D.a.createElement(B,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(v.Component),P=function(n){k()(s,n);var a=E(s);function s(){return e()(this,s),a.apply(this,arguments)}return l()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(y.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return D.a.createElement("div",{className:"zandoc-react-container",key:null},D.a.createElement(_,{style:""}),D.a.createElement(z,{html:'<h2 class="anchor-heading"><a href="#dropdown">¶</a><a href="javascript:void(0)" id="dropdown" class="anchor-point"></a>Dropdown</h2>\n<p>Dropdown menu, often used with <code>Menu</code>.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),D.a.createElement(A,{title:"Click to open",id:"Demo01click",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  Dropdown<span class="token punctuation">,</span>\n  Menu<span class="token punctuation">,</span>\n  DropdownButton<span class="token punctuation">,</span>\n  DropdownPosition<span class="token punctuation">,</span>\n  DropdownClickTrigger<span class="token punctuation">,</span>\n  DropdownContent<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MenuItem <span class="token punctuation">}</span> <span class="token operator">=</span> Menu<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>DropdownPosition<span class="token punctuation">.</span>AutoBottomLeft<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownClickTrigger</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownButton</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownClickTrigger</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownContent</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Food<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Clothing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownContent</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},D.a.createElement(b)),D.a.createElement(A,{title:"Hover to open",id:"Demo02hover",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  Menu<span class="token punctuation">,</span>\n  Dropdown<span class="token punctuation">,</span>\n  DropdownHoverTrigger<span class="token punctuation">,</span>\n  DropdownContent<span class="token punctuation">,</span>\n  DropdownButton<span class="token punctuation">,</span>\n  DropdownPosition<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MenuItem <span class="token punctuation">}</span> <span class="token operator">=</span> Menu<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>DropdownPosition<span class="token punctuation">.</span>AutoBottomLeft<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownHoverTrigger</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownButton</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownHoverTrigger</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownContent</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Food<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Clothing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownContent</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},D.a.createElement(M)),D.a.createElement(A,{title:"Click to close",id:"Demo03close",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  Dropdown<span class="token punctuation">,</span>\n  DropdownButton<span class="token punctuation">,</span>\n  DropdownClickTrigger<span class="token punctuation">,</span>\n  DropdownContent<span class="token punctuation">,</span>\n  DropdownPosition<span class="token punctuation">,</span>\n  Menu<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MenuItem <span class="token punctuation">}</span> <span class="token operator">=</span> Menu<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PopoverDemo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    visible<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Dropdown\n        visible<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span>\n        onVisibleChange<span class="token operator">=</span><span class="token punctuation">{</span>v <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> v <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        position<span class="token operator">=</span><span class="token punctuation">{</span>DropdownPosition<span class="token punctuation">.</span>AutoBottomLeft<span class="token punctuation">}</span>\n      <span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownClickTrigger</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownClickTrigger</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownContent</span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>Menu onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Close menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Close menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownContent</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopoverDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},D.a.createElement(I)),D.a.createElement(z,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>Please refer to <a href="popover#api">the api doc of <code>Popover</code></a>, <code>Dropdown</code> only sets some default values for props.</p>\n<p><code>DropdownButton</code> supports all <code>Button</code> props, the difference is it is aware of <code>Dropdown</code> content visible changes.</p>\n<h3 class="anchor-heading"><a href="#about-position">¶</a><a href="javascript:void(0)" id="about-position" class="anchor-point"></a>About position</h3>\n<p>It\'s recommanded to use <code>AutoXxxYxx</code> provided by <code>Popover</code> for positioning. E.g. it\'s positioned below the lower left corner, but the position will be adjusted if it\'s out of the screen.</p>\n<p>Alternative ways for positioning can be refered to <a href="popover#position%20api">the position doc of <code>Popover</code></a>。</p>'}))}}]),s}(v.Component)}}]);