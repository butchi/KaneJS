window.licker = window.licker || {};
((ns) => {
  console.log('Hello, world!');

  var text = 'the__a_r_t of com-pu--ter_pro-gram--ming';

  var parsed = $_$.parse(text, {
    priority: [' ', '_', '-'],
  });

  console.log(parsed);

  var renderedJson = $_$.render(parsed, {
    format: 'json',
  });

  console.log(renderedJson);

  var renderedHtml = $_$.render(parsed, {
    format: 'html',
  });

  $(() => {
    $('.rendered').html(renderedHtml);
  });

  var renderedIndent = $_$.render(parsed, {
    format: 'indent',
  });

  console.log(renderedIndent);

  console.log('Thanks, world!');
})(window.licker);
