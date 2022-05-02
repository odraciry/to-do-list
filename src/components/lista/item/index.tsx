import { ITarefa } from '../../../types/tarefas'
import style from '../Lista.module.scss'

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}:Props) {
    return (
        <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ""}`} 
        onClick = {() => selecionaTarefa({
            tarefa,
            tempo, 
            selecionado, 
            completado, 
            id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span aria-label='Concluida' className={style.concluido}></span>}
        </li>
    )
}