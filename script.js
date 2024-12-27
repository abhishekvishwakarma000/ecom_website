
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#loader").style.display = "flex";
  setTimeout(function () {
    document.querySelector("#loader").style.display = "none";
    // loader.style.top = "-100%";
  }, 2000);
});

let profile = document.querySelector('.profile-container');


document.querySelector('.taskbar-profile').onclick = () =>{
 profile.classList.toggle('active');
 
}


//------------images----------------

// JSON फाइल से इमेज डेटा लोड करें

fetch('images.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById('gallery');

    images.forEach(image => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${image.url}" alt="${image.title}">
        <h4>${image.title}</h4>
        <p>${image.price}</p>
      `;

      gallery.appendChild(card);
    });
  })
  
//-----------images end-------------------------















 


 

 
 