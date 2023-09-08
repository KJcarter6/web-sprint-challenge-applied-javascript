const Header = (title, date, temp) => {
  const divWrapper = document.createElement("div");
  divWrapper.classList.add("header");

const span = document.createElement("span");
span.classList.add("date");
span.textContent = date;

const h1Title = document.createElement("h1");
h1Title.textContent = title;

const span2 = document.createElement("span");
span2.classList.add("temp");
span2.textContent = temp;

divWrapper.appendChild(span);
divWrapper.appendChild(h1Title);
divWrapper.appendChild(span2);


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
 return divWrapper;
}

const headerAppender = (selector) => {
  const header1 = Header('title', 'temp', 'date');
  const appendTo = document.querySelector(selector);

  appendTo.appendChild(header1)
}



  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!



export { Header, headerAppender }
