import React from 'react';
import img1 from './polyimg4.png';
import img2 from './polyimg1.webp';
import img3 from './polyimg2.webp';
import img4 from './polyimg3.webp';
import './ProductPage.css';
import Thumbnail from './Thumbnail';
class ProductMain extends React.Component{
    state = {
        products: [
            {
                "_id" :"1",
                "title": "Poly Product 1",
                "src": [
                    img1,
                    img3,
                    img3,
                    img4
                ],
                "description" : "Great Conference product which can be used in conference rooms, auditoriums. Great Conference product which can be used in conference rooms, auditoriums. Great Conference product which can be used in conference rooms, auditoriums.",
                "count" : 1
            }
        ],
        index: 0
    };

    myRef = React.createRef();

    handleTab = index =>{
        this.setState({index : index})
        const images = this.myRef.current.children;
        for(let i=0;i<images.length;i++)
        {
            images[i].className = images[i].className.replace("active","");  
        }
        images[index].className = "active";
    };
    componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";
    }

    render(){
        const {products, index} = this.state;
        
        return(
            <div className="app">
                {
                    products.map(item =>(
                        <div className="details" key={item._id}>
                            <div className="big-img">
                                <img src={item.src[index]} alt="" />
                            </div>
                            <div className="box">
                                
                                <Thumbnail images = {item.src} tab={this.handleTab} myRef = {this.myRef}/>
                                <div className="row">
                                    <h1>{item.title}</h1>
                                </div>
                                <p>
                                    {item.description}
                                    {item.description}
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ProductMain;