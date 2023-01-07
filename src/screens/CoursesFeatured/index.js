import React from "react";
import "./indexStyles.css";
import rightArrow from "../../assets/images/right-arrows.png";
import LeftArrow from "../../assets/images/left-arrow.png";
import Item from "../../components/coursesCard/item";
import s1 from '../../assets/images/IMG1.png'
import s2 from '../../assets/images/IMG2.png'
import s3 from '../../assets/images/IMG3.png'
export default function Index() {
    const data=[
        {id:1,name:'Bessie Cooper', image:s1,price:'$39',title:"Don't Waste Time! 7 Facts Until You Reach Your Event"},
        {id:2,name:'Annette Black', image:s2,price:'$99',title:"The 7 Most Successful Event Companies In Region"},
        {id:2,name:'Brooklyn Simmons', image:s3,price:'$59',title:"Think Your Event Is Safe? 7 Ways You Can Lose It Today",expired:'$99' ,teacher:'+10 teacher'},
    
]
  return (
    <div className="root">
      <h1>FeaturedCourses</h1>
      <div className="divSubtitle">
        <p className="subtitle">
          Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet
          iaculis.
        </p>
        <div className="divVector">
          <img src={LeftArrow} alt="#" className="Vector1" />
          <img src={rightArrow} alt="#" className="Vector1" />
        </div>
      </div>
      <div className="divItem">
       {data.map((item)=><Item 
       key={item.id}
       image={item.image}
       price={item.price}
       title={item.title}
       expired={item.expired}
       teacher={item.teacher}
       name={item.name}
       />)}

      </div>
    </div>
  );
}
