import React, { Component } from 'react'
import { connect } from 'react-redux'

const Contact=(props) => {
    console.log(props.cards)
    return (
      <div>
      {
        cards.map((card)=>
        {

            return(
            <div>   
                <span> {card.title} </span>
                <span> {card.id} </span>
                <span> {card.body} </span>
               
            </div>

            )
        })
        
      }
        </div>
    )
  }

       

//buradaki state store'daki state
function mapStateToProps(state){


   //const cards=state.cards; aynısı  const{cards}=state;

   const{cards}=state;
    return {cards}
}

export default connect(mapStateToProps)(Contact);



//Connect ile Contact'ı store'a bağlıyoruz. Store'dan datayı alıp Contact'e props geçiyoruz.
//Connect fonksiyonu Contact'i return eder




