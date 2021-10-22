import { useState, KeyboardEvent} from 'react';
import * as S from './styles';

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }:Props)=> {

const [inputText, setInpultText] = useState('');

const handleKeyUp = (e: KeyboardEvent) => {
  if(e.code === 'Enter' && inputText !== ''){
    onEnter(inputText);
    setInpultText('');
  }
}
  return(
    <S.Container>
      <div className="image">+</div>
      <input type="text" placeholder="Adicione uma tarefa" value={inputText} onChange={e=>setInpultText(e.target.value)} onKeyUp={handleKeyUp} />
    </S.Container>
  );
}

