"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[54154],{44927:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>p,metadata:()=>h,toc:()=>y});var a=s(87462),n=(s(67294),s(3905)),i=s(26389),o=s(94891),r=s(75190),l=s(47507),c=(s(24310),s(63303)),d=(s(75035),s(85162));const p={id:"delete-asset-by-id",title:"Delete asset by its id",description:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",sidebar_label:"Delete asset by its id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset V2"],description:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",operationId:"deleteAssetById",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}},{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}}],responses:{200:{description:"Asset was deleted successfully",content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request body was malformed, e.g. id was null"},404:{description:"An asset with the given ID does not exist"},409:{description:"The asset cannot be deleted, because it is referenced by a contract agreement"}},method:"delete",path:"/v2/assets/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Delete asset by its id",description:{content:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",type:"text/plain"},url:{path:["v2","assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"connectorUrl",value:""},{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},u=void 0,h={unversionedId:"kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id",id:"version-24.05/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id",title:"Delete asset by its id",description:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id",permalink:"/docs-kits/24.05/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id",draft:!1,editUrl:null,tags:[],version:"24.05",frontMatter:{id:"delete-asset-by-id",title:"Delete asset by its id",description:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",sidebar_label:"Delete asset by its id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset V2"],description:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",operationId:"deleteAssetById",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}},{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}}],responses:{200:{description:"Asset was deleted successfully",content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request body was malformed, e.g. id was null"},404:{description:"An asset with the given ID does not exist"},409:{description:"The asset cannot be deleted, because it is referenced by a contract agreement"}},method:"delete",path:"/v2/assets/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Delete asset by its id",description:{content:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",type:"text/plain"},url:{path:["v2","assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"connectorUrl",value:""},{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Delete asset by its id",permalink:"/docs-kits/24.05/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id-1"},next:{title:"Delete connector by its id",permalink:"/docs-kits/24.05/kits/Data Governance Kit/resources/MDX Files/delete-connector-by-id"}},m={},y=[{value:"Delete asset by its id",id:"delete-asset-by-its-id",level:2}],b={toc:y};function v(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"delete-asset-by-its-id"},"Delete asset by its id"),(0,n.kt)("p",null,"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Asset was deleted successfully")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request body was malformed, e.g. id was null")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"An asset with the given ID does not exist")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The asset cannot be deleted, because it is referenced by a contract agreement")),(0,n.kt)("div",null)))))}v.isMDXComponent=!0}}]);