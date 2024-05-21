import './FimJogo.css';

const FimJogoGanhou = ({ reiniciar, pontuacao }) => {
    return (
    <div className="fim-jogo-container">
        <h2>Fim do Jogo - Você Ganhou!</h2>
        <p>Sua pontuação final foi: {pontuacao}</p>
        <button onClick={reiniciar}>Reiniciar Jogo</button>
    </div>
    );
};

export default FimJogoGanhou;
