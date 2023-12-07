document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('cc-btn');

  function colorChanger() {
      document.body.style.backgroundColor = checkbox.checked ? 'black' : '';
  }

  checkbox.addEventListener('change', colorChanger);
});

let date = new Date();
let hour=date.getHours();
let min=date.getMinutes();
let Current_time = date + hour + min;

alert("Current Time is : "+ Current_time);