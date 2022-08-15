/*! For license information please see settings-vue-settings-personal-webauthn.js.LICENSE.txt */
!function(){"use strict";var e,n={9802:function(e,n,r){var i=r(20144),a=r(16453),o=r(10128),s=r.n(o),c=r(66415),u=r.n(c),d=(0,r(17499).IY)().setApp("settings").detectUser().build(),l=r(4820),h=r(79753);function p(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){p(a,r,i,o,s,"next",t)}function s(t){p(a,r,i,o,s,"throw",t)}o(void 0)}))}}function f(){return(f=g(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,h.generateUrl)("/settings/api/personal/webauthn/registration"),t.next=3,l.default.get(e);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e){return A.apply(this,arguments)}function A(){return(A=g(regeneratorRuntime.mark((function t(e,n){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,h.generateUrl)("/settings/api/personal/webauthn/registration"),t.next=3,l.default.post(r,{name:e,data:n});case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return m.apply(this,arguments)}function m(){return(m=g(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,h.generateUrl)("/settings/api/personal/webauthn/registration/".concat(e)),t.next=3,l.default.delete(n);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var R=function(t){return function(e){return d.debug(t),e}},S=Object.freeze({READY:1,REGISTRATION:2,NAMING:3,PERSIST:4}),C={name:"AddDevice",props:{httpWarning:Boolean,isHttps:{type:Boolean,default:!1},isLocalhost:{type:Boolean,default:!1}},data:function(){return{name:"",credential:{},RegistrationSteps:S,step:S.READY}},methods:{arrayToBase64String:function(t){return btoa(String.fromCharCode.apply(String,function(t){if(Array.isArray(t))return y(t)}(e=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var e},start:function(){var t=this;return this.step=S.REGISTRATION,console.debug("Starting WebAuthn registration"),s()().then(this.getRegistrationData).then(this.register.bind(this)).then((function(){t.step=S.NAMING})).catch((function(e){console.error(e.name,e.message),t.step=S.READY}))},getRegistrationData:function(){return console.debug("Fetching webauthn registration data"),function(){return f.apply(this,arguments)}().then((function(t){return console.debug(t),t.challenge=Uint8Array.from(function(t){var e=(t=t.replace(/-/g,"+").replace(/_/g,"/")).length%4;if(e){if(1===e)throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");t+=new Array(5-e).join("=")}return window.atob(t)}(t.challenge),(function(t){return t.charCodeAt(0)})),t.user.id=Uint8Array.from(t.user.id,(function(t){return t.charCodeAt(0)})),t})).catch((function(e){throw console.error("Error getting webauthn registration data from server",e),new Error(t("settings","Server error while trying to add WebAuthn device"))}))},register:function(t){var e=this;return console.debug("starting webauthn registration"),navigator.credentials.create({publicKey:t}).then((function(t){e.credential={id:t.id,type:t.type,rawId:e.arrayToBase64String(new Uint8Array(t.rawId)),response:{clientDataJSON:e.arrayToBase64String(new Uint8Array(t.response.clientDataJSON)),attestationObject:e.arrayToBase64String(new Uint8Array(t.response.attestationObject))}}}))},submit:function(){var t=this;return this.step=S.PERSIST,s()().then(R("confirmed password")).then(this.saveRegistrationData).then(R("registration data saved")).then((function(){return t.reset()})).then(R("app reset")).catch(console.error.bind(this))},saveRegistrationData:function(){var e,n=this;return(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(n.name,JSON.stringify(n.credential));case 3:r=e.sent,d.info("new device added",{device:r}),n.$emit("added",r),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),d.error("Error persisting webauthn registration",{error:e.t0}),new Error(t("settings","Server error while trying to complete WebAuthn device registration"));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(t){w(a,r,i,o,s,"next",t)}function s(t){w(a,r,i,o,s,"throw",t)}o(void 0)}))})()},reset:function(){this.name="",this.registrationData={},this.step=S.READY}}},T=C,I=r(93379),x=r.n(I),D=r(7795),E=r.n(D),P=r(90569),_=r.n(P),N=r(3565),O=r.n(N),B=r(19216),k=r.n(B),U=r(44589),G=r.n(U),L=r(65262),W={};W.styleTagTransform=G(),W.setAttributes=O(),W.insert=_().bind(null,"head"),W.domAPI=E(),W.insertStyleElement=k(),x()(L.Z,W),L.Z&&L.Z.locals&&L.Z.locals;var Y=r(51900),j=(0,Y.Z)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isHttps||t.isLocalhost?n("div",[t.step===t.RegistrationSteps.READY?n("div",[n("button",{on:{click:t.start}},[t._v("\n\t\t\t"+t._s(t.t("settings","Add WebAuthn device"))+"\n\t\t")])]):t.step===t.RegistrationSteps.REGISTRATION?n("div",{staticClass:"new-webauthn-device"},[n("span",{staticClass:"icon-loading-small webauthn-loading"}),t._v("\n\t\t"+t._s(t.t("settings","Please authorize your WebAuthn device."))+"\n\t")]):t.step===t.RegistrationSteps.NAMING?n("div",{staticClass:"new-webauthn-device"},[n("span",{staticClass:"icon-loading-small webauthn-loading"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:t.t("settings","Name your device")},domProps:{value:t.name},on:{":keyup":function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.submit}},[t._v("\n\t\t\t"+t._s(t.t("settings","Add"))+"\n\t\t")])]):t.step===t.RegistrationSteps.PERSIST?n("div",{staticClass:"new-webauthn-device"},[n("span",{staticClass:"icon-loading-small webauthn-loading"}),t._v("\n\t\t"+t._s(t.t("settings","Adding your device …"))+"\n\t")]):n("div",[t._v("\n\t\tInvalid registration step. This should not have happened.\n\t")])]):n("div",[t._v("\n\t"+t._s(t.t("settings","Passwordless authentication requires a secure connection."))+"\n")])}),[],!1,null,"f9b952b4",null),K=j.exports,Z=r(79440),F=r.n(Z),M=r(56286),q={name:"Device",components:{ActionButton:r.n(M)(),Actions:F()},props:{name:{type:String,required:!0}}},H=r(98816),$={};$.styleTagTransform=G(),$.setAttributes=O(),$.insert=_().bind(null,"head"),$.domAPI=E(),$.insertStyleElement=k(),x()(H.Z,$),H.Z&&H.Z.locals&&H.Z.locals;var z=(0,Y.Z)(q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"webauthn-device"},[n("span",{staticClass:"icon-webauthn-device"}),t._v("\n\t"+t._s(t.name||t.t("settings","Unnamed device"))+"\n\t"),n("Actions",{attrs:{"force-menu":!0}},[n("ActionButton",{attrs:{icon:"icon-delete"},on:{click:function(e){return t.$emit("delete")}}},[t._v("\n\t\t\t"+t._s(t.t("settings","Delete"))+"\n\t\t")])],1)],1)}),[],!1,null,"187f22d4",null).exports;function J(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}var Q=u()("name"),V={components:{AddDevice:K,Device:z},props:{initialDevices:{type:Array,required:!0},isHttps:{type:Boolean,default:!1},isLocalhost:{type:Boolean,default:!1},hasPublicKeyCredential:{type:Boolean,default:!1}},data:function(){return{devices:this.initialDevices}},computed:{sortedDevices:function(){return Q(this.devices)}},methods:{deviceAdded:function(t){d.debug("adding new device to the list ".concat(t.id)),this.devices.push(t)},deleteDevice:function(t){var e,n=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.info("deleting webauthn device ".concat(t)),e.next=3,s()();case 3:return e.next=5,b(t);case 5:n.devices=n.devices.filter((function(e){return e.id!==t})),d.info("webauthn device ".concat(t," removed successfully"));case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(t){J(a,r,i,o,s,"next",t)}function s(t){J(a,r,i,o,s,"throw",t)}o(void 0)}))})()}}},X=V,tt=(0,Y.Z)(X,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"security-webauthn"}},[n("h2",[t._v(t._s(t.t("settings","Passwordless Authentication")))]),t._v(" "),n("p",{staticClass:"settings-hint hidden-when-empty"},[t._v("\n\t\t"+t._s(t.t("settings","Set up your account for passwordless authentication following the FIDO2 standard."))+"\n\t")]),t._v(" "),0===t.devices.length?n("p",[t._v("\n\t\t"+t._s(t.t("settings","No devices configured."))+"\n\t")]):n("p",[t._v("\n\t\t"+t._s(t.t("settings","The following devices are configured for your account:"))+"\n\t")]),t._v(" "),t._l(t.sortedDevices,(function(e){return n("Device",{key:e.id,attrs:{name:e.name},on:{delete:function(n){return t.deleteDevice(e.id)}}})})),t._v(" "),t.hasPublicKeyCredential?t._e():n("p",{staticClass:"warning"},[t._v("\n\t\t"+t._s(t.t("settings","Your browser does not support WebAuthn."))+"\n\t")]),t._v(" "),t.hasPublicKeyCredential?n("AddDevice",{attrs:{"is-https":t.isHttps,"is-localhost":t.isLocalhost},on:{added:t.deviceAdded}}):t._e()],2)}),[],!1,null,"662cb041",null).exports;r.nc=btoa(OC.requestToken),i.default.prototype.t=t,new(i.default.extend(tt))({propsData:{initialDevices:(0,a.loadState)("settings","webauthn-devices"),isHttps:"https:"===window.location.protocol,isLocalhost:"localhost"===window.location.hostname,hasPublicKeyCredential:void 0!==window.PublicKeyCredential}}).$mount("#security-webauthn")},65262:function(t,e,n){var r=n(87537),i=n.n(r),a=n(23645),o=n.n(a)()(i());o.push([t.id,"\n.webauthn-loading[data-v-f9b952b4] {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: 2px;\n\tmargin-right: 2px;\n}\n.new-webauthn-device[data-v-f9b952b4] {\n\tline-height: 300%;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/WebAuthn/AddDevice.vue"],names:[],mappings:";AAgNA;CACA,qBAAA;CACA,mBAAA;CACA,gBAAA;CACA,iBAAA;AACA;AAEA;CACA,iBAAA;AACA",sourcesContent:["\x3c!--\n  - @copyright 2020, Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @author Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n\n<template>\n\t<div v-if=\"!isHttps && !isLocalhost\">\n\t\t{{ t('settings', 'Passwordless authentication requires a secure connection.') }}\n\t</div>\n\t<div v-else>\n\t\t<div v-if=\"step === RegistrationSteps.READY\">\n\t\t\t<button @click=\"start\">\n\t\t\t\t{{ t('settings', 'Add WebAuthn device') }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.REGISTRATION\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t{{ t('settings', 'Please authorize your WebAuthn device.') }}\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.NAMING\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t<input v-model=\"name\"\n\t\t\t\ttype=\"text\"\n\t\t\t\t:placeholder=\"t('settings', 'Name your device')\"\n\t\t\t\t@:keyup.enter=\"submit\">\n\t\t\t<button @click=\"submit\">\n\t\t\t\t{{ t('settings', 'Add') }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.PERSIST\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t{{ t('settings', 'Adding your device …') }}\n\t\t</div>\n\n\t\t<div v-else>\n\t\t\tInvalid registration step. This should not have happened.\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport confirmPassword from '@nextcloud/password-confirmation'\n\nimport logger from '../../logger'\nimport {\n\tstartRegistration,\n\tfinishRegistration,\n} from '../../service/WebAuthnRegistrationSerice'\n\nconst logAndPass = (text) => (data) => {\n\tlogger.debug(text)\n\treturn data\n}\n\nconst RegistrationSteps = Object.freeze({\n\tREADY: 1,\n\tREGISTRATION: 2,\n\tNAMING: 3,\n\tPERSIST: 4,\n})\n\nexport default {\n\tname: 'AddDevice',\n\tprops: {\n\t\thttpWarning: Boolean,\n\t\tisHttps: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t\tisLocalhost: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tname: '',\n\t\t\tcredential: {},\n\t\t\tRegistrationSteps,\n\t\t\tstep: RegistrationSteps.READY,\n\t\t}\n\t},\n\tmethods: {\n\t\tarrayToBase64String(a) {\n\t\t\treturn btoa(String.fromCharCode(...a))\n\t\t},\n\t\tstart() {\n\t\t\tthis.step = RegistrationSteps.REGISTRATION\n\t\t\tconsole.debug('Starting WebAuthn registration')\n\n\t\t\treturn confirmPassword()\n\t\t\t\t.then(this.getRegistrationData)\n\t\t\t\t.then(this.register.bind(this))\n\t\t\t\t.then(() => { this.step = RegistrationSteps.NAMING })\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error(err.name, err.message)\n\t\t\t\t\tthis.step = RegistrationSteps.READY\n\t\t\t\t})\n\t\t},\n\n\t\tgetRegistrationData() {\n\t\t\tconsole.debug('Fetching webauthn registration data')\n\n\t\t\tconst base64urlDecode = function(input) {\n\t\t\t\t// Replace non-url compatible chars with base64 standard chars\n\t\t\t\tinput = input\n\t\t\t\t\t.replace(/-/g, '+')\n\t\t\t\t\t.replace(/_/g, '/')\n\n\t\t\t\t// Pad out with standard base64 required padding characters\n\t\t\t\tconst pad = input.length % 4\n\t\t\t\tif (pad) {\n\t\t\t\t\tif (pad === 1) {\n\t\t\t\t\t\tthrow new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding')\n\t\t\t\t\t}\n\t\t\t\t\tinput += new Array(5 - pad).join('=')\n\t\t\t\t}\n\n\t\t\t\treturn window.atob(input)\n\t\t\t}\n\n\t\t\treturn startRegistration()\n\t\t\t\t.then(publicKey => {\n\t\t\t\t\tconsole.debug(publicKey)\n\t\t\t\t\tpublicKey.challenge = Uint8Array.from(base64urlDecode(publicKey.challenge), c => c.charCodeAt(0))\n\t\t\t\t\tpublicKey.user.id = Uint8Array.from(publicKey.user.id, c => c.charCodeAt(0))\n\t\t\t\t\treturn publicKey\n\t\t\t\t})\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error('Error getting webauthn registration data from server', err)\n\t\t\t\t\tthrow new Error(t('settings', 'Server error while trying to add WebAuthn device'))\n\t\t\t\t})\n\t\t},\n\n\t\tregister(publicKey) {\n\t\t\tconsole.debug('starting webauthn registration')\n\n\t\t\treturn navigator.credentials.create({ publicKey })\n\t\t\t\t.then(data => {\n\t\t\t\t\tthis.credential = {\n\t\t\t\t\t\tid: data.id,\n\t\t\t\t\t\ttype: data.type,\n\t\t\t\t\t\trawId: this.arrayToBase64String(new Uint8Array(data.rawId)),\n\t\t\t\t\t\tresponse: {\n\t\t\t\t\t\t\tclientDataJSON: this.arrayToBase64String(new Uint8Array(data.response.clientDataJSON)),\n\t\t\t\t\t\t\tattestationObject: this.arrayToBase64String(new Uint8Array(data.response.attestationObject)),\n\t\t\t\t\t\t},\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t},\n\n\t\tsubmit() {\n\t\t\tthis.step = RegistrationSteps.PERSIST\n\n\t\t\treturn confirmPassword()\n\t\t\t\t.then(logAndPass('confirmed password'))\n\t\t\t\t.then(this.saveRegistrationData)\n\t\t\t\t.then(logAndPass('registration data saved'))\n\t\t\t\t.then(() => this.reset())\n\t\t\t\t.then(logAndPass('app reset'))\n\t\t\t\t.catch(console.error.bind(this))\n\t\t},\n\n\t\tasync saveRegistrationData() {\n\t\t\ttry {\n\t\t\t\tconst device = await finishRegistration(this.name, JSON.stringify(this.credential))\n\n\t\t\t\tlogger.info('new device added', { device })\n\n\t\t\t\tthis.$emit('added', device)\n\t\t\t} catch (err) {\n\t\t\t\tlogger.error('Error persisting webauthn registration', { error: err })\n\t\t\t\tthrow new Error(t('settings', 'Server error while trying to complete WebAuthn device registration'))\n\t\t\t}\n\t\t},\n\n\t\treset() {\n\t\t\tthis.name = ''\n\t\t\tthis.registrationData = {}\n\t\t\tthis.step = RegistrationSteps.READY\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.webauthn-loading {\n\t\tdisplay: inline-block;\n\t\tvertical-align: sub;\n\t\tmargin-left: 2px;\n\t\tmargin-right: 2px;\n\t}\n\n\t.new-webauthn-device {\n\t\tline-height: 300%;\n\t}\n</style>\n"],sourceRoot:""}]),e.Z=o},98816:function(t,e,n){var r=n(87537),i=n.n(r),a=n(23645),o=n.n(a)()(i());o.push([t.id,"\n.webauthn-device[data-v-187f22d4] {\n\tline-height: 300%;\n\tdisplay: flex;\n}\n.icon-webauthn-device[data-v-187f22d4] {\n\tdisplay: inline-block;\n\tbackground-size: 100%;\n\tpadding: 3px;\n\tmargin: 3px;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/WebAuthn/Device.vue"],names:[],mappings:";AAqDA;CACA,iBAAA;CACA,aAAA;AACA;AAEA;CACA,qBAAA;CACA,qBAAA;CACA,YAAA;CACA,WAAA;AACA",sourcesContent:["\x3c!--\n  - @copyright 2020 Christoph Wurst <christoph@winzerhof-wurst.at>\n  -\n  - @author 2020 Christoph Wurst <christoph@winzerhof-wurst.at>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n\n<template>\n\t<div class=\"webauthn-device\">\n\t\t<span class=\"icon-webauthn-device\" />\n\t\t{{ name || t('settings', 'Unnamed device') }}\n\t\t<Actions :force-menu=\"true\">\n\t\t\t<ActionButton icon=\"icon-delete\" @click=\"$emit('delete')\">\n\t\t\t\t{{ t('settings', 'Delete') }}\n\t\t\t</ActionButton>\n\t\t</Actions>\n\t</div>\n</template>\n\n<script>\nimport Actions from '@nextcloud/vue/dist/Components/Actions'\nimport ActionButton from '@nextcloud/vue/dist/Components/ActionButton'\n\nexport default {\n\tname: 'Device',\n\tcomponents: {\n\t\tActionButton,\n\t\tActions,\n\t},\n\tprops: {\n\t\tname: {\n\t\t\ttype: String,\n\t\t\trequired: true,\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.webauthn-device {\n\t\tline-height: 300%;\n\t\tdisplay: flex;\n\t}\n\n\t.icon-webauthn-device {\n\t\tdisplay: inline-block;\n\t\tbackground-size: 100%;\n\t\tpadding: 3px;\n\t\tmargin: 3px;\n\t}\n</style>\n"],sourceRoot:""}]),e.Z=o}},r={};function i(t){var e=r[t];if(void 0!==e)return e.exports;var a=r[t]={id:t,loaded:!1,exports:{}};return n[t].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=n,i.amdD=function(){throw new Error("define cannot be used indirect")},i.amdO={},e=[],i.O=function(t,n,r,a){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],a=e[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(t){return i.O[t](n[c])}))?n.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},i.j=1602,function(){i.b=document.baseURI||self.location.href;var t={1602:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,o=n[0],s=n[1],c=n[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var d=c(i)}for(e&&e(n);u<o.length;u++)a=o[u],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(d)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),i.nc=void 0;var a=i.O(void 0,[7874],(function(){return i(9802)}));a=i.O(a)}();
//# sourceMappingURL=settings-vue-settings-personal-webauthn.js.map?v=1c991d5a6671660e7d3d