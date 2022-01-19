import  React, { useState } from 'react';
import FormNative from "./Form.native";

const Form = () => {

	const [qtdAdultos, setQtdAdultos] = useState(0);

	const [qtdCriancas, setQtdCriancas] = useState(0);

	const onSubmit = () => {
		console.log("Adultos: "+ qtdAdultos + "\nCrianças: " + qtdCriancas);
	};

	return(
		<FormNative 
			qtdAdultos={qtdAdultos} 
			setQtdAdultos={setQtdAdultos}
			qtdCriancas={qtdCriancas}
			setQtdCriancas={setQtdCriancas}  
			onSubmit={onSubmit} 
			xpto="xpto bela bela"
		/>
	);
};

export default Form;