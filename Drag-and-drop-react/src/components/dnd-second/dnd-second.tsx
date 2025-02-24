import { useState } from 'react'
import './dnd-second.css'

export default function Second(){
    const[boards, setBoards] = useState([
        {id:1, title:'Сделать', items:[{id:1, title:'Пойти в магазин'},{id:2, title:'Выкинуть мусор'},{id:3, title:'Покушать'}]},
        {id:1, title:'Сделать', items:[{id:1, title:'Пойти в магазин'},{id:2, title:'Выкинуть мусор'},{id:3, title:'Покушать'}]},
        {id:1, title:'Сделать', items:[{id:1, title:'Пойти в магазин'},{id:2, title:'Выкинуть мусор'},{id:3, title:'Покушать'}]},
    ])
    return(
        <div className="container">
            <div className="board">
                <div className="board__title">Сделать</div>
                <div className="item">Пойти в магаз</div>
            </div>
            <div className="board">
                <div className="board__title">Проверить</div>
                <div className="item">Задачи</div>
            </div>
            <div className="board">
                <div className="board__title">Сделано</div>
                <div className="item">Покушать</div>
                <div className="item">Покушать</div>
                <div className="item">Покушать</div>
                <div className="item">Покушать</div>

            </div>
        </div>
    )
}