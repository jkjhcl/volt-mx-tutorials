_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"9fNV":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics",function(){return a("NFYf")}])},CwOF:function(e,t,a){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",loaderWrapper:"_3d0GU",inline:"_2YCUz",content:"_2emF1",center:"_2ny11",assetListLoader:"_334HO"}},NFYf:function(e,t,a){"use strict";a.r(t);var n=a("nKUr"),s=a("o0o1"),o=a.n(s),c=a("HaE+"),r=a("1OyB"),i=a("vuIU"),l=a("JX7q"),p=a("Ji7U"),j=a("md7G"),d=a("foSv"),u=a("rePB"),b=a("q1tI"),m=a("/MKj"),f=a("ANjH"),O=a("9xET"),g=a.n(O),h=a("ZPTe"),x=a.n(h),y=a("wd/R"),v=a.n(y),S=a("TlR6"),N=a("9At1"),w=a("K4dc"),D=a("Zb9X"),I=a("WrOz"),C=a("fS1W"),P=a("PGnZ"),k=a.n(P),A=a("32PK"),E=a("XKlS"),F=a("7iAt"),_=a.n(F),U=function(e){switch(e){case"download":return Object(n.jsx)("img",{src:"/static/dist/images/icons/download.png",alt:"Analytics icon",className:_.a.analyticsIcon});case"import":return Object(n.jsx)("img",{src:"/static/dist/images/icons/import.png",alt:"Analytics icon",className:_.a.analyticsIcon});case"component":return Object(n.jsx)("img",{src:"/static/dist/images/icons/component.png",alt:"Analytics icon",className:_.a.analyticsIcon});default:return Object(n.jsx)("img",{src:"/static/dist/images/icons/import.png",alt:"Analytics icon",className:_.a.analyticsIcon})}},B=function(e){var t=e.title,a=e.count,s=e.icon,o=e.className;return Object(n.jsxs)(g.a,{className:"".concat(_.a.base," ").concat(o),children:[Object(n.jsxs)(x.a,{className:_.a.titleIcon,children:[Object(n.jsx)(x.a,{span:22,children:Object(n.jsx)("h2",{children:t})}),Object(n.jsx)(x.a,{span:2,children:U(s)})]}),Object(n.jsx)(x.a,{span:24,children:Object(n.jsx)("h3",{children:a})})]})};B.defaultProps={title:"",count:0,icon:""};var R=B,M=a("Zch0"),T=a.n(M),H=a("7Qib"),L=function(e){var t=e.data,a=e.title,s=e.className;return Object(n.jsxs)(g.a,{className:"".concat(T.a.base," ").concat(s),children:[Object(n.jsx)(x.a,{className:T.a.title,children:Object(n.jsx)("h2",{children:"TOP 5"})}),Object(n.jsx)(x.a,{children:Object(n.jsx)("h2",{children:a})}),Object(n.jsx)(x.a,{span:24,className:T.a.wrapper,children:t&&t.length>0?t.map((function(e){return Object(n.jsxs)(g.a,{className:T.a.itemWrapper,children:[Object(n.jsx)(x.a,{span:16,children:Object(H.f)(e.title,30)}),Object(n.jsxs)(x.a,{span:4,children:[Object(n.jsx)("img",{src:"/static/dist/images/icons/like.svg",alt:"icon",className:T.a.statsIcon}),e.likes]}),Object(n.jsxs)(x.a,{span:4,children:[Object(n.jsx)("img",{src:"/static/dist/images/icons/downloadBlue.png",alt:"icon",className:T.a.statsIcon}),e.downloads]})]})})):"No Data found for current Selected Dates"})]})};L.defaultProps={title:"",data:[]};var V=L;function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(d.a)(e);if(t){var s=Object(d.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(j.a)(this,a)}}var W=function(e){Object(p.a)(a,e);var t=K(a);function a(e){var s;Object(r.a)(this,a),s=t.call(this,e),Object(u.a)(Object(l.a)(s),"getData",function(){var e=Object(c.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s.setState({loading:!0}),e.next=4,w.c.get("api/v1_0/marketplace/get_analytics_data_dashboard",{params:{from_date:t[0],to_date:t[1]}});case 4:a=e.sent,s.setState({loading:!1,data:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s.setState({loading:!1,data:[]});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),Object(u.a)(Object(l.a)(s),"renderContent",(function(e){var t=s.state,a=t.loading,o=t.dates,c=t.momentDates,r=t.data;return e?a?Object(n.jsx)(C.a,{}):Object(n.jsxs)(b.Fragment,{children:[Object(n.jsxs)(g.a,{className:k.a.panelContainer,children:[Object(n.jsxs)(x.a,{span:12,className:k.a.datePanel,children:[Object(n.jsx)(E.a,{title:"Component Performance",type:"action",color:"blue",href:"/analytics/component",target:"_blank",className:k.a.componentPerformanceButton}),Object(n.jsx)(E.a,{title:"Search Analytics",type:"action",color:"blue",href:"/analytics/search",target:"_blank"})]}),Object(n.jsx)(x.a,{span:12,className:k.a.datePanel,children:Object(n.jsx)(I.a,{setDate:s.setDate,defaultDateValuesInMoment:c,defaultDateValues:o})})]}),Object(n.jsxs)(g.a,{children:[Object(n.jsxs)(g.a,{className:k.a.miniPanelContainer,children:[Object(n.jsx)(x.a,{span:8,children:Object(n.jsx)(R,{title:"Total Number Of Components",count:r.totalAssets,icon:"component",className:"totalComponentCount"})}),Object(n.jsx)(x.a,{span:8,children:Object(n.jsx)(R,{title:"Total Number Of Downloads",count:r.totalDownloads,icon:"download",className:"totalDownloadsCount"})}),Object(n.jsx)(x.a,{span:8,children:Object(n.jsx)(R,{title:"Total Number Of Imports to Viz Forms",count:r.totalVizImports,icon:"import",className:"totalVizFormsImportsCount"})})]}),Object(n.jsxs)(g.a,{children:[Object(n.jsx)(x.a,{span:12,children:Object(n.jsx)(V,{title:"Most Downloaded Components",data:r.topFiveDownloads,className:"topFiveDownloadsCount"})}),Object(n.jsx)(x.a,{span:12,children:Object(n.jsx)(V,{title:"Most Deployed Components",data:r.topFiveDeployments,className:"topFiveDeployedCount"})})]})]})]}):Object(n.jsx)(A.a,{})}));var i=a.getFormattedDate(new Date),p=a.getFormattedDate(new Date((new Date).getTime()-6048e5));return s.state={data:[],loading:!1,dates:[p,i],momentDates:[v()(p),v()(i)]},s.setDate=s.setDate.bind(Object(l.a)(s)),s.getData=s.getData.bind(Object(l.a)(s)),s}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.dates;this.getData(e)}},{key:"setDate",value:function(e,t){this.setState({dates:e,momentDates:t}),this.getData(e)}},{key:"render",value:function(){var e=this.props,t=e.marketplace,a=e.url,s=t.config,o=t.moderatorMenu;return Object(n.jsxs)(D.a,{config:s,url:a,children:[Object(n.jsx)(S.a,{placeholder:"Search for Marketplace Assets"}),Object(n.jsx)("div",{children:this.renderContent(o&&o.subMenu&&o.subMenu.length>0)})]})}}],[{key:"getFormattedDate",value:function(e){var t=e,a=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),s=t.getFullYear();return"".concat(s,"-").concat(n,"-").concat(a)}},{key:"getInitialProps",value:function(){var e=Object(c.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)(t);case 2:return e.next=4,t.store.dispatch(N.b.getConfig(!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),a}(b.Component);t.default=Object(m.b)((function(e){return{marketplace:e.marketplace}}),(function(e){return Object(f.bindActionCreators)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},N.b),e)}))(W)},fS1W:function(e,t,a){"use strict";var n=a("nKUr"),s=(a("q1tI"),a("CwOF")),o=a.n(s),c=function(e){var t=e.inline,a=e.size,s=e.height,c=e.width,r=e.className,i=e.style;return Object(n.jsx)("div",{style:i,className:"".concat(o.a.loaderWrapper," ").concat(t?o.a.inline:null," ").concat(r),children:Object(n.jsx)("div",{className:o.a.content,children:Object(n.jsx)("div",{className:o.a.center,children:Object(n.jsx)("img",{src:"/static/dist/images/loader.svg",alt:"Loader",height:s||a,width:c||a})})})})};c.defaultProps={inline:!1},t.a=c}},[["9fNV",1,2,3,6,9,12,0,4,5,7,10,11,13,17,18,8]]]);