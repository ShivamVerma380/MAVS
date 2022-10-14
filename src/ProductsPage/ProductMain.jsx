import React from 'react';
import img1 from './polyimg4.png';
import img2 from './polyimg1.webp';
import img3 from './polyimg2.webp';
import img4 from './polyimg3.webp';
import './ProductPage.css';
import Thumbnail from './Thumbnail';
import { Col, Container, Row } from 'reactstrap';
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
                "count" : 1,
                "features":[
                    {
                        "name": "Feature 1",
                        "desc" : "very good product",
                    },
                    {
                        "name": "Feature 2",
                        "desc" : "very good product",
                    },
                    {
                        "name": "Feature 3",
                        "desc" : "very good product",
                    },
                    {
                        "name": "Feature 4",
                        "desc" : "very good product",
                    },
                    {
                        "name": "Feature 5",
                        "desc" : "very good product",
                    },
                    {
                        "name": "Feature 6",
                        "desc" : "very good product",
                    },
                    {
                        "name": "Feature 7",
                        "desc" : "very good product",
                    },
                    {
                        "name": "Feature 8",
                        "desc" : "very good product",
                    },
                    {
                        "name": "Feature 9",
                        "desc" : "very good product",
                    },
                    {
                        "name": "Feature 10",
                        "desc" : "very good product",
                    },
                ]
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
            <>
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
                                
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        products.map(item =>(
                            <div className="product_desc">
                                <p>
                                    {item.description}
                                    {item.description}
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="feature-tab">
                    <div className="col-6">
                        <img src={img1} alt=""/>
                        
                    </div>
                    <div className="feature-detail">
                        <p className="product-high">PRODUCT HIGHLIGHTS</p>
                        {
                            products.map(item =>(
                                item.features.map(feature =>(
                                
                                    <div className="feature-desc">
                                        {feature.name} : {feature.desc}
                                    </div>
                                    
                                ))
                            ))
                        }
                    </div>
                </div>
                {/* <React.Fragment>
                    <section>
                        <div className='w-100  grid grid-rows-2 text-white md:grid-cols-2'>
                            <div className='w-full  product-highlights md:h-screen'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='w-full product-highlights md:h-screen'>
                            <p className="product-high">PRODUCT HIGHLIGHTS</p>
                                {
                                    products.map(item =>(
                                        item.features.map(feature =>(
                                        
                                            <div className="feature-desc">
                                                {feature.name} : {feature.desc}
                                            </div>
                                            
                                        ))
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </React.Fragment> */}
            </>
        );
    }
}

export default ProductMain;