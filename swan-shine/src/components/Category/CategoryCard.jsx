import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category-items/${category._id}`}>
      <div key={category._id} className="category-card">
        <img src={category.poster} alt={category.name} />
        <div className="category-details">
          <h2>{category.name}</h2>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
