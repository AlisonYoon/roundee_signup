// Avoid `console` errors in browsers that lack a console.
function pwd_show() {
  if(document.getElementById('sh').value=='1'){
  document.getElementById('showhide').src='assets/images/show_password.png';
  document.getElementById('sh').value='2';
  document.getElementById('u_pwd').type='text';

} else {
  document.getElementById('sh').value='1';
  document.getElementById('showhide').src='assets/images/hide_password.png';
  document.getElementById('u_pwd').type='password';
}
}
