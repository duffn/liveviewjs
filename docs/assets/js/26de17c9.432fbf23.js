"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[3476],{876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7896),r=(t(2784),t(876));const i={sidebar_position:7},o="User Initiated Event with `handleInfo`",s={unversionedId:"anatomy-of-a-liveview/handle-info-user-initiated",id:"anatomy-of-a-liveview/handle-info-user-initiated",title:"User Initiated Event with `handleInfo`",description:"Search is a common use case where a user initiated event might be handled by handleInfo.",source:"@site/docs/03-anatomy-of-a-liveview/handle-info-user-initiated.md",sourceDirName:"03-anatomy-of-a-liveview",slug:"/anatomy-of-a-liveview/handle-info-user-initiated",permalink:"/liveviewjs/docs/anatomy-of-a-liveview/handle-info-user-initiated",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"LiveView API - `handleInfo`",permalink:"/liveviewjs/docs/anatomy-of-a-liveview/handle-info"},next:{title:"Background Task with `handleInfo`",permalink:"/liveviewjs/docs/anatomy-of-a-liveview/handle-info-background-task"}},l={},c=[{value:"Example Search LiveView",id:"example-search-liveview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"<code>handleInfo</code> Use Cases",id:"handleinfo-use-cases",level:2}],d={toc:c};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"user-initiated-event-with-handleinfo"},"User Initiated Event with ",(0,r.kt)("inlineCode",{parentName:"h1"},"handleInfo")),(0,r.kt)("p",null,"Search is a common use case where a user initiated event might be handled by ",(0,r.kt)("inlineCode",{parentName:"p"},"handleInfo"),".  "),(0,r.kt)("h2",{id:"example-search-liveview"},"Example Search LiveView"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="searchLiveView.ts"',title:'"searchLiveView.ts"'},'import { createLiveView, html } from "liveviewjs";\nimport {searchUsers} from "../services/searchUsers";\n/**\n * A basic search that searches for a user by name.\n */\nexport const searchLiveView = createLiveView<\n  // Define LiveView Context / State\n  { search: string; results: string[], loading: boolean },  \n  // Define LiveView Events\n  { type: "search"; search: string } \n  // Define LiveView Infos\n  { type: "doSearch"; search: string } \n>({\n  // Setup / initialize the LiveView Context (i.e. set search to "" and results to [])\n  mount: (socket) => {\n    socket.assign({ search: "", results: [] });\n  },\n  // Handle incoming search events from User input\n  handleEvent: (event, socket) => {\n    const { search } = socket.context;\n    switch (event.type) {\n      case "search":\n        // set the search data and loading in the context\n        socket.assign({ search: event.search, loading: true });\n        // Send a doSearch info (event) to the `handleInfo` method\n        socket.sendInfo({ type: "doSearch", search: event.search });\n        break;\n    }\n  },\n  // Handle incoming info events from the server\n  handleInfo: (info, socket) => {\n    const { search } = socket.context;\n    switch (info.type) {\n      case "doSearch":\n        // Search for users and update the results in the context\n        const results = await searchUsers(info.search);\n        socket.assign({ results, loading: false });\n        break;\n    }\n  },\n  // Renders the Search View based on the current Context / State\n  render: (context) => {\n    const { search, results } = context;\n    return html`\n      <div>\n        <h1>Search for a user</h1>\n        <input\n          type="text"\n          placeholder="Search for a user"\n          value=${search}\n          phx-change="search"\n        />\n        ${renderResults(results, loading)}              \n      </div>\n    `;\n  },\n});\n\nfunction renderResults(results: string[], loading: boolean) {\n  if (loading) {\n    return html`<div>Loading...</div>`;\n  }\n  if (results.length === 0) {\n    return html`<div>No results</div>`;\n  }\n  return html`\n    <ul>\n      ${results.map((result) => html`<li>${result}</li>`)}\n    </ul>\n  `;\n}\n')),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The LiveView renders a form that allows a user to search for a user by name.  When the user submits the form the ",(0,r.kt)("inlineCode",{parentName:"li"},"handleEvent")," method is called with the ",(0,r.kt)("inlineCode",{parentName:"li"},"search")," event.  "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"handleEvent")," method then updates the ",(0,r.kt)("inlineCode",{parentName:"li"},"context")," with the search text, sets ",(0,r.kt)("inlineCode",{parentName:"li"},"loading")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", and sends an ",(0,r.kt)("inlineCode",{parentName:"li"},"doSearch")," info event to the ",(0,r.kt)("inlineCode",{parentName:"li"},"handleInfo")," method."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"handleInfo")," method then performs the search asynchronously (i.e. ",(0,r.kt)("em",{parentName:"li"},"it doesn't block rendering from the ",(0,r.kt)("inlineCode",{parentName:"em"},"handleEvent")),").  "),(0,r.kt)("li",{parentName:"ul"},"When the search is completed ",(0,r.kt)("inlineCode",{parentName:"li"},"handleInfo")," and updates the results in the context and sets ",(0,r.kt)("inlineCode",{parentName:"li"},"loading")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".  Updating the context causes the ",(0,r.kt)("inlineCode",{parentName:"li"},"render")," method to be called again which renders the search results.")),(0,r.kt)("h2",{id:"handleinfo-use-cases"},(0,r.kt)("inlineCode",{parentName:"h2"},"handleInfo")," Use Cases"),(0,r.kt)("p",null,"There are three main use cases for ",(0,r.kt)("inlineCode",{parentName:"p"},"handleInfo"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Handling a asyncrhonous process initiated from a user event without blocking the UI"),(0,r.kt)("li",{parentName:"ul"},"Handling a asyncrhonous process initiated from a background process"),(0,r.kt)("li",{parentName:"ul"},"Handling a pub/sub message")))}h.isMDXComponent=!0}}]);