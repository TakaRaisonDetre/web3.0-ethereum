import React, {Component} from 'react';

class Lottery extends Component {

render(){
  return (
<div>
<h1>Total lottery pool is 1000</h1>
<form>
<input value ="0.5"/>
<button type="submit">Participnate</button>
<hr/><br/><hr/>
<p> The manager of the lottery decentralized app is </p>
<button> Pick Winner </button>
</form>
</div>

  )
}
}

export default Lottery;
