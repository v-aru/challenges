console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  
    console.log(data);

    const age = parseInt(data.age);
    const badness = parseInt(data.badness);
    const ageBadnessSum = age + badness;

    console.log(`The age-badness-sum of "${data.firstName}" is "${ageBadnessSum}".`)

    event.target.reset();
    document.querySelector('input[name="firstName"]').focus();
  });

