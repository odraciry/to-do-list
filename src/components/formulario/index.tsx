import React from "react";
import { ITarefa } from "../../types/tarefas";
import Botao from "../botao";
import style from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid';

class Formulario extends React.Component <{setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}>{
    state = {
        tarefa:'',
        tempo:'00:00'
    }
    
    adicionarTarefa(evento: React.FormEvent){
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas=>[...tarefasAntigas, 
            {...this.state,
            selecionado:false,
            completado:false,
            id: uuidv4()
        }])

        this.setState({
            tarefa:'',
            tempo:'00:00'
        })
    }

    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Digite uma tarefa</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        placeholder="Agenda um estudo"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Digite o tempo</label>
                    <input
                        type="time"
                        name="tempo"
                        id="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        step="1"
                        max="01:39:00"
                        min="00:00:00"
                        required
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>              
            </form>
        )
    }
}
export default Formulario