import { Autocomplete, Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { optionType } from "../types";

type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <div className="search-card">
      <h1>Weather Forecast</h1>
      <p className="search-desc">Enter below a place you want to know the weather of and select an option from the dropdown</p>
      <div className="input-items">
        <div className="search-input">
          <Autocomplete
            options={options}
            getOptionLabel={(option: optionType) =>
              `${option.name}, ${option.country}`
            }
            onChange={(event: any, value: optionType | null) =>
              onOptionSelect(value!)
            }
            renderInput={(params) => (
              <TextField className="input"
                {...params}
                label="write the location"
                variant="standard"
                value={term}
                onChange={onInputChange}
              />
            )}
          />
        </div>
        <Button className="search-button" onClick={onSubmit} variant="contained">
          Search
        </Button>

      </div>
      </div>
  );
};

export default Search;
