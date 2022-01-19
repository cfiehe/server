/*! For license information please see settings-vue-settings-admin-security.js.LICENSE.txt */
!function(){"use strict";var e,n={24470:function(e,n,o){var s=o(16453),r=o(20144),i=o(4820),a=o(7811),c=o.n(a),u=o(96486),l=o.n(u),d=o(79753),f={name:"AdminTwoFactor",components:{Multiselect:c()},data:function(){return{loading:!1,dirty:!1,groups:[],loadingGroups:!1}},computed:{enforced:{get:function(){return this.$store.state.enforced},set:function(t){this.dirty=!0,this.$store.commit("setEnforced",t)}},enforcedGroups:{get:function(){return this.$store.state.enforcedGroups},set:function(t){this.dirty=!0,this.$store.commit("setEnforcedGroups",t)}},excludedGroups:{get:function(){return this.$store.state.excludedGroups},set:function(t){this.dirty=!0,this.$store.commit("setExcludedGroups",t)}}},mounted:function(){this.groups=l().sortedUniq(l().uniq(this.enforcedGroups.concat(this.excludedGroups))),this.searchGroup("")},methods:{searchGroup:l().debounce((function(t){var e=this;this.loadingGroups=!0,i.default.get((0,d.generateOcsUrl)("cloud/groups?offset=0&search={query}&limit=20",{query:t})).then((function(t){return t.data.ocs})).then((function(t){return t.data.groups})).then((function(t){e.groups=l().sortedUniq(l().uniq(e.groups.concat(t)))})).catch((function(t){return console.error("could not search groups",t)})).then((function(){e.loadingGroups=!1}))}),500),saveChanges:function(){var t=this;this.loading=!0;var e={enforced:this.enforced,enforcedGroups:this.enforcedGroups,excludedGroups:this.excludedGroups};i.default.put((0,d.generateUrl)("/settings/api/admin/twofactorauth"),e).then((function(t){return t.data})).then((function(e){t.state=e,t.dirty=!1})).catch((function(t){console.error("could not save changes",t)})).then((function(){t.loading=!1}))}}},p=o(93379),h=o.n(p),g=o(7795),m=o.n(g),v=o(90569),b=o.n(v),w=o(3565),y=o.n(w),x=o(19216),G=o.n(x),A=o(44589),_=o.n(A),C=o(37331),E={};E.styleTagTransform=_(),E.setAttributes=y(),E.insert=b().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=G(),h()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals;var k=(0,o(51900).Z)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"settings-hint"},[t._v("\n\t\t"+t._s(t.t("settings","Two-factor authentication can be enforced for all users and specific groups. If they do not have a two-factor provider configured, they will be unable to log into the system."))+"\n\t")]),t._v(" "),t.loading?n("p",[n("span",{staticClass:"icon-loading-small two-factor-loading"}),t._v(" "),n("span",[t._v(t._s(t.t("settings","Enforce two-factor authentication")))])]):n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.enforced,expression:"enforced"}],staticClass:"checkbox",attrs:{id:"two-factor-enforced",type:"checkbox"},domProps:{checked:Array.isArray(t.enforced)?t._i(t.enforced,null)>-1:t.enforced},on:{change:function(e){var n=t.enforced,o=e.target,s=!!o.checked;if(Array.isArray(n)){var r=t._i(n,null);o.checked?r<0&&(t.enforced=n.concat([null])):r>-1&&(t.enforced=n.slice(0,r).concat(n.slice(r+1)))}else t.enforced=s}}}),t._v(" "),n("label",{attrs:{for:"two-factor-enforced"}},[t._v(t._s(t.t("settings","Enforce two-factor authentication")))])]),t._v(" "),t.enforced?[n("h3",[t._v(t._s(t.t("settings","Limit to groups")))]),t._v("\n\t\t"+t._s(t.t("settings","Enforcement of two-factor authentication can be set for certain groups only."))+"\n\t\t"),n("p",[t._v("\n\t\t\t"+t._s(t.t("settings","Two-factor authentication is enforced for all members of the following groups."))+"\n\t\t")]),t._v(" "),n("p",[n("Multiselect",{attrs:{options:t.groups,placeholder:t.t("settings","Enforced groups"),disabled:t.loading,multiple:!0,searchable:!0,loading:t.loadingGroups,"show-no-options":!1,"close-on-select":!1},on:{"search-change":t.searchGroup},model:{value:t.enforcedGroups,callback:function(e){t.enforcedGroups=e},expression:"enforcedGroups"}})],1),t._v(" "),n("p",[t._v("\n\t\t\t"+t._s(t.t("settings","Two-factor authentication is not enforced for members of the following groups."))+"\n\t\t")]),t._v(" "),n("p",[n("Multiselect",{attrs:{options:t.groups,placeholder:t.t("settings","Excluded groups"),disabled:t.loading,multiple:!0,searchable:!0,loading:t.loadingGroups,"show-no-options":!1,"close-on-select":!1},on:{"search-change":t.searchGroup},model:{value:t.excludedGroups,callback:function(e){t.excludedGroups=e},expression:"excludedGroups"}})],1),t._v(" "),n("p",[n("em",[t._v("\n\t\t\t\t"+t._s(t.t("settings","When groups are selected/excluded, they use the following logic to determine if a user has 2FA enforced: If no groups are selected, 2FA is enabled for everyone except members of the excluded groups. If groups are selected, 2FA is enabled for all members of these. If a user is both in a selected and excluded group, the selected takes precedence and 2FA is enforced."))+"\n\t\t\t")])])]:t._e(),t._v(" "),n("p",[t.dirty?n("button",{staticClass:"button primary",attrs:{disabled:t.loading},on:{click:t.saveChanges}},[t._v("\n\t\t\t"+t._s(t.t("settings","Save changes"))+"\n\t\t")]):t._e()])],2)}),[],!1,null,null,null).exports,O=o(20629);r.default.use(O.ZP);var T={setEnforced:function(t,e){r.default.set(t,"enforced",e)},setEnforcedGroups:function(t,e){r.default.set(t,"enforcedGroups",e)},setExcludedGroups:function(t,e){r.default.set(t,"excludedGroups",e)}},q=new O.yh({strict:!1,state:{enforced:!1,enforcedGroups:[],excludedGroups:[]},mutations:T});o.nc=btoa(OC.requestToken),r.default.prototype.t=t,window.OC=window.OC||{},window.OC.Settings=window.OC.Settings||{},q.replaceState((0,s.loadState)("settings","mandatory2FAState")),new(r.default.extend(k))({store:q}).$mount("#two-factor-auth-settings")},37331:function(t,e,n){var o=n(94015),s=n.n(o),r=n(23645),i=n.n(r)()(s());i.push([t.id,"\n.two-factor-loading {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: -2px;\n\tmargin-right: 1px;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/AdminTwoFactor.vue"],names:[],mappings:";AA+JA;CACA,qBAAA;CACA,mBAAA;CACA,iBAAA;CACA,iBAAA;AACA",sourcesContent:["<template>\n\t<div>\n\t\t<p class=\"settings-hint\">\n\t\t\t{{ t('settings', 'Two-factor authentication can be enforced for all users and specific groups. If they do not have a two-factor provider configured, they will be unable to log into the system.') }}\n\t\t</p>\n\t\t<p v-if=\"loading\">\n\t\t\t<span class=\"icon-loading-small two-factor-loading\" />\n\t\t\t<span>{{ t('settings', 'Enforce two-factor authentication') }}</span>\n\t\t</p>\n\t\t<p v-else>\n\t\t\t<input id=\"two-factor-enforced\"\n\t\t\t\tv-model=\"enforced\"\n\t\t\t\ttype=\"checkbox\"\n\t\t\t\tclass=\"checkbox\">\n\t\t\t<label for=\"two-factor-enforced\">{{ t('settings', 'Enforce two-factor authentication') }}</label>\n\t\t</p>\n\t\t<template v-if=\"enforced\">\n\t\t\t<h3>{{ t('settings', 'Limit to groups') }}</h3>\n\t\t\t{{ t('settings', 'Enforcement of two-factor authentication can be set for certain groups only.') }}\n\t\t\t<p>\n\t\t\t\t{{ t('settings', 'Two-factor authentication is enforced for all members of the following groups.') }}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<Multiselect v-model=\"enforcedGroups\"\n\t\t\t\t\t:options=\"groups\"\n\t\t\t\t\t:placeholder=\"t('settings', 'Enforced groups')\"\n\t\t\t\t\t:disabled=\"loading\"\n\t\t\t\t\t:multiple=\"true\"\n\t\t\t\t\t:searchable=\"true\"\n\t\t\t\t\t:loading=\"loadingGroups\"\n\t\t\t\t\t:show-no-options=\"false\"\n\t\t\t\t\t:close-on-select=\"false\"\n\t\t\t\t\t@search-change=\"searchGroup\" />\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t{{ t('settings', 'Two-factor authentication is not enforced for members of the following groups.') }}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<Multiselect v-model=\"excludedGroups\"\n\t\t\t\t\t:options=\"groups\"\n\t\t\t\t\t:placeholder=\"t('settings', 'Excluded groups')\"\n\t\t\t\t\t:disabled=\"loading\"\n\t\t\t\t\t:multiple=\"true\"\n\t\t\t\t\t:searchable=\"true\"\n\t\t\t\t\t:loading=\"loadingGroups\"\n\t\t\t\t\t:show-no-options=\"false\"\n\t\t\t\t\t:close-on-select=\"false\"\n\t\t\t\t\t@search-change=\"searchGroup\" />\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<em>\n\t\t\t\t\t\x3c!-- this text is also found in the documentation. update it there as well if it ever changes --\x3e\n\t\t\t\t\t{{ t('settings', 'When groups are selected/excluded, they use the following logic to determine if a user has 2FA enforced: If no groups are selected, 2FA is enabled for everyone except members of the excluded groups. If groups are selected, 2FA is enabled for all members of these. If a user is both in a selected and excluded group, the selected takes precedence and 2FA is enforced.') }}\n\t\t\t\t</em>\n\t\t\t</p>\n\t\t</template>\n\t\t<p>\n\t\t\t<button v-if=\"dirty\"\n\t\t\t\tclass=\"button primary\"\n\t\t\t\t:disabled=\"loading\"\n\t\t\t\t@click=\"saveChanges\">\n\t\t\t\t{{ t('settings', 'Save changes') }}\n\t\t\t</button>\n\t\t</p>\n\t</div>\n</template>\n\n<script>\nimport axios from '@nextcloud/axios'\nimport Multiselect from '@nextcloud/vue/dist/Components/Multiselect'\nimport _ from 'lodash'\nimport { generateUrl, generateOcsUrl } from '@nextcloud/router'\n\nexport default {\n\tname: 'AdminTwoFactor',\n\tcomponents: {\n\t\tMultiselect,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tloading: false,\n\t\t\tdirty: false,\n\t\t\tgroups: [],\n\t\t\tloadingGroups: false,\n\t\t}\n\t},\n\tcomputed: {\n\t\tenforced: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.enforced\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setEnforced', val)\n\t\t\t},\n\t\t},\n\t\tenforcedGroups: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.enforcedGroups\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setEnforcedGroups', val)\n\t\t\t},\n\t\t},\n\t\texcludedGroups: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.excludedGroups\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setExcludedGroups', val)\n\t\t\t},\n\t\t},\n\t},\n\tmounted() {\n\t\t// Groups are loaded dynamically, but the assigned ones *should*\n\t\t// be valid groups, so let's add them as initial state\n\t\tthis.groups = _.sortedUniq(_.uniq(this.enforcedGroups.concat(this.excludedGroups)))\n\n\t\t// Populate the groups with a first set so the dropdown is not empty\n\t\t// when opening the page the first time\n\t\tthis.searchGroup('')\n\t},\n\tmethods: {\n\t\tsearchGroup: _.debounce(function(query) {\n\t\t\tthis.loadingGroups = true\n\t\t\taxios.get(generateOcsUrl('cloud/groups?offset=0&search={query}&limit=20', { query }))\n\t\t\t\t.then(res => res.data.ocs)\n\t\t\t\t.then(ocs => ocs.data.groups)\n\t\t\t\t.then(groups => { this.groups = _.sortedUniq(_.uniq(this.groups.concat(groups))) })\n\t\t\t\t.catch(err => console.error('could not search groups', err))\n\t\t\t\t.then(() => { this.loadingGroups = false })\n\t\t}, 500),\n\n\t\tsaveChanges() {\n\t\t\tthis.loading = true\n\n\t\t\tconst data = {\n\t\t\t\tenforced: this.enforced,\n\t\t\t\tenforcedGroups: this.enforcedGroups,\n\t\t\t\texcludedGroups: this.excludedGroups,\n\t\t\t}\n\t\t\taxios.put(generateUrl('/settings/api/admin/twofactorauth'), data)\n\t\t\t\t.then(resp => resp.data)\n\t\t\t\t.then(state => {\n\t\t\t\t\tthis.state = state\n\t\t\t\t\tthis.dirty = false\n\t\t\t\t})\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error('could not save changes', err)\n\t\t\t\t})\n\t\t\t\t.then(() => { this.loading = false })\n\t\t},\n\t},\n}\n<\/script>\n\n<style>\n\t.two-factor-loading {\n\t\tdisplay: inline-block;\n\t\tvertical-align: sub;\n\t\tmargin-left: -2px;\n\t\tmargin-right: 1px;\n\t}\n</style>\n"],sourceRoot:""}]),e.Z=i}},o={};function s(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={id:t,loaded:!1,exports:{}};return n[t].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=n,s.amdD=function(){throw new Error("define cannot be used indirect")},s.amdO={},e=[],s.O=function(t,n,o,r){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],r=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(a=!1,r<i&&(i=r));if(a){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,o,r]},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,{a:e}),e},s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},s.j=788,function(){var t={788:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,i=n[0],a=n[1],c=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(c)var l=c(s)}for(e&&e(n);u<i.length;u++)r=i[u],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var r=s.O(void 0,[874],(function(){return s(24470)}));r=s.O(r)}();
//# sourceMappingURL=settings-vue-settings-admin-security.js.map?v=3e5a3f40dec335d63267