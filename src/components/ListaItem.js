import React from 'react'
import styled from 'styled-components';

        const ItemText = styled.Text`
        font-size:20px;
        flex:1;
        `;
        const Item = styled.TouchableOpacity` 
        padding:10px;
        background-color:#EEE;
        flex-direction:row;
        `;
        const ItemCheck = styled.View`
        border-radius: 10px;
        border:5px solid #069;
        height:20px;
        width:20px;
        `;
export default (props) => {
    return (
    <Item>
        <>
      <ItemText>{props.data.tarefa}</ItemText>
      <ItemCheck></ItemCheck>
      </>
    </Item>
    )
}