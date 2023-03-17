export function ListAndValue({ good, neutral, bad, summa, percentage }) {
  return (
    <>
      <ul>
        <li>
          Good:
          <span>{good}</span>
        </li>
        <li>
          Nautral:
          <span>{neutral}</span>
        </li>
        <li>
          Bad:
          <span>{bad}</span>
        </li>
      </ul>
      <p>{summa}</p>
      <p>Percentage of quality: {percentage}%</p>
    </>
  );
}
