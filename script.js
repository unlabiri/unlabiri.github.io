// theme toggle, copy-email and résumé preview for index.html
(()=>{
  const root=document.documentElement, t=document.getElementById('theme');
  const set=d=>{root.dataset.theme=d?'dark':'';t.textContent=d?'light':'dark'};
  set(matchMedia('(prefers-color-scheme: dark)').matches);
  t.onclick=()=>set(root.dataset.theme!=='dark');
  const note=document.getElementById('copied');let tm;
  document.getElementById('copy').onclick=async()=>{
    try{await navigator.clipboard.writeText('aljabiri.ne@gmail.com');note.textContent='copied ✓'}catch(e){note.textContent='couldn’t copy'}
    clearTimeout(tm);tm=setTimeout(()=>note.textContent='',2000);
  };
  const show=()=>{const f=document.createElement('iframe');f.src='assets/resume.pdf#view=FitH';f.title='Ada Aljabiri résumé';document.getElementById('viewer').replaceChildren(f)};
  if(location.protocol==='file:'){show()}else{fetch('assets/resume.pdf',{method:'HEAD'}).then(r=>{if(r.ok)show()}).catch(()=>{})}
})();
