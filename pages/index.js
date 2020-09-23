import React, {Component} from 'react';
import lottery from '../lottery';
import web3 from '../web3';

class Lottery extends Component {

constructor(props){
  super(props);
  this.state = {
    manager : '',
    participate_amount : '0.5',
    message:''
  }
}

  async componentDidMount(){
    // get the public address of the manager
    const manager = await lottery.methods.manager().call();
    this.setState({manager: manager})
  }

render(){
  return (
<div>
<h1>Total lottery pool is 1000</h1>
<form>
<input placeholder ="0.02"/>
<button type="submit">Participate</button>
<hr/><br/><hr/>
<p> The manager of the lottery decentralized app is {this.state.manager} </p>
<button> Pick Winner </button>
</form>
</div>

  )
}
}

export default Lottery;
