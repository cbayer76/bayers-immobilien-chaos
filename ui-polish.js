'use strict';
function displayGermanDates(text){return String(text).replace(/\b(\d{4})-(\d{2})-(\d{2})\b/g,(_,y,m,d)=>`${d}.${m}.${y}`);}
let masterDataOrigin=false;
const goBeforePolish=go;go=function(v){if(view==='masterdata')masterDataOrigin=true;if(v==='home')masterDataOrigin=false;goBeforePolish(v);};
function polishInterface(){
 if(!document.createTreeWalker)return;
 const walker=document.createTreeWalker(app,NodeFilter.SHOW_TEXT);let node;
 while(node=walker.nextNode()){if(node.parentElement?.closest('input,textarea,script,style,pre,code'))continue;node.nodeValue=displayGermanDates(node.nodeValue);}
 const heading=app.querySelector('h1');
 if(heading&&view!=='home'){
  const nav=document.createElement('nav');nav.className='page-breadcrumbs';nav.setAttribute('aria-label','Navigationspfad');
  const add=(label,target)=>{const b=document.createElement('button');b.type='button';b.dataset.go=target;b.textContent=label;nav.append(b);const sep=document.createElement('span');sep.textContent='›';sep.setAttribute('aria-hidden','true');nav.append(sep);};
  add('Startseite','home');if(masterDataOrigin&&view!=='masterdata'){add('Stammdaten und Vorlagen','masterdata');if(['houses','tenants','contracts'].includes(view)){const backButton=app.querySelector('button.back');if(backButton)backButton.dataset.go='masterdata';}}
  if(['units','tenant','unit-edit','unit-new','house-edit'].includes(view)){add('Häuser','houses');if(['tenant','unit-edit','unit-new'].includes(view)&&house())add(house().name,'units');}
  if(['tenant-profile','lease-edit'].includes(view))add('Mieter','tenants');
  if(view==='standard-checklists'&&!masterDataOrigin)add('Stammdaten und Vorlagen','masterdata');
  const current=document.createElement('span');current.textContent=heading.textContent;current.setAttribute('aria-current','page');nav.append(current);app.prepend(nav);
  if(!heading.closest('.tenant-list-heading,.section-heading')){const header=document.createElement('div');header.className='page-heading';heading.before(header);header.append(heading);const primary=app.querySelector(':scope > .actions > .primary,:scope > button.primary');if(primary)header.append(primary);}
 }
 const removals=[...app.querySelectorAll(':scope > button[data-trash-type]')];if(removals.length){const more=document.createElement('details');more.className='manage-danger';const summary=document.createElement('summary');summary.textContent='Weitere Aktionen · Papierkorb';more.append(summary);const actions=document.createElement('div');actions.className='actions';removals.forEach(b=>{b.classList.add('danger-action');actions.append(b);});more.append(actions);app.append(more);}
 const badge=(parent,label,tone)=>{const s=document.createElement('span');s.className='record-status '+tone;s.textContent=label;parent.append(s);};
 if(view==='units')app.querySelectorAll('button[data-unit]').forEach(b=>{const u=data.units.find(u=>u.id===Number(b.dataset.unit));if(!u)return;const card=b.closest('.card'),active=data.leases.some(l=>l.unit===u.id&&(l.actualStartUnknown||l.start<=todayISO())&&(!l.end||l.end>=todayISO()));badge(card.querySelector('h2'),active?'Vermietet':'Leerstand',active?'ok':'pending');});
 if(view==='tenants')app.querySelectorAll('.tenant-row').forEach(row=>{if(row.querySelector('.tenant-unassigned'))badge(row.querySelector('h2'),'Ohne Zuordnung','pending');});
 if(view==='tenant')app.querySelectorAll('button[data-lease-edit]').forEach(b=>{const l=data.leases.find(l=>l.id===b.dataset.leaseEdit);if(l&&(l.actualStartUnknown||l.depositUnknown))badge(b.closest('article').querySelector('h2'),'Angaben fehlen','pending');});
 function empty(title,text,label,action){const box=document.createElement('section');box.className='empty-state';const h=document.createElement('h2');h.textContent=title;const p=document.createElement('p');p.textContent=text;box.append(h,p);if(label){const b=document.createElement('button');b.className='primary';b.textContent=label;b.type='button';b.addEventListener('click',action);box.append(b);}app.append(box);}
 if(view==='bills'&&!data.bills.some(b=>b.date.slice(0,7)===billListMonth))empty('Noch keine Rechnungen in diesem Monat','Erfassen Sie eine Rechnung oder wählen Sie einen anderen Rechnungsmonat.','Rechnung erfassen',()=>{const form=app.querySelector('#bill-form');form.scrollIntoView({behavior:'smooth',block:'start'});form.querySelector('select,input')?.focus();});
 if(view==='houses'&&!data.houses.length)empty('Noch keine Gebäude','Legen Sie das erste Gebäude an und ergänzen Sie anschließend die Wohneinheiten.','Haus anlegen',()=>go('house-new'));
 if(view==='units'&&!data.units.some(u=>u.house===houseId))empty('Noch keine Wohneinheiten','Ergänzen Sie die Wohnungen in diesem Gebäude.','Wohneinheit anlegen',()=>go('unit-new'));
 if(view==='tenants'&&!data.tenants.length)empty('Noch keine Mieter','Legen Sie zuerst einen Mieter an. Die Wohnung weisen Sie anschließend zu.','Mieter anlegen',()=>{editingTenant='';go('tenant-profile');});
 if(view==='contracts'&&!data.contracts.some(c=>(!contractHouse||c.house===contractHouse)&&(!contractType||c.type===contractType))){const old=[...app.querySelectorAll('.card')].find(x=>x.textContent==='Keine Verträge für diese Auswahl vorhanden.');old?.remove();empty('Noch keine Dokumente für diese Auswahl','Legen Sie einen Vertrag ab oder wählen Sie einen anderen Filter.','Dokument hinzufügen',()=>{const form=app.querySelector('#contract-form');form.closest('details').open=true;form.scrollIntoView({behavior:'smooth',block:'start'});form.querySelector('select,input')?.focus();});}
}
const renderBeforePolish=render;render=function(){renderBeforePolish();polishInterface();};render();
