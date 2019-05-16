import React, { Component } from 'react';
import Post from './Post.jsx'
import moment from 'moment'

let fburl='https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-1/p160x160/39151743_2342257932683208_1937717105960943616_n.jpg?_nc_cat=107&_nc_ht=scontent.fkhi2-1.fna&oh=94acfc76cba74278d76aa88cafbecc2d&oe=5D69AD6A'
let a='https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=alloy-asphalt-auto-241316.jpg&fm=jpg'
let b='https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
let c="https://wallpaperaccess.com/full/40091.jpg"
let d="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbtBNGtMtyewig-SRkzb7K73_Qy_oLF8rsrajful2YXdKvJ_h"
let e="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvFs6HtgsLofcEwyyhGlpsm7c0rNxPrwZfsFMTS7w_BuAMEK2"
let f="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0R6f-R4QhGIDCaXKUVF79k1dcnNK8flD4BNk41T9h2mLfzULQlw"
let g="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSxz2tW85gTq3t1NHoAVtTmUP3fS9mSQTqGjox7a4Wvv7b5ZDeg"

export default class Timeline extends Component {
    constructor() {
        super();
        this.state = {
            userObj:{ 
                createdBy: 'Hakeemullah Yousufzai',
                avatar:fburl ,
                description: "I'm not feeling good today!",
                images: [a,b,c,d,e,f,g],
                createdAt: moment().fromNow(),
                likes: ['Asim','Asad','Rafaqat','Ahmed',"Faisal"],
                }
        }
    }
    render() {
        return (
            <div>
                <p>{moment().fromNow()}</p>
                <Post userObj={this.state.userObj}/>
            </div>
        );
    }
}