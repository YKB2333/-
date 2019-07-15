(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5bd2"],{7025:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("p",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"home"}}),a("span",[t._v("资源管理")])],1),a("div",[[a("Row",[a("Col",{staticClass:"margin-bottom-10",attrs:{span:"15"}},[a("Button",{attrs:{type:"info"},on:{click:function(e){return t.openAddModal(null)}}},[a("Icon",{attrs:{type:"md-add"}}),t._v(" 添加资源\n            ")],1),a("Button",{attrs:{disabled:t.setting.loading,type:"success"},on:{click:t.getData}},[a("Icon",{attrs:{type:"md-refresh"}}),t._v(" 刷新数据\n            ")],1),a("Tooltip",{attrs:{placement:"top"}},[a("i-switch",{attrs:{size:"large"},model:{value:t.props.isFold,callback:function(e){t.$set(t.props,"isFold",e)},expression:"props.isFold"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])]),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v("是否折叠所有的节点")])])],1)],1)],1),a("zk-table",{ref:"table",attrs:{"sum-text":"sum","index-text":"#",data:t.datas,columns:t.columns,stripe:t.props.stripe,border:t.props.border,"show-header":t.props.showHeader,"show-summary":t.props.showSummary,"show-row-hover":t.props.showRowHover,"show-index":t.props.showIndex,"tree-type":t.props.treeType,"is-fold":t.props.isFold,"expand-type":t.props.expandType,"selection-type":t.props.selectionType},scopedSlots:t._u([{key:"type",fn:function(e){return[0==e.row.type?a("span",[a("Icon",{attrs:{type:"grid"}}),t._v(" 菜单")],1):a("span",[a("Icon",{attrs:{type:"android-radio-button-on"}}),t._v(" 按钮")],1)]}},{key:"icon",fn:function(e){return[null!=e.row.icon&&""!=e.row.icon?a("span",[a("Icon",{attrs:{type:e.row.icon}})],1):a("span",[t._v("-")])]}},{key:"color",fn:function(e){return[null!=e.row.color&&""!=e.row.color?a("span",[a("Icon",{attrs:{type:"paintbucket",color:e.row.color}})],1):a("span",[t._v("-")])]}},{key:"verification",fn:function(e){return[1==e.row.verification?a("span",[t._v("\n                              是\n                          ")]):a("span",[t._v("否")])]}},{key:"action",fn:function(e){return[a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.edit(e.row)}}},[t._v("编辑")]),a("Button",{attrs:{type:"success",size:"small"},on:{click:function(a){return t.openAddModal(e.row)}}},[t._v("添加下级")]),a("Button",{attrs:{type:"error",size:"small"},on:{click:function(a){return t.removeModalOpen(e.row.id)}}},[t._v("删除")])]}}])})]],2)]),a("Modal",{attrs:{title:1==t.modal.type?"添加资源":"更新资源","mask-closable":!1},on:{"on-ok":t.modalOk},model:{value:t.modal.show,callback:function(e){t.$set(t.modal,"show",e)},expression:"modal.show"}},[a("Alert",{attrs:{"show-icon":""}},[t._v("为方便操作，添加时[资源链接/权限标识]会自动继承父级的资源属性。")]),a("Form",{attrs:{model:t.modal.data,"label-width":80}},[2==t.modal.type?a("FormItem",{attrs:{label:"ID"}},[a("Input",{attrs:{disabled:"",value:t.modal.data.id}})],1):t._e(),1==t.modal.type&&null!=t.modal.data.parentName?a("FormItem",{attrs:{label:"父级名称"}},[a("Input",{attrs:{disabled:"",value:t.modal.data.parentName}})],1):t._e(),a("FormItem",{attrs:{label:"名称"}},[a("Input",{model:{value:t.modal.data.name,callback:function(e){t.$set(t.modal.data,"name","string"===typeof e?e.trim():e)},expression:"modal.data.name"}})],1),a("FormItem",{attrs:{label:"类型"}},[a("Select",{staticStyle:{width:"100%"},model:{value:t.modal.data.type,callback:function(e){t.$set(t.modal.data,"type","string"===typeof e?e.trim():e)},expression:"modal.data.type"}},t._l([{label:"菜单",value:0},{label:"按钮",value:1}],function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label)+"\n          ")])}),1)],1),a("FormItem",{attrs:{label:"资源链接"}},[a("Input",{model:{value:t.modal.data.url,callback:function(e){t.$set(t.modal.data,"url","string"===typeof e?e.trim():e)},expression:"modal.data.url"}})],1),a("FormItem",{attrs:{label:"权限标识"}},[a("Input",{model:{value:t.modal.data.permission,callback:function(e){t.$set(t.modal.data,"permission","string"===typeof e?e.trim():e)},expression:"modal.data.permission"}})],1),a("FormItem",{attrs:{label:"验证与否"}},[a("Select",{staticStyle:{width:"100%"},model:{value:t.modal.data.verification,callback:function(e){t.$set(t.modal.data,"verification",e)},expression:"modal.data.verification"}},t._l([{label:"是",value:"true"},{label:"否",value:"false"}],function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label)+"\n          ")])}),1)],1),a("FormItem",{attrs:{label:"颜色标示"}},[a("color-picker",{attrs:{recommend:""},model:{value:t.modal.data.color,callback:function(e){t.$set(t.modal.data,"color",e)},expression:"modal.data.color"}})],1),a("FormItem",{attrs:{label:"图标"}},[a("Input",{model:{value:t.modal.data.icon,callback:function(e){t.$set(t.modal.data,"icon","string"===typeof e?e.trim():e)},expression:"modal.data.icon"}})],1),a("FormItem",{attrs:{label:"排序"}},[a("InputNumber",{staticStyle:{width:"100%"},attrs:{min:0,step:1},model:{value:t.modal.data.sort,callback:function(e){t.$set(t.modal.data,"sort","string"===typeof e?e.trim():e)},expression:"modal.data.sort"}})],1)],1)],1),a("Modal",{attrs:{width:"360"},model:{value:t.removeModal,callback:function(e){t.removeModal=e},expression:"removeModal"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"information-circled"}}),a("span",[t._v("提示")])],1),a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("此操作为不可逆操作，是否确认删除？")])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"error",size:"large",long:""},on:{click:t.remove}},[t._v("确认删除")])],1)])],1)},l=[],s=a("d689"),r={data(){return{removeModal:!1,setting:{loading:!0,showBorder:!0},props:{stripe:!0,border:!0,showHeader:!0,showSummary:!1,showRowHover:!0,showIndex:!1,treeType:!0,isFold:!0,expandType:!1,selectionType:!1},datas:[],columns:[{label:"资源名称",prop:"name",width:"400px"},{label:"类型",prop:"type",type:"template",template:"type"},{label:"资源链接",prop:"url"},{label:"权限标识",prop:"permission"},{label:"验证与否",prop:"verification",type:"template",template:"verification",width:"85px"},{label:"颜色",prop:"color",type:"template",template:"color",width:"60px"},{label:"图标",prop:"icon",type:"template",template:"icon",width:"80px"},{label:"排序",prop:"sort",width:"100px"},{label:"操作",type:"template",prop:"action",template:"action"}],modal:{show:!1,type:1,data:{id:0,name:"",type:1,url:"",permission:"",icon:"",sort:0,color:"#19BE6B",verification:"true"}},removeObject:null}},created(){this.getData()},methods:{async getData(){this.setting.loading=!0;try{let e=await Object(s["b"])("/system/resource/list");this.datas=e.data}catch(t){this.$throw(t)}this.setting.loading=!1},async addOK(){this.$Message.loading({content:"资源添加中...",duration:0});try{await Object(s["b"])("/system/resource/add",this.modal.data),this.getData(!1),this.$Message.destroy(),this.$Message.success({content:"资源添加成功",duration:1.5})}catch(t){this.$throw(t)}},async editOk(){this.$Message.loading({content:"资源更新中...",duration:0});try{await Object(s["b"])("/system/resource/update/{id}",this.modal.data,{id:this.modal.data.id}),this.getData(!1),this.$Message.destroy(),this.$Message.success({content:"资源更新成功",duration:1.5})}catch(t){this.$throw(t)}},removeModalOpen(t){this.removeModal=!0,this.removeObject=t},async remove(){this.setting.loading=!0,this.$Message.loading({content:"资源删除中...",duration:0});try{await Object(s["b"])("/system/resource/remove/{id}",null,{id:this.removeObject}),this.getData(!1),this.$Message.destroy(),this.$Message.success({content:"资源删除成功",duration:1.5})}catch(t){this.$throw(t)}this.setting.loading=!1,this.removeModal=!1},modalOk(){1==this.modal.type?this.addOK():this.editOk()},edit(t){this.modal.type=2,this.modal.data={id:t.id,name:t.name,type:t.type,url:t.url,permission:t.permission,icon:t.icon,sort:t.sort,color:""==t.color?"#19BE6B":t.color,verification:null==t.verification?"true":1==t.verification?"true":"false"},this.modal.show=!0},openAddModal(t=null){this.modal.type=1,this.modal.data={id:0,parentId:null==t?null:t.id,name:"",type:0,url:null==t?null:t.url,permission:null==t?null:t.permission,icon:"",sort:0,parentName:null==t?null:t.name,verification:null==t?"true":1==t.verification?"true":"false",color:"#19BE6B"},console.log(this.modal.data),this.modal.show=!0}}},n=r,i=a("2877"),d=Object(i["a"])(n,o,l,!1,null,null,null);e["default"]=d.exports}}]);