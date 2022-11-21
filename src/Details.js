import { Component } from "react"; // For writing Class components
import { useParams } from "react-router-dom";
import Carousel from "./components/Carousel";

// Function component
// const Details = () => {
//   const { id } = useParams();

//   return (
//     <h1>{ id }</h1>
//   )
// };

// Class component
class Details extends Component {
  // Always pass props to constructor() and super() if not using babel-class-properties plugin
  // constructor(props) {
  //   super(props);

  //   this.state = { loading: true };
  // }

  // With babel-class-properties plugin
  state = {
    loading: false,
  };

  // Essentially the same as useEffect() in Function component
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    // Use Object.assign() or object spread (better), instead of the commented code below, not always possible to do it this way
    // Possible to rerender state every time for each setState() call
    // this.setState(Object.assign({ loading: false }, json.pets[0]));
    this.setState({ loading: false, ...json.pets[0] });

    // this.setState({
    //   loading: false
    // })
    // this.setState(json.pets[0])
  }

  // Class component must have a render function
  // Class components cannot use hooks!
  render() {
    if (this.state.loading) {
      return <h2>Loading ...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images}></Carousel>
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// In order to use Reacts hooks, such as useParams(), when using Class component, it must be wrapped in another component and exported that way
const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default WrappedDetails;

// Export used for Function component
// export default Details;
