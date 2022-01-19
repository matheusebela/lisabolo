import React, { useState } from "react";
import PartyFormNative from "./PartyForm.native";

const PartyForm = () => {
  const [qtdAdultos, setQtdAdultos] = useState(23);
	const [qtdCriancas, setQtdCriancas] = useState(55);

	const onHandleClick = () => {
		console.log("TESTANDO");
	};

  return (
    <PartyFormNative
      qtdAdultos={qtdAdultos}
      setQtdAdultos={setQtdAdultos}
      qtdCriancas={qtdCriancas}
      setQtdCriancas={setQtdCriancas}
      onHandleClick={onHandleClick}
    />
  );
};

export default PartyForm;