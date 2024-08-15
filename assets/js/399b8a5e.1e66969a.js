"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7689],{7497:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=n(4848),t=n(8453);const r={sidebar_position:3},l=void 0,c={id:"\u5b66\u4e60\u7b14\u8bb0/SSH\u63a8\u9001",title:"SSH\u63a8\u9001",description:"\u8981\u907f\u514d\u6bcf\u6b21\u4f7f\u7528 git fetch/push \u7b49\u64cd\u4f5c\u65f6\u90fd\u8f93\u5165\u5bc6\u7801\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e SSH \u5bc6\u94a5\u6765\u5b9e\u73b0\u3002",source:"@site/docs/\u5b66\u4e60\u7b14\u8bb0/SSH\u63a8\u9001.md",sourceDirName:"\u5b66\u4e60\u7b14\u8bb0",slug:"/\u5b66\u4e60\u7b14\u8bb0/SSH\u63a8\u9001",permalink:"/docs/\u5b66\u4e60\u7b14\u8bb0/SSH\u63a8\u9001",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b57\u4f53\u8bbe\u7f6e",permalink:"/docs/\u5b66\u4e60\u7b14\u8bb0/\u5b57\u4f53\u8bbe\u7f6e"},next:{title:"HTML\u901f\u67e5\u5217\u8868",permalink:"/docs/\u5b66\u4e60\u7b14\u8bb0/HTML\u901f\u67e5\u5217\u8868"}},d={},o=[{value:"\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u6709 SSH \u5bc6\u94a5\u5bf9",id:"\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u6709-ssh-\u5bc6\u94a5\u5bf9",level:3},{value:"\u751f\u6210\u65b0\u7684 SSH \u5bc6\u94a5\u5bf9",id:"\u751f\u6210\u65b0\u7684-ssh-\u5bc6\u94a5\u5bf9",level:3},{value:"\u542f\u52a8SSH\u4ee3\u7406",id:"\u542f\u52a8ssh\u4ee3\u7406",level:3},{value:"\u6dfb\u52a0\u5bc6\u94a5\u5230 SSH \u4ee3\u7406",id:"\u6dfb\u52a0\u5bc6\u94a5\u5230-ssh-\u4ee3\u7406",level:3},{value:"\u5c06\u516c\u94a5\u6dfb\u52a0\u5230 Git \u6258\u7ba1\u670d\u52a1\u63d0\u4f9b\u5546\uff08\u5982 GitHub\u3001GitLab\uff09",id:"\u5c06\u516c\u94a5\u6dfb\u52a0\u5230-git-\u6258\u7ba1\u670d\u52a1\u63d0\u4f9b\u5546\u5982-githubgitlab",level:3}];function a(e){const s={admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"\u8981\u907f\u514d\u6bcf\u6b21\u4f7f\u7528 git fetch/push \u7b49\u64cd\u4f5c\u65f6\u90fd\u8f93\u5165\u5bc6\u7801\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e SSH \u5bc6\u94a5\u6765\u5b9e\u73b0\u3002"})}),"\n",(0,i.jsx)(s.h3,{id:"\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u6709-ssh-\u5bc6\u94a5\u5bf9",children:"\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u6709 SSH \u5bc6\u94a5\u5bf9"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["\u67e5\u770b\u662f\u5426\u5b58\u5728 ",(0,i.jsx)(s.code,{children:"id_rsa"})," \u548c ",(0,i.jsx)(s.code,{children:"id_rsa.pub"})," \u6587\u4ef6\uff0c\u5982\u679c\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u8df3\u81f3\u6b65\u9aa43\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ls -al ~/.ssh\n"})}),"\n",(0,i.jsx)(s.h3,{id:"\u751f\u6210\u65b0\u7684-ssh-\u5bc6\u94a5\u5bf9",children:"\u751f\u6210\u65b0\u7684 SSH \u5bc6\u94a5\u5bf9"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'ssh-keygen -t rsa -C "kxcare"\n'})}),"\n",(0,i.jsx)(s.h3,{id:"\u542f\u52a8ssh\u4ee3\u7406",children:"\u542f\u52a8SSH\u4ee3\u7406"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'eval "$(ssh-agent -s)"\n'})}),"\n",(0,i.jsx)(s.h3,{id:"\u6dfb\u52a0\u5bc6\u94a5\u5230-ssh-\u4ee3\u7406",children:"\u6dfb\u52a0\u5bc6\u94a5\u5230 SSH \u4ee3\u7406"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh-add ~/.ssh/id_rsa\n"})}),"\n",(0,i.jsx)(s.h3,{id:"\u5c06\u516c\u94a5\u6dfb\u52a0\u5230-git-\u6258\u7ba1\u670d\u52a1\u63d0\u4f9b\u5546\u5982-githubgitlab",children:"\u5c06\u516c\u94a5\u6dfb\u52a0\u5230 Git \u6258\u7ba1\u670d\u52a1\u63d0\u4f9b\u5546\uff08\u5982 GitHub\u3001GitLab\uff09"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u6253\u5f00 ",(0,i.jsx)(s.code,{children:"~/.ssh/id_rsa.pub"})," \u6587\u4ef6\uff0c\u590d\u5236\u5176\u4e2d\u7684\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u767b\u5f55\u5230 Git \u6258\u7ba1\u670d\u52a1\u63d0\u4f9b\u5546\u8d26\u6237\uff0c\u8fdb\u5165\u8bbe\u7f6e\u9875\u9762\uff0c\u5e76\u6dfb\u52a0\u65b0\u7684 SSH \u516c\u94a5\u3002\u5c06\u4e4b\u524d\u590d\u5236\u7684\u516c\u94a5\u7c98\u8d34\u5230\u76f8\u5e94\u4f4d\u7f6e\u5e76\u4fdd\u5b58\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["\u73b0\u5728\uff0c\u5728\u4f7f\u7528 Git \u8fdb\u884c\u64cd\u4f5c\u65f6\uff0c\u9009\u62e9\u4f7f\u7528 SSH URL \u800c\u4e0d\u662f HTTPS URL \u6765\u514b\u9686\u6216\u8bbf\u95ee\u8fdc\u7a0b\u4ed3\u5e93\u5373\u53ef\u3002\u8fd9\u6837\u914d\u7f6e\u540e\uff0c\u4f60\u5c06\u80fd\u591f\u4f7f\u7528 SSH \u5bc6\u94a5\u6765\u8fdb\u884c Git \u64cd\u4f5c\uff0c\u800c\u65e0\u9700\u6bcf\u6b21\u8f93\u5165\u5bc6\u7801\u3002\u8bf7\u786e\u4fdd\u59a5\u5584\u4fdd\u5b58\u4f60\u7684\u79c1\u94a5\uff08",(0,i.jsx)(s.code,{children:"~/.ssh/id_rsa"}),"\uff09\uff0c\u5e76\u8bbe\u7f6e\u4e00\u4e2a\u5f3a\u5bc6\u7801\u6765\u4fdd\u62a4\u5b83\u3002"]})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var i=n(6540);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);