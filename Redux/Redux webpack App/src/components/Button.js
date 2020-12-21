
export const CounterButton = (title, doing) => {
  const btn = document.createElement('button');
  btn.innerHTML = title;
  btn.addEventListener('click', doing);
  return btn;
};
