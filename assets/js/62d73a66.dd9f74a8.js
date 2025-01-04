"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7012],{3741:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"\u7cfb\u7edf\u76f8\u5173/systemctl\u547d\u4ee4\u624b\u518c","title":"systemctl\u547d\u4ee4\u624b\u518c","description":"systemctl \u662f\u7528\u4e8e\u7ba1\u7406 systemd \u7cfb\u7edf\u548c\u670d\u52a1\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002systemd \u662f Linux \u7cfb\u7edf\u4e2d\u7684\u521d\u59cb\u5316\u7cfb\u7edf\u548c\u670d\u52a1\u7ba1\u7406\u5668\uff0csystemctl \u63d0\u4f9b\u4e86\u4e0e systemd \u4ea4\u4e92\u7684\u63a5\u53e3\uff0c\u7528\u4e8e\u542f\u52a8\u3001\u505c\u6b62\u3001\u91cd\u542f\u670d\u52a1\u4ee5\u53ca\u67e5\u770b\u670d\u52a1\u72b6\u6001\u7b49\u64cd\u4f5c\u3002","source":"@site/docs/\u7cfb\u7edf\u76f8\u5173/systemctl\u547d\u4ee4\u624b\u518c.md","sourceDirName":"\u7cfb\u7edf\u76f8\u5173","slug":"/\u7cfb\u7edf\u76f8\u5173/systemctl\u547d\u4ee4\u624b\u518c","permalink":"/docs/\u7cfb\u7edf\u76f8\u5173/systemctl\u547d\u4ee4\u624b\u518c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"\u5bc6\u94a5\u73af\u5220\u9664","permalink":"/docs/\u7cfb\u7edf\u76f8\u5173/\u5bc6\u94a5\u73af\u5220\u9664"},"next":{"title":"\u7cfb\u7edf\u5206\u533a","permalink":"/docs/\u7cfb\u7edf\u76f8\u5173/\u7cfb\u7edf\u5206\u533a"}}');var i=n(4848),l=n(8453);const c={sidebar_position:8},r=void 0,d={},o=[{value:"\u539f\u7406",id:"\u539f\u7406",level:3},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"\u5e38\u7528 systemctl \u547d\u4ee4\u53ca\u793a\u4f8b",id:"\u5e38\u7528-systemctl-\u547d\u4ee4\u53ca\u793a\u4f8b",level:3}];function h(s){const e={admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"systemctl \u662f\u7528\u4e8e\u7ba1\u7406 systemd \u7cfb\u7edf\u548c\u670d\u52a1\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002systemd \u662f Linux \u7cfb\u7edf\u4e2d\u7684\u521d\u59cb\u5316\u7cfb\u7edf\u548c\u670d\u52a1\u7ba1\u7406\u5668\uff0csystemctl \u63d0\u4f9b\u4e86\u4e0e systemd \u4ea4\u4e92\u7684\u63a5\u53e3\uff0c\u7528\u4e8e\u542f\u52a8\u3001\u505c\u6b62\u3001\u91cd\u542f\u670d\u52a1\u4ee5\u53ca\u67e5\u770b\u670d\u52a1\u72b6\u6001\u7b49\u64cd\u4f5c\u3002"})}),"\n",(0,i.jsx)(e.h3,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,i.jsxs)(e.p,{children:["systemctl \u57fa\u4e8e systemd\uff0c\u901a\u8fc7\u4e0e systemd \u901a\u4fe1\u6765",(0,i.jsx)(e.strong,{children:"\u63a7\u5236\u7cfb\u7edf\u670d\u52a1"}),"\u7684\u8fd0\u884c\u72b6\u6001\u3002\u5b83\u53ef\u4ee5\u7ba1\u7406",(0,i.jsx)(e.strong,{children:"\u5355\u4e2a\u670d\u52a1\u5355\u5143"}),"\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u7cfb\u7edf\u8fdb\u884c\u7ba1\u7406\uff0c\u5982\u91cd\u542f\u3001\u5173\u673a\u7b49\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u542f\u52a8\u3001\u505c\u6b62\u3001\u91cd\u542f\u7cfb\u7edf\u670d\u52a1"}),"\n",(0,i.jsx)(e.li,{children:"\u67e5\u770b\u670d\u52a1\u72b6\u6001\u3001\u65e5\u5fd7\u548c\u4f9d\u8d56\u5173\u7cfb"}),"\n",(0,i.jsx)(e.li,{children:"\u542f\u7528\u6216\u7981\u7528\u670d\u52a1\u7684\u81ea\u52a8\u542f\u52a8"}),"\n",(0,i.jsx)(e.li,{children:"\u7ba1\u7406\u7cfb\u7edf\u8fd0\u884c\u7ea7\u522b"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5e38\u7528-systemctl-\u547d\u4ee4\u53ca\u793a\u4f8b",children:"\u5e38\u7528 systemctl \u547d\u4ee4\u53ca\u793a\u4f8b"}),"\n",(0,i.jsxs)(e.p,{children:["\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684 ",(0,i.jsx)(e.code,{children:"systemctl"})," \u547d\u4ee4\u53ca\u793a\u4f8b\uff0c\u5e2e\u52a9\u60a8\u7ba1\u7406\u7cfb\u7edf\u670d\u52a1\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u542f\u52a8\u670d\u52a1"}),"\uff1a ",(0,i.jsx)(e.code,{children:"sudo systemctl start service_name"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u505c\u6b62\u670d\u52a1"}),"\uff1a ",(0,i.jsx)(e.code,{children:"sudo systemctl stop service_name"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u91cd\u542f\u670d\u52a1"}),"\uff1a ",(0,i.jsx)(e.code,{children:"sudo systemctl restart service_name"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u670d\u52a1\u72b6\u6001"}),"\uff1a ",(0,i.jsx)(e.code,{children:"systemctl status service_name"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u542f\u7528\u670d\u52a1\u81ea\u52a8\u542f\u52a8"}),"\uff1a ",(0,i.jsx)(e.code,{children:"sudo systemctl enable service_name"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7981\u7528\u670d\u52a1\u81ea\u52a8\u542f\u52a8"}),"\uff1a ",(0,i.jsx)(e.code,{children:"sudo systemctl disable service_name"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u53e6\u5916\uff0c\u4ee5\u4e0b\u662f\u66f4\u591a ",(0,i.jsx)(e.code,{children:"systemctl"})," \u7684\u5e38\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u670d\u52a1"}),"\uff1a ",(0,i.jsx)(e.code,{children:"systemctl list-units --type=service --state=running"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u6240\u6709\u5df2\u542f\u7528\u7684\u670d\u52a1"}),"\uff1a ",(0,i.jsx)(e.code,{children:"systemctl list-unit-files --type=service --state=enabled"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u670d\u52a1\u65e5\u5fd7"}),"\uff1a ",(0,i.jsx)(e.code,{children:"journalctl -u service_name"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u91cd\u8f7d systemd \u914d\u7f6e"}),"\uff1a ",(0,i.jsx)(e.code,{children:"systemctl daemon-reload"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u7cfb\u7edf\u9ed8\u8ba4 target"}),"\uff1a ",(0,i.jsx)(e.code,{children:"systemctl get-default"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8bbe\u7f6e\u7cfb\u7edf\u9ed8\u8ba4 target"}),"\uff1a ",(0,i.jsx)(e.code,{children:"systemctl set-default target_name"})]}),"\n"]})]})}function m(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>c,x:()=>r});var t=n(6540);const i={},l=t.createContext(i);function c(s){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:c(s.components),t.createElement(l.Provider,{value:e},s.children)}}}]);