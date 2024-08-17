$(document).ready(function () {
  $('.actions').append('<a href="/" class="cancel">Cancel</a>');

  $('#EntityFormPanel').prepend('<h2 class="form-title">Contact Us</h2>');

  $('input[type="text"]').addClass('form-text-input');
  $('textarea').addClass('form-textarea-input');
  $('select').addClass('form-select-input');
});
