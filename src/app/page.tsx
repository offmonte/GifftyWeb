import NavBar from "@/components/NavBar"
import "./produto.css";
export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="dashboard" />

      <div className="produto">
            <div className="conteudo">
                <img src="/images/icon-user.png" alt="Icon" className="icon" style={{ width: "80px" }} />
                <div className="InfoProd">
                    <h2>PlayStation 5</h2>
                    <p>500 GB, Branco</p>
                </div>
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label htmlFor="checkbox"></label>
            </div>
            <div className="botoes">
                <a href="https://www.amazon.com.br/Console-Playstation-Controles-Dualsense-Brancos/dp/B09TYK9P8F?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A2LLU9EAT5LSXD" className="links">Amazon</a>
                <a href="https://www.kabum.com.br/produto/498966/console-playstation-5-sony-ssd-825gb-controle-sem-fio-dualsense-com-midia-fisica-jogo-marvels-spider-man-2-1000037788?srsltid=AfmBOorEdz29uT-vkDzR8HVo66tlQiOIKHZCpwtkVYbv58W1mS6351mLGqI" className="links">Kabum</a>
            </div>
        </div>

        <div className="produto">
            <div className="conteudo">
                <img src="/images/gift-icon.png" alt="Icon" className="icon" style={{ width: "80px" }} />
                <div className="InfoProd">
                    <h2>Presente</h2>
                    <p>Breve descrição do presente</p>
                </div>
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label htmlFor="checkbox"></label>
            </div>
            <div className="botoes">
                <a href="/" className="links">Link 1</a>
                <a href="/" className="links">Link 2</a>
            </div>
        </div>

        <div className="produto">
            <div className="conteudo">
                <img src="/images/gift-icon.png" alt="Icon" className="icon" style={{ width: "80px" }} />
                <div className="InfoProd">
                    <h2>Presente</h2>
                    <p>Breve descrição do presente</p>
                </div>
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label htmlFor="checkbox"></label>
            </div>
            <div className="botoes">
                <a href="/" className="links">Link 1</a>
                <a href="/" className="links">Link 2</a>
            </div>
        </div>

        <div className="botoes">
          <a href="/" className="links">Adicionar item a lista</a>
          <a href="/" className="links">Compartilhar link</a>
        </div>

    </main>

    
  );
}
