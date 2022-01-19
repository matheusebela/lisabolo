import React from "react";

const PartyFormNative = (props) => {
  const {
    qtdAdultos,
    setQtdAdultos,
    qtdCriancas,
    setQtdCriancas,
    onHandleClick,
  } = props;

  const handleChangeAdulto = (e) => {
		e.persist();
		setQtdAdultos(e.target.value);
	};

	const handleChangeCriancas = (e) => {
		e.persist();
		setQtdCriancas(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault()
	};

  return (
    <>
      <h1 onClick={() => { onHandleClick(); }}>{qtdAdultos}</h1>
    </>
  );
};

export default PartyFormNative;