import React from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

interface RecipeProps {
  onChange: (double: boolean) => void;
}

function Double(props: RecipeProps) {

  return (
    <BootstrapSwitchButton 
      checked={false}
      onlabel='Show original recipe' 
      offlabel='Show doubled recipe'
      onstyle='secondary' 
      onChange={(checked: boolean)=> {
        props.onChange(checked);
      }}
      width={200}
    />
  );
}

export default Double;
