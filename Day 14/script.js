// displaying messge on submit
  const form = document.querySelector('form');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const para = document.querySelector('p');
  
  form.onsubmit = function(e) {
    if (fname.value === '' || lname.value === '') {
      e.preventDefault();
      para.textContent = 'You need to fill in both names!';
      para.style.color="rgb(168, 9, 9)";
      setTimeout(() => {
        para.innerHTML=``;
    }, 1000);
    }
    else{
        e.preventDefault();
        para.innerHTML=`Your form has been submitted`;
        para.style.color="rgb(10, 216, 10)";
        form.reset();
        setTimeout(() => {
            para.innerHTML=``;
        }, 1000);
    }
  }
//   changing background color
  function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
function bgChange() {
    alert('It will change the background color');
    para.innerHTML=``;
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ',0.3)';
    document.querySelector('.wrapper').style.backgroundColor = rndCol;
    para.innerHTML=``;
  }

  
  //drag and drop
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }
