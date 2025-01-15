"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7537],{2647:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"\u4f7f\u7528\u6280\u5de7/Docker\u57fa\u7840\u547d\u4ee4","title":"Docker\u57fa\u7840\u547d\u4ee4","description":"Docker\u662f\u4e00\u79cd\u6d41\u884c\u7684\u5bb9\u5668\u5316\u5e73\u53f0\uff0c\u53ef\u4ee5\u5728\u4e00\u4e2a\u72ec\u7acb\u7684\u3001\u9694\u79bb\u7684\u73af\u5883\u4e2d\u6784\u5efa\u3001\u90e8\u7f72\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002\u4e86\u89e3Docker\u5e38\u7528\u547d\u4ee4\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u5bb9\u5668\uff0c\u5feb\u901f\u5f00\u53d1\u548c\u90e8\u7f72\u5e94\u7528\u3002\u672c\u6587\u5c06\u6574\u7406\u4e00\u7cfb\u5217Docker\u7684\u5e38\u7528\u547d\u4ee4\uff0c\u4fbf\u4e8e\u65e5\u5e38\u4f7f\u7528\u548c\u5b66\u4e60\u3002","source":"@site/docs/\u4f7f\u7528\u6280\u5de7/Docker\u57fa\u7840\u547d\u4ee4.md","sourceDirName":"\u4f7f\u7528\u6280\u5de7","slug":"/\u4f7f\u7528\u6280\u5de7/Docker\u57fa\u7840\u547d\u4ee4","permalink":"/docs/\u4f7f\u7528\u6280\u5de7/Docker\u57fa\u7840\u547d\u4ee4","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u4f7f\u7528\u6280\u5de7/Docker\u57fa\u7840\u547d\u4ee4.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"VSCode\u5e38\u7528\u5feb\u6377\u952e","permalink":"/docs/\u4f7f\u7528\u6280\u5de7/VSCode\u5e38\u7528\u5feb\u6377\u952e"},"next":{"title":"\u52a0\u5165\u6211\u4eec","permalink":"/docs/\u52a0\u5165\u6211\u4eec"}}');var s=l(4848),d=l(8453);const r={sidebar_position:4},i=void 0,a={},h=[{value:"1 Docker\u57fa\u7840\u547d\u4ee4",id:"1-docker\u57fa\u7840\u547d\u4ee4",level:2},{value:"1.1 \u542f\u52a8/\u505c\u6b62/\u91cd\u542fdocker",id:"11-\u542f\u52a8\u505c\u6b62\u91cd\u542fdocker",level:3},{value:"1.2 \u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8",id:"12-\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8",level:3},{value:"1.3 \u67e5\u770bdocker\u72b6\u6001",id:"13-\u67e5\u770bdocker\u72b6\u6001",level:3},{value:"1.4 \u67e5\u770b\u7248\u672c\u4fe1\u606f",id:"14-\u67e5\u770b\u7248\u672c\u4fe1\u606f",level:3},{value:"1.5 \u663e\u793aDocker\u7cfb\u7edf\u4fe1\u606f",id:"15-\u663e\u793adocker\u7cfb\u7edf\u4fe1\u606f",level:3},{value:"1.6 \u67e5\u770b\u5e2e\u52a9",id:"16-\u67e5\u770b\u5e2e\u52a9",level:3},{value:"2 \u955c\u50cf\u7ba1\u7406\u547d\u4ee4",id:"2-\u955c\u50cf\u7ba1\u7406\u547d\u4ee4",level:2},{value:"2.1 \u641c\u7d22\u955c\u50cf",id:"21-\u641c\u7d22\u955c\u50cf",level:3},{value:"2.2 \u4e0b\u8f7d\u955c\u50cf",id:"22-\u4e0b\u8f7d\u955c\u50cf",level:3},{value:"2.3 \u5217\u51fa\u672c\u5730\u955c\u50cf",id:"23-\u5217\u51fa\u672c\u5730\u955c\u50cf",level:3},{value:"2.4 \u5220\u9664\u955c\u50cf",id:"24-\u5220\u9664\u955c\u50cf",level:3},{value:"2.5 \u6784\u5efa\u955c\u50cf",id:"25-\u6784\u5efa\u955c\u50cf",level:3},{value:"2.6 \u5bfc\u5165\u955c\u50cf",id:"26-\u5bfc\u5165\u955c\u50cf",level:3},{value:"2.7 \u4fdd\u5b58\u955c\u50cf",id:"27-\u4fdd\u5b58\u955c\u50cf",level:3},{value:"2.8 \u7ed9\u955c\u50cf\u6253\u6807\u7b7e",id:"28-\u7ed9\u955c\u50cf\u6253\u6807\u7b7e",level:3},{value:"3 \u5bb9\u5668\u7ba1\u7406\u547d\u4ee4",id:"3-\u5bb9\u5668\u7ba1\u7406\u547d\u4ee4",level:2},{value:"3.1 \u521b\u5efa\u5e76\u8fd0\u884c\u5bb9\u5668",id:"31-\u521b\u5efa\u5e76\u8fd0\u884c\u5bb9\u5668",level:3},{value:"3.2 \u67e5\u770b\u8fd0\u884c\u4e2d\u7684\u5bb9\u5668",id:"32-\u67e5\u770b\u8fd0\u884c\u4e2d\u7684\u5bb9\u5668",level:3},{value:"3.3 \u67e5\u770b\u6240\u6709\u5bb9\u5668\uff08\u5305\u62ec\u505c\u6b62\u7684\uff09",id:"33-\u67e5\u770b\u6240\u6709\u5bb9\u5668\u5305\u62ec\u505c\u6b62\u7684",level:3},{value:"3.4 \u542f\u52a8\u548c\u505c\u6b62\u5bb9\u5668",id:"34-\u542f\u52a8\u548c\u505c\u6b62\u5bb9\u5668",level:3},{value:"3.5 \u91cd\u542f\u5bb9\u5668",id:"35-\u91cd\u542f\u5bb9\u5668",level:3},{value:"3.6 \u5220\u9664\u5bb9\u5668",id:"36-\u5220\u9664\u5bb9\u5668",level:3},{value:"3.7 \u8fdb\u5165\u5bb9\u5668",id:"37-\u8fdb\u5165\u5bb9\u5668",level:3},{value:"3.8 \u67e5\u770b\u5bb9\u5668\u65e5\u5fd7",id:"38-\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7",level:3},{value:"3.9 \u67e5\u770b\u5bb9\u5668\u5185\u90e8\u7ec6\u8282",id:"39-\u67e5\u770b\u5bb9\u5668\u5185\u90e8\u7ec6\u8282",level:3},{value:"4 \u6570\u636e\u5377\u7ba1\u7406\u547d\u4ee4",id:"4-\u6570\u636e\u5377\u7ba1\u7406\u547d\u4ee4",level:2},{value:"4.1 \u521b\u5efa\u6570\u636e\u5377",id:"41-\u521b\u5efa\u6570\u636e\u5377",level:3},{value:"4.2 \u67e5\u770b\u6570\u636e\u5377",id:"42-\u67e5\u770b\u6570\u636e\u5377",level:3},{value:"4.3 \u5220\u9664\u6570\u636e\u5377",id:"43-\u5220\u9664\u6570\u636e\u5377",level:3},{value:"4.4 \u67e5\u770b\u6570\u636e\u5377\u8be6\u60c5",id:"44-\u67e5\u770b\u6570\u636e\u5377\u8be6\u60c5",level:3},{value:"5 \u7f51\u7edc\u7ba1\u7406\u547d\u4ee4",id:"5-\u7f51\u7edc\u7ba1\u7406\u547d\u4ee4",level:2},{value:"5.1 \u521b\u5efa\u7f51\u7edc",id:"51-\u521b\u5efa\u7f51\u7edc",level:3},{value:"5.2 \u67e5\u770b\u7f51\u7edc",id:"52-\u67e5\u770b\u7f51\u7edc",level:3},{value:"5.3 \u67e5\u770b\u7f51\u7edc\u8be6\u60c5",id:"53-\u67e5\u770b\u7f51\u7edc\u8be6\u60c5",level:3},{value:"5.4 \u5220\u9664\u7f51\u7edc",id:"54-\u5220\u9664\u7f51\u7edc",level:3},{value:"5.5 \u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc",id:"55-\u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc",level:3},{value:"5.6 \u5c06\u5bb9\u5668\u4ece\u7f51\u7edc\u65ad\u5f00",id:"56-\u5c06\u5bb9\u5668\u4ece\u7f51\u7edc\u65ad\u5f00",level:3},{value:"6 Docker Compose\u547d\u4ee4",id:"6-docker-compose\u547d\u4ee4",level:2},{value:"6.1 \u542f\u52a8\u670d\u52a1",id:"61-\u542f\u52a8\u670d\u52a1",level:3},{value:"6.2 \u505c\u6b62\u670d\u52a1",id:"62-\u505c\u6b62\u670d\u52a1",level:3},{value:"6.3 \u6784\u5efa\u6216\u91cd\u5efa\u670d\u52a1",id:"63-\u6784\u5efa\u6216\u91cd\u5efa\u670d\u52a1",level:3},{value:"6.4 \u67e5\u770b\u670d\u52a1\u72b6\u6001",id:"64-\u67e5\u770b\u670d\u52a1\u72b6\u6001",level:3},{value:"6.5 \u67e5\u770b\u670d\u52a1\u65e5\u5fd7",id:"65-\u67e5\u770b\u670d\u52a1\u65e5\u5fd7",level:3},{value:"7 \u5e38\u7528\u6e05\u7406\u547d\u4ee4",id:"7-\u5e38\u7528\u6e05\u7406\u547d\u4ee4",level:2},{value:"7.1 \u6e05\u7406\u65e0\u7528\u7684\u6570\u636e",id:"71-\u6e05\u7406\u65e0\u7528\u7684\u6570\u636e",level:3}];function o(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Docker\u662f\u4e00\u79cd\u6d41\u884c\u7684\u5bb9\u5668\u5316\u5e73\u53f0\uff0c\u53ef\u4ee5\u5728\u4e00\u4e2a\u72ec\u7acb\u7684\u3001\u9694\u79bb\u7684\u73af\u5883\u4e2d\u6784\u5efa\u3001\u90e8\u7f72\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002\u4e86\u89e3Docker\u5e38\u7528\u547d\u4ee4\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u5bb9\u5668\uff0c\u5feb\u901f\u5f00\u53d1\u548c\u90e8\u7f72\u5e94\u7528\u3002\u672c\u6587\u5c06\u6574\u7406\u4e00\u7cfb\u5217Docker\u7684\u5e38\u7528\u547d\u4ee4\uff0c\u4fbf\u4e8e\u65e5\u5e38\u4f7f\u7528\u548c\u5b66\u4e60\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"1-docker\u57fa\u7840\u547d\u4ee4",children:"1 Docker\u57fa\u7840\u547d\u4ee4"}),"\n",(0,s.jsx)(n.h3,{id:"11-\u542f\u52a8\u505c\u6b62\u91cd\u542fdocker",children:"1.1 \u542f\u52a8/\u505c\u6b62/\u91cd\u542fdocker"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u542f\u52a8\nsystemctl start docker\n# \u505c\u6b62\nsystemctl stop docker\n# \u91cd\u542f\nsystemctl restart docker\n"})}),"\n",(0,s.jsx)(n.h3,{id:"12-\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8",children:"1.2 \u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u8bbe\u7f6e\nsystemctl enable docker\n# \u53d6\u6d88\u5f00\u673a\u81ea\u542f\u52a8\nsystemctl disable docker\n"})}),"\n",(0,s.jsx)(n.h3,{id:"13-\u67e5\u770bdocker\u72b6\u6001",children:"1.3 \u67e5\u770bdocker\u72b6\u6001"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl status docker\n"})}),"\n",(0,s.jsx)(n.h3,{id:"14-\u67e5\u770b\u7248\u672c\u4fe1\u606f",children:"1.4 \u67e5\u770b\u7248\u672c\u4fe1\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker version\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u663e\u793a\u5f53\u524d\u5b89\u88c5\u7684Docker\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u7248\u672c\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"15-\u663e\u793adocker\u7cfb\u7edf\u4fe1\u606f",children:"1.5 \u663e\u793aDocker\u7cfb\u7edf\u4fe1\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker info\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u5c55\u793a\u5173\u4e8eDocker\u5b89\u88c5\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u8fd0\u884c\u5bb9\u5668\u7684\u6570\u91cf\u3001\u955c\u50cf\u7684\u6570\u91cf\u3001\u5b58\u50a8\u9a71\u52a8\u3001\u7f51\u7edc\u914d\u7f6e\u7b49\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"16-\u67e5\u770b\u5e2e\u52a9",children:"1.6 \u67e5\u770b\u5e2e\u52a9"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker --help\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-\u955c\u50cf\u7ba1\u7406\u547d\u4ee4",children:"2 \u955c\u50cf\u7ba1\u7406\u547d\u4ee4"}),"\n",(0,s.jsx)(n.h3,{id:"21-\u641c\u7d22\u955c\u50cf",children:"2.1 \u641c\u7d22\u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker search [\u955c\u50cf\u540d]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u955c\u50cf\u4ed3\u5e93\u4e0a\u641c\u7d22\u6307\u5b9a\u7684\u540d\u79f0\u7684\u955c\u50cf\uff0c\u9ed8\u8ba4\u662fDocker Hub\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker search nginx\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0d\u8fc7\u4f01\u4e1a\u4e00\u822c\u4f1a\u4f7f\u7528harbor\u642d\u5efa\u81ea\u5df1\u7684\u955c\u50cf\u4ed3\u5e93\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"22-\u4e0b\u8f7d\u955c\u50cf",children:"2.2 \u4e0b\u8f7d\u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull [\u955c\u50cf\u540d]:[\u6807\u7b7e]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u8f7d\u6307\u5b9a\u7684\u955c\u50cf\u5230\u672c\u5730\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u6807\u7b7e\uff0c\u5219\u9ed8\u8ba4\u4e0b\u8f7dlatest\u7248\u672c\u3002\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull nginx:latest\n"})}),"\n",(0,s.jsx)(n.h3,{id:"23-\u5217\u51fa\u672c\u5730\u955c\u50cf",children:"2.3 \u5217\u51fa\u672c\u5730\u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker images\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5217\u51fa\u672c\u5730\u6240\u6709\u955c\u50cf\uff0c\u663e\u793a\u955c\u50cfID\u3001\u4ed3\u5e93\u3001\u6807\u7b7e\u3001\u5927\u5c0f\u7b49\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"24-\u5220\u9664\u955c\u50cf",children:"2.4 \u5220\u9664\u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker rmi [\u955c\u50cfID\u6216\u955c\u50cf\u540d]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u672c\u5730\u7684\u67d0\u4e2a\u955c\u50cf\u3002\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker rmi nginx:latest\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-f"})," \u53c2\u6570\u53ef\u4ee5\u6267\u884c\u5f3a\u5236\u5220\u9664\u955c\u50cf\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker rmi -f mysql\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u5168\u90e8\u955c\u50cf\uff08\u614e\u7528\uff09\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker rmi -f $(docker images -aq)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-a"})," \u610f\u601d\u4e3a\u663e\u793a\u5168\u90e8, ",(0,s.jsx)(n.code,{children:"-q"})," \u610f\u601d\u4e3a\u53ea\u663e\u793aID\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"25-\u6784\u5efa\u955c\u50cf",children:"2.5 \u6784\u5efa\u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker build -t [\u955c\u50cf\u540d]:[\u6807\u7b7e] [Dockerfile\u6240\u5728\u8def\u5f84]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ece\u6307\u5b9a\u8def\u5f84\u7684Dockerfile\u6784\u5efa\u4e00\u4e2a\u65b0\u7684\u955c\u50cf\u3002\u4f8b\u5982\u4ece\u5f53\u524d\u8def\u5f84\u6784\u5efa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker build -t nginx:1.0 .\n"})}),"\n",(0,s.jsx)(n.h3,{id:"26-\u5bfc\u5165\u955c\u50cf",children:"2.6 \u5bfc\u5165\u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker load -i \u955c\u50cf\u4fdd\u5b58\u6587\u4ef6\u4f4d\u7f6e\ndocker load -i /data/nginx.tar\n"})}),"\n",(0,s.jsx)(n.h3,{id:"27-\u4fdd\u5b58\u955c\u50cf",children:"2.7 \u4fdd\u5b58\u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker save -o \u4fdd\u5b58\u7684\u76ee\u6807\u6587\u4ef6\u540d\u79f0 \u955c\u50cf\u540d\ndocker save -o /data/nginx.tar nginx\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4fdd\u5b58\u540e\u7684\u955c\u50cf\u53ef\u4ee5\u4f7f\u7528load\u52a0\u8f7d\u5230\u5176\u4ed6\u670d\u52a1\u5668\u4e0a\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"28-\u7ed9\u955c\u50cf\u6253\u6807\u7b7e",children:"2.8 \u7ed9\u955c\u50cf\u6253\u6807\u7b7e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\ndocker tag nginx 10.10.10.200/software/nginx:1.26\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u65f6\u5019\u6839\u636e\u4e1a\u52a1\u9700\u6c42 \u9700\u8981\u5bf9\u4e00\u4e2a\u955c\u50cf\u8fdb\u884c\u5206\u7c7b\u6216\u7248\u672c\u8fed\u4ee3\u64cd\u4f5c\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u7ed9\u955c\u50cf\u6253\u4e0a\u6807\u7b7e\u300210.10.10.200\u4e3a\u955c\u50cf\u4ed3\u5e93\u5730\u5740\uff0csoftware\u4e3a\u955c\u50cf\u4ed3\u5e93\u540d\u79f0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"3-\u5bb9\u5668\u7ba1\u7406\u547d\u4ee4",children:"3 \u5bb9\u5668\u7ba1\u7406\u547d\u4ee4"}),"\n",(0,s.jsx)(n.h3,{id:"31-\u521b\u5efa\u5e76\u8fd0\u884c\u5bb9\u5668",children:"3.1 \u521b\u5efa\u5e76\u8fd0\u884c\u5bb9\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run [\u9009\u9879] [\u955c\u50cf\u540d]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-d"}),"\uff1a\u540e\u53f0\u8fd0\u884c\u5bb9\u5668"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-p"}),"\uff1a\u7aef\u53e3\u6620\u5c04"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--name"}),"\uff1a\u6307\u5b9a\u5bb9\u5668\u540d\u79f0"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-v"}),"\uff1a\u6302\u8f7d\u5377;\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"-v \u4e3b\u673a\u8def\u5f84:\u5bb9\u5668\u8def\u5f84"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a\u5728\u540e\u53f0\u8fd0\u884c\u4e00\u4e2a\u540d\u4e3amynginx\u7684nginx\u5bb9\u5668\uff0c\u5e76\u6620\u5c04\u7aef\u53e3\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -d -p 8080:80 --name mynginx nginx\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-\u67e5\u770b\u8fd0\u884c\u4e2d\u7684\u5bb9\u5668",children:"3.2 \u67e5\u770b\u8fd0\u884c\u4e2d\u7684\u5bb9\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5217\u51fa\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\uff0c\u663e\u793a\u5bb9\u5668ID\u3001\u955c\u50cf\u3001\u72b6\u6001\u3001\u7aef\u53e3\u6620\u5c04\u7b49\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"33-\u67e5\u770b\u6240\u6709\u5bb9\u5668\u5305\u62ec\u505c\u6b62\u7684",children:"3.3 \u67e5\u770b\u6240\u6709\u5bb9\u5668\uff08\u5305\u62ec\u505c\u6b62\u7684\uff09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker ps -a\n"})}),"\n",(0,s.jsx)(n.h3,{id:"34-\u542f\u52a8\u548c\u505c\u6b62\u5bb9\u5668",children:"3.4 \u542f\u52a8\u548c\u505c\u6b62\u5bb9\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u542f\u52a8\u5bb9\u5668\ndocker start [\u5bb9\u5668ID\u6216\u5bb9\u5668\u540d]\n\n# \u505c\u6b62\u5bb9\u5668\ndocker stop [\u5bb9\u5668ID\u6216\u5bb9\u5668\u540d]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"35-\u91cd\u542f\u5bb9\u5668",children:"3.5 \u91cd\u542f\u5bb9\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker restart [\u5bb9\u5668ID\u6216\u5bb9\u5668\u540d]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"36-\u5220\u9664\u5bb9\u5668",children:"3.6 \u5220\u9664\u5bb9\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker rm [\u5bb9\u5668ID\u6216\u5bb9\u5668\u540d]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5220\u9664\u6307\u5b9a\u7684\u5bb9\u5668\u3002\u5982\u679c\u5bb9\u5668\u6b63\u5728\u8fd0\u884c\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:"-f"}),"\u5f3a\u5236\u5220\u9664\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"37-\u8fdb\u5165\u5bb9\u5668",children:"3.7 \u8fdb\u5165\u5bb9\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker exec -it [\u5bb9\u5668ID\u6216\u5bb9\u5668\u540d] /bin/bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5bb9\u5668\u5185\u542f\u52a8\u4e00\u4e2a\u4ea4\u4e92\u5f0f\u7684Shell\u3002\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker exec -it mynginx /bin/bash\n"})}),"\n",(0,s.jsx)(n.h3,{id:"38-\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7",children:"3.8 \u67e5\u770b\u5bb9\u5668\u65e5\u5fd7"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker logs [\u5bb9\u5668ID\u6216\u5bb9\u5668\u540d]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770b\u5bb9\u5668\u7684\u8f93\u51fa\u65e5\u5fd7\u3002\u5e38\u7528\u9009\u9879\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-f"}),"\uff1a\u5b9e\u65f6\u8f93\u51fa\u65e5\u5fd7\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--tail n"}),"\uff1a\u663e\u793a\u6700\u540en\u884c\u65e5\u5fd7\u3002\u4f8b\u5982\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker logs -f --tail 20 mynginx\n"})}),"\n",(0,s.jsx)(n.h3,{id:"39-\u67e5\u770b\u5bb9\u5668\u5185\u90e8\u7ec6\u8282",children:"3.9 \u67e5\u770b\u5bb9\u5668\u5185\u90e8\u7ec6\u8282"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker inspect [\u5bb9\u5668ID\u6216\u5bb9\u5668\u540d]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"4-\u6570\u636e\u5377\u7ba1\u7406\u547d\u4ee4",children:"4 \u6570\u636e\u5377\u7ba1\u7406\u547d\u4ee4"}),"\n",(0,s.jsx)(n.p,{children:"\u6570\u636e\u5377\uff08Volume\uff09\u662fDocker\u4e2d\u6301\u4e45\u5316\u6570\u636e\u7684\u5173\u952e\uff0c\u901a\u8fc7\u6570\u636e\u5377\u53ef\u4ee5\u5c06\u5bb9\u5668\u5185\u7684\u6570\u636e\u6301\u4e45\u5316\u5230\u5bbf\u4e3b\u673a\u4e2d\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"41-\u521b\u5efa\u6570\u636e\u5377",children:"4.1 \u521b\u5efa\u6570\u636e\u5377"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker volume create [\u5377\u540d]\ndocker volume create data\n"})}),"\n",(0,s.jsx)(n.h3,{id:"42-\u67e5\u770b\u6570\u636e\u5377",children:"4.2 \u67e5\u770b\u6570\u636e\u5377"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker volume ls\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5217\u51fa\u6240\u6709\u6570\u636e\u5377\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"43-\u5220\u9664\u6570\u636e\u5377",children:"4.3 \u5220\u9664\u6570\u636e\u5377"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker volume rm [\u5377\u540d]\ndocker volume rm data\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u6307\u5b9a\u7684\u6570\u636e\u5377\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"44-\u67e5\u770b\u6570\u636e\u5377\u8be6\u60c5",children:"4.4 \u67e5\u770b\u6570\u636e\u5377\u8be6\u60c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker volume inspect [\u5377\u540d]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u663e\u793a\u6570\u636e\u5377\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u6302\u8f7d\u8def\u5f84\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"5-\u7f51\u7edc\u7ba1\u7406\u547d\u4ee4",children:"5 \u7f51\u7edc\u7ba1\u7406\u547d\u4ee4"}),"\n",(0,s.jsx)(n.p,{children:"Docker\u652f\u6301\u521b\u5efa\u81ea\u5b9a\u4e49\u7f51\u7edc\uff0c\u4ee5\u4fbf\u5bb9\u5668\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u7f51\u7edc\u76f8\u4e92\u901a\u4fe1\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"51-\u521b\u5efa\u7f51\u7edc",children:"5.1 \u521b\u5efa\u7f51\u7edc"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker network create [\u7f51\u7edc\u540d]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7f51\u7edc\uff0c\u901a\u5e38\u662fbridge\u7c7b\u578b\u7684\u7f51\u7edc\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"52-\u67e5\u770b\u7f51\u7edc",children:"5.2 \u67e5\u770b\u7f51\u7edc"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker network ls\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5217\u51fa\u6240\u6709\u7f51\u7edc\uff0c\u5305\u62ec\u9ed8\u8ba4\u7f51\u7edc\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"53-\u67e5\u770b\u7f51\u7edc\u8be6\u60c5",children:"5.3 \u67e5\u770b\u7f51\u7edc\u8be6\u60c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker network inspect [\u7f51\u7edc\u540d]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u663e\u793a\u6307\u5b9a\u7f51\u7edc\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u8fde\u63a5\u5230\u8be5\u7f51\u7edc\u7684\u5bb9\u5668\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"54-\u5220\u9664\u7f51\u7edc",children:"5.4 \u5220\u9664\u7f51\u7edc"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker network rm [\u7f51\u7edc\u540d]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u6307\u5b9a\u7684\u81ea\u5b9a\u4e49\u7f51\u7edc\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"55-\u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc",children:"5.5 \u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker network connect [\u7f51\u7edc\u540d] [\u5bb9\u5668\u540d\u6216\u5bb9\u5668ID]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"56-\u5c06\u5bb9\u5668\u4ece\u7f51\u7edc\u65ad\u5f00",children:"5.6 \u5c06\u5bb9\u5668\u4ece\u7f51\u7edc\u65ad\u5f00"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker network disconnect [\u7f51\u7edc\u540d] [\u5bb9\u5668\u540d\u6216\u5bb9\u5668ID]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"6-docker-compose\u547d\u4ee4",children:"6 Docker Compose\u547d\u4ee4"}),"\n",(0,s.jsx)(n.p,{children:"Docker Compose\u662f\u4e00\u79cd\u5b9a\u4e49\u548c\u8fd0\u884c\u591a\u5bb9\u5668Docker\u5e94\u7528\u7684\u5de5\u5177\uff0c\u901a\u8fc7\u4e00\u4e2adocker-compose.yml\u6587\u4ef6\u5b9a\u4e49\u5e94\u7528\u7684\u670d\u52a1\u548c\u914d\u7f6e\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"61-\u542f\u52a8\u670d\u52a1",children:"6.1 \u542f\u52a8\u670d\u52a1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose up\n\n# \u540e\u53f0\u8fd0\u884c\ndocker-compose up -d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636edocker-compose.yml\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u542f\u52a8\u6240\u6709\u670d\u52a1\uff0c\u5e38\u7528\u9009\u9879\uff1a",(0,s.jsx)(n.code,{children:"-d"}),"\uff1a\u540e\u53f0\u8fd0\u884c\u6240\u6709\u670d\u52a1\u3002",(0,s.jsx)(n.code,{children:"--build"}),"\uff1a\u5728\u542f\u52a8\u4e4b\u524d\u91cd\u65b0\u6784\u5efa\u955c\u50cf\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"62-\u505c\u6b62\u670d\u52a1",children:"6.2 \u505c\u6b62\u670d\u52a1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose down\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u505c\u6b62\u5e76\u5220\u9664\u6240\u6709\u5bb9\u5668\u3001\u7f51\u7edc\u548c\u5377\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"63-\u6784\u5efa\u6216\u91cd\u5efa\u670d\u52a1",children:"6.3 \u6784\u5efa\u6216\u91cd\u5efa\u670d\u52a1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose build\n"})}),"\n",(0,s.jsx)(n.h3,{id:"64-\u67e5\u770b\u670d\u52a1\u72b6\u6001",children:"6.4 \u67e5\u770b\u670d\u52a1\u72b6\u6001"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose ps\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5217\u51fa\u7531docker-compose\u7ba1\u7406\u7684\u6240\u6709\u670d\u52a1\u53ca\u5176\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"65-\u67e5\u770b\u670d\u52a1\u65e5\u5fd7",children:"6.5 \u67e5\u770b\u670d\u52a1\u65e5\u5fd7"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose logs [\u670d\u52a1\u540d]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770b\u6307\u5b9a\u670d\u52a1\u7684\u65e5\u5fd7\uff0c\u5e38\u7528\u9009\u9879\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-f"}),"\uff1a\u5b9e\u65f6\u8f93\u51fa\u65e5\u5fd7\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--tail n"}),"\uff1a\u663e\u793a\u6700\u540en\u884c\u65e5\u5fd7\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"7-\u5e38\u7528\u6e05\u7406\u547d\u4ee4",children:"7 \u5e38\u7528\u6e05\u7406\u547d\u4ee4"}),"\n",(0,s.jsx)(n.h3,{id:"71-\u6e05\u7406\u65e0\u7528\u7684\u6570\u636e",children:"7.1 \u6e05\u7406\u65e0\u7528\u7684\u6570\u636e"}),"\n",(0,s.jsx)(n.p,{children:"Docker\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7b80\u5355\u7684\u6e05\u7406\u547d\u4ee4\uff0c\u7528\u4e8e\u5220\u9664\u4e0d\u518d\u4f7f\u7528\u7684\u5bb9\u5668\u3001\u955c\u50cf\u3001\u5377\u548c\u7f51\u7edc\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\uff081\uff09\u5220\u9664\u6240\u6709\u5df2\u505c\u6b62\u7684\u5bb9\u5668\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker container prune\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uff082\uff09\u5220\u9664\u672a\u4f7f\u7528\u7684\u955c\u50cf\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker image prune\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uff083\uff09\u5220\u9664\u6240\u6709\u672a\u4f7f\u7528\u7684\u6570\u636e\u5377\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker volume prune\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uff084\uff09\u5220\u9664\u6240\u6709\u672a\u4f7f\u7528\u7684\u7f51\u7edc\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker network prune\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uff085\uff09\u6e05\u7406\u6240\u6709\u672a\u4f7f\u7528\u7684\u8d44\u6e90\uff08\u5305\u62ec\u955c\u50cf\u3001\u5bb9\u5668\u3001\u5377\u548c\u7f51\u7edc\uff09\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker system prune\n"})})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>i});var c=l(6540);const s={},d=c.createContext(s);function r(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);