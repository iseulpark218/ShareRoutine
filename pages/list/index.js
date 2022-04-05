import ListData from "../../data/ListData.js"
import styles from "../../styles/List.module.css"
const List = () => {
  return (
    <div>
      {/* 임시 */}
      {ListData.map((item) => (
        <div className={styles.tem}>
          {item.nm}
          <br />
          {item.branch}
          <br />
          {item.image}
          <br />
          {item.area}
          <br />
          {item.distance}
          <br />
          {item.category}
          <br />
          {item.keyword}
          <br />
          {item.score}
          <br />
          {item.user_score}
          <br />
          {item.review_cnt}
          <br />
          {item.favorites_cnt}
        </div>
      ))}
      {/* 임시끝 */}
      <ul>
        <li>
          <div>
            <div>

            </div>
          </div>
        </li>
 </ul>
    </div>    
  )
}

export default List;