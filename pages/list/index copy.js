import ListData from "../../data/ListData.js"

const List = () => {
  return (
    <div>
      {/* Json형식의 배열데이터를 map함수를 이용해 반복처리 */}
      {ListData.map((item) => (
        <div class="ListBox">
          <ul class="ListBox_ul">
            {/* mapping 예정 */}
            <li class="ListBox_li">
              <div class="ListBox_li_imgBox"><img
                src={item.image}
                alt={item.image}
                layout="responsive"
                objectFit="cover" //써야됨 or none
                width={100}
                height={100}
                style={{ borderRadius: "20px" }}
              /></div>
              <div class="ListBox_li_contents">
                <div class="ListBox_li_contents1">
                  <div class="ListBox_li_contents1_nm_area">
                    <span class="ListBox_li_contents1_nm">{item.nm}</span>
                    <span class="ListBox_li_contents1_area">{item.area} | {item.distance}</span>
                  </div>
                  <span class="ListBox_li_contents1_category">{item.category}</span>
                  {/* 각인덱스 앞 #추가 */}
                  <span class="ListBox_li_contents1_keyword">#{item.keyword.join(" #")}</span>
                </div>
                <div class="ListBox_li_contents2">
                  <span class="ListBox_li_contents2_score">{item.score}<span class="ListBox_li_contents2_score_">점</span></span>
                  <span class="ListBox_li_contents2_review_cnt">⭐ {item.user_score} ({item.review_cnt})</span>
                  <span class="ListBox_li_contents2_favorites_cnt">💜 {item.favorites_cnt}</span>
                </div>
              </div>
            </li>

          </ul>

        </div>
      ))}
</div>    
  )
}

export default List;