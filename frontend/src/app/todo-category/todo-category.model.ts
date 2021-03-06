import { TodoItem } from '../todo-item/todo-item.model';

export class TodoCategory {
    id: number;
    title: string;
    todos: TodoItem[] = [];
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
