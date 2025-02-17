"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7019],{4074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>T,default:()=>q,frontMatter:()=>k,metadata:()=>s,toc:()=>E});const s=JSON.parse('{"id":"\u4f7f\u7528\u6280\u5de7/DeepSeek\u4e0eWPS\u8054\u52a8","title":"DeepSeek\u4e0eWPS\u8054\u52a8","description":"\u672c\u6559\u7a0b\u5b9e\u73b0WPS\u5185\u5d4cDeepSeek\uff0c\u5b9e\u73b0\u529e\u516c\u4e0eAI\u8054\u52a8\uff0c\u5927\u5e45\u63d0\u9ad8\u6548\u7387\u3002","source":"@site/docs/\u4f7f\u7528\u6280\u5de7/DeepSeek\u4e0eWPS\u8054\u52a8.mdx","sourceDirName":"\u4f7f\u7528\u6280\u5de7","slug":"/\u4f7f\u7528\u6280\u5de7/DeepSeek\u4e0eWPS\u8054\u52a8","permalink":"/docs/\u4f7f\u7528\u6280\u5de7/DeepSeek\u4e0eWPS\u8054\u52a8","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Docker\u57fa\u7840\u547d\u4ee4","permalink":"/docs/\u4f7f\u7528\u6280\u5de7/Docker\u57fa\u7840\u547d\u4ee4"},"next":{"title":"\u52a0\u5165\u6211\u4eec","permalink":"/docs/\u52a0\u5165\u6211\u4eec"}}');var r=t(4848),l=t(8453),o=t(6540),a=t(4164),i=t(5627),c=t(6347),d=t(372),u=t(604),p=t(1861),h=t(8749);function m(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,p.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const s=(0,c.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=x(e),[l,a]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[i,c]=j({queryString:t,groupId:s}),[u,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,h.Dv)(t);return[s,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),m=(()=>{const e=i??u;return f({value:e,tabValues:r})?e:null})();(0,d.A)((()=>{m&&a(m)}),[m]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),c(e),p(e)}),[c,p,r]),tabValues:r}}var b=t(9136);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=o[t].value;r!==s&&(d(n),l(r))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{c.push(e)},onKeyDown:p,onClick:u,...l,className:(0,a.A)("tabs__item",A.tabItem,l?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function P(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function I(e){const n=g(e);return(0,r.jsxs)("div",{className:(0,a.A)("tabs-container",A.tabList),children:[(0,r.jsx)(v,{...n,...e}),(0,r.jsx)(P,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,r.jsx)(I,{...e,children:m(e.children)},String(n))}const S={tabItem:"tabItem_Ymn6"};function y(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(S.tabItem,s),hidden:t,children:n})}const k={sidebar_position:5},T=void 0,_={},E=[{value:"\u5b89\u88c5\u73af\u5883\uff1a",id:"\u5b89\u88c5\u73af\u5883",level:4},{value:"\u51c6\u5907\u5de5\u4f5c\uff1a\u7533\u8bf7API",id:"\u51c6\u5907\u5de5\u4f5c\u7533\u8bf7api",level:2},{value:"1.\u6ce8\u518c\u5e76\u767b\u5f55\u63a7\u5236\u53f0",id:"1\u6ce8\u518c\u5e76\u767b\u5f55\u63a7\u5236\u53f0",level:3},{value:"2.\u5f00\u901a\u5927\u6a21\u578b\u77e5\u8bc6\u5f15\u64ce\u670d\u52a1",id:"2\u5f00\u901a\u5927\u6a21\u578b\u77e5\u8bc6\u5f15\u64ce\u670d\u52a1",level:3},{value:"3.\u590d\u5236\u5e76\u4fdd\u5b58API-Key",id:"3\u590d\u5236\u5e76\u4fdd\u5b58api-key",level:3},{value:"\u914d\u7f6e\u5b8f\u4ee3\u7801",id:"\u914d\u7f6e\u5b8f\u4ee3\u7801",level:2},{value:"1.\u6253\u5f00WPS",id:"1\u6253\u5f00wps",level:3},{value:"2.\u914d\u7f6e\u5b8f\u4ee3\u7801",id:"2\u914d\u7f6e\u5b8f\u4ee3\u7801",level:3},{value:"\u6dfb\u52a0\u83dc\u5355\u680f\u6309\u94ae",id:"\u6dfb\u52a0\u83dc\u5355\u680f\u6309\u94ae",level:2},{value:"\u6548\u679c\u6d4b\u8bd5",id:"\u6548\u679c\u6d4b\u8bd5",level:2}];function N(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,r.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u5b9e\u73b0WPS\u5185\u5d4cDeepSeek\uff0c\u5b9e\u73b0\u529e\u516c\u4e0eAI\u8054\u52a8\uff0c\u5927\u5e45\u63d0\u9ad8\u6548\u7387\u3002"})}),"\n",(0,r.jsxs)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:[(0,r.jsx)(n.h4,{id:"\u5b89\u88c5\u73af\u5883",children:"\u5b89\u88c5\u73af\u5883\uff1a"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7cfb\u7edf\uff1a\u94f6\u6cb3\u9e92\u9e9fV10SP1 2023\uff08arm\uff09\uff0c\u7406\u8bba\u4e0a\u5e94\u8be5\u901a\u7528\uff0c\u5305\u62ecUOS\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["WPS\u7248\u672c\u53f7\uff1a",(0,r.jsx)(n.a,{href:"https://wps-linux-365.wpscdn.cn/wps/download/ep/Linux365/19831/wps-office_12.8.2.19831.AK.preload.sw_arm64.deb",children:"19831\uff08\u70b9\u6211\u53ef\u4e0b\u8f7dArm\u7248\u672c\uff09"})," \uff0c\u4e5f\u53ef\u5230",(0,r.jsx)(n.a,{href:"https://365.wps.cn/download365",children:"WPS365\u5b98\u7f51"}),"\u81ea\u884c\u4e0b\u8f7d\u3002\u8fd9\u91cc\u9700\u8981\u7279\u522b\u6ce8\u610f\uff0c\u5df2\u6d4b\u8bd515283\uff0c12219\u7248\u672c\u4e0d\u53ef\u7528\uff0c\u4e5f\u662f\u8e29\u4e86\u51e0\u4e2a\u5751\uff0c\u672c\u4ee5\u4e3alinux\u4e0aWPS\u7684VBA\u7248\u672c\u53ef\u80fd\u4e0d\u5b8c\u5584\uff0c\u6700\u540e\u62b1\u7740\u8bd5\u8bd5\u770b\u7684\u60f3\u6cd5\u5b89\u88c5\u4e86\u5b98\u7f51\u6700\u65b0\u7248\uff0c\u5c45\u7136\u53ef\u7528\uff01\u559c\u5927\u666e\u5954\uff01"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c\u7533\u8bf7api",children:"\u51c6\u5907\u5de5\u4f5c\uff1a\u7533\u8bf7API"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd1\u671f\uff0c\u5404\u5927AI\u8fd0\u8425\u5546\u5747\u90e8\u7f72\u4e86DeepSeek\u6a21\u578b\uff0c\u5e76\u5728\u5176\u7f51\u7ad9\u540e\u53f0\u63d0\u4f9b\u4e86API\u5bc6\u94a5\u3002\u7528\u6237\u53ef\u4ee5\u5c06\u83b7\u53d6\u7684API\u5bc6\u94a5\u590d\u5236\u5e76\u66ff\u6362\u5230\u76f8\u5e94\u7684\u4ee3\u7801\u4e2d\u4ee5\u63a5\u5165\u8fd9\u4e9b\u670d\u52a1\u3002\u8fd9\u91cc\u4ee5\u817e\u8baf\u4e91\u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e\uff0c\u56e0\u4e3a\u5728\u6211\u7684\u6d4b\u8bd5\u4e2d\uff0c\u5b83\u7684\u54cd\u5e94\u901f\u5ea6\u8f83\u5feb\u3002\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u6c42\u548c\u4e0d\u540c\u5e73\u53f0\u7684\u8868\u73b0\u8fdb\u884c\u76f8\u5e94\u8c03\u6574\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"1\u6ce8\u518c\u5e76\u767b\u5f55\u63a7\u5236\u53f0",children:"1.\u6ce8\u518c\u5e76\u767b\u5f55\u63a7\u5236\u53f0"}),"\n",(0,r.jsxs)(w,{children:[(0,r.jsx)(y,{value:"tencent",label:"\u817e\u8baf\u4e91\uff08\u63a8\u8350\uff09",default:!0,children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://console.cloud.tencent.com/lkeap",children:"https://console.cloud.tencent.com/lkeap"})})}),(0,r.jsx)(y,{value:"siliconflow",label:"\u7845\u57fa\u6d41\u52a8",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://cloud.siliconflow.cn",children:"https://cloud.siliconflow.cn"})})}),(0,r.jsx)(y,{value:"deepseek",label:"DeepSeek\u5b98\u65b9",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://platform.deepseek.com/usage",children:"https://platform.deepseek.com/usage"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"2\u5f00\u901a\u5927\u6a21\u578b\u77e5\u8bc6\u5f15\u64ce\u670d\u52a1",children:"2.\u5f00\u901a\u5927\u6a21\u578b\u77e5\u8bc6\u5f15\u64ce\u670d\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"\u70b9\u51fb\u5f00\u901a\u5927\u6a21\u578b\u77e5\u8bc6\u5f15\u64ce"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"ktzsyq",src:t(7623).A+"",width:"600",height:"382"})}),"\n",(0,r.jsx)(n.p,{children:"\u70b9\u51fb\u5927\u6a21\u578b\u77e5\u8bc6\u5f15\u64ce\u4e0b\u9762\u7684\u7acb\u5373\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"dmxzsyq",src:t(1081).A+"",width:"1024",height:"362"})}),"\n",(0,r.jsx)(n.h3,{id:"3\u590d\u5236\u5e76\u4fdd\u5b58api-key",children:"3.\u590d\u5236\u5e76\u4fdd\u5b58API-Key"}),"\n",(0,r.jsxs)(n.p,{children:["\u70b9\u51fb\u4fa7\u8fb9\u680f\u7684API-Key\uff0c\u518d\u70b9\u51fb\u521b\u5efa",(0,r.jsx)(n.code,{children:"API KEY"}),"\u6309\u94ae\uff0c\u4fdd\u5b58API KEY\u5907\u7528"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"dmxzsyq",src:t(4387).A+"",width:"1654",height:"826"})}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u5b8f\u4ee3\u7801",children:"\u914d\u7f6e\u5b8f\u4ee3\u7801"}),"\n",(0,r.jsx)(n.h3,{id:"1\u6253\u5f00wps",children:"1.\u6253\u5f00WPS"}),"\n",(0,r.jsx)(n.p,{children:"\u65b0\u5efa\u4e00\u4e2a\u6587\u672c\u6587\u6863\uff0c\u6587\u6863\u7684\u683c\u5f0f\u6ca1\u6709\u8981\u6c42\uff0cdoc\u3001docx\u6216\u8005wps\u683c\u5f0f\u7684\u5747\u53ef\uff0c\u56e0\u4e3a\u90fd\u9002\u5408\u7528VBA\u5904\u7406\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u70b9\u51fb\u83dc\u5355\u680f\u4e2d\u7684\u5de5\u5177\u9009\u9879\u5361\u4e2d\u7684\u5f00\u53d1\u5de5\u5177"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"djkfgj",src:t(1739).A+"",width:"670",height:"131"})}),"\n",(0,r.jsx)(n.p,{children:"\u518d\u70b9\u51fbWPS\u5b8f\u7f16\u8f91\u5668\uff08VBA\uff09"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"djwpsh",src:t(9003).A+"",width:"954",height:"121"})}),"\n",(0,r.jsx)(n.h3,{id:"2\u914d\u7f6e\u5b8f\u4ee3\u7801",children:"2.\u914d\u7f6e\u5b8f\u4ee3\u7801"}),"\n",(0,r.jsxs)(n.p,{children:["\u53f3\u952e\u70b9\u51fb ",(0,r.jsx)(n.code,{children:"Project(Normal.dotm)"}),"\uff08\u8fd9\u662fWord\u7684\u5168\u5c40\u6a21\u677f\uff0c\u9002\u7528\u4e8e\u6240\u6709\u65b0\u5efa\u7684\u6587\u6863\uff09\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0d\u8981\u53f3\u952e\u70b9\u51fb\u4f60\u5f53\u524d\u6b63\u5728\u7f16\u8f91\u7684\u65b0\u5efa\u6587\u6863\u6216\u4efb\u4f55\u7279\u5b9a\u6587\u6863\u7684\u9879\u76ee\uff0c\u56e0\u4e3a\u6211\u4eec\u7684\u76ee\u6807\u662f\u8ba9\u65b0\u6a21\u5757\u5bf9\u6240\u6709\u6587\u6863\u751f\u6548\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"d_crmk",src:t(1809).A+"",width:"621",height:"424"})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u4e0b\u9762\u7684\u4ee3\u7801\u590d\u5236\u5230\u53f3\u8fb9\u7684\u4ee3\u7801\u7f16\u8f91\u5668"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'// DeepSeek\u4e0eWPS\u8054\u52a8\u6559\u7a0b\uff1ahttps://kylin.cxcare.top\uff0c\u4f7f\u7528\u6280\u5de7-DeepSeek\u4e0eWPS\u8054\u52a8\n// API\u53c2\u6570\u914d\u7f6e\u4e09\u9879\n// API key\uff0c\u8bf7\u66ff\u6362\u6210\u4f60\u7684API key\nconst OPENAI_API_KEY = "sk-*******************";\n\n/* \u4ee5\u4e0b\u4e3a\u66f4\u6362AI\u8fd0\u8425\u5546\u4e2d\u9700\u8981\u66ff\u6362\u7684\u533a\u57df */\n// \u63a5\u53e3\u5730\u5740\uff0c\u8fd9\u91cc\u586b\u7684\u662f\u817e\u8baf\u4e91\u7684api\u5730\u5740\uff0c\u5982\u679c\u7528\u5176\u4ed6\u7684\uff0c\u8bf7\u4fee\u6539\nconst OPENAI_API_URL = "https://api.lkeap.cloud.tencent.com/v1/chat/completions";  \n// \u8c03\u7528\u6a21\u578b\u540d\u79f0\uff0c\u8fd9\u91cc\u8c03\u7528\u7684\u662fR1\uff0c\u5982\u679c\u7528\u5176\u4ed6\u7684\uff0c\u8bf7\u4fee\u6539\nconst OPENAI_MODEL = "deepseek-r1";\n/* \u4ee5\u4e0a\u4e3a\u66f4\u6362AI\u8fd0\u8425\u5546\u4e2d\u9700\u8981\u66ff\u6362\u7684\u533a\u57df */\n\n// \u63d0\u793a\u8bcd\u6a21\u677f\nfunction PROMPT_TEMPLATE(text, requirements) {\n  return `\u4f60\u662f\u4e00\u4f4d\u64c5\u957f\u6587\u6848\u5199\u4f5c\u7684\u52a9\u624b\u3002\u8bf7\u6839\u636e\u4ee5\u4e0b\u8981\u6c42\u5904\u7406\u6587\u672c\uff1a\n  \t1. \u4fdd\u6301\u539f\u6587\u7684\u6838\u5fc3\u610f\u601d\u4e0d\u53d8\n  \t2. \u5982\u679c\u539f\u6587\u6709\u8981\u6c42\u8981\u7ed3\u5408\u4e00\u4e0b\u8981\u6c42\n${requirements}\n\n\u8bf7\u5904\u7406\u4ee5\u4e0b\u6587\u672c\uff1a\n${text}`;\n}\n\nfunction expandText() {\n  const selection = Application.Selection;\n\n  // \u68c0\u67e5\u662f\u5426\u6709\u9009\u4e2d\u6587\u672c\n  console.log("\u5f00\u59cb\u6267\u884c\u5b8f\uff0c\u68c0\u67e5\u9009\u4e2d\u6587\u672c...");\n  if (!selection || !selection.Text) {\n    console.log("\u672a\u68c0\u6d4b\u5230\u9009\u4e2d\u6587\u672c");\n    alert("\u8bf7\u9009\u62e9\u9700\u8981\u6269\u5199\u7684\u6587\u672c");\n    return;\n  }\n\n  const originalText = selection.Text;\n  console.log("\u68c0\u6d4b\u5230\u9009\u4e2d\u6587\u672c\uff1a", originalText);\n\n  // \u83b7\u53d6\u7528\u6237\u8f93\u5165\u7684\u8981\u6c42\n  const requirements = InputBox("\u8bf7\u8f93\u5165\u5199\u4f5c\u7684\u5177\u4f53\u8981\u6c42\uff1a", "\u5199\u4f5c\u8981\u6c42");\n  if (requirements === null || requirements.trim() === "") {\n    console.log("\u7528\u6237\u53d6\u6d88\u4e86\u8f93\u5165\u6216\u672a\u8f93\u5165\u4efb\u4f55\u8981\u6c42");\n    alert("\u8bf7\u63d0\u4f9b\u5199\u4f5c\u7684\u5177\u4f53\u8981\u6c42");\n    return;\n  }\n\n  try {\n    // \u663e\u793a\u52a0\u8f7d\u63d0\u793a\n    alert("AI\u6b63\u5728\u521b\u4f5c\u6587\u672c\uff0c\u8bf7\u7a0d\u5019\uff0c\u5355\u51fb\u786e\u5b9a\u540e\u5f00\u59cb\u2026\u2026");\n\n    // \u8c03\u7528OpenAI API\n    console.log("\u5f00\u59cb\u8c03\u7528OpenAI API...");\n    callOpenAI(originalText, requirements)\n        .then(response => {\n          // \u68c0\u67e5API\u54cd\u5e94\u662f\u5426\u6709\u6548\n          if (!response || typeof response !== "string") {\n            throw new Error("API\u8fd4\u56de\u65e0\u6548\u7684\u54cd\u5e94");\n          }\n\n          console.log("\u6210\u529f\u83b7\u53d6API\u54cd\u5e94\uff1a", response);\n          // \u5c06\u751f\u6210\u7684\u6587\u672c\u63d2\u5165\u5230\u9009\u4e2d\u6587\u672c\u7684\u4e0b\u65b9\n          insertTextBelowSelection(selection, "\\n" + response.trim());\n          console.log("\u6587\u672c\u63d2\u5165\u5b8c\u6210");\n        })\n        .catch(error => {\n          // \u6062\u590d\u539f\u6587\u672c\n          selection.Text = originalText;\n          throw error;\n        })\n        .finally(() => {\n          console.log("\u5b8c\u6210");\n        });\n  } catch (error) {\n    console.error("\u6269\u5199\u5931\u8d25\uff1a", error);\n    // \u663e\u793a\u9519\u8bef\u4fe1\u606f\n    alert("\u6269\u5199\u5931\u8d25\uff1a" + error.message);\n  }\n}\n\nfunction callOpenAI(text, requirements) {\n  return new Promise((resolve, reject) => {\n    const xhr = new XMLHttpRequest();\n    const url = OPENAI_API_URL;\n\n    xhr.open("POST", url, true);\n    xhr.setRequestHeader("Content-Type", "application/json");\n    xhr.setRequestHeader("Authorization", `Bearer ${OPENAI_API_KEY}`);\n\n    xhr.onreadystatechange = function() {\n      console.log("XHR\u72b6\u6001\u53d8\u5316\uff1a", xhr.readyState);\n      if (xhr.readyState === 4) {\n        console.log("API\u8bf7\u6c42\u5b8c\u6210\uff0c\u72b6\u6001\u7801\uff1a", xhr.status);\n        try {\n          console.log("HTTP\u8bf7\u6c42\u62a5\u6587\uff1a", JSON.stringify({\n            url: url,\n            method: "POST",\n            headers: {\n              "Content-Type": "application/json",\n              "Authorization": `Bearer ${OPENAI_API_KEY}`\n            },\n            body: JSON.stringify(data)\n          }));\n          console.log("API\u54cd\u5e94\u539f\u59cb\u6570\u636e\uff1a", xhr.responseText);\n          const json = JSON.parse(xhr.responseText);\n          if (!json.choices || !json.choices[0] || !json.choices[0].message || !json.choices[0].message.content) {\n            console.error("API\u8fd4\u56de\u65e0\u6548\u7684\u6570\u636e\u7ed3\u6784");\n            reject(new Error("API\u8fd4\u56de\u65e0\u6548\u7684\u6570\u636e\u7ed3\u6784"));\n          } else {\n            console.log("\u6210\u529f\u89e3\u6790API\u54cd\u5e94");\n            console.log("\u5b8c\u6574\u6269\u5199\u7ed3\u679c\uff1a", json.choices[0].message.content);\n            resolve(json.choices[0].message.content.trim());\n          }\n        } catch (error) {\n          console.error("\u89e3\u6790API\u54cd\u5e94\u5931\u8d25\uff1a", error);\n          reject(new Error("\u89e3\u6790API\u54cd\u5e94\u5931\u8d25"));\n        }\n      }\n    };\n\n    const data = {\n      model: OPENAI_MODEL,\n      messages: [\n        {\n          role: "user",\n          content: PROMPT_TEMPLATE(text, requirements)\n        }\n      ],\n      temperature: 1.5\n    };\n\n    xhr.send(JSON.stringify(data));\n  });\n}\n\nfunction insertTextBelowSelection(selection, textToInsert) {\n  // \u79fb\u52a8\u5149\u6807\u5230\u9009\u4e2d\u6587\u672c\u7684\u7ed3\u5c3e\n  selection.Collapse(false);\n  // \u63d2\u5165\u65b0\u6587\u672c\n  selection.InsertAfter(textToInsert);\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u70b9\u51fb\u4fdd\u5b58\uff0c\u6b64\u65f6\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u5e76\u4e0d\u662f\u6a21\u677f\u6587\u4ef6\u6240\u5728\u7684\u4f4d\u7f6e\uff0c\u6211\u4eec\u8981\u8fdb\u884c\u5207\u6362\uff0c\u94f6\u6cb3\u9e92\u9e9f\u53ef\u76f4\u63a5\u590d\u5236\u4e0b\u9762\u5730\u5740\uff0c\u5176\u4ed6\u7cfb\u7edf\u53ef\u901a\u8fc7\u70b9\u51fbWPS\u5de6\u4e0a\u65b9\u201c\u6587\u4ef6\u201d-\u201c\u65b0\u5efa\u201d-\u201c\u672c\u673a\u4e0a\u7684\u6a21\u677f\u201d-\u201c\u6d4f\u89c8\u6a21\u677f\u4f4d\u7f6e\u201d\u67e5\u770b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"/home/kylin/.local/share/Kingsoft/office6/templates/wps/zh_CN\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"d_mbwjwz",src:t(487).A+"",width:"961",height:"601"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6dfb\u52a0\u83dc\u5355\u680f\u6309\u94ae",children:"\u6dfb\u52a0\u83dc\u5355\u680f\u6309\u94ae"}),"\n",(0,r.jsx)(n.p,{children:"\u5728WPS\u4e2d\u4f9d\u6b21\u70b9\u51fb\u201c\u6587\u4ef6\u201d-\u201c\u9009\u9879\u201d-\u201c\u81ea\u5b9a\u4e49\u529f\u80fd\u533a\u201d\uff0c\u6309\u7167\u987a\u5e8f\u6267\u884c\u4e0b\u9762\u7684\u64cd\u4f5c\uff0c\u7136\u540e\u9009\u4e2d\u53f3\u8fb9\u65b0\u6dfb\u52a0\u7684\u5b8f\uff0c\u518d\u70b9\u51fb\u91cd\u547d\u540d\uff0c\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u547d\u540d\uff0c\u547d\u540d\u7ed3\u679c\u5c31\u662f\u9009\u9879\u5361\u4e2d\u663e\u793a\u7684\u6548\u679c\u3002\u6309\u9700\u5bf9\u201c\u7ec4\u201d\u91cd\u547d\u540d\uff08\u53ef\u4ee5\u4e0d\u7528\uff0c\u5fae\u8f6f\u7684Office\u4f1a\u663e\u793a\u7ec4\u540d\uff0cWPS\u4e0d\u663e\u793a\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"d_tjdpan",src:t(6933).A+"",width:"852",height:"652"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u6837\u5c31\u90e8\u7f72\u5b8c\u4e86"}),"\n",(0,r.jsx)(n.h2,{id:"\u6548\u679c\u6d4b\u8bd5",children:"\u6548\u679c\u6d4b\u8bd5"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u5c31\u7b80\u5355\u4e86\uff01\u9009\u4e2d\u6587\u672c\uff0c\u5355\u51fb\u5de5\u5177\u91cc\u9762\u7684\u6309\u94ae\uff0c\u63d0\u51fa\u8981\u6c42\uff0c\u8f93\u51fa\u7ed3\u679c\u4f1a\u81ea\u52a8\u63d2\u5165\u5230\u9009\u4e2d\u6587\u672c\u7684\u540e\u9762\u2026\u2026\n\u56e0\u4e3a\u4f7f\u7528\u7684\u662fDeepSeek R1\u6df1\u5ea6\u63a8\u7406\u6a21\u578b\uff0c\u6240\u4ee5\u611f\u89c9\u901f\u5ea6\u6709\u70b9\u6162\uff0c\u5176\u5b9e\u6b63\u5728\u63a8\u7406\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u65e0\u6cd5\u663e\u793a\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"d_csxg",src:t(6831).A+"",width:"1919",height:"1080"})})]})}function q(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}},1809:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/d_crmk-7f5f0b5a86b7153f7954fdd8f8d22467.jpg"},6831:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/d_csxg-5d129c01949f0ebbee087ba90e35d6aa.jpg"},487:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/d_mbwjwz-f6204c42bd5e8781eb74d57377c44c10.jpg"},6933:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/d_tjdpan-daf60c77d420c5dea2c1725393f23659.jpg"},1739:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/djkfgj-bae903af54c853f8cb78519d939bc608.jpg"},9003:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/djwpsh-c672df6df435528465ff9ca408022350.jpg"},1081:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dmxzsyq-4d88ead10c1812f4611d551c77b32343.jpg"},7623:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ktzsyq-e7c694f6950dcd8a173521693ae4a7e3.jpg"},4387:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/xjapi-4d484efc7e8bd52d7722102db0d940df.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);