const Exponent = ({ base, exponent }) => {
  const multiplicationString = `${base} *`

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n<sup>{exponent}</sup></p>
      <p className="exponent-result">
        {multiplicationString.repeat(exponent - 1)} {base} = <span className="total">
          {base ** exponent}
        </span>
      </p>
    </div>
  )
};

export default Exponent;