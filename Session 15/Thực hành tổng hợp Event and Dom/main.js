document.body.innerHTML = `<div class="container">
<div class="divForm">
            <h2>Thông tin học viên</h2>
            <form action="#">
                <div class="input-control">
                    <label for="studentID">MSV</label>
                    <input type="text" name="studentID" id="studentID" placeholder="Vui lòng nhập mã sinh viên"> 
                    <div class="error"></div>
                </div>
                
                <div class="input-control">
                    <label for="studentName">Họ và tên</label>
                    <input type="text" name="studentName" id="studentName" placeholder="Vui lòng nhập tên sinh viên">  
                    <div class="error"></div>
                </div>
                
                <div class="input-control">
                    <label for="studentEmail">Email</label>
                    <input type="text" name="studentEmail" id="studentEmail" placeholder="Vui lòng nhập email">
                    <div class="error"></div>
                </div>
                
                <div class="input-control">
                    <label for="studentPhone">Số điện thoại</label>
                    <input type="text" name="studentPhone" id="studentPhone" placeholder="Vui lòng nhập số điện thoại">  
                    <div class="error"></div>
                </div>
               
                <div class="input-control">
                    <label for="studentAddress">Quê quán</label>
                    <input type="text" name="studentAddress" id="studentAddress" placeholder="Vui lòng nhập địa chỉ">
                    <div class="error"></div>
                </div>
                
                <div class="input-sex">               
                    <label for="studentSex">Giới tính</label>
                    <input type="radio" name="studentSex" id="Nam" value="Nam" checked>
                    <label for="Nam">Nam</label>
                    <input type="radio" name="studentSex" id="Nu" value="Nữ">
                    <label for="Nu">Nữ</label>                       
                </div>
                
                <div class="input-control">
                    <input type="submit" value="Lưu lại" id="btnSubmit">
                </div>
            </form>
        </div>
<div class="divTable">
    <h2>Danh sách học viên</h2>
    <table>
        <thead>
            <tr>
                <td>STT</td>
                <td>MSV</td>
                <td>Họ tên</td>
                <td>Email</td>
                <td>Điện thoại</td>
                <td>Địa chỉ</td>
                <td>Giới tính</td>
                <td>Thao tác</td>
                <td>Sắp xếp</td>
            </tr>
        </thead>
        <tbody id="content">

        </tbody>
    </table>
</div>
</div>`;
//Biến toàn cục mảng 2 chiều chứa tất cả các học viên
let listStudent = [
  ["SV001", "Ngoan", "ngoan@gmail.com", "01697575256", "Hà Nam", "Nữ"]];
let action = "create";
//Hàm render dữ liệu từ listStudent ra table

function renderData() {
  // Lấy ra phần tử sẽ được render dữ liệu
  let tbody = document.getElementById("content");
  //Đặt tbody chưa chứa dữ liệu
  tbody.innerHTML = "";
  for (let i = 0; i < listStudent.length; i++) {
    // render dữ liệu từng tr của tbody
    tbody.innerHTML += `<tr>
                            <td>${i + 1}</td>
                            <td>${listStudent[i][0]}</td>
                            <td>${listStudent[i][1]}</td>
                            <td>${listStudent[i][2]}</td>
                            <td>${listStudent[i][3]}</td>
                            <td>${listStudent[i][4]}</td>
                            <td>${listStudent[i][5]}</td>
                            <td class="buttonFlex">
                                <button class="btnEdit" onclick="editStudent('${listStudent[i][0]}')">Edit</button>
                                <button class="btnDelete" onclick="deleteStudent('${listStudent[i][0]}')">Delete</button>
                            </td>
                        </tr>`;
  }
}

let studentID = document.getElementById("studentID");
let studentName = document.getElementById("studentName");
let studentEmail = document.getElementById("studentEmail");
let studentPhone = document.getElementById("studentPhone");
let studentAddress = document.getElementById("studentAddress");
let studentSex = document.querySelector("input[name='studentSex']:checked");
function setError(input, message) {
  var parent = input.parentElement;
  var error = parent.querySelector("div .error");
  parent.classList.add("error");
  parent.classList.remove("success");
  error.innerText = message;
}
function setSuccess(input) {
  var parent = input.parentElement;
  var error = parent.querySelector("div .error");
  parent.classList.add("success");
  parent.classList.remove("error");
  error.innerText = "";
}
function validateForm() {
  let studentIDValue = document.getElementById("studentID").value.trim();
  let studentNameValue = document.getElementById("studentName").value.trim();
  let studentEmailValue = document.getElementById("studentEmail").value.trim();
  let studentPhoneValue = document.getElementById("studentPhone").value.trim();
  let studentAddressValue = document.getElementById("studentAddress").value.trim();
  let studentSexValue = document.querySelector("input[name='studentSex']:checked").value.trim();
  if (studentIDValue === "") {
    setError(studentID, "*Không được để trống MSV");
  } else {
    setSuccess(studentID);
  }
  if (studentNameValue === "") {
    setError(studentName, "*Không được để trống tên học viên");
  } else {
    setSuccess(studentName);
  }
  let validationEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (studentEmailValue === "") {
    setError(studentEmail, "*Không được để trống email");
  } else if (!studentEmailValue.match(validationEmail)) {
    setError(studentEmail, "*Email không hợp lệ");
  } else {
    setSuccess(studentEmail);
  }
  let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  if (studentPhoneValue === "") {
    setError(studentPhone, "*Không được để trống số điện thoại");
  } else if(isNaN(studentPhoneValue)){
    setError(studentPhone, "*Yêu cầu số điện thoại phải là số");
  }else if (!studentPhoneValue.match(phonePattern)) {
    setError(studentPhone, "*Số điện thoại không hợp lệ");
  } else {
    setSuccess(studentPhone);
  }
  if (studentAddressValue === "") {
    setError(studentAddress, "*Không được để trống địa chỉ");
  } else {
    setSuccess(studentAddress);
  }
  if (
    studentIDValue &&
    studentNameValue &&
    studentEmailValue &&
    studentPhoneValue &&
    studentAddressValue
  ) {
    return true;
  }
  return false;
}

//Hàm thực hiện thêm mới hoặc cập nhật sinh viên
function creatOrEdit() {
    if (validateForm()) {
      let studentID = document.getElementById("studentID").value;
      let studentName = document.getElementById("studentName").value;
      let studentEmail = document.getElementById("studentEmail").value;
      let studentPhone = document.getElementById("studentPhone").value;
      let studentAddress = document.getElementById("studentAddress").value;
      let studentSex = document.querySelector("input[name='studentSex']:checked").value;
      if (action == "create") {
        //Thực hiện thêm mới sinh viên
        //1.Lấy dữ liệu từ form
        //2.push sinh viên vào mảng 2 chiều listStudent
        listStudent.push([
          studentID,
          studentName,
          studentEmail,
          studentPhone,
          studentAddress,
          studentSex
        ]);
        console.log(listStudent);
      } else {
        //Thực hiện cập nhật sinh viên
        //2.Lấy chỉ số sinh viên trong mảng
        let i = getStudentByStudentByID(studentID);
        //3.Tiến hành cập nhật
        listStudent[i][0] = studentID;
        listStudent[i][1] = studentName;
        listStudent[i][2] = studentEmail;
        listStudent[i][3] = studentPhone;
        listStudent[i][4] = studentAddress;
        listStudent[i][5] = studentSex;
        //Cho phép nhập studentID
        document.getElementById("studentID").readOnly = false;
      }
      //Xóa dữ liệu trên form khi thêm mới hoặc cập nhật
      document.getElementById("studentID").value = "";
      document.getElementById("studentName").value = "";
      document.getElementById("studentEmail").value = "";
      document.getElementById("studentPhone").value = "";
      document.getElementById("studentAddress").value = "";
      document.getElementById("Nam").checked = true;
      //Render lại giữ liệu trên table
      renderData();
    }
  }
  
  //Hàm lấy chỉ số sinh viên trong listStudent từ studentID
  function getStudentByStudentByID(studentID) {
    for (let i = 0; i < listStudent.length; i++) {
      if (studentID == listStudent[i][0]) {
        return i;
      }
    }
    return -1;
  }
  
  function editStudent(studentID) {
    //1.Lấy chỉ số sinh viên trong mảng
    let i = getStudentByStudentByID(studentID);
    if (i >= 0) {
      //2.fill thông tin sinh viên ra form
      document.getElementById("studentID").value = listStudent[i][0];
      document.getElementById("studentName").value = listStudent[i][1];
      document.getElementById("studentEmail").value = listStudent[i][2];
      document.getElementById("studentPhone").value = listStudent[i][3];
      document.getElementById("studentAddress").value = listStudent[i][4];
      if (listStudent[i][5] == "Nam") {
        document.getElementById("Nam").checked = true;
      } else {
        document.getElementById("Nu").checked = true;
      }
      //Đổi action bằng edit
      action = "edit";
      //Để sửa studentID thành readOnly
      document.getElementById("studentID").readOnly = true;
    }
  }
  
  //Hàm thực thực hiện xóa sinh viên
  function deleteStudent(studentID) {
    //1.Lấy i sinh viên ở trong mảng
    let i = getStudentByStudentByID(studentID);
    let isCheckDelete=confirm("Bạn có chắc muốn xóa không?");
    console.log(isCheckDelete);
    if(isCheckDelete){
      //2.Thực hiện xóa theo i
      listStudent.splice(i, 1);
      renderData();
    }else{
      renderData();
    }
  }
  
  //Khi trình duyệt load thì sẽ load dữ liệu student và hiển thị trên table
  document.onload = renderData();
  
  let btnSubmit = document.getElementById("btnSubmit");
  btnSubmit.addEventListener("click", function (event) {
    //Chặn sự kiện submit default của form
    event.preventDefault();
    creatOrEdit();
  });
  