"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[63676],{71231:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>N,toc:()=>q});var n=a(74848),i=a(28453),r=a(91366),l=a.n(r),t=(a(6050),a(57742)),c=a.n(t),d=(a(67792),a(27362)),m=a.n(d),p=(a(36683),a(81124)),o=a.n(p),h=a(60674),x=a.n(h),g=a(23397),j=a.n(g),y=(a(26651),a(51107)),u=(a(77675),a(19365));const f={id:"fetch-campaign-list",title:"Fetch Campaign List",description:"This API returns list of all campaign's pending to be certified.",sidebar_label:"Fetch Campaign List",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"apis/rest/5.0/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},v=void 0,N={id:"apis/rest/5.0/fetch-campaign-list",title:"Fetch Campaign List",description:"This API returns list of all campaign's pending to be certified.",source:"@site/docs/apis/rest/5.0/fetch-campaign-list.api.mdx",sourceDirName:"apis/rest/5.0",slug:"/apis/rest/5.0/fetch-campaign-list",permalink:"/developer-portal/apis/rest/5.0/fetch-campaign-list",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"fetch-campaign-list",title:"Fetch Campaign List",description:"This API returns list of all campaign's pending to be certified.",sidebar_label:"Fetch Campaign List",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"apis/rest/5.0/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"api_5_0",previous:{title:"Campaigns",permalink:"/developer-portal/category/apis/rest/5.0/5-0/campaigns"},next:{title:"Fetch Campaign Details",permalink:"/developer-portal/apis/rest/5.0/fetch-campaign-details"}},b={},q=[];function k(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Fetch Campaign List"}),"\n",(0,n.jsx)(c(),{method:"post",path:"/fetchCampaignList"}),"\n",(0,n.jsx)(s.p,{children:"This API returns list of all campaign's pending to be certified."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"Authorization"})," must have ",(0,n.jsx)(s.code,{children:"Bearer"})," followed by ",(0,n.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Mandatory params:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"certifierUsername"})}),"\n",(0,n.jsx)(s.p,{children:"Optional params:"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"max"}),", ",(0,n.jsx)(s.code,{children:"offset"})]}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(m(),{className:"openapi-tabs__mime",children:(0,n.jsx)(u.default,{label:"application/json",value:"application/json-schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,n.jsx)(s.p,{children:"Body"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!1,name:"certifierUsername",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"admin"}}),(0,n.jsx)(x(),{collapsible:!1,name:"max",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"5"}}),(0,n.jsx)(x(),{collapsible:!1,name:"offset",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}})]})]})})}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)(l(),{label:void 0,id:void 0,children:(0,n.jsxs)(u.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Fetch Campaign List"})}),(0,n.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Response Headers"})})}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Access-Control-Allow-Credentials"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Access-Control-Allow-Origin"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Cache-Control"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Date"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Expires"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Pragma"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Referrer-Policy"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Server"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Set-Cookie"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Strict-Transport-Security"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"X-Content-Type-Options"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"X-Frame-Options"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"X-XSS-Protection"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]})]})]}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(u.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(u.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"campaigns"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(x(),{collapsible:!1,name:"action",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""}}),(0,n.jsx)(x(),{collapsible:!1,name:"campaignName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"attachment"}}),(0,n.jsx)(x(),{collapsible:!1,name:"campaignOwner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"dbailey (Damien Bailey)"}}),(0,n.jsx)(x(),{collapsible:!1,name:"endDate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"2017-08-06 00:00:00"}}),(0,n.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:84}}),(0,n.jsx)(x(),{collapsible:!1,name:"progress",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0%"}}),(0,n.jsx)(x(),{collapsible:!1,name:"reassigned",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"N/A"}}),(0,n.jsx)(x(),{collapsible:!1,name:"startDate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"2017-07-14 00:00:00"}}),(0,n.jsx)(x(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"In Progress"}}),(0,n.jsx)(x(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"User Manager"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(x(),{collapsible:!1,name:"count",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:42}}),(0,n.jsx)(x(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,n.jsx)(x(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"successful"}})]})]})}),(0,n.jsx)(u.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(o(),{responseExample:'{\n  "campaigns": [\n    {\n      "action": "",\n      "campaignName": "attachment",\n      "campaignOwner": "dbailey (Damien Bailey)",\n      "endDate": "2017-08-06 00:00:00",\n      "id": 84,\n      "progress": "0%",\n      "reassigned": "N/A",\n      "startDate": "2017-07-14 00:00:00",\n      "status": "In Progress",\n      "type": "User Manager"\n    },\n    {\n      "action": "",\n      "campaignName": "default",\n      "campaignOwner": "acook (Amaya Cook)",\n      "endDate": "2017-08-04 17:00:00",\n      "id": 94,\n      "progress": "0%",\n      "reassigned": "N/A",\n      "startDate": "2017-07-18 17:00:00",\n      "status": "In Progress",\n      "type": "User Manager"\n    },\n    {\n      "action": "",\n      "campaignName": "dates1",\n      "campaignOwner": "crichards (Cody Richards)",\n      "endDate": "2017-08-06 00:00:00",\n      "id": 106,\n      "progress": "0%",\n      "reassigned": "N/A",\n      "startDate": "2017-07-21 00:00:00",\n      "status": "In Progress",\n      "type": "User Manager"\n    },\n    {\n      "action": "",\n      "campaignName": "notification",\n      "campaignOwner": "smarquez (Shania Marquez)",\n      "endDate": "2017-09-02 07:00:00",\n      "id": 117,\n      "progress": "41%",\n      "reassigned": "N/A",\n      "startDate": "2017-08-01 07:00:00",\n      "status": "In Progress",\n      "type": "User Manager"\n    },\n    {\n      "action": "",\n      "campaignName": "notification2",\n      "campaignOwner": "lkrause (Lindsay Krause)",\n      "endDate": "2017-09-02 07:00:00",\n      "id": 118,\n      "progress": "53%",\n      "reassigned": "N/A",\n      "startDate": "2017-08-01 07:00:00",\n      "status": "In Progress",\n      "type": "User Manager"\n    }\n  ],\n  "count": 42,\n  "errorCode": "0",\n  "msg": "successful"\n}',language:"json"})}),(0,n.jsx)(u.default,{label:"Fetch Campaign List",value:"Fetch Campaign List",children:(0,n.jsx)(o(),{responseExample:'{\n  "campaigns": [\n    {\n      "action": "",\n      "campaignName": "attachment",\n      "campaignOwner": "dbailey (Damien Bailey)",\n      "endDate": "2017-08-06 00:00:00",\n      "id": 84,\n      "progress": "0%",\n      "reassigned": "N/A",\n      "startDate": "2017-07-14 00:00:00",\n      "status": "In Progress",\n      "type": "User Manager"\n    },\n    {\n      "action": "",\n      "campaignName": "default",\n      "campaignOwner": "acook (Amaya Cook)",\n      "endDate": "2017-08-04 17:00:00",\n      "id": 94,\n      "progress": "0%",\n      "reassigned": "N/A",\n      "startDate": "2017-07-18 17:00:00",\n      "status": "In Progress",\n      "type": "User Manager"\n    },\n    {\n      "action": "",\n      "campaignName": "dates1",\n      "campaignOwner": "crichards (Cody Richards)",\n      "endDate": "2017-08-06 00:00:00",\n      "id": 106,\n      "progress": "0%",\n      "reassigned": "N/A",\n      "startDate": "2017-07-21 00:00:00",\n      "status": "In Progress",\n      "type": "User Manager"\n    },\n    {\n      "action": "",\n      "campaignName": "notification",\n      "campaignOwner": "smarquez (Shania Marquez)",\n      "endDate": "2017-09-02 07:00:00",\n      "id": 117,\n      "progress": "41%",\n      "reassigned": "N/A",\n      "startDate": "2017-08-01 07:00:00",\n      "status": "In Progress",\n      "type": "User Manager"\n    },\n    {\n      "action": "",\n      "campaignName": "notification2",\n      "campaignOwner": "lkrause (Lindsay Krause)",\n      "endDate": "2017-09-02 07:00:00",\n      "id": 118,\n      "progress": "53%",\n      "reassigned": "N/A",\n      "startDate": "2017-08-01 07:00:00",\n      "status": "In Progress",\n      "type": "User Manager"\n    }\n  ],\n  "count": 42,\n  "errorCode": "0",\n  "msg": "successful"\n}',language:"json"})})]})})})})]})})})})]})}function O(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(k,{...e})}):k(e)}}}]);