export class App extends Component {
    state = {
      images: [],
      searchValue: "",
      page: 1,
      isLoading: false,
      error: null
    }
  
    async componentDidUpdate(prevProps, prevState) {
      if(prevState.searchValue !== this.state.searchValue || prevState.page !== this.state.page) {
        this.setState({isLoading: true})
  
        // Поменять на trycatch и await
        fetchImages(searchValue, page)
          .then(({ total, totalHits, hits }) => {
            if (!hits.length) {
              return Notify.failure(
                'Sorry, there are no images matching your search query. Please try again'
              );
            }
    
            if (page === 1) {
              Notify.success(`Hooray! We found ${totalHits} images.`);
            }
    
            this.setState(prevState => ({
              images: [...prevState.images, ...hits]
            }))
    
            if (hits.length < 12 && page !== 1) {
              Notify.failure(
                "We're sorry, but you've reached the end of search results"
              );
            }
          })
          .catch(error => setError(error.message))
          .finally(() => setIsLoading(false));
      }
    }
  
  
     handleSubmit = searchValue => {
      this.setState({
        searchValue, 
        page: 1,
        images: [],
        error: null
      })
    };
  
     handleLoadMore = () => {
      scroll.scrollMore(400);
      this.setState(prevState => ({page: prevState.page + 1}))
    };
  
   render() {
    return (
      <main>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleSubmit} />
        <StyledApp>
          {/* {isLoading ? <Loader /> : <ImageGallery images={images} />} */}
  
          <ImageGallery images={images} />
          {showBtn && (
            <Button onClick={handleLoadMore} aria-label="Load more">
              Load more
            </Button>
          )}
          {isLoading && <Loader />}
  
          {/* {error && <ImageError message={error} />} */}
  
          {error && (
            <ImageError
              message={`Sorry, but the ${searchValue} was not found. Please try again later!`}
            />
          )}
        </StyledApp>
      </main>
    );
   }
  };