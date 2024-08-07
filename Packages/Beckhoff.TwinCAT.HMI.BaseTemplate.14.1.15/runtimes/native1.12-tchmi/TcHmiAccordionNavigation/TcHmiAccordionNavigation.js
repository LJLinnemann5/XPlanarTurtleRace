"use strict";var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){!function(Controls){!function(BaseTemplate){var _a,_TcHmiAccordionNavigation_tchmiFQN;class TcHmiAccordionNavigation extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),Object.defineProperty(this,"__elementTemplateRoot",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__elementBaseAccordion",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__elementBackButton",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__navigationItems",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__newNavigationData",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"__targetRegion",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__breadcrumb",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__autoCollapse",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__closeWhenClicked",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__showBackButton",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__textFontSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__textFontSizeUnit",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__idCounter",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"__activeItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__breakpoint",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__smallMode",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"__eventDestroyers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__pageHistory",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__regionChangeEvent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__localizedElements",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"__localizationReader",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__destroyLocalizationWatch",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"__previouslyOpenedElementIds",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__previouslyActiveElementId",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"__onItemSelected",{enumerable:!0,configurable:!0,writable:!0,value:item=>{const name=item.getName();if(!name)return;const selectedItem=this.__getNavigationItemById(name);selectedItem&&(selectedItem.content&&(this.__activeItem=selectedItem,this.__updateDisplayOfActiveItem(item),this.__setRegionContent(this.__activeItem),this.__pageHistory.unshift(this.__activeItem.id),this.__pageHistory.length>100&&this.__pageHistory.pop()),this.__callFunction(selectedItem),this.__createBreadcrumb())}}),Object.defineProperty(this,"__onBackButtonClick",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(!this.getIsEnabled()||!this.__showBackButton||this.__pageHistory.length<=1)return;this.__pageHistory.shift();let activeNavigationItem=this.__getNavigationItemById(this.__pageHistory[0]);activeNavigationItem?.content&&(this.__setActiveItem(activeNavigationItem),this.__setRegionContent(activeNavigationItem),this.__updateHeaderIcon(activeNavigationItem))}}),Object.defineProperty(this,"__onBackButtonDown",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.getIsEnabled()&&this.__showBackButton&&(this.__elementBackButton.classList.add("down"),document.addEventListener("pointerup",this.__onDocumentUp,{once:!0}),this.__elementBackButton.addEventListener("pointerleave",this.__onBackButtonLeave,{once:!0}))}}),Object.defineProperty(this,"__onBackButtonLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.getIsEnabled()&&this.__showBackButton&&(this.__elementBackButton.classList.remove("down"),this.__elementBackButton.addEventListener("pointerenter",this.__onBackButtonEnter,{once:!0}))}}),Object.defineProperty(this,"__onBackButtonEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.getIsEnabled()&&this.__showBackButton&&(this.__elementBackButton.classList.add("down"),this.__elementBackButton.addEventListener("pointerleave",this.__onBackButtonLeave,{once:!0}))}}),Object.defineProperty(this,"__onDocumentUp",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.__elementBackButton.classList.remove("down"),this.__elementBackButton.removeEventListener("pointerleave",this.__onBackButtonLeave),this.__elementBackButton.removeEventListener("pointerenter",this.__onBackButtonEnter)}}),Object.defineProperty(this,"__onItemDownChanged",{enumerable:!0,configurable:!0,writable:!0,value:item=>{if(item.hasAttribute("active"))return;const name=item.getName();if(!name)return;const navigationItem=this.__getNavigationItemById(name);navigationItem&&this.__updateHeaderIcon(navigationItem)}}),Object.defineProperty(this,"__onUserDataChanged",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(this.__previouslyOpenedElementIds=this.__getOpenElementIds(),this.__previouslyActiveElementId=this.__elementBaseAccordion.querySelector("tchmi-accordion-item[active]")?.getName()??null,this.__previouslyActiveElementId){let observeAccess=TcHmi.Access.checkAccess(this,this.__previouslyActiveElementId+":observe"),operateAccess=TcHmi.Access.checkAccess(this,this.__previouslyActiveElementId+":operate");if((!observeAccess||!operateAccess)&&(this.__previouslyActiveElementId=null,this.__navigationItems))for(let item of this.__navigationItems){const subObserveAccess=TcHmi.Access.checkAccess(this,item.id+":observe"),subOperateAccess=TcHmi.Access.checkAccess(this,item.id+":operate");if(subObserveAccess&&subOperateAccess){this.__previouslyActiveElementId=item.id;break}}}this.__destroyNavigation(),this.__processNavigationItems(),this.__setRegionContent(this.__getNavigationItemById(this.__previouslyActiveElementId))}}),Object.defineProperty(this,"__onResized",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.__checkBreakpoint()}}),Object.defineProperty(this,"__onRegionContentChanged",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(!this.__targetRegion)return;let contentName=this.__targetRegion.getTargetContent();if(!contentName||contentName===this.__activeItem?.content)return;let item=this.__getItemByContentName(contentName);item&&this.__setActiveItem(item)}}),Object.defineProperty(this,"__breadcrumbCallbackFunction",{enumerable:!0,configurable:!0,writable:!0,value:code=>{const selectedItem=this.__getNavigationItemById(code);selectedItem?.content&&(this.__setActiveItem(selectedItem),this.__targetRegion?.setTargetContent(selectedItem.content))}}),Object.defineProperty(this,"__onResolverForNavigationStructureWatchCallback",{enumerable:!0,configurable:!0,writable:!0,value:data=>{!1===this.__isAttached&&this.__suspendObjectResolver("navigationItems"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__navigationItems)||(this.__previouslyOpenedElementIds=this.__getOpenElementIds(),this.__previouslyActiveElementId=this.__elementBaseAccordion.querySelector("tchmi-accordion-item[active]")?.getName()??null,this.__destroyNavigation(),this.__navigationItems=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"NavigationItems"}),this.__processNavigationItems()):TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(_a,_a,"f",_TcHmiAccordionNavigation_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(_a,_a,"f",_TcHmiAccordionNavigation_tchmiFQN):"")+", Id="+this.getId()+", Attribute=NavigationItems] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))}})}__previnit(){if(this.__elementTemplateRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_BaseTemplate_TcHmiAccordionNavigation-Template")[0],this.__elementBaseAccordion=this.__elementTemplateRoot.querySelector("tchmi-accordion"),this.__elementBackButton=this.__elementTemplateRoot.getElementsByClassName("TcHmi_Controls_BaseTemplate_TcHmiAccordionNavigation-Back-Button")[0],!this.__elementTemplateRoot||!this.__elementBaseAccordion||!this.__elementBackButton)throw new Error("Invalid Template.html");let localizedElements=this.__element[0].querySelectorAll("[data-tchmi-localized-content-key]");for(let i=0,ii=localizedElements.length;i<ii;i++){let element=localizedElements[i],localizeKey=element.dataset.tchmiLocalizedContentKey;localizeKey&&this.__localizedElements.set(element,{key:localizeKey})}this.__destroyLocalizationWatch=this.__localization.watch((data=>{if(data.error===TcHmi.Errors.NONE&&data.reader){this.__localizationReader=data.reader;for(const[element,info]of this.__localizedElements){let localizedText=data.reader.get(info.key);info.parameters&&(localizedText=tchmi_format_string(localizedText,...info.parameters)),element.textContent=tchmi_decode_control_characters(localizedText)}}})),super.__previnit()}__init(){super.__init(),this.__addLocalizedElement(this.__elementBackButton,"Button_Back")}__attach(){super.__attach(),this.__elementBaseAccordion.addItemClickedCallback(this.__onItemSelected),this.__elementBaseAccordion.addItemDownChangedCallback(this.__onItemDownChanged),this.__elementBaseAccordion.setAutoCollapse(this.__autoCollapse??!0),this.__elementBackButton.addEventListener("click",this.__onBackButtonClick),this.__elementBackButton.addEventListener("pointerdown",this.__onBackButtonDown),this.__eventDestroyers.push(TcHmi.EventProvider.register("onUserDataChanged",this.__onUserDataChanged),TcHmi.EventProvider.register(this.__id+".onResized",this.__onResized))}__detach(){super.__detach(),this.__elementBackButton.removeEventListener("click",this.__onBackButtonClick),this.__elementBackButton.removeEventListener("pointerdown",this.__onBackButtonDown);for(let e of this.__eventDestroyers)e();this.__eventDestroyers=[]}destroy(){this.__keepAlive||(super.destroy(),this.__destroyLocalizationWatch?.(),this.__destroyLocalizationWatch=null)}__addLocalizedElement(element,key,...parameters){let info={key:key};if(0!==parameters.length&&(info.parameters=parameters),this.__localizedElements.set(element,info),this.__localizationReader){let localizedText=this.__localizationReader.get(key);info.parameters&&(localizedText=tchmi_format_string(localizedText,...info.parameters)),element.textContent=tchmi_decode_control_characters(localizedText)}}__removeLocalizedElement(element){this.__localizedElements.delete(element)}__createNavigationLevel(items,accordionElement,even=!0){for(let item of items){let observeAccessId=item.id+":observe",operateAccessId=item.id+":operate";if(!TcHmi.Access.checkAccess(this,observeAccessId))continue;let content,header=this.__createHeaderElement(item);if(item.subItems?.length){content=document.createElement("tchmi-accordion-content");let subAccordion=new Controls.Helpers.TcHmiAccordion.Accordion;subAccordion.classList.toggle("even",even),subAccordion.addItemClickedCallback(this.__onItemSelected),subAccordion.addItemDownChangedCallback(this.__onItemDownChanged),subAccordion.setAutoCollapse(this.__autoCollapse??!0),this.__createNavigationLevel(item.subItems,subAccordion,!even),content.append(subAccordion)}const addedItem=accordionElement.addItem(item.id,header,content);addedItem&&(TcHmi.Access.checkAccess(this,operateAccessId)||addedItem.disable(!0),addedItem.setCloseWhenClicked(this.__closeWhenClicked??!1))}}__destroyNavigation(){if(this.__navigationItems)for(let item of this.__navigationItems)this.__elementBaseAccordion.removeItemByName(item.id)}__createHeaderElement(item){let headerElement=document.createElement("tchmi-accordion-header");if(TcHmi.StyleProvider.processFontSize(headerElement,this.__textFontSize,this.__textFontSizeUnit),item.icon){let icon=document.createElement("i");icon.style.height=(item.iconHeight??48)+(item.iconHeightUnit??"px"),icon.style.width=(item.iconWidth??48)+(item.iconWidthUnit??"px"),icon.style.backgroundSize=(item.iconHeight??48)+(item.iconHeightUnit??"px")+" "+(item.iconWidth??48)+(item.iconWidthUnit??"px"),icon.style.backgroundImage="url("+item.icon+")",headerElement.append(icon)}return this.__smallMode||headerElement.append(item.name),headerElement}__updateHeaderIcon(navigationItem){let accordionItem=this.__getAccordionItemById(navigationItem.id);if(!accordionItem)return;let headerElement=accordionItem?.getHeader();if(!headerElement)return;let icon=headerElement.querySelector("i");if(!icon)return;let path=navigationItem.icon??"";accordionItem.hasAttribute("active")&&navigationItem.iconActive?path=navigationItem.iconActive:headerElement.classList.contains("down")&&navigationItem.iconPressed&&(path=navigationItem.iconPressed),icon.style.backgroundImage="url("+path+")"}__updateDisplayOfActiveItem(activeItem){let oldItems=this.__elementTemplateRoot.querySelectorAll("tchmi-accordion-item[active]");for(let oldItem of oldItems){if(oldItem===activeItem)continue;oldItem.removeAttribute("active");const oldItemName=oldItem.getName();if(!oldItemName)continue;const oldNavigationItem=this.__getNavigationItemById(oldItemName);oldNavigationItem&&this.__updateHeaderIcon(oldNavigationItem)}activeItem.hasAttribute("active")||(activeItem.setAttribute("active",""),this.__activeItem&&this.__updateHeaderIcon(this.__activeItem))}__setRegionContent(item){this.__targetRegion&&(item&&item.content?item.content&&this.__targetRegion.getTargetContent()!==item.content&&this.__targetRegion.setTargetContent(item.content):this.__targetRegion.setTargetContent(null))}__callFunction(item){if(!item.function)return;let itemFunction=new TcHmi.Function(item.function);itemFunction.isProcessedAsync()?TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(_a,_a,"f",_TcHmiAccordionNavigation_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(_a,_a,"f",_TcHmiAccordionNavigation_tchmiFQN):"")+", Id="+this.getId()+"] Execution of function="+item.function.fn+" was aborted because it will be processed asynchronous and a synchronous running function call is required. Either the function is running asynchronous by definition or asynchronous running symbols were added to the list of parameters."):itemFunction.executeEx(void 0,(data=>{data.error!==TcHmi.Errors.NONE&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(_a,_a,"f",_TcHmiAccordionNavigation_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(_a,_a,"f",_TcHmiAccordionNavigation_tchmiFQN):"")+", Id="+this.getId()+"] Execution of function="+item.function.fn+" failed with error: "+TcHmi.Log.buildMessage(data.details))}))}__getNavigationItemById(id,items=this.__navigationItems){if(!items||!id)return null;for(let item of items){if(item.id===id)return item;if(item.subItems){let foundItem=this.__getNavigationItemById(id,item.subItems);if(foundItem)return foundItem}}return null}__getAccordionItemById(id){return this.__elementTemplateRoot.querySelector('tchmi-accordion-item[name="'+id+'"]')}__getOpenElementIds(){let openElements=this.__elementBaseAccordion.querySelectorAll("tchmi-accordion-item[open]"),ids=[];return openElements.forEach((item=>{const id=item.getName();id&&ids.push(id)})),ids}__checkBreakpoint(){const width=this.getRenderedWidth();if(null!==width){if(!this.__breakpoint||width>this.__breakpoint){if(!this.__smallMode)return;this.__smallMode=!1,this.__element[0].classList.remove("TcHmi_Controls_BaseTemplate_TcHmiAccordionNavigation-small-mode"),this.__addLocalizedElement(this.__elementBackButton,"Button_Back")}else{if(this.__smallMode)return;this.__smallMode=!0,this.__element[0].classList.add("TcHmi_Controls_BaseTemplate_TcHmiAccordionNavigation-small-mode"),this.__removeLocalizedElement(this.__elementBackButton),this.__elementBackButton.textContent=""}this.__previouslyOpenedElementIds=this.__getOpenElementIds(),this.__previouslyActiveElementId=this.__elementBaseAccordion.querySelector("tchmi-accordion-item[active]")?.getName()??null,this.__destroyNavigation(),this.__processNavigationItems()}}__getItemByContentName(contentName){if(!this.__navigationItems)return null;const searchLevel=items=>{for(let item of items){if(item.content===contentName)return item;if(item.subItems){let result=searchLevel(item.subItems);if(result)return result}}return null};return searchLevel(this.__navigationItems)}__setActiveItem(item){this.__activeItem=item;let accordionItem=this.__getAccordionItemById(item.id);accordionItem&&(this.__updateDisplayOfActiveItem(accordionItem),this.showItem(item.id)),this.__createBreadcrumb()}__getParentItem(item){const accordionitem=this.__getAccordionItemById(item.id);if(accordionitem){let parentAccordion=accordionitem.parentElement?.parentElement?.parentElement;if(parentAccordion instanceof TcHmi.Controls.Helpers.TcHmiAccordion.AccordionItem)return parentAccordion}return null}__createBreadcrumb(){if(this.__breadcrumb&&this.__navigationItems){let bcItems=this.__getBreadcrumbPath(this.__navigationItems);bcItems&&this.__breadcrumb.setBreadcrumbDataEx(bcItems,this.__breadcrumbCallbackFunction)}}__getBreadcrumbPath(element){let breadcrumbData=[];if(!this.__activeItem)return null;this.__activeItem.content&&breadcrumbData.push({text:this.__activeItem.name,code:this.__activeItem.id,isEnabled:!0});let parentElement=this.__getNavigationItemById(this.__getParentItem(this.__activeItem)?.getName()??null);for(;null!==parentElement;)(breadcrumbData.length>0||parentElement.content)&&breadcrumbData.unshift({text:parentElement.name,code:parentElement.id,isEnabled:void 0!==parentElement.content}),parentElement=this.__getNavigationItemById(this.__getParentItem(parentElement)?.getName()??null);return breadcrumbData}getAccessConfig(){const currentAccessConfig=super.getAccessConfig();return this.__getSubRights(this.__navigationItems??[],tchmi_clone_object(currentAccessConfig))}__getSubRights(items,accessList){if(!items)return accessList;for(const element of items){if(element.accessRights)for(const elementAccessRight of element.accessRights)if(elementAccessRight){let curAccess={accessright:element.id+":"+elementAccessRight.accessright,group:elementAccessRight.group,permission:elementAccessRight.permission};accessList.push(curAccess)}if(element.subItems&&accessList){let accessListTmp=this.__getSubRights(element.subItems,accessList);accessListTmp&&(accessList=accessListTmp)}}return accessList}getDescriptionAccessByName(name){return name.includes(":")?{name:name,defaultValueInternal:!0}:null}showItem(id){if(!this.__navigationItems)return;const searchLevel=items=>{for(let item of items){if(item.id===id)return item;if(item.subItems){let result=searchLevel(item.subItems);if(null!==result)return result}}return null},item=searchLevel(this.__navigationItems);if(item){const accordionItem=this.__getNavigationItemById(item.id),navigationItem=this.__getAccordionItemById(item.id);if(accordionItem){const parentItem=this.__getParentItem(accordionItem);parentItem&&parentItem?.open(null)}for(let[_baseItemName,baseItem]of this.__elementBaseAccordion.getItems())baseItem.contains(navigationItem)||baseItem===navigationItem||baseItem.close()}}getActiveItem(){return this.__activeItem}setNavigationItems(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("NavigationItems"));let resolverInfo=this.__objectResolvers.get("navigationItems");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy()),this.__newNavigationData=!0;let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue,this);this.__objectResolvers.set("navigationItems",{resolver:resolver,watchCallback:this.__onResolverForNavigationStructureWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForNavigationStructureWatchCallback)})}getNavigationItems(){return this.__navigationItems}__processNavigationItems(){if(this.__navigationItems?.length)if(this.__createNavigationLevel(this.__navigationItems,this.__elementBaseAccordion),this.__newNavigationData){if(this.__newNavigationData=!1,this.__pageHistory=[],this.__targetRegion){let content=this.__targetRegion.getTargetContent();if(content){const currentItem=this.__getItemByContentName(content);currentItem&&this.__pageHistory.unshift(currentItem.id)}else this.__pageHistory.unshift(this.__navigationItems[0].id)}else this.__pageHistory.unshift(this.__navigationItems[0].id);let startingId=this.__pageHistory[0];if(startingId){let startingItem=this.__getNavigationItemById(startingId);startingItem&&this.__setActiveItem(startingItem)}}else{for(let id of this.__previouslyOpenedElementIds)this.__elementBaseAccordion.querySelector("tchmi-accordion-item[name="+id+"]")?.open(null);if(this.__previouslyActiveElementId){let activeAccordionItem=this.__getAccordionItemById(this.__previouslyActiveElementId);activeAccordionItem&&activeAccordionItem.setAttribute("active","");let activeNavigationItem=this.__getNavigationItemById(this.__previouslyActiveElementId);activeNavigationItem&&this.__updateHeaderIcon(activeNavigationItem)}else if(this.__pageHistory[0]){let activeAccordionItem=this.__getAccordionItemById(this.__pageHistory[0]);activeAccordionItem&&activeAccordionItem.setAttribute("active","");let activeNavigationItem=this.__getNavigationItemById(this.__pageHistory[0]);activeNavigationItem&&this.__updateHeaderIcon(activeNavigationItem)}}}setTargetRegion(valueNew){let convertedValue=valueNew instanceof TcHmi.Controls.System.TcHmiRegion?valueNew:null;null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TargetRegion")),convertedValue!==this.__targetRegion&&(this.__targetRegion=valueNew,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TargetRegion"}),this.__processTargetRegion())}getTargetRegion(){return this.__targetRegion}__processTargetRegion(){this.__targetRegion?(this.__regionChangeEvent?.(),this.__regionChangeEvent=TcHmi.EventProvider.register(this.__targetRegion.getId()+".onTargetContentReplaced",this.__onRegionContentChanged),this.__activeItem&&this.__setRegionContent(this.__activeItem)):(this.__regionChangeEvent?.(),this.__regionChangeEvent=null)}setBreadcrumb(valueNew){let convertedValue=valueNew instanceof TcHmi.Controls.BaseTemplate.TcHmiBreadcrumb?valueNew:null;null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Breadcrumb")),convertedValue!==this.__breadcrumb&&(this.__breadcrumb=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Breadcrumb"}),this.__processBreadcrumb())}getBreadcrumb(){return this.__breadcrumb}__processBreadcrumb(){this.__createBreadcrumb()}setAutoCollapse(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("AutoCollapse")),convertedValue!==this.__autoCollapse&&(this.__autoCollapse=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"AutoCollapse"}),this.__processAutoCollapse())}getAutoCollapse(){return this.__autoCollapse}__processAutoCollapse(){let accordions=this.__elementTemplateRoot.querySelectorAll("tchmi-accordion");for(let accordion of accordions)accordion.setAutoCollapse(this.__autoCollapse??!0)}setCloseWhenClicked(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("CloseWhenClicked")),convertedValue!==this.__closeWhenClicked&&(this.__closeWhenClicked=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"CloseWhenClicked"}),this.__processCloseWhenClicked())}getCloseWhenClicked(){return this.__closeWhenClicked}__processCloseWhenClicked(){let accordionItems=this.__elementTemplateRoot.querySelectorAll("tchmi-accordion-item");for(let item of accordionItems)item.setCloseWhenClicked(this.__closeWhenClicked??!1)}setShowBackButton(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ShowBackButton")),convertedValue!==this.__showBackButton&&(this.__showBackButton=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ShowBackButton"}),this.__processShowBackButton())}getShowBackButton(){return this.__showBackButton}__processShowBackButton(){this.__elementBackButton.classList.toggle("disabled",!this.__showBackButton)}setBreakpoint(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Breakpoint")),convertedValue!==this.__breakpoint&&(this.__breakpoint=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Breakpoint"}),this.__processBreakpoint())}getBreakpoint(){return this.__breakpoint}__processBreakpoint(){this.__checkBreakpoint()}setTextFontSize(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSize")),convertedValue!==this.__textFontSize&&(this.__textFontSize=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSize"}),this.__processTextFontSize())}getTextFontSize(){return this.__textFontSize}__processTextFontSize(){let headerList=this.__elementTemplateRoot.querySelectorAll("tchmi-accordion-header");TcHmi.StyleProvider.processFontSize(headerList,this.__textFontSize,this.__textFontSizeUnit)}setTextFontSizeUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toFontSizeUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSizeUnit")),convertedValue!==this.__textFontSizeUnit&&(this.__textFontSizeUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSizeUnit"}),this.__processTextFontSize())}getTextFontSizeUnit(){return this.__textFontSizeUnit}}_TcHmiAccordionNavigation_tchmiFQN={value:"TcHmi.Controls.BaseTemplate."+(_a=TcHmiAccordionNavigation).name},BaseTemplate.TcHmiAccordionNavigation=TcHmiAccordionNavigation}(Controls.BaseTemplate||(Controls.BaseTemplate={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiAccordionNavigation","TcHmi.Controls.BaseTemplate",TcHmi.Controls.BaseTemplate.TcHmiAccordionNavigation);