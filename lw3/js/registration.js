class RegistrationForm {
  constructor(form_element) {
    this.form = form_element;
    this.form_email = form_element.getElementsByClassName('form_email')[0].value;
    this.form_password = form_element.getElementsByClassName('form_password')[0].value;
    this.form_password_repeat = form_element.getElementsByClassName('form_password_repeat')[0].value;
    this.form_checkbox = form_element.getElementsByClassName('form_checkbox')[0].value;
  }
  validate(){
    
  }
}

var submit_registration = document.getElementById('submit_registration');
submit_registration.onclick = function () {
  var form = new RegistrationForm(document.getElementsByClassName('auth_form')[0]);
  return false;
};








