import React, { useState, useEffect, useContext } from 'react';
import styles from './App.module.css';
import { LeftSide } from './layouts/LeftSide/LeftSide';
import { Body } from './layouts/Body/Body';
import { AddNewBtn } from './components/AddNewBtn/AddNewBtn';
import { Header } from './components/Header/Header';
import { JournalList } from './components/JournalList/JournalList';
import { ListButton } from './components/ListButton/ListButton';
import { ListInJournal } from './components/ListInJournal/ListInJournal';
import { JournalForm } from './components/JournalForm/JournalForm';
import { IJournal, IJournalAndId } from './types/types';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContext, UserContextProvider } from './context/user.context';


function mapItems(items: any) {
  if (!items) {
    return [];
  }
  return items.map((i: any) => ({ ...i }));
}

function App() {
  const { userId } = useContext(UserContext)!;
  const [data, saveData] = useLocalStorage('journalArray');
  const [selected, setSelected] = useState<any | null>(null);

  const addItem = (item: IJournal) => {
    const userIdes = data.map((val) => val.id);
    if (selected && selected.id && userIdes.includes(selected.id)) {
      const index = data.findIndex((obj) => obj.id === selected.id);
      const savedUserId = data[index].id;
      const newData = data.toSpliced(index, 1, { ...item, id: savedUserId })
      saveData([...mapItems(newData)]);
      setSelected(null);
    } else {
      saveData([...mapItems(data),
      { ...item, id: data.length !== 0 ? Math.max(...data.map((i: any) => i.id)) + 1 : 1 }]);
    }
  };

  console.log(data)

  const deleteBtn = (id: number): void => {
    const filterdData = data.filter((val) => val.id !== id);
    saveData([...mapItems(filterdData)]);
    setSelected(null);
  };

  const clearForm = () => {
    setSelected(null);
  };

  console.log([...data.filter((val) => 'userId' in val && val.userId !== userId)].length);

  return (
    <div className={styles.App}>
      <LeftSide>
        <Header />
        <AddNewBtn clearForm={clearForm} />
        <JournalList>
          {![...data.filter((val) => 'userId' in val && val.userId === userId)].length && (
            <p className={styles.noInf}>Пусто. Добавь новое воспоминание</p>
          )}
          {data.length > 0 && data.filter((elem) => 'userId' in elem && elem.userId === userId).map((value) => (
            <ListButton key={value.id} choose={() => setSelected(value)}>
              <ListInJournal
                title={(value as IJournalAndId).title}
                text={(value as IJournalAndId).text}
                date={(value as IJournalAndId).date}
              />
            </ListButton>
          ))}

        </JournalList>
      </LeftSide>
      <Body>
        <JournalForm addItem={addItem} data={selected} deleteBtn={deleteBtn} />
      </Body>
    </div>
  );
}

export default App;
