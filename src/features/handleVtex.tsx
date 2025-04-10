import { useEffect, useState } from "react"
import { HttpCustom } from "../services/httpClient";
import { IDimension, ISKU, IVtexItens } from "../interfaces/vtex";

export function HandleItens() {
    const [itens, setItens] = useState<IVtexItens>({
        productID: 1,
        name: 's',
        salesChannel: '1',
        skus: [] 
    });

    useEffect(() => {
        HttpCustom().then((response) => {
            setItens(response);

        }).catch(error => {
            console.error("Error fetching data:", error);
        });

        
    }, []);

    return (
        <div>
            {itens.name}

            {itens.skus && itens.skus.length > 0 ? (
                ColorFromSKU(itens.skus, TypeOfDimension.COR, 'As cores sao')
            ) : (
                <p>No SKUs available</p>
            )}

            {itens.skus && itens.skus.length > 0 ? (
                ColorFromSKU(itens.skus, TypeOfDimension.TAMANHO, 'Os tamanhos sao')
            ) : (
                <p>No SKUs available</p>
            )}
        </div>
    )
};



enum TypeOfDimension {
    COR = 'COR',
    TAMANHO = 'Tamanho'
  }


function ColorFromSKU (skus: ISKU[], typeOf: TypeOfDimension , description: string){


    const dimensionProperty = typeOf;
  
    const uniqueValues = skus
        .map(item => {
        if (item.dimensions) {
            return item.dimensions[dimensionProperty as keyof IDimension];
        }
        return undefined;
        })
        .filter((value, index, self) => 
            value && self.indexOf(value) === index
        );
    
    return (

        <>
            <div className="dimension-selector">
            <h3>{description}:</h3>
            <ul>
                {uniqueValues.map((value, index) => (
                <li key={`${typeOf}-${index}`}>
                    <label>
                    <input 
                        type="radio" 
                        name={typeOf} 
                        value={value} 
                        id={`${typeOf}-${value}`} 
                    />
                    {value}
                    </label>
                </li>
                ))}
            </ul>
            </div>

        </>

    );

}