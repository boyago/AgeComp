import React,{useState} from 'react';
import styled from 'styled-components';
import lista from './src/lista'
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';

    const Page = styled.SafeAreaView`
        flex:1;
    `;
    const Listagem = styled.FlatList`
     flex:1;
    `;

  export default () => {

    const[itens, setItens] = useState(lista);

    return(
      <Page>
        <AddItemArea itens={itens} setItens={setItens}/>
        <Listagem
        data={itens}
        renderItem={({item})=><ListaItem data={item} />}
        keyExtractor={(item)=>item.id}
        />
      </Page>
      
      
    )
  }