document.addEventListener('DOMContentLoaded',()=>{
  const ta=document.getElementById('textArea');
  const out=document.getElementById('out');
  const subj=document.getElementById('titleInput');
  document.getElementById('show').addEventListener('click',()=>{
    const s=subj.value||'No Subject';
    const t=ta.value||'';
    out.innerHTML='<h4>'+escapeHtml(s)+'</h4><p>'+escapeHtml(t).replace(/\n/g,'<br>')+'</p>'
  });
  document.getElementById('clear').addEventListener('click',()=>{ta.value='';out.innerHTML=''});
  function escapeHtml(s){return (s||'').replace(/[&<>"]/g,m=>({&:'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[m]))}
});