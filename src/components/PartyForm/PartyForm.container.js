import React, { useState } from "react";
import PartyFormNative from "./PartyForm.native";

const PartyForm = () => {
  const [qtdAdultos, setQtdAdultos] = useState();
	const [qtdCriancas, setQtdCriancas] = useState();
  
  let number = '11930175657'  
  let msg = 'A lua pinguante é uma obra de arte. Olá, estou planejando uma festa para '+ qtdAdultos +' adultos e ' + qtdCriancas + ' crianças.'
  let target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`

	const onHandleClick = () => {
		console.log("Adultos: "+qtdAdultos+"\nCrianças: "+qtdCriancas);
    sendWhatsapp();
	};

  const sendWhatsapp = () => {
    document.getElementById("sendWhatsapp").click();
  }

  return (
    <PartyFormNative
      qtdAdultos={qtdAdultos}
      setQtdAdultos={setQtdAdultos}
      qtdCriancas={qtdCriancas}
      setQtdCriancas={setQtdCriancas}
      onHandleClick={onHandleClick}
      target={target}
    />
  );
};

export default PartyForm;