(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{747:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return M}));var t=s(609),e=s.n(t),p=s(603),o=s.n(p),c=s(604),l=s.n(c),u=s(285),r=s.n(u),i=s(605),k=s.n(i),d=s(606),m=s.n(d),g=s(607),h=s.n(g),v=s(608),b=s.n(v),f=s(0),E=s.n(f),w=s(104),N=s(79);function y(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=h()(n);if(a){var e=h()(this).constructor;s=Reflect.construct(t,arguments,e)}else s=t.apply(this,arguments);return m()(this,s)}}var j=function(){return E.a.createElement("div",null,E.a.createElement(N.nb,{value:2,placeholder:"please enter number"}),E.a.createElement(N.nb,{value:2,placeholder:"please enter number",addonBefore:"$"}),E.a.createElement(N.nb,{value:2,showStepper:!0,placeholder:"please enter number"}),E.a.createElement(N.nb,{value:2,showCounter:!0,placeholder:"please enter number"}),E.a.createElement(N.nb,{value:2,showCounter:!0,placeholder:"please enter number"}))},C=function(){return E.a.createElement("div",null,E.a.createElement(N.nb,{value:2,decimal:2,placeholder:"please enter number"}),E.a.createElement(N.nb,{value:2,showStepper:!0,decimal:2,placeholder:"please enter number"}),E.a.createElement(N.nb,{value:2,showCounter:!0,decimal:2,placeholder:"please enter number"}))},I=function(){return E.a.createElement("div",null,E.a.createElement(N.nb,{value:3,min:-2,max:6,decimal:2,placeholder:"please enter number"}),E.a.createElement(N.nb,{value:3,showStepper:!0,min:2,max:6,decimal:2,placeholder:"please enter number"}),E.a.createElement(N.nb,{value:3,showCounter:!0,min:2,max:6,decimal:2,placeholder:"please enter number"}))},S=function(){return E.a.createElement("div",null,E.a.createElement(N.nb,{value:3,disabled:!0}),E.a.createElement(N.nb,{value:3,disabled:!0,showStepper:!0}),E.a.createElement(N.nb,{value:3,disabled:!0,showCounter:!0}))},_=function(){var n=function(n){k()(s,n);var a=y(s);function s(){var n;o()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),b()(r()(n),"state",{value:""}),b()(r()(n),"onChange",(function(a){console.log("onChange"),n.setState({value:a})})),b()(r()(n),"setToThree",(function(){n.forceUpdate()})),b()(r()(n),"onPressEnter",(function(){console.log("pressed enter")})),n}return l()(s,[{key:"render",value:function(){return E.a.createElement("div",null,E.a.createElement(N.nb,{showStepper:!0,onChange:this.onChange,onPressEnter:this.onPressEnter}),E.a.createElement(N.j,{onClick:this.setToThree},"Set value to 3"))}}]),s}(E.a.Component);return E.a.createElement(n,null)},x=function(){return E.a.createElement("div",null,E.a.createElement(N.nb,{value:3,min:-2,max:6,integer:!0,placeholder:"please enter integer"}),E.a.createElement(N.nb,{value:Number.MAX_SAFE_INTEGER,showStepper:!0,integer:!0,placeholder:"please enter integer"}),E.a.createElement(N.nb,{value:3,integer:!0,showCounter:!0,min:2,max:6,placeholder:"please enter integer"}))};function D(n){return E.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function z(n){return E.a.createElement(D,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function T(n){return E.a.createElement(D,{tag:"style",html:n.style})}var R=function(n){k()(s,n);var a=y(s);function s(){var n;o()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),b()(r()(n),"state",{showCode:!1}),b()(r()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return E.a.createElement("div",{className:"zandoc-react-demo"},E.a.createElement("div",{className:"zandoc-react-demo__preview"},e),E.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.a.createElement("div",{className:"zandoc-react-demo__title"},E.a.createElement("p",null,s||"")),E.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.a.createElement("pre",{className:"zandoc-react-demo__code"},E.a.createElement(D,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(f.Component),M=function(n){k()(s,n);var a=y(s);function s(){return o()(this,s),a.apply(this,arguments)}return l()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"zandoc-react-container",key:null},E.a.createElement(T,{style:".zent-number-input {\n  width: 200px;\n  margin-bottom: 20px;\n}"}),E.a.createElement(z,{html:'<h2 class="anchor-heading"><a href="#numberinput">¶</a><a href="javascript:void(0)" id="numberinput" class="anchor-point"></a>NumberInput</h2>\n<p>A input widget for entering number through mouse or keyboard.\nDefault value type is string. Under integer mode, value type is number, with default max value <code>Number.MAX_SAFE_INTEGER</code> and default min value <code>Number.MIN_SAFE_INTEGER</code>.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>When you enter number, using numberInput is more convenient</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),E.a.createElement(R,{title:"Basic usage",id:"Demo1",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token attr-name">addonBefore</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>$<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showCounter</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showCounter</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(j)),E.a.createElement(R,{title:"Specify the decimal point precision",id:"Demo2",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span> <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showCounter</span> <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(C)),E.a.createElement(R,{title:"Enter number in a range",id:"Demo3",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showCounter</span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(I)),E.a.createElement(R,{title:"Disable status",id:"Demo4",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">showStepper</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">showCounter</span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(S)),E.a.createElement(R,{title:"Event handler",id:"Demo5",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberInput<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">EventTest</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onChange\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">setToThree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// this.setState({ value: 3 });</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onPressEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'pressed enter\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>NumberInput\n          showStepper\n          <span class="token comment">// value={this.state.value}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>\n          onPressEnter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onPressEnter<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>setToThree<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Set value to <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EventTest</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(_)),E.a.createElement(R,{title:"Integer Mode",id:"Demo6",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter integer<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Number<span class="token punctuation">.</span>MAX_SAFE_INTEGER<span class="token punctuation">}</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter integer<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">showCounter</span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>please enter integer<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(x)),E.a.createElement(z,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>input value</td>\n<td>integer === true ? number: string</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>change event</td>\n<td>func(value: typeof value)</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>showStepper</td>\n<td>whether stepper is open</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>showCounter</td>\n<td>whether counter is open</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>decimal</td>\n<td>number decimal</td>\n<td>number</td>\n<td><code>0</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>min</td>\n<td>the minimum value in the range</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>max</td>\n<td>the maximum value in the range</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>raw placeholder text</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>whether is disable or not</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom extra class name</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>width</td>\n<td>width</td>\n<td>string or number</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>integer</td>\n<td>integer mode</td>\n<td>bool</td>\n<td>false</td>\n<td></td>\n<td>No</td>\n</tr>\n</tbody>\n</table>'}))}}]),s}(f.Component)}}]);