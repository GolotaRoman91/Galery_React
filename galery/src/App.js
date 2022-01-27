import './App.css';
import React from 'react';
import axios from 'axios';
import Table from './Components/Table';
import Popup from './Components/Popup';
import Pagination from './Components/Pagination';
import { LIMIT_ELEMS, PICTURES_PER_PAGE } from './Constants/Limits';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allPictures: [], pictures: [], urlBig: '', currentPage: 0, step: PICTURES_PER_PAGE };
    this.step = PICTURES_PER_PAGE;
    this.onPaginationClick = this.onPaginationClick.bind(this);
}

componentDidMount() {
    this.querytodo();
}

querytodo = async () => {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${LIMIT_ELEMS}`);
        this.setState({ allPictures: data, pictures: data.slice(0, PICTURES_PER_PAGE) });
    } catch (error) {
        return false;
    }
};

onPaginationClick = (evt) => {
  this.setState({currentPage : (evt.target.value) - 1});
}

showBigImage = (url) => {
  this.setState({ urlBig: url });
  // console.log(this.state);
}

closeBigImage = () => {
  this.setState({urlBig: ''})
}

numberOfPages = () => {
  const pages = [];
  for (let i = 1; i <= LIMIT_ELEMS / PICTURES_PER_PAGE; i++) {
    pages.push(i)
  }
  return pages
}

handleChangePage = (page) => {
  console.log(this.state);
  this.setState({currentPage: page, pictures: this.state.allPictures.slice(this.state.currentPage * this.state.step, this.state.currentPage * this.state.step + this.state.step) });
}

  render() {
    // console.log(this.state.currentPage);
    // console.log((this.state.pictures).slice(this.state.currentPage * this.step, this.state.currentPage * this.state.step + this.state.step));
    // console.log('Big ' + this.state.urlBig);
    // const visibleImages = this.state.images.slice(this.state.currentPage * this.state.step, this.state.currentPage * this.state.step + this.state.step)
    return (
      <div className="wrapper">
        <Table pictures = {this.state.pictures} showBigImage = {this.showBigImage} />
        {this.state.urlBig && <Popup url = {this.state.urlBig} closeBigImage = {this.closeBigImage}/>}
        <Pagination pages = {this.numberOfPages()} onPageChange={this.handleChangePage}/>
      </div>
    );
  }
}

export default App;
