import Botao from "../botao";
import { Relogio } from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props{
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
}

export function Cronometro({selecionado, finalizarTarefa}:Props){
    const [tempo, setTempo] = useState<number>(tempoParaSegundos(String(selecionado?.tempo)));
    useEffect(() =>{
        setTempo (tempoParaSegundos(String(selecionado?.tempo || 0)
        ))
    },[selecionado])
    
    function regressiva(tempo: number = 0){
        setTimeout(() => {
            if(tempo > 0){
                setTempo(tempo - 1)
                return regressiva(tempo - 1)
            }
            finalizarTarefa()
            alert("Tarefa "+ selecionado?.tarefa+" finalizada")
        }, 1000)
    }

    function nomeTarefa() {
        if(!selecionado){
            return "Escolha uma tarefa e inicie o Cronometro"
        }else{
            if(selecionado.tempo === "0"){
                return "Escolha uma tarefa e inicie o Cronometro"
            }else{
                return selecionado.tarefa
            }
        }
    }

    
    return(
        <div className={style.cronometro}>
        
        <p className={style.titulo}>{nomeTarefa()} </p>
            
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>    
            </div>
            <Botao onClick={()=> regressiva(tempo)}>
                Iniciar!
            </Botao>
        </div>
    )
}