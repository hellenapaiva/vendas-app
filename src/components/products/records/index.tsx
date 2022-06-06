import { Layout } from "components";

export const ProductRegistration: React.FC = () => {
  return (
    <Layout title="Cadastro de Produtos">
      <div className="field">
        <label htmlFor="inputSku" className="label">
          SKU: *
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Digite o SKU do produto..."
            id="inputSku"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="inputPreco" className="label">
          Preço: *
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Digite o preço do produto..."
            id="inputPreco"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="inputNome" className="label">
          Nome: *
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Digite o nome do produto..."
            id="inputNome"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="inputDesc" className="label">
          Descrição:{" "}
        </label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Digite a descrição detalhada do produto..."
            id="inputDesc"
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Salvar</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Voltar</button>
        </div>
      </div>
    </Layout>
  );
};
