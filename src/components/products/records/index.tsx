import { useState } from "react";
import { Layout, Input } from "components";
import { useProductService } from 'app/services'
import { Product } from 'app/models/products'

export const ProductRegistration: React.FC = () => {
  const service = useProductService();

  const [sku, setSku] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [productname, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleSubmit() {
    const product: Product = {
      sku,
      productname,
      price: parseFloat(price),
      description,
    };

    service
        .save(product)
        .then(responseProduct => console.log(responseProduct));
  }

  return (
    <Layout title="Cadastro de Produtos">
      <div className="columns">
        <Input
          columnClasses="is-half"
          label="SKU: *"
          value={sku}
          onChange={setSku}
          id="inputSku"
          placeholder="Digite o SKU do produto..."
        />

        <Input
          columnClasses="is-half"
          label="Preço: *"
          value={price}
          onChange={setPrice}
          className="input"
          placeholder="Digite o preço do produto..."
          id="inputPrice"
        />
      </div>

      <div className="columns">
        <Input
          label="Nome: *"
          value={productname}
          columnClasses="is-full"
          onChange={setProductName}
          className="input"
          placeholder="Digite o nome do produto..."
          id="inputName"
        />
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
          <button className="button is-link" onClick={handleSubmit}>
            Salvar
          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Voltar</button>
        </div>
      </div>
    </Layout>
  );
};
