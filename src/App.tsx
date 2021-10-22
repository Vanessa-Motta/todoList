import { useState } from 'react';
import * as S from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import{ AddArea } from './components/AddArea'

const App = () =>{
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar o bolo na padaria', done: true },
  ]);

const handleAddTask = (taskName: string) => {
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    name: taskName,
    done: false,
  });
  setList(newList);
}

  return(
    <S.Container>
      <S.Area>
        <S.Header>Lista de tarefas</S.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index)=>(<ListItem  key={index} item={item} />))}
      </S.Area>
    </S.Container>
  );
}
export default App;
