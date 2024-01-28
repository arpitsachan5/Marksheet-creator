window.onload = function() {
    var addSubjectBtn = document.getElementById("subjects");
    addSubjectBtn.onclick = function() {
        var div = document.createElement("div");
        div.id = "marks";

        //subject field
        var subject = document.createElement("input")
        subject.name = "subject";
        subject.placeholder = "Subject Name";
        subject.type = "text";

        // fullmarks

        var fullMarks = document.createElement("input")
        fullMarks.name = "fullMarks";
        fullMarks.placeholder = "Full Marks";
        fullMarks.type = "number";
        fullMarks.value = 100;

        //obtainedmarks

        var obtainedMarks = document.createElement("input")
        obtainedMarks.name = "obtainedMarks";
        obtainedMarks.placeholder = "Obtained Marks";
        obtainedMarks.type = "number";

        //Adding fields
         div.append(subject);
         div.append(fullMarks);
         div.append(obtainedMarks);

         //Adding div tag to form
         var dynamicArea = document.getElementById("dynamic-area");
         dynamicArea.append(div);



    }
}