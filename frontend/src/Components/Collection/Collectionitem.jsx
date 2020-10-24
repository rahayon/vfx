import React, { Component,Link } from 'react'

import Card from './Carditem';
import Sdata from './Sdata';


export default class Collectionitem extends Component {
    render() {
        return (
            <>
                <section className="collection-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="box">
                                <h1 className="h1">Our Collection Item</h1>
                            </div>
                        </div>
                        <div className="row gutter">
                            {
                                Sdata.map((val,index)=>{
                                    return <Card 
                                    key={index}
                                    titel={val.title}
                                    imgsrc={val.imgsrc}
                                    
                                    />
                                })
                            }
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
