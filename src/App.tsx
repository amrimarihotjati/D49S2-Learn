import React from "react";

interface State {
  count: number;
}

export default class App extends React.Component<{ value?: null | undefined}, State>{

  constructor(props: { value?: null | undefined}){
    super(props);
    this.state = {
      count : 0
    }
  }

  Add(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();

    this.setState({count : this.state.count + 1})
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    return alert("Test")
  }

  render(){
    return(
      <React.Fragment>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>{this.state.count}</div>
          <button type="submit">Count</button>
        </form>
        {/* <div>{this.state.count}</div>
        <button onClick={(e) => this.Add(e)}>Count</button> */}
      </React.Fragment>
    )
  }
}

