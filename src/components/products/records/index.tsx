import { Layout } from "components";
import { useState } from "react";

export const ProductRegistration: React.FC = () => {
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(){
    const products = {
      sku,
      price,
      productName,
      description
    }
    console.log(products);
  }

  return (
    <Layout title="Cadastro de Produtos">
      <div className="columns">
        <div className="field column">
          <label htmlFor="inputSku" className="label">
            SKU: *
          </label>
          <div className="control">
            <input
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className="input"
              type="text"
              placeholder="Digite o SKU do produto..."
              id="inputSku"
            />
          </div>
        </div>
        <div className="field column">
          <label htmlFor="inputPrice" className="label">
            Preço: *
          </label>
          <div className="control">
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input"
              type="text"
              placeholder="Digite o preço do produto..."
              id="inputPrice"
            />
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="inputName" className="label">
          Nome: *
        </label>
        <div className="control">
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="input"
            type="text"
            placeholder="Digite o nome do produto..."
            id="inputName"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="inputDesc" className="label">
          Descrição:
        </label>
        <div className="control">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea"
            placeholder="Digite a descrição detalhada do produto..."
            id="inputDesc"
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={handleSubmit}>Salvar</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Voltar</button>
        </div>
      </div>
    </Layout>
  );
};
