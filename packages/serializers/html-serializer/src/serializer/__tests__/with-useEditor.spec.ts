import { createTodoListPlugin } from '../../../../../elements/list/src/todo-list/createTodoListPlugin';
import { createEditorPlugins } from '../../../../../plate/src/utils/createEditorPlugins';
import { serializeHTMLFromNodes } from '../serializeHTMLFromNodes';

it('serialize elements using useSlateStatic', () => {
  const plugins = [createTodoListPlugin()];
  const editor = createEditorPlugins({ plugins });
  const render = serializeHTMLFromNodes(editor, {
    plugins,
    nodes: [
      {
        type: 'action_item',
        checked: true,
        children: [{ text: 'Slide to the right.' }],
      },
    ],
  });

  expect(render).toBe(
    `<div class="slate-TodoListElement slate-TodoListElement-rootChecked slate-action_item"><div contenteditable="false" class="slate-TodoListElement-checkboxWrapper"><input type="checkbox" class="slate-TodoListElement-checkbox" checked=""/></div><span class="slate-TodoListElement-text" contenteditable="true">Slide to the right.</span></div>`
  );
});
