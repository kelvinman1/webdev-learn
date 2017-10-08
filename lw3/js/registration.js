function validEmail(email){
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  return pattern.test(email);
}

class RegistrationForm {
  constructor(form_element) {
    this.form = form_element;
    this.form_email = form_element.getElementsByClassName('form_email')[0].value;
    this.form_password = form_element.getElementsByClassName('form_password')[0].value;
    this.form_password_repeat = form_element.getElementsByClassName('form_password_repeat')[0].value;
    this.form_checkbox = form_element.getElementsByClassName('form_checkbox')[0].checked;
  }
  validate() {
    if (!validEmail(this.form_email)){
      this.error_msg = 'Не корректный email!';
      return false;
    }
    
    if (this.form_password.length < 6){
      this.error_msg = 'Пароль должен быть длиннее 6 символов!';
      return false;
    }
    
    if (this.form_password !== this.form_password_repeat){
      this.error_msg = 'Пароль не совпадает!';
      return false;
    }
    
    if (!this.form_checkbox){
      this.error_msg = 'Вы не согласны с правилами сайта!';
      return false;
    }
    
    return true;
  }
  success() {
    alert('Вы зарегистрированы.');
  }
  error() {
    alert(this.error_msg);
  }
}

var submit_registration = document.getElementById('submit_registration');
submit_registration.onclick = function () {
  var form = new RegistrationForm(document.getElementsByClassName('auth_form')[0]);
  if (form.validate())
    form.success();
  else
    form.error();
  return false;
};








