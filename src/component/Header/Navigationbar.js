import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import "./Header.css";

class Navigationbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: {
        name: "",
        specialization: "",
        location: "",
        insurance: "",
        language: "",
      },
      doctors: [],
      suggestedText: {
        name: [],
        specialization: [],
        location: [],
        insurance: [],
        language: [],
      },
      searchResults: [],
      isSuggestionClicked: false,
    };
  }

  componentDidMount() {
    // Call the API when the component mounts
    this.fetchData();
  }

  fetchData = () => {
    axios
      .all([
        axios.get("http://localhost:9090/doctor/doctors"),
        axios.get("http://localhost:9090/doctor/insurances"),
        axios.get("http://localhost:9090/doctor/locations"),
      ])
      .then(
        axios.spread((doctorsRes, insurancesRes, locationsRes) => {
          const { data: doctorsData } = doctorsRes;
          const { data: insurancesData } = insurancesRes;
          const { data: locationsData } = locationsRes;
         console.log(doctorsRes);
          // Extract suggestions
          const nameSuggestions = doctorsData.map((doctor) => doctor.name);
          const specializationSuggestions = doctorsData.map(
            (doctor) => doctor.specialization
          );
          const locationSuggestions = locationsData.map(
            (location) =>
              `${location.city}, ${location.state}, ${location.zipcode}`
          );
          const insuranceSuggestions = insurancesData.map(
            (insurance) => insurance.PayerName
          );

          this.setState({
            doctors: doctorsData,
            suggestedText: {
              name: Array.from(new Set(nameSuggestions)), // Unique names
              specialization: Array.from(new Set(specializationSuggestions)), // Unique specializations
              location: locationSuggestions,
              insurance: insuranceSuggestions,
              language: [], // You may add language suggestions if available
            },
          });
        })
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  handleSearchInputChange = (event, field) => {
    const { value } = event.target;
    const { suggestedText } = this.state;
    const filteredSuggestions = suggestedText[field].filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    this.setState((prevState) => ({
      searchCriteria: {
        ...prevState.searchCriteria,
        [field]: value,
      },
      suggestedText: {
        ...prevState.suggestedText,
        [field]: filteredSuggestions,
      },
    }));
  };
  handleSearch = () => {
    // Prevent searching if the search button is not clicked
    if (!this.state.isSearchButtonClicked) {
      return;
    }
  
    const { doctors, searchCriteria } = this.state;
    const { name, specialization, location, insurance, language } = searchCriteria;
    const filteredDoctors = doctors.filter(doctor => {
      const { location: doctorLocation, insurance: doctorInsurance, language: doctorLanguage } = doctor;
      
      // Check if doctor properties are defined before accessing their properties
      if (!doctorLocation || !doctorInsurance || !doctorLanguage) {
        return false;
      }
  
      return (
        doctor.name.toLowerCase().includes(name.toLowerCase()) &&
        doctor.specialization.toLowerCase().includes(specialization.toLowerCase()) &&
        doctor.location.toLowerCase().includes(location.toLowerCase()) &&
        doctor.insurance.toLowerCase().includes(insurance.toLowerCase()) &&
        doctor.language.toLowerCase().includes(language.toLowerCase())
      );
    });
    this.setState({ searchResults: filteredDoctors });
  
    // Reset the search button clicked state
    this.setState({ isSearchButtonClicked: false });
  };
  
  

  handleSearchButtonClick = () => {
    // Set the search button clicked state to true when the button is clicked
    this.setState({ isSearchButtonClicked: true });

    // Call the handleSearch method to perform the search
    this.handleSearch();
  };

  render() {
    const { searchCriteria, suggestedText, searchResults } = this.state;

    return (
      <div className="container">
        <div className="row mb-3">
          {Object.keys(searchCriteria).map((field, index) => (
            <div key={index} className="col widthoful">
              <input
                type="text"
                className="form-control search-input element"
                placeholder={field}
                value={searchCriteria[field]}
                onChange={(e) => this.handleSearchInputChange(e, field)}
              />
              {searchCriteria[field] && (
                <ul className="list-group mt-2">
                  {suggestedText[field].map((text, idx) => (
                    <li
                      key={idx}
                      className="list-group-item"
                      onClick={() => {
                        this.setState(
                          (prevState) => ({
                            searchCriteria: {
                              ...prevState.searchCriteria,
                              [field]: text,
                            },
                            suggestedText: {
                              ...prevState.suggestedText,
                              [field]: [],
                            },
                          }),
                          () => this.handleSearch()
                        );
                      }}
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="col">
            <button
              className="btn btn-primary buttonclass"
              onClick={this.handleSearchButtonClick}
            >
              <CiSearch className="svgelement" />
            </button>
          </div>
        </div>
        <div className="row mt-3">
          {searchResults.length > 0 ? (
            searchResults.map((doctor, index) => (
              <div key={index} className="col-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{doctor.name}</h5>
                    <p className="card-text">Location: {doctor.location}</p>
                    <p className="card-text">
                      Specialization: {doctor.specialization}
                    </p>
                    <p className="card-text">Insurance: {doctor.insurance}</p>
                    <p className="card-text">Language: {doctor.language}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col">
              <p>No doctors found for the given criteria.</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navigationbar;
