"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[42228],{21884:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>f});var s=i(87462),a=(i(67294),i(3905)),n=i(26389),o=i(94891),r=(i(75190),i(47507)),c=i(24310),d=i(63303),l=(i(75035),i(85162));const p={id:"get-contract-definitions",title:"Gets a list of contract definitions",description:"Gets a list of contract definitions",sidebar_label:"Gets a list of contract definitions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Contract Definition"],operationId:"getContractDefinitions",requestBody:{content:{"application/json":{schema:{type:"string"}}}},responses:{200:{description:"Contract definition was retrieved successfully. Returns Contract Definitions",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{createdAt:{type:"string",format:"date-time"},createdBy:{type:"string"},modifiedAt:{type:"string",format:"date-time"},modifiedBy:{type:"string"},isDeleted:{type:"boolean"},id:{type:"string"},name:{type:"string"},assetsSelector:{type:"array",items:{type:"object",additionalProperties:{type:"object"}}},accessPolicyId:{type:"string"},usagePolicyId:{type:"string"},governanceStatus:{type:"string",enum:["draft","governed"]},syncStatus:{type:"string",enum:["syncing","in sync","out of sync","not published"]}}}}}}}}}}}},description:"Gets a list of contract definitions",method:"post",path:"/contractdefinitions/request",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],jsonRequestBodyExample:"string",info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets a list of contract definitions",description:{type:"text/plain"},url:{path:["contractdefinitions","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},m=void 0,u={unversionedId:"kits/Data Governance Kit/resources/MDX Files/get-contract-definitions",id:"version-24.08/kits/Data Governance Kit/resources/MDX Files/get-contract-definitions",title:"Gets a list of contract definitions",description:"Gets a list of contract definitions",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Data Governance Kit/resources/MDX Files/get-contract-definitions.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/get-contract-definitions",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-contract-definitions",draft:!1,editUrl:null,tags:[],version:"24.08",frontMatter:{id:"get-contract-definitions",title:"Gets a list of contract definitions",description:"Gets a list of contract definitions",sidebar_label:"Gets a list of contract definitions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Contract Definition"],operationId:"getContractDefinitions",requestBody:{content:{"application/json":{schema:{type:"string"}}}},responses:{200:{description:"Contract definition was retrieved successfully. Returns Contract Definitions",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{createdAt:{type:"string",format:"date-time"},createdBy:{type:"string"},modifiedAt:{type:"string",format:"date-time"},modifiedBy:{type:"string"},isDeleted:{type:"boolean"},id:{type:"string"},name:{type:"string"},assetsSelector:{type:"array",items:{type:"object",additionalProperties:{type:"object"}}},accessPolicyId:{type:"string"},usagePolicyId:{type:"string"},governanceStatus:{type:"string",enum:["draft","governed"]},syncStatus:{type:"string",enum:["syncing","in sync","out of sync","not published"]}}}}}}}}}}}},description:"Gets a list of contract definitions",method:"post",path:"/contractdefinitions/request",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],jsonRequestBodyExample:"string",info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets a list of contract definitions",description:{type:"text/plain"},url:{path:["contractdefinitions","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Gets contract definitions from a list of IDs",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-contract-definitions-by-ids"},next:{title:"Gets a data address of an asset with the given ID",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-data-address-by-asset-id"}},y={},f=[{value:"Gets a list of contract definitions",id:"gets-a-list-of-contract-definitions",level:2}],g={toc:f};function v(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"gets-a-list-of-contract-definitions"},"Gets a list of contract definitions"),(0,a.kt)("p",null,"Gets a list of contract definitions"),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",null,(0,a.kt)("strong",null,"string"))))))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Contract definition was retrieved successfully. Returns Contract Definitions")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"result"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"items"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"createdBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"modifiedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"modifiedBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"isDeleted",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"assetsSelector",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"accessPolicyId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"usagePolicyId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"governanceStatus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`draft`, `governed`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"syncStatus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`syncing`, `in sync`, `out of sync`, `not published`]",defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(r.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": {\n    "items": [\n      {\n        "createdAt": "2024-02-27",\n        "createdBy": "string",\n        "modifiedAt": "2024-02-27",\n        "modifiedBy": "string",\n        "isDeleted": true,\n        "id": "string",\n        "name": "string",\n        "assetsSelector": [\n          {}\n        ],\n        "accessPolicyId": "string",\n        "usagePolicyId": "string",\n        "governanceStatus": "draft",\n        "syncStatus": "syncing"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);