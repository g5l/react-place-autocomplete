import React from "react";

export interface PlaceAutocompleteProps {
  label: string;
}

const PlaceAutocomplete = (props: PlaceAutocompleteProps) => {
  return <button>props.label</button>;
};

export default PlaceAutocomplete;