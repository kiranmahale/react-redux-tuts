import React from 'react';
import { connect } from 'react-redux';
import { buyKulfi } from '../redux';

function KulfiContainer(props) {
  return(
    <div>
      <h2> Number of Kulfis: {props.numOfKulfis}</h2>
      <button onClick={() => props.buyKulfi()}>Buy Kulfi</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfKulfis: state.kulfi.numOfKulfis
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyKulfi: () => dispatch(buyKulfi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KulfiContainer)