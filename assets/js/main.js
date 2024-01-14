gsap.registerPlugin(ScrollTrigger,DrawSVGPlugin);const mq=window.matchMedia("(max-width: 991px)");function handleWidthChange(e){if(!e.matches){let e=0,o=0,t=Scrollbar.init(document.body,{damping:.1,delegateTo:document});t.addListener(({offset:t})=>{e=t.x,o=t.y}),t.setPosition(0,0),t.track.xAxis.element.remove(),ScrollTrigger.scrollerProxy("body",{scrollTop(e){return arguments.length&&(t.scrollTop=e),t.scrollTop}}),t.addListener(ScrollTrigger.update)}}mq.addListener(handleWidthChange),handleWidthChange(mq);const select=e=>document.querySelector(e),selectAll=e=>document.querySelectorAll(e),loader=select(".loader"),loaderInner2=select(".loader .inner"),loaderInner=select(".loader__content .inner"),progressBar=select(".loader .progress"),loaderMask=select(".loader__mask"),lines=selectAll(".loader__title--mask path"),anchor=select("#alalimon"),anchorLink=select(".scrollUp"),hidNav=select(".header__mobile .hidden__nav"),header=select(".header"),headerMob=select(".header__mobile"),colorMenu1=selectAll(".proyectos__nav"),colorMenu2=selectAll(".estudio__nav"),colorMenu3=selectAll(".contacto__nav"),logo=selectAll(".logo__nav__c"),menuMob=select(".header__mobile .menu__nav"),logoMob=select(".header__mobile .logo__container .logoMob"),legal1=select("#colophon .site-info .legal"),legal2=selectAll("#colophon .site-info .legalink"),fWhite=selectAll("#colophon .site-info .link__container .line__container"),mainly=select("#main");let width=window.innerWidth,speed=350,endX=width-500,duration=endX/speed/2;function effecting(){const e=selectAll(".video__inner__container video");mq.matches||e&&e.forEach(e=>{e.addEventListener("mouseenter",()=>e.pause()),e.addEventListener("mouseleave",()=>e.play())});const o=selectAll(".star");if(o){gsap.timeline({scrollTrigger:{trigger:o,start:"top 100%",end:"bottom"}}).to(o,{duration:4,rotation:360,ease:"none",repeat:-1})}const t=select(".trembling");if(t){gsap.timeline({scrollTrigger:{trigger:t,start:"top 60%",end:"bottom"}}).to(t,{duration:.5,ease:"rough({ template: power0.none, strength: 10, points: 80, taper: 'in', randomize: false, clamp:  false})",x:2,repeat:-1,yoyo:!0})}if(mq.matches){const e=select(".header__mobile .menu__nav"),o=select(".header__mobile .hidden__nav .xclose"),t=selectAll(".header__mobile .hidden__container .link__nav");e&&(e.addEventListener("click",function(){gsap.timeline().mobileOpen(hidNav)}),o.addEventListener("click",function(){gsap.timeline().mobileClose(hidNav)}),t.forEach(e=>{e.addEventListener("click",function(){gsap.timeline().mobileClose(hidNav)})}))}const r=selectAll(".link__container");mq.matches||r&&r.forEach(e=>{let o=e.lastElementChild,t=gsap.timeline();e.addEventListener("mouseenter",()=>t.liningIn(o)),e.addEventListener("mouseleave",()=>t.liningOut(o))}),selectAll(".error-404 .marquee__container .marquee").forEach(e=>{gsap.timeline().marqueeAnim(e)});const a=gsap.utils.toArray(".proyects__container .inner__container .title__inner__container a"),s=gsap.utils.toArray(".info__container .nav-links .arrow__container .arrow"),n=selectAll(".nav-next a");function i(e){const o=a.filter(o=>o!==e.target);let t=e.target.nextElementSibling;if("mouseenter"===e.type){gsap.timeline().to(t,{duration:.3,autoAlpha:1,ease:"power2.out"}).to(o,{color:"#474F40",autoAlpha:.2,ease:"power2.out"},0).to(e.target,{color:"#474F40",scaleX:1.2,scaleY:1.2,autoAlpha:1,ease:"power2.out"},0)}else if("mouseleave"===e.type){gsap.timeline().to(t,{duration:.3,autoAlpha:0}).to(a,{color:"#474F40",scaleX:1,scaleY:1,autoAlpha:1},0)}}function l(e){const o=this.nextElementSibling,t=this.parentElement,{clientY:r,clientX:a}=e;gsap.to(o,{duration:1.2,y:(t.clientHeight-r)/3,x:(t.clientWidth-a)/10,ease:"power2.out"})}a&&(mq.matches||a.forEach(e=>{e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",i),e.addEventListener("mousemove",l)})),n&&(mq.matches||n.forEach(e=>{e.addEventListener("mouseenter",function(){s.forEach(e=>{gsap.timeline().arrowRight(e)})}),e.addEventListener("mouseleave",function(){s.forEach(e=>{gsap.timeline().arrowLeft(e)})})}));const c=select(".mallorquina__left .img__inner__container");if(c){gsap.timeline({scrollTrigger:{trigger:c,start:"top 100%",end:"bottom",scrub:1}}).to(".mallorquina__left .img__inner__container img",{duration:duration,scaleX:1,scaleY:1,ease:"none"}),gsap.timeline({scrollTrigger:{trigger:".mallorquina__right .title__container .title",start:"top 100%",end:"bottom"}}).from(".mallorquina__right .title__container .title",{duration:.6,y:200,ease:"power2.out"},"<").from(".mallorquina__right .atb__container .atb",{duration:.6,y:100,autoAlpha:0,stagger:.1,ease:"power2.out"},"<").from(".mallorquina__right .link__container .link",{duration:.3,y:100,ease:"power2.out"},"<"),gsap.timeline({scrollTrigger:{trigger:".mallorquina__right .img__container",start:"top 100%",end:"bottom",scrub:1}}).to(".mallorquina__right .img__container img",{duration:duration,scaleX:1.5,scaleY:1.5,ease:"none"})}const m=select(".besana__container");if(m){gsap.timeline({scrollTrigger:{trigger:m,start:"top 100%",end:"bottom",scrub:1}}).to(".besana__left .img__container img",{duration:duration,scaleX:1,scaleY:1,ease:"none"}).to(".besana__left .imgBack__container .imageDown",{duration:duration,scaleX:1.4,scaleY:1.4,ease:"none"},0).to(".besana__right .img__inner__container img",{duration:duration,scaleX:1,scaleY:1,ease:"none"},0),gsap.timeline({scrollTrigger:{trigger:".besana__container",start:"top 100%",end:"bottom"}}).from(".besana__left .title__container .title",{duration:.6,y:200,ease:"power2.out"},"<").from(".besana__left .atb__container .atb",{duration:.6,y:200,ease:"power2.out"},"<"),gsap.timeline({scrollTrigger:{trigger:".besana__left .link__container",start:"top 75%",end:"bottom"}}).from(".besana__left .link__container .link",{duration:.6,y:200,ease:"power2.out"})}const d=select(".cartuja__left .title__container .title");if(d){gsap.timeline({scrollTrigger:{trigger:d,start:"top 100%",end:"bottom"}}).from(".cartuja__left .title__container .title",{duration:.6,y:200,ease:"power2.out"},"<").from(".cartuja__left .atb__container .atb",{duration:.6,y:100,autoAlpha:0,stagger:.1,ease:"power2.out"},"<").from(".cartuja__left .link__container .link",{duration:.3,y:100,ease:"power2.out"},"<"),gsap.timeline({scrollTrigger:{trigger:".cartuja__right .img__inner__container",start:"top 100%",end:"bottom",scrub:1}}).to(".cartuja__right .img__inner__container .imageUp",{duration:duration,scaleX:1,scaleY:1,ease:"none"}),gsap.timeline({scrollTrigger:{trigger:".cartuja__left .img__container",start:"top 100%",end:"bottom",scrub:1}}).to(".cartuja__left .img__container img",{duration:duration,scaleX:1.5,scaleY:1.5,ease:"none"})}const u=select(".elestudio .left .title");if(u)if(mq.matches){gsap.timeline({scrollTrigger:{trigger:u,start:"top 100%",end:"bottom"}}).from(".elestudio .number",{duration:.6,y:200,ease:"power2.out"},"<").from(u,{duration:.8,y:200,ease:"power2.out"},.1).from(".elestudio .text",{duration:.8,y:200,ease:"power2.out"},.2)}else{gsap.timeline({scrollTrigger:{trigger:u,start:"top 100%",end:"bottom"}}).from(".elestudio .number",{duration:.3,y:200,ease:"power2.out"},"<").from(u,{duration:.6,y:200,ease:"power2.out"},.1).from(".elestudio .text",{duration:.6,y:200,ease:"power2.out"},.2)}const f=select(".land .left .title");if(u)if(mq.matches){gsap.timeline({scrollTrigger:{trigger:f,start:"top 100%",end:"bottom"}}).from(".land .number",{duration:.6,y:200,ease:"power2.out"},"<").from(f,{duration:.8,y:200,ease:"power2.out"},.1).from(".land .text",{duration:.8,y:200,ease:"power2.out"},.2)}else{gsap.timeline({scrollTrigger:{trigger:f,start:"top 100%",end:"bottom"}}).from(".land .number",{duration:.3,y:200,ease:"power2.out"},"<").from(f,{duration:.6,y:200,ease:"power2.out"},.1).from(".land .text",{duration:.6,y:200,ease:"power2.out"},.2)}const g=select(".premios .premios__container");if(g)if(mq.matches){gsap.timeline({scrollTrigger:{trigger:g,start:"top 60%",end:"bottom"}}).from(".premios__container .number",{duration:.6,y:200,ease:"power2.out"},"<").from(".premios__container .premios",{duration:.8,y:200,ease:"power2.out"},.1).from(".premios__container .title",{duration:.8,y:200,ease:"power2.out"},.2).from(".premios__container .text",{duration:.8,y:200,ease:"power2.out"},.2)}else{gsap.timeline({scrollTrigger:{trigger:g,start:"top 60%",end:"bottom"}}).from(".premios__container .number",{duration:.3,y:200,ease:"power2.out"},"<").from(".premios__container .premios",{duration:.6,y:200,ease:"power2.out"},.1).from(".premios__container .title",{duration:.6,y:200,ease:"power2.out"},.2).from(".premios__container .text",{duration:.6,y:200,ease:"power2.out"},.2)}const p=select(".premios .servicios__container");if(p)if(mq.matches){gsap.timeline({scrollTrigger:{trigger:p,start:"top 80%",end:"bottom"}}).from(".servicios__container .number",{duration:.6,y:200,ease:"power2.out"},"<").from(".servicios__container .servicios",{duration:.8,y:200,ease:"power2.out"},.1).from(".servicios__container .text",{duration:.8,y:200,ease:"power2.out"},.2)}else{gsap.timeline({scrollTrigger:{trigger:p,start:"top 80%",end:"bottom"}}).from(".servicios__container .number",{duration:.3,y:200,ease:"power2.out"},"<").from(".servicios__container .servicios",{duration:.6,y:200,ease:"power2.out"},.1).from(".servicios__container .text",{duration:.6,y:200,ease:"power2.out"},.2)}const _=select(".premios .exposiciones__container");if(_)if(mq.matches){gsap.timeline({scrollTrigger:{trigger:_,start:"top 80%",end:"bottom"}}).from(".exposiciones__container .number",{duration:.6,y:200,ease:"power2.out"},"<").from(".exposiciones__container .exposiciones",{duration:.8,y:200,ease:"power2.out"},.1).from(".exposiciones__container .title",{duration:.8,y:200,ease:"power2.out"},.2).from(".exposiciones__container .text",{duration:.8,y:200,ease:"power2.out"},.2)}else{gsap.timeline({scrollTrigger:{trigger:_,start:"top 80%",end:"bottom"}}).from(".exposiciones__container .number",{duration:.3,y:200,ease:"power2.out"},"<").from(".exposiciones__container .exposiciones",{duration:.6,y:200,ease:"power2.out"},.1).from(".exposiciones__container .title",{duration:.6,y:200,ease:"power2.out"},.2).from(".exposiciones__container .text",{duration:.6,y:200,ease:"power2.out"},.2)}const h=select(".fichas");if(h)if(mq.matches){gsap.timeline({scrollTrigger:{trigger:h,start:"top 80%",end:"bottom"}}).from(".fichas .title",{duration:.6,y:200,ease:"power2.out"},"<").from(".fichas .atb",{duration:.8,y:200,ease:"power2.out"},.1).from(".fichas .text",{duration:.8,y:200,ease:"power2.out"},.2)}else{gsap.timeline({scrollTrigger:{trigger:h,start:"top 80%",end:"bottom"}}).from(".fichas .title",{duration:.3,y:200,ease:"power2.out"},"<").from(".fichas .atb",{duration:.6,y:200,ease:"power2.out"},.1).from(".fichas .text",{duration:.6,y:200,ease:"power2.out"},.2)}const w=select(".titleUp__title"),y=select(".limon"),b=select(".address__container .city"),L=select(".faqs__container .title"),v=gsap.timeline({defaults:{duration:.7,ease:"power1.inOut"}});return w&&"translate(0px, 0px)"!==w.style.transform&&v.from(".titleUp__title",{y:105,ease:"power2.out"},.7).from(".titleDown__title",{y:100,ease:"power2.out"},.7).from(".mantra__title",{y:100,ease:"power2.out"},.9).from(".play__title",{y:100,ease:"power2.out"},.9),y&&"translate(0px, 0px)"!==y.style.transform&&v.from(".limon",{y:100,ease:"power2.out"},.5).from(".especialistas",{y:100,ease:"power2.out"},.55).from(".alegria",{y:100,ease:"power2.out"},.6).from(".granada",{y:100,ease:"power2.out"},.65).from(".country",{y:100,ease:"power2.out"},.7).from(".catch",{y:100,ease:"power2.out"},.75).from(".star__container img",{y:100,ease:"power2.out"},.8),b&&"translate(0px, 0px)"!==b.style.transform&&v.from(".contact .mail__container .mail",{y:100,ease:"power2.out"},.5).from(".contact .address__container .city",{y:100,ease:"power2.out"},.5).from(".contact .address__container .address",{y:100,ease:"power2.out"},.5).from(".contact .faqs__container .faqs",{y:100,ease:"power2.out"},.5),L&&"translate(0px, 0px)"!==L.style.transform&&v.from(".faqs__container .title",{y:150,ease:"power2.out"},.5).from(".faqs__container .text",{y:280,ease:"power2.out"},.5),v}function register(){gsap.registerEffect({name:"liningIn",extendTimeline:!0,effect:e=>{gsap.to(e,{duration:.2,ease:"power2.in",x:0})}}),gsap.registerEffect({name:"liningOut",extendTimeline:!0,effect:e=>{gsap.to(e,{duration:.2,ease:"power2.out",x:"-100%"})}}),gsap.registerEffect({name:"marqueeAnim",extendTimeline:!0,effect:e=>{gsap.to(e,{duration:30,ease:"none",x:"-=1200",modifiers:{x:gsap.utils.unitize(e=>parseFloat(e)%500)},repeat:-1,yoyo:!0})}}),gsap.registerEffect({name:"mobileOpen",extendTimeline:!0,effect:e=>{gsap.to(e,{duration:.4,ease:"power2.inOut",xPercent:-100})}}),gsap.registerEffect({name:"mobileClose",extendTimeline:!0,effect:e=>{gsap.to(e,{duration:.4,ease:"power2.inOut",xPercent:0})}}),gsap.registerEffect({name:"arrowRight",extendTimeline:!0,effect:e=>{gsap.to(e,{duration:.4,ease:"power2.out",x:"160%"})}}),gsap.registerEffect({name:"arrowLeft",extendTimeline:!0,effect:e=>{gsap.to(e,{duration:.4,ease:"power2.out",x:0})}}),effecting()}function initSmoothScrollbar(){let e=Scrollbar.init(select("#viewport"));e.scrollTop=0,e.track.xAxis.element.remove(),ScrollTrigger.scrollerProxy(document.body,{scrollTop(o){return arguments.length&&(e.scrollTop=o),e.scrollTop}}),e.addListener(ScrollTrigger.update),mq.matches||anchor&&anchorLink.addEventListener("click",function(){e.scrollIntoView(anchor,{offsetLeft:34,offsetBottom:12,alignToTop:!1,onlyScrollIfNeeded:!0})})}function initImgLoader(){gsap.set(loader,{autoAlpha:1}),gsap.set(loaderInner2,{scaleY:.005,transformOrigin:"bottom"});const e=gsap.to(progressBar,{paused:!0,scaleX:0,ease:"none",transformOrigin:"right"});let o,t=0;const r=select("#main"),a=imagesLoaded(r);function s(t){gsap.to(e,{progress:t/o,duration:.3,ease:"power1.out"})}o=a.images.length,s(0),a.on("progress",function(){s(++t)}),a.on("done",function(e){gsap.set(progressBar,{autoAlpha:0,onComplete:initPageTransitions})})}function initLoader(){select("body").classList.remove("is-loading");const e=gsap.timeline({id:"tlLoaderIn",defaults:{duration:1.1,ease:"power2.out"}}),o=(select(".loader__image"),select(".loader__content"));e.set(o,{autoAlpha:1}).from(lines,{drawSVG:"50% 50%",stagger:.1}).to(lines,{fill:"#FCEBE2"});const t=gsap.timeline({id:"tlLoaderOut",defaults:{duration:1.5,ease:"power2.inOut"},onComplete:()=>initContent()}),r=select(".titleUp__title"),a=select(".limon"),s=select(".address__container"),n=select(".faqs__container .title");r?t.from(lines,{drawSVG:"50% 50%",stagger:.1}).to(lines,{fill:"#FCEBE2"}).to([loader,o],{yPercent:-100},.2).from("#main",{y:150},0).from(".titleUp__title",{y:100,ease:"power2.out"},.7).from(".titleDown__title",{y:100,ease:"power2.out"},.7).from(".mantra__title",{y:100,ease:"power2.out"},.9).from(".play__title",{y:100,ease:"power2.out"},.9):a?t.to([loader,o],{yPercent:-100},.2).from(lines,{drawSVG:"50% 50%",stagger:.1}).to(lines,{fill:"#FCEBE2"}).from("#main",{y:150},0).from(".limon",{y:100,ease:"power2.out"},.5).from(".especialistas",{y:100,ease:"power2.out"},.5).from(".alegria",{y:100,ease:"power2.out"},.5).from(".granada",{y:100,ease:"power2.out"},.5).from(".country",{y:100,ease:"power2.out"},.5).from(".catch",{y:100,ease:"power2.out"},.5).from(".star__container img",{y:100,ease:"power2.out"},.5):s?t.from(lines,{drawSVG:"50% 50%",stagger:.1}).to(lines,{fill:"#FCEBE2"}).to([loader,o],{yPercent:-100},.2).from("#main",{y:150},0).from(".contact .mail__container .mail",{y:100,ease:"power2.out"},.5).from(".contact .address__container .city",{y:100,ease:"power2.out"},.5).from(".contact .address__container .address",{y:100,ease:"power2.out"},.5).from(".contact .faqs__container .faqs",{y:100,ease:"power2.out"},.5):n?t.from(lines,{drawSVG:"50% 50%",stagger:.1}).to(lines,{fill:"#FCEBE2"}).to([loader,o],{yPercent:-100},.2).from("#main",{y:150},0).from(".faqs__container .title",{y:100,ease:"power2.out"},.5).from(".faqs__container .text",{y:260,ease:"power2.out"},.5):t.to([loader,o],{yPercent:-100},.2).from("#main",{y:150},0),gsap.timeline().add(e).add(t)}function initContent(){select("body").classList.remove("is-loading"),register()}function pageTransitionIn({container:e}){console.log("pageTransitionIn"),loader.classList.remove("done");const o=gsap.timeline({defaults:{duration:.7,ease:"power1.inOut"}});return o.fromTo(loader,{yPercent:-100},{yPercent:0}).fromTo(loaderMask,{yPercent:80},{yPercent:0},0).to(e,{y:150},0),o}function pageTransitionOut({container:e}){console.log("pageTransitionOut");const o=gsap.timeline({defaults:{duration:.7,ease:"power1.inOut"},onComplete:function(){setTimeout(()=>{gsap.set(loader,{yPercent:-100})},1e3),setTimeout(()=>{gsap.set(loaderMask,{yPercent:0})},1e3)}});return o.to(loader,{yPercent:100}).to(loaderMask,{yPercent:-80},0).from(e,{y:-150},0),o}function initPageTransitions(){barba.hooks.before(()=>{select("html").classList.add("is-transitioning")}),barba.hooks.after(()=>{select("html").classList.remove("is-transitioning")}),barba.hooks.enter(()=>{mq.matches&&window.scrollTo(0,0)}),barba.use(barbaPrefetch),barba.init({timeout:1e4,views:[{namespace:"estudio",beforeEnter(){mq.matches?(menuMob.classList.add("two"),logoMob.classList.add("two")):(colorMenu1.forEach(e=>{e.classList.add("one")}),colorMenu2.forEach(e=>{e.classList.add("one"),e.classList.add("nop")}),colorMenu3.forEach(e=>{e.classList.add("one")}),logo.forEach(e=>{e.classList.add("one")}))},beforeLeave(){mq.matches?(menuMob.classList.remove("two"),logoMob.classList.remove("two")):(colorMenu1.forEach(e=>{e.classList.remove("one")}),colorMenu2.forEach(e=>{e.classList.remove("one"),e.classList.remove("nop")}),colorMenu3.forEach(e=>{e.classList.remove("one")}),logo.forEach(e=>{e.classList.remove("one")}))}},{namespace:"contacto",beforeEnter(){mq.matches?(menuMob.classList.add("one"),logoMob.classList.add("one")):(colorMenu1.forEach(e=>{e.classList.add("one")}),colorMenu2.forEach(e=>{e.classList.add("one")}),colorMenu3.forEach(e=>{e.classList.add("one"),e.classList.add("nop")}),logo.forEach(e=>{e.classList.add("one")}))},beforeLeave(){mq.matches?(menuMob.classList.remove("one"),logoMob.classList.remove("one")):(colorMenu1.forEach(e=>{e.classList.remove("one")}),colorMenu2.forEach(e=>{e.classList.remove("one")}),colorMenu3.forEach(e=>{e.classList.remove("one"),e.classList.remove("nop")}),logo.forEach(e=>{e.classList.remove("one")}))}},{namespace:"proyectos",beforeEnter(){mq.matches?(menuMob.classList.add("two"),logoMob.classList.add("two")):(colorMenu1.forEach(e=>{e.classList.add("two"),e.classList.add("nop")}),colorMenu2.forEach(e=>{e.classList.add("two")}),colorMenu3.forEach(e=>{e.classList.add("two")}),logo.forEach(e=>{e.classList.add("two")}))},beforeLeave(){mq.matches?(menuMob.classList.remove("two"),logoMob.classList.remove("two")):(colorMenu1.forEach(e=>{e.classList.remove("two"),e.classList.remove("nop")}),colorMenu2.forEach(e=>{e.classList.remove("two")}),colorMenu3.forEach(e=>{e.classList.remove("two")}),logo.forEach(e=>{e.classList.remove("two")}))}},{namespace:"faqs",beforeEnter(){mq.matches?(menuMob.classList.add("one"),logoMob.classList.add("one")):(colorMenu1.forEach(e=>{e.classList.add("one")}),colorMenu2.forEach(e=>{e.classList.add("one")}),colorMenu3.forEach(e=>{e.classList.add("one")}),logo.forEach(e=>{e.classList.add("one")}))},beforeLeave(){mq.matches?(menuMob.classList.remove("one"),logoMob.classList.remove("one")):(colorMenu1.forEach(e=>{e.classList.remove("one")}),colorMenu2.forEach(e=>{e.classList.remove("one")}),colorMenu3.forEach(e=>{e.classList.remove("one")}),logo.forEach(e=>{e.classList.remove("one")}))}},{namespace:"privacidad",beforeEnter(){mq.matches?(menuMob.classList.add("one"),logoMob.classList.add("one")):(colorMenu1.forEach(e=>{e.classList.add("one")}),colorMenu2.forEach(e=>{e.classList.add("one")}),colorMenu3.forEach(e=>{e.classList.add("one")}),logo.forEach(e=>{e.classList.add("one")}))},beforeLeave(){mq.matches?(menuMob.classList.remove("one"),logoMob.classList.remove("one")):(colorMenu1.forEach(e=>{e.classList.remove("one")}),colorMenu2.forEach(e=>{e.classList.remove("one")}),colorMenu3.forEach(e=>{e.classList.remove("one")}),logo.forEach(e=>{e.classList.remove("one")}))}},{namespace:"cookies",beforeEnter(){mq.matches?(menuMob.classList.add("one"),logoMob.classList.add("one")):(colorMenu1.forEach(e=>{e.classList.add("one")}),colorMenu2.forEach(e=>{e.classList.add("one")}),colorMenu3.forEach(e=>{e.classList.add("one")}),logo.forEach(e=>{e.classList.add("one")}))},beforeLeave(){mq.matches?(menuMob.classList.remove("one"),logoMob.classList.remove("one")):(colorMenu1.forEach(e=>{e.classList.remove("one")}),colorMenu2.forEach(e=>{e.classList.remove("one")}),colorMenu3.forEach(e=>{e.classList.remove("one")}),logo.forEach(e=>{e.classList.remove("one")}))}},{namespace:"404",beforeEnter(){mq.matches?headerMob.classList.add("error"):header.classList.add("error")},beforeLeave(){mq.matches?headerMob.classList.remove("error"):header.classList.remove("error")}}],transitions:[{once(){initLoader(),mq.matches||initSmoothScrollbar()},async leave({current:e}){await pageTransitionIn(e)},enter({next:e}){if(pageTransitionOut(e),initContent(),!mq.matches){Scrollbar.init(select("#viewport")).setPosition(0,0)}}}]})}initImgLoader();