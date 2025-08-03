
  const toggleBtn = document.getElementById('theme-toggle')
  const toggleBtn1 = document.getElementById('slider-1')
  const toggleBtn2 = document.getElementById('slider-2')
  const downloadBtn = document.getElementById('downloader')
  const finalDownloadBtn = document.getElementById('final-downloader')
  const modal = document.getElementById('modal')
  const closeModalBtn = document.getElementById('exit')

  toggleBtn1.addEventListener('click', () => {
    if(toggleBtn1.checked) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('white-mode');
    } 
    
  });

  toggleBtn2.addEventListener('click', () => {
    if (toggleBtn2.checked) {
      document.body.classList.add('white-mode');
      document.body.classList.remove('dark-mode');
    }
  });

  modal.style.display = 'none';

  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() => {
      modal.style.display = 'inline';
      
    }, 1000);
  })

  finalDownloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
    // alert('Download started!');
    setTimeout(() => {
      alert('Download started!');
    }, 2000);
  })

  closeModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
  })