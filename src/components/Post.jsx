import React, { Component } from 'react';
import FacebookEmoji from 'react-facebook-emoji';
import FbImageLibrary from 'react-fb-image-grid'
import logo from '../logo.svg'




export default class Post extends Component {
    constructor() {
        super()
        this.state = {
            hover: false,
            like: true,
            you: 'You,'
        }
    }


    reactionRender() {
        return <div>
            <button style={{ border: 'none', backgroundColor: 'Transparent' }} onClick={() => alert('hello')}> <FacebookEmoji type="like" /></button>

            <FacebookEmoji type="love" />
            <FacebookEmoji type="wow" />
            <FacebookEmoji type="yay" />
            <FacebookEmoji type="angry" />
            <FacebookEmoji type="haha" />
            <FacebookEmoji type="sad" />
        </div>

    }

    render() {

        const { userObj } = this.props;
        const { like, you } = this.state;
        // console.log(this.props.userObj)
        console.log(this.state.like)
        return (
            <div style={{ /*border: '2px solid red',*/ textAlign: 'center', background: 'lightgray' }}>
                <br />
                <div style={{/* border: '2px solid black',*/ width: '45%', display: 'inline-block', background: 'white' }} className="timeline">

                    <img src={userObj.avatar} style={{ width: '60px', height: '60px', borderRadius: '50%' }} alt="" />
                    <h5>{userObj.createdBy}</h5>
                   
                    
                    <div style={{ width: '100%', display: 'inline-block' }}>
                        <FbImageLibrary images={[userObj.images[0], userObj.images[1], userObj.images[2], userObj.images[3], userObj.images[4], userObj.images[5], userObj.images[6]]} />
                    </div>

                    <p style={{ float: 'left', marginLeft: '13px' }}>
                        {!like && you}     {userObj.likes[0]} and {userObj.likes.length - 1} others
                    </p>

                    <hr />


                    <button onClick={() => this.setState({ like: !this.state.like })} onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })}>Like</button>

                    <button>Comment</button>
                    <button>Share</button> <br />

                    {/* {this.state.hover && this.reactionRender()} */}

                </div>
            </div>
        );
    }
}