'use strict';

function hello() {
  return 'world';
};

var fb = new Firebase('https//verbiage.firebaseio.com/');

$('form').submit(function (e) {
  var $form = $(e.target),
      $nameInput = $form.find('input[name="name"]'),
      $textInput = $form.find('input[name="text"]'),
      name   = $nameInput.val(),
      text   = $textInput.val();

  $textInput.val('');

  fb.push({name: name, text: text});
  e.preventDefault();
});

fb.once('value', function (snap) {
  var messages = snap.val();

  _.forEach(messages, function (m) {
    addChatMessage(m.name, m.text);
  });
});
