window.onload = () => {
    window.jsPDF = window.jspdf.jsPDF;
    var doc = jsPDF();
    // adding subject field
    var addSubjectBtn = document.getElementById("subjects");
    addSubjectBtn.onclick = () => {
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
        obtainedMarks.className = "obtained-marks";

        //Delete button  
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "<i class= 'fa fa-trash'></i>";
        deleteButton.className = "delete-btn";
        deleteButton.type = "button";

        //Adding fields
         div.append(subject);
         div.append(fullMarks);
         div.append(obtainedMarks);
         div.append(deleteButton);

         //Adding div tag to form
         var dynamicArea = document.getElementById("dynamic-area");
         dynamicArea.append(div);


         // Adding subject table
         var subjectTitleRow = document.createElement("tr");
         subjectTitleRow.style.textAlign = "center";

         var subjectTd = document.createElement("td");
         subjectTd.setAttribute("colspan","3");

         var fullMarksTd = document.createElement("td");
         fullMarksTd.innerHTML = 100;
         var obtainedMarksTd = document.createElement("td");
         obtainedMarksTd.setAttribute("colspan","2");

         subjectTitleRow.append(subjectTd);
         subjectTitleRow.append(fullMarksTd);
         subjectTitleRow.append(obtainedMarksTd);

          var subjectList = document.getElementById("subject-list");
          subjectList.append(subjectTitleRow);



          //live preview subject and marks entry
          subject.oninput = function() {
            subjectTd.innerHTML= this.value;
          }

          fullMarks.oninput = function() {
            fullMarksTd.innerHTML = this.value;
          }

          obtainedMarks.oninput = function() {
            obtainedMarksTd.innerHTML = this.value;

            //calculate total marks
            var totalMarks = 0;
            var obm = document.getElementsByClassName("obtained-marks");
            for (var i = 0 ;  i<obm.length; i++)
            {
                var num = Number(obm[i].value);
                totalMarks= totalMarks+num;
            }
            var marks = document.getElementById("total-marks");
            marks.innerHTML = totalMarks;

            //calculate percentage
            var marksPercentage =  document.getElementById("total-percentage");
            marksPercentage.innerHTML = (totalMarks/obm.length).toFixed(1)+'%';


            //finding grade
            var percentage = (totalMarks/obm.length).toFixed(1);
            var grade = '';

            if(percentage > 90)  grade = "A+";

            else if (percentage > 80) grade = "A";

            else if (percentage > 70) grade = "B";

            else if (percentage > 60) grade = "B+";

            else if (percentage > 50) grade = "C";

            else if (percentage > 40) grade = "D";

            else grade = "E";

            var gradeTd = document.getElementById("grade");
            gradeTd.innerHTML = grade;
               
          }
         
         //Deleteing row 
         deleteButton.onclick = function () {
            div.remove();
            subjectTitleRow.remove();
         }

    }


    // preview student image and upload
   /* var studentPic = document.getElementById("studentPic");
    studentPic.onchange = () => {
        var file = this.files[0];
        var url = URL.createObjectURL(file);
        var studentPicPreview = document.getElementById("student-pic-preview");
        studentPicPreview.src = url;
    }*/

    // school logo picker
    /*var schoolLogo = document.getElementById("schoolLogo");
    schoolLogo.onchange = () => {
         var file = this.files[0];
         var url = URL.createObjectURL(file);
         var schoolLogoPreview = document.getElementById("schoolLogoPreview");
         schoolLogoPreview.src = url;
}*/


    // School Name Input 
    var schoolNameInput = document.getElementById("schoolNameInput");
    schoolNameInput.oninput = function(){
        var schoolName = document.getElementById("school-name");
        schoolName.innerHTML = this.value;
    }

    //School tag Input 
    var schoolTagInput = document.getElementById("schoolTagInput");
    schoolTagInput.oninput = function() {
        var schoolTag = document.getElementById("school-tag");
        schoolTag.innerHTML = this.value;
    }

    //candidate name 
    var candidateName = document.getElementById("candidateName");
    candidateName.oninput = function() {
        var candidateNamePreview = document.getElementById("candidateNamePreview");
        candidateNamePreview.innerHTML = this.value;
    }

    //father name
    var fatherName = document.getElementById("fatherName");
    fatherName.oninput = function() {
        var fatherNamePreview = document.getElementById("fatherNamePreview");
        fatherNamePreview.innerHTML = this.value;
    }

    //DPB input 
    var dobInput = document.getElementById("dobInput");
    dobInput.onchange = function() {
        var dobInputPreview = document.getElementById("dobInputPreview");
        dobInputPreview.innerHTML = this.value;
    }

    //gender Selection 
    var chooseGender = document.getElementById("choose-gender");
    chooseGender.onchange = function() {
        var genderPreview = document.getElementById("choose-gender-preview");
        genderPreview.innerHTML = this.value ;
    }

    //class input 
    var classInput = document.getElementById("class-input");
    classInput.oninput = function() {
        var classInputPreview = document.getElementById("class-input-preview");
        classInputPreview.innerHTML = this.value;
    }

    // roll input 
    var rollInput = document.getElementById("roll-input");
    rollInput.oninput = function() {
        var rollInputPreview = document.getElementById("roll-input-preview");
        rollInputPreview.innerHTML = this.value;
    }

    //Export to PDF one way
    /*var generate = document.getElementById("generate");
    generate.onclick = function() {
        var preview = document.getElementById("preview");
        html2canvas(preview).then(function(result){
            var base64String = result.toDataURL();
             var doc = jsPDF('p','mm');
             doc.addImage(base64String, 'PNG' , 30, 30);
             doc.save('Marksheet.pdf');
        })
    } */


    //Getting text width
    var findTextWidth = function(text , fontSize) {
        var textWidth = doc.getTextDimensions(text,{
            fontSize: fontSize
        }).w;
        return textWidth;
    }

    function getURL(file) {
        var url = URL.createObjectURL(file);
        return url;
    }

    var form = document.getElementById("marksheet-form");
    form.onsubmit = function(event) {
        event.preventDefault();
        var elements = form.elements;
        var logo = elements.schoolLogo.files[0];
        var schoolUrl = URL.createObjectURL(logo);
        var schoolName = elements.schoolName.value;
        var tagLine = elements.tagLine.value;
        var candidateName = elements.candidateName.value;
        var fatherName = elements.fatherName.value;
        var dob = elements.dob.value;
        var gender = elements.gender.value;
        var standard = elements.class.value;
        var roll = elements.roll.value;

        //Generate PDF
        // live preview of logo and profile code is commented
        var logoWidth = 30;
        var pageWidth = doc.internal.pageSize.width;
        var schoolLogoLeftMargin = (pageWidth-logoWidth)/2;
        doc.addImage(schoolUrl, 'PNG', schoolLogoLeftMargin,10,logoWidth,30);
        

        var schoolNameFontSize = 28;
        var schooNameWidth = findTextWidth(schoolName , schoolNameFontSize);
        var schoolNameLeftMargin = (pageWidth-schooNameWidth)/2;
        doc.setFontSize(schoolNameFontSize);
        doc.text(schoolName, schoolNameLeftMargin,45);


        var tagLineFontSize = 14;
        var tagLineWidth = findTextWidth(tagLine, tagLineFontSize);
        var tagLineLeftMargin = (pageWidth-tagLineWidth)/2;
        doc.setFontSize(tagLineFontSize);
        doc.text(tagLine, tagLineLeftMargin, 55);

        doc.autoTable(
            {
                head: [['subjects', 'Fullmarks', 'Obtained Marks']],
                body: [
                        ['Maths', '100', '80'],
                        ['English', '100', '78']
                      ]
            }
        )




        doc.save("marksheet.pdf");
    }
}


/*

1. doc.text()
2. doc.save()
3. doc.setFontSize()
4. doc.setFont()
5. doc.addImage('path' , 'jpeg' , leftMargin , topMargin , imagewidth , imageheight)
6. doc.internal.pageSize.width (to view pdf width)

*/