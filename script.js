
  const toggleBtn = document.getElementById('toggle')
  const downloadBtn = document.getElementById('downloader')
  const form = document.getElementById('form')
  const modal = document.getElementById('modal')
  const closeModalBtn = document.getElementById('exit')

  toggle.addEventListener('change', (event) => {
    // Toggle the class 'dark' on the body element
    event.preventDefault();
    document.body.classList.toggle('light');
    
  });

  

  modal.style.display = 'none';

  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() => {
      modal.style.display = 'block';
      
    }, 500);
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();

     // Check if form is valid
  if (!form.checkValidity()) {
    form.reportValidity(); // shows native HTML5 validation
    return form;
    console.log('Form is invalid');
  }

    modal.style.display = 'none';
    // alert('Download started!');
    setTimeout(() => {
      alert('Download started!');
    }, 1000);
  })

  closeModalBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    modal.style.display = 'none';
  })