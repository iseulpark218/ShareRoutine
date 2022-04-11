import styles from '../../styles/Home.module.css'
import React, { useRef, useEffect } from "react";

const Tem = () => {

  return (
    <div>
      <div style={{margin:'100px'}}>
            <div className={styles.all_category}>
            <div className={styles.all_category1}>
            <div className={styles.all_category_1}>기획·마케팅·실무</div>
            <div className={styles.all_category_2}>디자인·영상</div>
            <div className={styles.all_category_3}>데이터·개발</div>
            <div className={styles.all_category_4}>외국어</div>
            <div className={styles.all_category_5}>재테크·투잡</div>
            </div>
            <div className={styles.all_category2}>
            <div className={styles.all_category_6}>댄스·뮤직</div>
            <div className={styles.all_category_7}>피트니스·스포츠</div>
            <div className={styles.all_category_8}>뷰티·마인드·펫</div>
            <div className={styles.all_category_9}>드로잉·사진·글</div>
            <div className={styles.all_category_10}>요리·공예·취미</div>
            </div>
            </div>
      </div>
     
    </div>
  )
}

export default Tem;