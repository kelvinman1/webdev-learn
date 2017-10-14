function validEmail(email){
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  return pattern.test(email);
}

class RegistrationForm {
  constructor(formElement) {
    this.form = formElement;
    this.formEmail = formElement.getElementsByClassName('form_email')[0].value;
    this.formPassword = formElement.getElementsByClassName('form_password')[0].value;
    this.formPasswordRepeat = formElement.getElementsByClassName('form_password_repeat')[0].value;
    this.formCheckbox = formElement.getElementsByClassName('form_checkbox')[0].checked;
  }
  validate() {
    if (!validEmail(this.formEmail)){
      this.errorMsg = 'Не корректный email!';
      return false;
    }
    
    if (this.formPassword.length < 6){
      this.errorMsg = 'Пароль должен быть длиннее 6 символов!';
      return false;
    }
    
    if (this.formPassword !== this.formPasswordRepeat){
      this.errorMsg = 'Пароль не совпадает!';
      return false;
    }
    
    if (!this.formCheckbox){
      this.errorMsg = 'Вы не согласны с правилами сайта!';
      return false;
    }
    
    return true;
  }
  success() {
    alert('Вы зарегистрированы.');
  }
  error() {
    alert(this.errorMsg);
  }
}

document.getElementById('submit_registration').onclick = function () {
  var form = new RegistrationForm(document.getElementsByClassName('auth_form')[0]);
  if (form.validate()) {
    form.success();
  }
  else {
    form.error();
  }
  return false;
};








