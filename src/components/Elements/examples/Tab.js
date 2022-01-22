import React, { useState } from 'react';

const Tabs = () => {
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);

  const closeAll = () => {
    setTabOne(false);
    setTabTwo(false);
  };

  return (
    <>
      <div style={{ marginTop: '200px', width: '100%', height: '100px', padding: '20px' }}>
        <button type='button' onClick={() => { closeAll(); setTabOne(true); }}>open 1</button>
        <button type='button' onClick={() => { closeAll(); setTabTwo(true); }}>open 2</button>
      </div>
      {tabOne && (
        <div style={{ width: '100%', height: '200px', background: 'red' }}>TAB ONE</div>
      )}
      {tabTwo && (
        <div style={{ width: '100%', height: '200px', background: 'blue' }}>TAB TWO</div>
      )}
    </>
  );
};

export default Tabs;
