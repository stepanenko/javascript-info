
// presentation component, aka composed component
const PeopleList = ({ data }) =>
  <ol>
    {data.results.map((person, id) => {
      const { first, last } = person.name;
      return <li key={id}>{first} {last}</li>;
    })}
  </ol>;

// higher order component
const DataComponent = (ComposedComponent, url) =>
  class DataComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: false,
        loaded: false
      };
    }

    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
          loading: false,
          loaded: true,
          data
        }));
    }

    render() {
      return (
        <div>
          {this.state.loaded
            ? <ComposedComponent {...this.state} {...this.props} />
            : <div>Loading...</div>
          }
        </div>
      );
    }
  }

const RandomMeUsers = DataComponent(
  PeopleList,
  'https://randomuser.me/api?results=10'
);

ReactDOM.render(<RandomMeUsers />, document.getElementById('root'));
