import  React from 'react';

const FormNative = (props) => {
	const {qtdAdultos, setQtdAdultos, qtdCriancas, setQtdCriancas, onSubmit, xpto} = props;

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
		onSubmit();
	};

	return (
		<section className="container border-top-generic">
			<div className="sample-text-area">
				<div className="section-top-border">
					<div className="row">
						<div className="col-lg-8 col-md-8">
							<div className="container">
								<h3 className="text-heading"> {xpto} Monte sua Festa</h3>
								<p className="sample-text">
									You need to create eye-popping artwork and have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. here are 4 easy steps to follow for good DVD replication results:
								</p>
							</div>
							<form action="#">
								<div className="mt-10">
									<input type="text" name="qtAdultos" placeholder="Quantidade de adultos" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Quantidade de adultos'" required="" className="single-input" onChange={handleChangeAdulto}/> 
								</div>

								<div className="mt-10">
									<input type="text" name="qtCriancas" placeholder="Quantidade de crianças" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Quantidade de adultos'" required="" className="single-input" onChange={handleChangeCriancas}/>
								</div>
							</form>
							<div onClick={handleSubmit}> pipipipi </div>
								<div className="button-group-area mt-40">
								<button className="genric-btn primary circle" id="enviar" type='button' onClick={() => { onSubmit(); }}>Enviar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormNative;