import React from "react";

class SearchBar extends React.Component {
   state = { term: "" };

   onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onFormSubmit(this.state.term);
      console.log(this.state.term);
   };

   render() {
      return (
         <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label> Vedio search</label>
                  <input
                     type="text"
                     onChange={(e) => this.setState({ term: e.target.value })}
                     value={this.state.term}
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;
