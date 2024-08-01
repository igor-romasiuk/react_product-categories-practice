const Product = ({ product, category, user }) => {
  if (!product || !category || !user) {
    return null;
  }

  const userClass = user.sex === 'male' ? 'has-text-link' : 'has-text-danger';

  return (
    <tr data-cy="Product">
      <td className="has-text-weight-bold" data-cy="ProductId">
        {product.id}
      </td>
      <td data-cy="ProductName">{product.name}</td>
      <td data-cy="ProductCategory">
        {category.icon} - {category.name}
      </td>
      <td data-cy="ProductUser" className={userClass}>
        {user.name}
      </td>
    </tr>
  );
};

export default Product;
