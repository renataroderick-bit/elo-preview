document.querySelectorAll('.whatsapp').forEach(link=>{const message=link.dataset.message||'Olá! Conheci a Jornada ELO e gostaria de saber mais sobre o questionário e a conversa de alinhamento.';link.href='https://wa.me/5511999389151?text='+encodeURIComponent(message)});
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.questions details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)document.querySelectorAll('.questions details').forEach(other=>{if(other!==item)other.open=false})}));

// Animate only photo layers; text and controls retain their normal scroll flow.
(()=>{
 const sections=[...document.querySelectorAll('.hero,.editorial-break,.pause,.offer-panel,.closing')];
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let scheduled=false;
 function paint(){
  scheduled=false;
  const mobile=window.innerWidth<=650;
  const limit=mobile?48:90;
  sections.forEach(section=>{
   if(reduced.matches){section.style.removeProperty('--photo-shift');section.style.removeProperty('--hero-shift');return;}
   const bounds=section.getBoundingClientRect();
   if(bounds.bottom<0||bounds.top>window.innerHeight)return;
   const progress=(window.innerHeight/2-bounds.top-bounds.height/2)/((window.innerHeight+bounds.height)/2);
   const shift=Math.max(-limit,Math.min(limit,progress*limit));
   section.style.setProperty('--photo-shift',shift.toFixed(2)+'px');
   if(section.classList.contains('hero'))section.style.setProperty('--hero-shift',Math.min(mobile?90:145,Math.max(0,-bounds.top)*(mobile?.14:.22)).toFixed(2)+'px');
  });
 }
 function requestPaint(){if(!scheduled){scheduled=true;requestAnimationFrame(paint);}}
 window.addEventListener('scroll',requestPaint,{passive:true});
 window.addEventListener('resize',requestPaint,{passive:true});
 reduced.addEventListener('change',requestPaint);
 paint();
})();
