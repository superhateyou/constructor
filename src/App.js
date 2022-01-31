import './App.css';
import { FormEditor } from './components/editor/formEditor';

let arr = [
  {
    name : "Login",
    placeholder: "Введите логин...",
    type: "textInput"
  },
  { 
    name : "Blog",
    placeholder: "Введите текст...",
    type: "multiInput",
    quantity: 3
  },
  { 
    name : "Phone number",
    placeholder: "Введите число...",
    type: "numberInput"
  },
  {
    name: "Password",
    placeholder: "Введите пароль",
    type: "passwordInput"
  },
  {
    name : "input_checkbox",
    type : "checkInput"
  },
  { 
    name : "Quiz",
    type: "multiCheck",
    quantity: 3
  },
  {
    name: "Radio",
    type: "radioInput",
    value: "Pizza?"
  },
  {
    name: "Selection",
    type: "selectInput",
    options : ["blue", "red", "yellow", "green"],
  },
  {
    name: "ColorPalette",
    type: "multiSelect",
    options : ["blue", "red", "yellow", "green"]
  },
  { 
    name : "input_textarea",
    placeholder: "Введите текст...",
    type : "areaInput"
  },
  {
    name: "Choise",
    type: "keyValue",
    placeholder: "Введите текст",
    options: ["60Hz", "75Hz", "120Hz", "144Hz", "240Hz", "360Hz"]
  }
]

function App() {
  return (
    <div className='App'>
      <div className="app-wrapper">
        <FormEditor arr={arr} />
      </div>
    </div>
  );
}

export default App;
