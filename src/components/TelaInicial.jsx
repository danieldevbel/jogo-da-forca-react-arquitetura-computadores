import './TelaInicial.css';

const TelaInicial = ({ iniciarJogo }) => {
  return (
    <div className="tela-inicial-container">
      <div className="quadrado">
        <h1>Bem-vindo ao Jogo Palavra Secreta!</h1>
        <p>
          Prepare-se para desafiar seus conhecimentos em <strong>Organização e Arquitetura de Computadores</strong>!
          Este jogo de palavra secreta irá testar sua familiaridade com diversos conceitos importantes da área.
        </p>
        <p>Aqui estão alguns dos tópicos que você pode encontrar:</p>
        <ul>
          <li><strong>Componentes de Hardware:</strong> Entenda os blocos fundamentais que compõem um computador.</li>
          <li><strong>Funcionamento da CPU:</strong> Explore como a unidade central de processamento executa instruções.</li>
          <li><strong>Memória e Armazenamento:</strong> Descubra os diferentes tipos de memória e suas funções.</li>
          <li><strong>Arquiteturas de Processadores:</strong> Compare as diversas arquiteturas utilizadas em processadores modernos.</li>
          <li><strong>Sistemas de Entrada e Saída:</strong> Aprenda como os dispositivos de I/O interagem com o sistema computacional.</li>
          <li><strong>Redes de Computadores:</strong> Entenda os fundamentos das redes e como os computadores se comunicam.</li>
          <li><strong>Conceitos de Sistemas Operacionais:</strong> Explore como os sistemas operacionais gerenciam recursos e processos.</li>
        </ul>
        {/*<p>
          Se você é um entusiasta de tecnologia ou um estudante de ciência da computação, este jogo é uma ótima maneira de revisar
          e solidificar seus conhecimentos de uma forma divertida e interativa. Está pronto para começar?
  </p>*/}
        <button onClick={iniciarJogo}>Começar Jogo</button>
      </div>
    </div>
  );
};

export default TelaInicial;




  
  
