let addBtn = document.querySelector("#addbtn");
let questionInput = document.getElementById("questionInput");
let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");
let optionC = document.getElementById("optionC");
let optionD = document.getElementById("optionD");
let quizList = document.getElementById("quizList");

addBtn.addEventListener("click", function () {
    // 1. Read values
    let questionValue = questionInput.value;
    let optionAValue = optionA.value;
    let optionBValue = optionB.value;
    let optionCValue = optionC.value;
    let optionDValue = optionD.value;

    // 2. Validate: none of the fields can be empty
    let isNotEmpty = questionValue != "" &&
         optionAValue != "" &&
         optionBValue != "" &&
         optionCValue != "" &&
         optionDValue != "";

    if (isNotEmpty) {
        // 3. Create & Append
        let questionCard = document.createElement("div");
        let innerElements = `<h3>${questionValue}</h3>
            <ul>
                <li>A. ${optionAValue}</li>
                <li>B. ${optionBValue}</li>
                <li>C. ${optionCValue}</li>
                <li>D. ${optionDValue}</li>
            </ul>
            <button class="delete-btn">Delete</button>`;

        questionCard.innerHTML = innerElements;
        questionCard.className = "question-card";
        quizList.appendChild(questionCard);

        // 4. Clear
        questionInput.value = "";
        optionA.value = "";
        optionB.value = "";
        optionC.value = "";
        optionD.value = "";

        // Wiring up the Delete button
        let deleteBtn = questionCard.querySelector("button");
        deleteBtn.addEventListener("click", function () {
            questionCard.remove();
        });
    } else {
        alert("One of the fields is empty");
    }
});