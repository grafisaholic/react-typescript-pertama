type RandomNumberType = {
  value: number
}

type PositiveNumber = RandomNumberType & {
  isPositive: boolean,
  isNegative?: never,
  isZero?: never
}

type NegativeNumber = RandomNumberType & {
  isNegative: boolean,
  isPositive?: never,
  isZero?: never
}

type ZeroNumber = RandomNumberType & {
  isZero: boolean,
  isPositive?: never,
  isNegative?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

function RandomNumber({
  value,
  isPositive,
  isNegative,
  isZero
}: RandomNumberProps) {
  return (
    <div>
      Value : {value} <br />
      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
        {isPositive && 'Positive'} {isNegative && 'Negative'} {isZero && 'Zero'}
      </span> 
    </div>
  )
}

export default RandomNumber