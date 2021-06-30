import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./searchBar";
import VedioDetail from "./vedioDetail";
import VedioList from "./vedioList";

class App extends React.Component {
   state = { videos: [], selectedVedio: null };

   componentDidMount() {
      this.onTermSubmit("car");
   }

   onTermSubmit = async (term) => {
      const response = await youtube.get("/search", {
         params: {
            q: term,
         },
      });
      console.log(response);

      this.setState({
         videos: response.data.items,
         selectedVedio: response.data.items[0],
      });
   };

   onVedioSelect = (video) => {
      // console.log("from the app :", vedio);
      this.setState({ selectedVedio: video });
   };

   render() {
      return (
         <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            {/* I have {this.state.videos.length} vedios */}
            <div className="ui grid">
               <div className="ui row">
                  <div className="eleven wide column">
                     <VedioDetail video={this.state.selectedVedio} />
                  </div>
                  <div className="five wide column">
                     <VedioList
                        onVedioSelect={this.onVedioSelect}
                        // onVideoSelect={ selectedVideo => onVideoSelect(selectedVideo) }
                        videos={this.state.videos}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
