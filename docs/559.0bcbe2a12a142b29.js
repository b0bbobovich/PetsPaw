"use strict";(self.webpackChunkPetsPaw=self.webpackChunkPetsPaw||[]).push([[559],{4559:(O,c,o)=>{o.r(c),o.d(c,{FavouritesModule:()=>M});var a=o(6895),h=o(4065),d=o(9108),t=o(8256),p=o(9891),l=o(5980),m=o(8054),u=o(6134),v=o(3685);function f(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div")(2,"div",9),t._UZ(3,"div",10),t.qZA(),t._UZ(4,"app-cat-breed",11),t.qZA(),t.BQk()),2&n){const e=i.$implicit,r=i.index,g=t.oxw(2);t.xp6(1),t.Gre("cat_img_cont ",g.get_grid_class(r),""),t.xp6(3),t.Q6J("breeds",e)}}function x(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div",6)(2,"div",7),t.YNc(3,f,5,4,"ng-container",8),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",e.loadedData)}}function _(n,i){1&n&&(t.TgZ(0,"p",12),t._uU(1,"No search term found."),t.qZA())}const w=[{path:"",component:(()=>{class n{constructor(e,r){this.service=e,this.persister=r,this.subID="",this.loadedData=[],this.subID=this.persister.get("sub_id"),this.searchFavImgs()}ngOnInit(){}searchFavImgs(){this.service.getAllFavImgs(this.subID).subscribe(e=>{let r=e.filter(g=>{});for(let g of r)this.service.searchCatById(g.image_id).subscribe(s=>{this.loadedData.push(s[0]),console.log(s),console.log(this.loadedData)})})}get_grid_class(e){const r=["one","two","three","four","five","six","seven","eight","nine","ten","elv","twf","thrt","frt","fvt","sxt","svt","eigt","nt","twt"];return r[e%r.length]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.s),t.Y36(l.C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-favourites"]],decls:10,vars:2,consts:[[1,"fav_sect"],[1,"tabs_bar"],[1,"page_name_cont"],[1,"page_name"],[4,"ngIf","ngIfElse"],["noItems",""],[1,"grid_parent"],[1,"grid_container"],[4,"ngFor","ngForOf"],[1,"hover_cont"],[1,"cat_img_hover"],[1,"cat_img",3,"breeds"],[1,"no_items_headline"]],template:function(e,r){if(1&e&&(t._UZ(0,"app-topbar"),t.TgZ(1,"section",0)(2,"div",1),t._UZ(3,"app-back-nav-btn"),t.TgZ(4,"div",2)(5,"p",3),t._uU(6,"FAVOURITES"),t.qZA()()(),t.YNc(7,x,4,1,"ng-container",4),t.YNc(8,_,2,0,"ng-template",null,5,t.W1O),t.qZA()),2&e){const g=t.MAs(9);t.xp6(7),t.Q6J("ngIf",r.loadedData.length>0)("ngIfElse",g)}},dependencies:[a.sg,a.O5,m.o,u.I,v.H],styles:[".fav_sect[_ngcontent-%COMP%]{height:100%;margin-top:10px;background:#FFFFFF;border-radius:20px;padding:20px}.tabs_bar[_ngcontent-%COMP%]{display:flex}.page_name_cont[_ngcontent-%COMP%]{width:auto;height:40px;background:#FF868E;border-radius:10px;margin-left:10px}.page_name[_ngcontent-%COMP%]{font-family:Jost;font-style:normal;font-weight:500;font-size:20px;line-height:30px;text-align:center;letter-spacing:2px;color:#fff;margin:5px 30px}.no_items_headline[_ngcontent-%COMP%]{margin-top:20px;width:max-content;height:29px;font-family:Jost;font-style:normal;font-weight:400;font-size:20px;line-height:29px;color:#8c8c8c}.grid_parent[_ngcontent-%COMP%]{overflow:hidden}.cat_img_cont[_ngcontent-%COMP%]{position:relative}.cat_img_hover[_ngcontent-%COMP%]{width:100%;height:100%;background:rgba(255,134,142,.6);opacity:.6;display:none;position:relative}.cat_img_cont[_ngcontent-%COMP%]:hover   .cat_img_hover[_ngcontent-%COMP%]{position:absolute;display:block;border-radius:20px}",".grid_container[_ngcontent-%COMP%]{display:grid;max-height:100vh;grid-template-columns:repeat(3,1fr);grid-auto-rows:1fr 1fr 1fr;column-gap:20px;row-gap:20px;overflow:scroll;padding-right:50px;margin-right:-50px;padding-bottom:50px;margin-bottom:-50px}.one[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:1 / 2;grid-row:1 / 3}.two[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:2 / 3;grid-row:1 / 2}.three[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:3 / 4;grid-row:1 / 2}.four[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:1 / 2;grid-row:3 / 4}.five[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:2 / 4;grid-row:2 / 4}.six[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:1 / 2;grid-row:4 / 5}.seven[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:2 / 3;grid-row:4 / 5}.eight[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:3 / 4;grid-row:4 / 6}.nine[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:1 / 3;grid-row:5 / 7}.ten[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:3 / 4;grid-row:6 / 7}.elv[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:1 / 2;grid-row:7 / 9}.twf[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:2 / 3;grid-row:7 / 8}.thrt[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:3 / 4;grid-row:7 / 8}.frt[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:1 / 2;grid-row:9 / 10}.fvt[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:2 / 4;grid-row:8 / 10}.sxt[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:1 / 2;grid-row:10 / 11}.svt[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:2 / 3;grid-row:10 / 11}.eigt[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:3 / 4;grid-row:10 / 12}.nt[_ngcontent-%COMP%]{width:100%;height:300px;grid-column:1 / 3;grid-row:11 / 13}.twt[_ngcontent-%COMP%]{width:100%;height:140px;grid-column:3 / 4;grid-row:12 / 13}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(w),d.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,C,h.m]}),n})()}}]);