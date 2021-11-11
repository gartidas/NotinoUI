# NotinoUI

## Instructions

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

## Source

### App.tsx

```tsx
import React from "react";

import Todo from './Todo';

// rework this into regular api call, feel free to use any open api
var todos = (): Promise<{id: string; title: string;}[]> => new Promise((res) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        title: "Go shopping",
      },
      {
        id: "2",
        title: "Job interview",
      },
      {
        id: "3",
        title: "Prepare homework",
      },
    ]);
  }, 100);
});

function App() {
  const [state, setState] = React.useState<{ id: string; title: string }[]>([]);

  React.useEffect(() => {
    (async () => {
      var awaitedTodos = await todos();
      for (var i = 0; i < awaitedTodos.length; i++) {
        setState([...state, awaitedTodos[i]]);
      }
    })()
  })

  return (
    <div>
      {state.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
```

### index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### Todo.tsx

```tsx
import React from "react";

class Todo extends React.Component<any> {
	shouldComponentUpdate(prevProps: any) {
	if(this.props != prevProps) {
		return true;
	}
		return false;
	}

	handleOnClick() {
		window.location.href = '/detail'
	}

	render() {

	return (
		<div>
			<div onClick={this.handleOnClick}>
			{this.props.todo.title}
			</div>
		</div>
	);
	}
}

export default Todo;
```
