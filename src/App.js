import React, { Component } from 'react';
import './App.css';
import C2 from './PNG/2C.png';
import D2 from './PNG/2D.png';
import H2 from './PNG/2H.png';
import S2 from './PNG/2S.png';
import C3 from './PNG/3C.png';
import D3 from './PNG/3D.png';
import H3 from './PNG/3H.png';
import S3 from './PNG/3S.png';
import C4 from './PNG/4C.png';
import D4 from './PNG/4D.png';
import H4 from './PNG/4H.png';
import S4 from './PNG/4S.png';
import C5 from './PNG/5C.png';
import D5 from './PNG/5D.png';
import H5 from './PNG/5H.png';
import S5 from './PNG/5S.png';
import C6 from './PNG/6C.png';
import D6 from './PNG/6D.png';
import H6 from './PNG/6H.png';
import S6 from './PNG/6S.png';
import C7 from './PNG/7C.png';
import D7 from './PNG/7D.png';
import H7 from './PNG/7H.png';
import S7 from './PNG/7S.png';
import C8 from './PNG/8C.png';
import D8 from './PNG/8D.png';
import H8 from './PNG/8H.png';
import S8 from './PNG/8S.png';
import C9 from './PNG/9C.png';
import D9 from './PNG/9D.png';
import H9 from './PNG/9H.png';
import S9 from './PNG/9S.png';
import C10 from './PNG/10C.png';
import D10 from './PNG/10D.png';
import H10 from './PNG/10H.png';
import S10 from './PNG/10S.png';
import AC from './PNG/AC.png';
import AD from './PNG/AD.png';
import AH from './PNG/AH.png';
import AS from './PNG/AS.png';
import JC from './PNG/JC.png';
import JD from './PNG/JD.png';
import JH from './PNG/JH.png';
import JS from './PNG/JS.png';
import KC from './PNG/KC.png';
import KD from './PNG/KD.png';
import KH from './PNG/KH.png';
import KS from './PNG/KS.png';
import QC from './PNG/QC.png';
import QD from './PNG/QD.png';
import QH from './PNG/QH.png';
import QS from './PNG/QS.png';
import { UncontrolledTooltip } from 'reactstrap';


const deck = [
                D2, D3, D4, D5, D6, D7, D8, D9, D10, JD, QD, KD, AD,
                C2, C3, C4, C5, C6, C7, C8, C9, C10, JC, QC, KC, AC,
                S2, S3, S4, S5, S6, S7, S8, S9, S10, JS, QS, KS, AS,
                H2, H3, H4, H5, H6, H7, H8, H9, H10, JH, QH, KH, AH,
             ];
class App extends Component {
  constructor(props){
      super(props);
      this.state = {hand: [], hole: [], temp_deck: [], message: 'Press start'};
      this.start = this.start.bind(this);
      this.more = this.more.bind(this);
  }
  start () {
      const t_deck = [...deck.sort((a, b) => {return(0.5 - Math.random())})];
      this.setState({hand: [t_deck.shift(), t_deck.shift(), t_deck.shift()], hole: [t_deck.shift(), t_deck.shift()]});
      this.setState({temp_deck: [...t_deck], message: 'Press more for adding card'});
  };
  more () {
      if (this.state.hand.length < 5) {
          const t_deck = [...this.state.temp_deck]
          this.setState({hand: [...this.state.hand, t_deck.shift()]});
          this.setState({temp_deck: [...t_deck]});
      }
      else{
          this.setState({message: 'Hand is full. Press start.'})
      }
      
  };
  render() {
    return (
      <main className="container-fluid align-self-center row d-flex flex-column justify-content-center mx-0">
        <section className="col-12">
            <h1 className="d-none d-md-block display-4 text-center text-white ">{this.state.message}</h1>
            <h1 className="d-md-none text-center text-white ">{this.state.message}</h1>
        </section>
        <section className="col-12 d-flex justify-content-center">
            <ul className="list-unstyled d-flex flex-row justify-content-center">
                {this.state.hand.map((card, iterator) => {return(<li className="" key={"card"+iterator}><img className="img-fluid mx-2" style={{width:"10rem"}} src={card} alt="" /></li>)})}
            </ul>
        </section>
        <section className="col-12">    
            <hr />
        </section>
        <section className="col-12 d-flex justify-content-center">
            <ul className="list-unstyled d-flex flex-row justify-content-center">
                {this.state.hole.map((card, iterator) => {return(<li className="" key={"cardhole"+iterator}><img className="img-fluid mx-2" style={{width:"10rem"}} src={card} alt="" /></li>)})}
            </ul>
        </section>
        <section className="col-12 d-flex fixed-bottom mb-3">
            <i className="material-icons text-white md-48 " id="UncontrolledTooltipInfo">info
                 <UncontrolledTooltip placement="top" target="UncontrolledTooltipInfo">
                    This app can generate poker community and hole cards. Press start to generate flop cards. Press more to generate turn and one more time for river.
                 </UncontrolledTooltip>
            </i>
            <button className="btn btn-outline-white ml-auto mr-1" onClick={this.more}>More</button>
            <button className="btn btn-outline-white mr-auto ml-1" onClick={this.start}>Start</button>
        </section>
      </main>
    );
  }
}

export default App;
