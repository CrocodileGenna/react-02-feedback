import { CONTAINER_DIV, BUTTON } from './styled/Buttons.styled';

export function Buttons({ good, neutral, bad }) {
  return (
    <CONTAINER_DIV>
      <BUTTON onClick={good}>Good</BUTTON>
      <BUTTON onClick={neutral}>Nautral</BUTTON>
      <BUTTON onClick={bad}>Bad</BUTTON>
    </CONTAINER_DIV>
  );
}
