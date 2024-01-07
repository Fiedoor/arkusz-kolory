function s1() {
  var a = document.getElementById('numer').value;
  document.getElementById('1').style.backgroundColor = 'hsl(' + a + ', 100%, 50%)';
  document.getElementById('2').style.backgroundColor = 'hsl(' + a + ', 80%, 50%)';
  document.getElementById('3').style.backgroundColor = 'hsl(' + a + ', 60%, 50%)';
  document.getElementById('4').style.backgroundColor = 'hsl(' + a + ', 40%, 50%)';
  document.getElementById('5').style.backgroundColor = 'hsl(' + a + ', 20%, 50%)';
}
