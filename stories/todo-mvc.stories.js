import { html } from 'lit';
import '../src/todo-mvc.js';

export default {
  title: 'TodoMvc',
  component: 'todo-mvc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <todo-mvc
      style="--todo-mvc-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </todo-mvc>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
