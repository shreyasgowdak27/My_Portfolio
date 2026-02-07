document.addEventListener('DOMContentLoaded',()=>{
  // year
  document.getElementById('year').textContent = new Date().getFullYear()

  // theme toggle
  const themeToggle = document.getElementById('theme-toggle')
  const root = document.documentElement
  const saved = localStorage.getItem('theme')
  if(saved) root.setAttribute('data-theme', saved)
  themeToggle.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    if(cur === 'dark') root.setAttribute('data-theme','dark')
    else root.removeAttribute('data-theme')
    localStorage.setItem('theme', cur)
  })

  // skill modals - Java and MySQL
  const skillLinks = document.querySelectorAll('.skill-link')
  const javaModal = document.getElementById('java-modal')
  const mysqlModal = document.getElementById('mysql-modal')
  
  skillLinks.forEach(skill => {
    skill.addEventListener('click', (e) => {
      e.preventDefault()
      const href = skill.getAttribute('href')
      if (href.includes('Java_programs') || href.includes('day4') || href.includes('Day5')) {
        javaModal.style.display = 'flex'
      } else if (href.includes('mySQL')) {
        mysqlModal.style.display = 'flex'
      }
    })
  })
  
  // close modals
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.modal').style.display = 'none'
    })
  })
  
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none'
    })
  })

  // project filters
  const filterButtons = document.querySelectorAll('.project-tools button')
  const projectCards = document.querySelectorAll('.project-card')
  filterButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterButtons.forEach(b=>b.classList.remove('active'))
      btn.classList.add('active')
      const f = btn.getAttribute('data-filter')
      projectCards.forEach(card=>{
        if(f==='all' || card.dataset.tags.includes(f)) card.style.display = ''
        else card.style.display = 'none'
      })
    })
  })
})
