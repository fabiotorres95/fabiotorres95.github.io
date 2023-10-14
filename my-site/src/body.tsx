function Body() {
  return (
    <div>
      <img id="photo" src="IMG_0946.jpg" width="300" alt="Foto de Fábio Greco Torres" />
      <p id="description">
        Meu nome é Fábio, sou Brasileiro natural da bela cidade do Rio de Janeiro.
        Sou estudante da Trybe.
        {' '}
        <em>#betrybe</em>
      </p>
      <h2 id="skills">Algumas das minhas habilidades incluem:</h2>
      <ul>
        <li><strong>Inglês fluente</strong></li>
        <li>Técnico em telecomunicações</li>
        <li>Programação em Python</li>
        <li>Tocar guitarra</li>
        <li>Montar o cubo mágico</li>
      </ul>
      <a id="links" href="#photo">Veja minha foto de novo ;)</a>
      <br />
      <br />
      <a id="links" href="https://www.vivaolinux.com.br/" target="_blank" rel="noreferrer">Link de um site que me ajudou muito com o Linux</a>
      <br />
      <br />
      <br />
      <h3>Índice</h3>
      <ol>
        <li><a href="#title">Título</a></li>
        <li><a href="#photo">Foto</a></li>
        <li><a href="#description">Descrição</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#links">Links</a></li>
      </ol>
    </div>
  );
}

export default Body;
