import React, { useState } from "react";
import PartyFormNative from "./PartyForm.native";

const PartyForm = () => {
  const [qtdAdultos, setQtdAdultos] = useState();
	const [qtdCriancas, setQtdCriancas] = useState();

	const onHandleClick = () => {
		console.log("Adultos: "+qtdAdultos+"\nCrianças: "+qtdCriancas);
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