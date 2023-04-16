import { refs } from "./refs";

const data = {};

refs.form.addEventListener("input", onSaveTodo)

function onSaveTodo(evt) {
    const { name, value } = evt.target;
    data[name] = value;
    console.log(data);
}