const APIUtil = {
  getTodos: () => (
    $.ajax(
      { method: 'GET',
       url: 'api/todos' })
    ),
  createTodo: todo => (
    $.ajax({
      method: 'POST',
      url: 'api/todos',
      data: {todo: todo}
    })
  )
};

export default APIUtil;
