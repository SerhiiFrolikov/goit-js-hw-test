import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { v4 as uuidv4 } from 'uuid';
import { refs } from "./refs";
import storage from "./storage";


let data = {};
const KEY = "save-todo";

refs.form.addEventListener("input", onSaveTodo);
refs.form.addEventListener("submit", onSubmit);

initData();

function onSaveTodo(evt) {
    const { name, value } = evt.target;
    data[name] = value;
    storage.save(KEY, { ...data, id:uuidv4() });
};
function initData() {
    const savedTodo = storage.load(KEY);
    if (savedTodo) {
        for (const key in savedTodo) {
            refs.form[key].value = savedTodo[key];
            data[key] = savedTodo[key];
        }
    }
}

function onSubmit(e) { 
    e.preventDefault();
    if (!data.text || !data.priority) {
        Notify.failure('Заповніть всі поля форми');
        return;
    }
    renderData(data);
    data = {};
    refs.form.reset();
    storage.remove(KEY);
};

function renderData(data) {
    const markup = `<li>todo:${data.text}, priority:${data.priority} <button type="button" class="todo__delete" id=${uuidv4()}></button></li>`;
    refs.list.insertAdjacentHTML("afterbegin", markup);
    Notify.success('Нотатка додана');
}



