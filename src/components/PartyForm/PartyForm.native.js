import React from "react";

const PartyFormNative = (props) => {
  const {
    qtdAdultos,
    setQtdAdultos,
    qtdCriancas,
    setQtdCriancas,
    onHandleClick,
    target
  } = props;

  const handleChangeAdulto = (e) => {
		e.persist();
		setQtdAdultos(e.target.value);
	};

	const handleChangeCriancas = (e) => {
		e.persist();
		setQtdCriancas(e.target.value);
	};

  return (
    <>
      <section className="container border-top-generic">
        <div className="sample-text-area">
          <div className="section-top-border">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="container">
                  <h3 className="mb-30"> Monte sua Festa</h3>
                  <blockquote className="generic-blockquote" id="text">
                    You need to create eye-popping artwork and have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. here are 4 easy steps to follow for good DVD replication results:
                  </blockquote>
                </div>
                <form action="#">
                  <div className="mt-10">
                    <input type="text" name="qtdAdultos" placeholder="Quantidade de adultos" onblur="this.placeholder = 'Quantidade de adultos'" required="" className="single-input" value={qtdAdultos} onChange={handleChangeAdulto}/> 
                  </div>
                  <div className="mt-10">
                    <input type="text" name="qtdCriancas" placeholder="Quantidade de crianças" onblur="this.placeholder = 'Quantidade de adultos'" required="" className="single-input" value={qtdCriancas} onChange={handleChangeCriancas}/>
                  </div>
                </form>
                  <div className="button-group-area mt-40" id="btn-area">
                    <button className="genric-btn primary circle" id="send-btn" type='button' onClick={() => { onHandleClick(); }}>Enviar</button>
                    <a id="sendWhatsapp" href={target}>Whatsapp</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartyFormNative;