import { useState } from "react";
// Importe seu módulo CSS Modules, por exemplo:
import style from "./index.module.css";

export function RenderListTask({ listTask }) {
  // O estado 'ativos' vai armazenar um objeto para rastrear quais IDs de itens
  // estão com o estilo "ativo" (clicado) no momento.
  const [ativos, setAtivos] = useState({});

  // Função para alternar o estado 'ativo' de um item específico pelo seu ID.
  const toggleAtivo = (idDoItem) => {
    setAtivos((prevAtivos) => ({
      ...prevAtivos, // Copia todos os estados anteriores para não perdê-los
      [idDoItem]: !prevAtivos[idDoItem], // Inverte o valor booleano para o ID clicado
    }));
  };

  return (
    <ul className={style.todoList}>
      {listTask.map((item) => (
        <li
          key={item.id}
          // Aplica as classes baseadas no `item.completed` E, adicionalmente,
          // a classe `style.itemAtivo` se `ativos[item.id]` for true.
          className={`${
            item.completed ? style.todoItemCompleted : style.todoItem
          } ${ativos[item.id] ? style.itemAtivo : ""}`}
        >
          <div className={style.checkboxWrapper}>
            <div
              className={
                item.completed ? style.checkboxChecked : style.checkBox // Correção no nome da classe do checkbox
              }
              // O clique neste div agora alternará o estilo 'ativo'
              onClick={() => toggleAtivo(item.id)}
            >
              {/* Se você quiser um feedback visual aqui, poderia ser um ícone ou nada */}
              {/* Por exemplo, um check apenas se for completo E não estiver ativo, ou um ponto se estiver ativo */}
              {/* Ou você pode deixar vazio e o CSS com `::after` cuidará do '✔' */}
            </div>
          </div>
          <span className={style.taskText}>{item.task}</span>
          <button
            className={style.deleteButton}
            aria-label="Deletar tarefa"
            onClick={() => console.log(item.id)} // Lógica para deletar a tarefa
          >
            &#x1F5D1; {/* Ícone de lixeira */}
          </button>
        </li>
      ))}
    </ul>
  );
}
