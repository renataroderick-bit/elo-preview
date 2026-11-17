document.querySelectorAll('.whatsapp').forEach(link=>{const message=link.dataset.message||'Olá! Conheci a Jornada ELO e gostaria de saber mais sobre o questionário e a conversa de alinhamento.';link.href='https://wa.me/5511999389151?text='+encodeURIComponent(message)});
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.questions details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)document.querySelectorAll('.questions details').forEach(other=>{if(other!==item)other.open=false})}));

// Move only the background layer, leaving the navigation and copy in normal scroll flow.
(()=>{
 const hero=document.querySelector('.hero');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let scheduled=false;
 function paint(){
  scheduled=false;
  if(reduced.matches){hero.style.removeProperty('--hero-shift');return;}
  const bounds=hero.getBoundingClientRect();
  if(bounds.bottom<0||bounds.top>window.innerHeight)return;
  const mobile=window.innerWidth<=520;
  const shift=Math.min(mobile?90:145,Math.max(0,-bounds.top)*(mobile?.14:.22));
  hero.style.setProperty('--hero-shift',shift.toFixed(2)+'px');
 }
 function requestPaint(){if(!scheduled){scheduled=true;requestAnimationFrame(paint);}}
 window.addEventListener('scroll',requestPaint,{passive:true});
 window.addEventListener('resize',requestPaint,{passive:true});
 reduced.addEventListener('change',requestPaint);
 paint();
})();
