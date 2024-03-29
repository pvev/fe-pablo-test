import * as React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const NumberContainer: any = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  padding: 3px;
  margin: 3px;
  width: 30px;
  height: 30px;
  background-color: #22ee22;
  border: 2px solid blue;
  transition: background-color 0.2s ease;
  background-color: ${(props: { isDragging: boolean }) =>
    props.isDragging ? "lightgreen" : "white"};
`;

class BoxNumber extends React.PureComponent<
  { num: number; index: number },
  {}
> {
  render() {
    return (
      <Draggable draggableId={"" + this.props.num} index={this.props.index}>
        {(provided, snapshot) => (
          <NumberContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.num}
          </NumberContainer>
        )}
      </Draggable>
    );
  }
}

export default BoxNumber;
