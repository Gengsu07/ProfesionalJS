const counterValue = document.querySelector(".counter_value");
const counterDiv = document.querySelector(".counter");
const counterTitle = document.querySelector(".counter_title");
const counterButton = document.querySelector(".counter_button");

const AddBtn = document.querySelector(".counter_button_increment");
const MinBtn = document.querySelector(".counter_button_decrement");
const ResetBtn = document.querySelector(".counter_reset");

const IncrCounter = () => {
  // current value
  const curVal = document.querySelector(".counter_value").textContent;
  // value to number
  const val = +curVal;
  const newval = val + 1;

  if (newval > 5) {
    counterValue.textContent = 5;
    counterDiv.classList.add("counter_limit");
    counterTitle.innerHTML = "LIMIT! BUY <b>PRO</b> FOR >5";
    AddBtn.disabled = true;
    MinBtn.disabled = true;
  } else {
    counterValue.textContent = newval;
  }
  // unfocus (blur) button when keydown
  AddBtn.blur();
};

const DecCounter = () => {
  // current value
  const curVal = document.querySelector(".counter_value").textContent;
  // value to number
  const val = +curVal;
  const newval = val - 1;

  newval < 0
    ? (counterValue.textContent = 0)
    : (counterValue.textContent = newval);

  // unfocus (blur) button when keydown
  MinBtn.blur();
};

const ResetCounter = () => {
  counterValue.textContent = 0;
  counterTitle.textContent = "Fancy Counter";
  counterDiv.classList.remove("counter_limit");
  AddBtn.disabled = false;
  MinBtn.disabled = false;
  // unfocus (blur) button when keydown
  ResetBtn.blur();
};

AddBtn.addEventListener("click", IncrCounter);
document.addEventListener("keydown", IncrCounter);
MinBtn.addEventListener("click", DecCounter);
ResetBtn.addEventListener("click", ResetCounter);
