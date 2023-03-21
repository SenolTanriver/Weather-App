import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";


function App(): JSX.Element {

  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } = useForecast()

  return (
    <div className="main">
     

      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search term={term} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit} />
      )}

    
    </div>
  );
}

export default App;