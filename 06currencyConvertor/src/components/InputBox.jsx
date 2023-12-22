import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrenyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label id={amountInputId} className="text-black/40 mb-2 inline-block">
          {" "}
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrenyChange && onCurrenyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.length !== 0 &&
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
