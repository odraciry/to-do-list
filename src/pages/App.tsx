import React, { useState } from 'react';
import Botao from '../components/botao';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/formulario';
import { Lista } from '../components/lista';
import { ITarefa } from '../types/tarefas';
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([ ])
  const [selecionado, setSelecionado] = useState<ITarefa>()
  
  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({ 
      ...tarefa,
      selecionado:tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined);
        setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return{...tarefa, selecionado:false, completado:true}
          }
          return tarefa;
        }))
    }
}
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas = {tarefas} 
      selecionaTarefa = {selecionaTarefa}/>
      <Cronometro
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}/>      
    </div>
  );
}

export default App;

