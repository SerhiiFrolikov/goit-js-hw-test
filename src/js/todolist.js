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
    storage.save(KEY, data);
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
        alert("Заповніть всі поля форми");
        return;
    }
    console.log(data);
    data = {};
    refs.form.reset();
    storage.remove(KEY);
};
