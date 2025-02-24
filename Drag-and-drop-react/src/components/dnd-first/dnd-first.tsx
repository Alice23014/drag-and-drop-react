import { DragEvent, useState } from 'react';
import './dnd-first.css'

interface Card {
  id: number;
  order: number;
  text: string;
}

export default function First(){
const [cardList, setCardList] = useState<Card[]>([
{ id: 1, order: 3, text: 'Карточка 3' },
{ id: 2, order: 1, text: 'Карточка 1' },
{ id: 3, order: 2, text: 'Карточка 2' },
{ id: 4, order: 4, text: 'Карточка 4' },
]);

const [currentCard, setCurrentCard] = useState<Card | null>(null);

function dragStartHandler(e: DragEvent<HTMLDivElement>, card: Card): void {
setCurrentCard(card);
console.log('drag start', card);
}

function dragOverHandler(e: DragEvent<HTMLDivElement>): void {
e.preventDefault();
const target = e.target as HTMLDivElement;
target.style.background = 'lightgray';
}

function dragLeaveHandler(e: DragEvent<HTMLDivElement>): void {
const target = e.target as HTMLDivElement;
target.style.background = 'transparent';
}

function dragEndHandler(e: DragEvent<HTMLDivElement>): void {
const target = e.target as HTMLDivElement;
target.style.background = 'transparent';
}

function dropHandler(e: DragEvent<HTMLDivElement>, card: Card): void {
e.preventDefault();
const target = e.target as HTMLDivElement;
target.style.background = 'transparent';

if (currentCard && currentCard.id !== card.id) {
    const newCardList = cardList.map((c) => {
    if (c.id === card.id) {
        return { ...c, order: currentCard.order };
    }
    if (c.id === currentCard.id) {
        return { ...c, order: card.order };
    }
    return c;
    });
    setCardList(newCardList.sort((a, b) => a.order - b.order));
}
}

return (
<div className="container">
    {cardList.sort((a, b) => a.order - b.order).map((card) => (
    <div
        key={card.id}
        onDragStart={(e) => dragStartHandler(e, card)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, card)}
        draggable={true}
        className="card"
    >
        {card.text}
    </div>
    ))}
</div>
);
}