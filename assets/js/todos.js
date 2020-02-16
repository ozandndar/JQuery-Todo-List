var todo = [ 'Hello World!', 'Lorem Ipsum', 'Dolor Sit Amet', 'By MardinLi Sersery' ];

function init() {
  todo.forEach((message) => {
    $('ul').append(`<li><span><i class='fa fa-trash'></i></span> ${message}</li>`);
  });
}

init();

$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(e) {
  $(this).parent().addClass("hide");
  var t = $(this).parent();
  setTimeout(function() {
    $(t).remove();
    console.log("test");
  }, 400);
  
  e.stopPropagation();
});

$('#add').on('keypress', function(event) {
  if (event.which === 13) {
    var newTodo = $(this).val();
    $('ul').append(`<li><span><i class='fa fa-trash'></i></span> ${newTodo}</li>`);
    $(this).val('');
  }
});

$('.fa-plus').click(function() {
  // $("input[type='text']").fadeToggle();
  $("input[type='text']").toggleClass("hide");
});


