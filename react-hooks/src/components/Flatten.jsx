import React from "react";

const addresses = [
  {
    address: "Quinta do Amparo, Edificio Bela Vista 3º esq",
    zipCode: { postalCode: "2415-583", city: "Marrazes" },
  },
  {
    address: "Rua Cidade Tokushima Lt 17 2º dto",
    zipCode: { postalCode: "2400-119", city: "Leiria" },
  },
];

export const Flatten = () => {
  const flattened = addresses.map((address) => {
    const { zipCode, ...rest } = address;
    return { ...zipCode, ...rest };
  });
  return (
    <div>
      <h3>Flatten</h3>
      <table>
        <tr>
          <th>address</th>
          <th>postal code</th>
          <th>city</th>
        </tr>

        {flattened.map((f) => (
          <tr>
            <td>{f.address}</td>
            <td>{f.postalCode}</td>
            <td>{f.city}</td>
            <td></td>
          </tr>
        ))}
      </table>
    </div>
  );
};
