export default function voteAssign(bullish: number, bearish: number) {
  let bull = 0;
  let bear = 0;
  if (bullish >= bearish) {
    bull = 1;
  } else {
    bear = 1;
  }
  const result = { bull, bear };
  return result;
}
