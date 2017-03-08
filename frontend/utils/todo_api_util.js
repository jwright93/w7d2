const APIUtil = {
  getTodos: () => (
    $.ajax(
      { method: 'GET',
       url: 'api/todos',
       dataType: 'json'
     })
    ),
  createTodo: todo => (
    $.ajax({
      method: 'POST',
      url: 'api/todos',
      dataType: 'json',
      data: {todo: todo}
    })
  )
};

export default APIUtil;
