import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { fetchImages } from "./api";

class App extends Component {

  state = {
    images: [],
    query: "",
    page: 1,
    loading: false,
    modalImage: null,
  };

  componentDidUpdate(prevProps, prevState) {

    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {

      this.setState({ loading: true });

      fetchImages(this.state.query, this.state.page)
        .then(data => {
          this.setState(prev => ({
            images: [...prev.images, ...data],
            loading: false,
          }));
        });
    }
  }

  handleSearch = query => {
    this.setState({
      query,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  openModal = url => {
    this.setState({ modalImage: url });
  };

  closeModal = () => {
    this.setState({ modalImage: null });
  };

  render() {

    const { images, loading, modalImage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />

        <ImageGallery
          images={images}
          onClick={this.openModal}
        />

        {loading && <Loader />}

        {images.length > 0 && !loading && (
          <Button onClick={this.loadMore} />
        )}

        {modalImage && (
          <Modal image={modalImage} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;