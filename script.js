const form = document.getElementById('signupForm');


form.addEventListener('submit', function (event) {
    event.preventDefault()
    const formData = new FormData(form);

    const output = document.getElementById('output');
    output.innerHTML = '';

    for (const [key, value] of formData.entries()) {
        output.innerHTML += `${key}: ${value}<br>`;
    }
});




<div id="myModal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="modalImg">
  </div>
  
  <!-- Add multiple images with the "myImg" class -->
  <img class="myImg" src="img2.jfif">
  <img class="myImg" src="82.jpg">
    <img class="myImg" src="img1.jfif">


const readMoreButtons = document.querySelectorAll('.read-more');


    readMoreButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const summary = this.parentNode.querySelector('.summary');
        const fullDetails = this.parentNode.querySelector('.full-details');


        summary.style.display = 'none';
        fullDetails.style.display = 'block';
      });
    });

    var zoomParagraph = document.getElementById('zoom-paragraph');
var zoomInBtn = document.getElementById('zoom-in-btn');
var zoomOutBtn = document.getElementById('zoom-out-btn');

zoomInBtn.addEventListener('click', function() {
  var currentFontSize = parseInt(window.getComputedStyle(zoomParagraph).fontSize);
  zoomParagraph.style.fontSize = (currentFontSize + 10) + 'px';
});

zoomOutBtn.addEventListener('click', function() {
  var currentFontSize = parseInt(window.getComputedStyle(zoomParagraph).fontSize);
  zoomParagraph.style.fontSize = (currentFontSize - 10) + 'px';
});




var table = document.getElementById("table"),rIndex;
            
for(var i = 1; i < table.rows.length; i++){
    table.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        console.log(rIndex);

        document.getElementById("fname").value = this.cells[1].innerHTML;
        document.getElementById("lname").value = this.cells[2].innerHTML;
        document.getElementById("country").value = this.cells[3].innerHTML;
        document.getElementById("mNumber").value = this.cells[4].innerHTML;
    };
}
            
            function editRow(){
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("fname").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("lname").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("country").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("mNumber").value;
}


function editTableDisplay(){
    document.querySelector('.editTable').setAttribute('style', 'display: block;')
}
