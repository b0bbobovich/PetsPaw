"use strict";(self.webpackChunkPetsPaw=self.webpackChunkPetsPaw||[]).push([[6],{5006:(y,d,i)=>{i.r(d),i.d(d,{SearchModule:()=>b});var a=i(6814),t=i(1571),s=i(9891),g=i(6895),p=i(8054),l=i(6134),m=i(3685),_=i(7192);function u(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div")(2,"div",14),t._UZ(3,"div",15),t.TgZ(4,"div",16)(5,"p",17),t._uU(6),t.qZA()()(),t._UZ(7,"app-cat-breed",18),t.qZA(),t.BQk()),2&n){const e=r.$implicit,o=r.index,c=t.oxw(3);t.xp6(1),t.Gre("cat_img_cont ",c.get_grid_class(o),""),t.xp6(5),t.Oqu(e.breeds[0].name),t.xp6(1),t.Q6J("url",e.url)}}function x(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",11)(2,"div",12),t.YNc(3,u,8,5,"ng-container",13),t.qZA()(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",e.loadedData)}}function f(n,r){if(1&n&&(t.TgZ(0,"p",8),t._uU(1,"Search result for: "),t.TgZ(2,"b",9),t._uU(3),t.qZA()(),t.YNc(4,x,4,1,"ng-container",10)),2&n){const e=t.oxw(),o=t.MAs(9);t.xp6(3),t.Oqu(e.searchWord),t.xp6(1),t.Q6J("ngIf",e.loadedData.length>0)("ngIfElse",o)}}function w(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",19),t._UZ(2,"app-progress-spinner"),t.qZA(),t.BQk())}function C(n,r){if(1&n&&t.YNc(0,w,3,0,"ng-container",10),2&n){const e=t.oxw(),o=t.MAs(11);t.Q6J("ngIf",!e.isEmptyData)("ngIfElse",o)}}function v(n,r){1&n&&(t.TgZ(0,"p",8),t._uU(1,"No search term found."),t.qZA())}let h=(()=>{class n{constructor(e,o){this.route=e,this.service=o,this.searchWord="",this.loadedData=[],this.breedId="",this.isEmptyData=!0,this.route.firstChild?.params.subscribe(c=>{this.searchWord=c.searchWord,this.search()})}ngOnInit(){}search(){this.loadedData&&(this.loadedData=[]),this.service.searchBreedByName(this.searchWord).subscribe(e=>{e.length>0?(this.breedId=e[0].id,this.isEmptyData=!1,this.service.searchByBreed(this.breedId).subscribe(o=>{console.log(o),this.loadedData=o})):this.isEmptyData=!0}),console.log(this.loadedData)}get_grid_class(e){const o=["one","two","three","four","five","six","seven","eight","nine","ten","elv","twf","thrt","frt","fvt","sxt","svt","eigt","nt","twt"];return o[e%o.length]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.gz),t.Y36(s.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search"]],decls:12,vars:3,consts:[[3,"searchWord"],[1,"search_sect"],[1,"tabs_bar"],[1,"page_name_cont"],[1,"page_name"],[3,"ngIf","ngIfElse"],["downloader",""],["alt_headline",""],[1,"search_headline"],[2,"color","#1D1D1D"],[4,"ngIf","ngIfElse"],[1,"grid_parent"],[1,"grid_container"],[4,"ngFor","ngForOf"],[1,"hover_cont"],[1,"cat_img_hover"],[1,"breed_name"],[1,"breed_text"],[1,"cat_img",3,"url"],[1,"progress_spinner_cont"]],template:function(e,o){if(1&e&&(t._UZ(0,"app-topbar",0),t.TgZ(1,"section",1)(2,"div",2),t._UZ(3,"app-back-nav-btn"),t.TgZ(4,"div",3)(5,"p",4),t._uU(6,"SEARCH"),t.qZA()()(),t.YNc(7,f,5,3,"ng-template",5),t.YNc(8,C,1,2,"ng-template",null,6,t.W1O),t.YNc(10,v,2,0,"ng-template",null,7,t.W1O),t.qZA()),2&e){const c=t.MAs(11);t.Q6J("searchWord",o.searchWord),t.xp6(7),t.Q6J("ngIf",o.searchWord)("ngIfElse",c)}},dependencies:[g.sg,g.O5,p.o,l.I,m.H,_.O],styles:[".search_sect[_ngcontent-%COMP%]{height:auto;margin-top:10px;background:#FFFFFF;border-radius:20px;padding:20px}.tabs_bar[_ngcontent-%COMP%]{display:flex}.page_name_cont[_ngcontent-%COMP%]{width:156px;height:40px;background:#FF868E;border-radius:10px;margin-left:10px}.page_name[_ngcontent-%COMP%]{font-family:Jost;font-style:normal;font-weight:500;font-size:20px;line-height:30px;text-align:center;letter-spacing:2px;color:#fff;margin:5px 30px}.search_headline[_ngcontent-%COMP%]{margin-top:20px;width:max-content;height:29px;font-family:Jost;font-style:normal;font-weight:400;font-size:20px;line-height:29px;color:#8c8c8c}.progress_spinner_cont[_ngcontent-%COMP%]{height:auto;padding:45%}.grid_parent[_ngcontent-%COMP%]{overflow:hidden}.cat_img_cont[_ngcontent-%COMP%]{position:relative}.cat_img_hover[_ngcontent-%COMP%]{width:100%;height:100%;background:rgba(255,134,142,.6);opacity:.6;display:none;position:relative}.cat_img_cont[_ngcontent-%COMP%]:hover   .cat_img_hover[_ngcontent-%COMP%]{position:absolute;display:block;border-radius:20px}.breed_name[_ngcontent-%COMP%]{width:calc(100% - 20px);height:34px;background-color:#fff;border-radius:10px;position:absolute;bottom:10px;left:10px;display:none}.cat_img_cont[_ngcontent-%COMP%]:hover   .breed_name[_ngcontent-%COMP%]{display:block}.breed_text[_ngcontent-%COMP%]{width:100%;height:100%;font-family:Jost;font-style:normal;font-weight:400;font-size:18px;line-height:24px;color:#ff868e;margin-top:5px;text-align:center}",".grid_container[_ngcontent-%COMP%]{display:grid;max-height:100vh;grid-template-columns:repeat(3,1fr);grid-auto-rows:1fr 1fr 1fr;column-gap:20px;row-gap:20px;overflow:scroll;padding-right:50px;margin-right:-50px;padding-bottom:50px;margin-bottom:-50px}.one[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:1 / 2;grid-row:1 / 3}.two[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:2 / 3;grid-row:1 / 2}.three[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:3 / 4;grid-row:1 / 2}.four[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:1 / 2;grid-row:3 / 4}.five[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:2 / 4;grid-row:2 / 4}.six[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:1 / 2;grid-row:4 / 5}.seven[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:2 / 3;grid-row:4 / 5}.eight[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:3 / 4;grid-row:4 / 6}.nine[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:1 / 3;grid-row:5 / 7}.ten[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:3 / 4;grid-row:6 / 7}.elv[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:1 / 2;grid-row:7 / 9}.twf[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:2 / 3;grid-row:7 / 8}.thrt[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:3 / 4;grid-row:7 / 8}.frt[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:1 / 2;grid-row:9 / 10}.fvt[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:2 / 4;grid-row:8 / 10}.sxt[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:1 / 2;grid-row:10 / 11}.svt[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:2 / 3;grid-row:10 / 11}.eigt[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:3 / 4;grid-row:10 / 12}.nt[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:1 / 3;grid-row:11 / 13}.twt[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:3 / 4;grid-row:12 / 13}"]}),n})();const M=[{path:"",component:h,children:[{path:":searchWord",component:h}]}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.Bz.forChild(M),a.Bz]}),n})();var P=i(4065);let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,O,P.m]}),n})()}}]);