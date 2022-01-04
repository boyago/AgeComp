import React, {useState} from "react";
import styled from 'styled-components';
import uuid from 'react-native-uuid';

    const AddItemArea = styled.View`
        background-color: #CCC;
        padding: 10px;
    `;

    const AddItemInput = styled.TextInput`
        background-color: #FFF;
        font-size:20px;
        height:50px;
        border-radius:5px;
        padding: 10px;
    `;

    export default (props) => {
        const [item, setItem] = useState('');

        const handleSubmit = () => {
            let [itens] = [...props.itens]
            itens.push({
                id:uuid.v4,
                tarefa:item,
                done:false
            })
            props.setItens();
        }
    return(
            <AddItemArea>
                <AddItemInput placeholder="Inclua uma nova anotação"
                              value={item}
                              onChangeText={e=>setItem(e)}
                              returnKeyType="send" 
                              onSubmitEditing={handleSubmit}
                              />
            </AddItemArea>
    )

    }