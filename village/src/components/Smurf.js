import React from 'react';

function Smurf(props, exileSmurf) {

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {/* <button onClick={e => exileSmurf(e, props.id)}>Exile Smurf</button> */}
      <button>Exile Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

