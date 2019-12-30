import React from 'react';
import { connect } from 'react-redux';

function ItemsContainer (props){
  return(
    <div>
      <h2>Item - {props.item}</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemstate = ownProps.cake
  ? state.cake.numOfCakes
  : state.iceCream.numOfIceCreams

  return {
    item: itemstate
  }
}

export default connect(mapStateToProps)(ItemsContainer);