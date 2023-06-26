let form = document.getElementById("form");
let studentID = document.getElementById("studentID");
let studentName = document.getElementById("studentName");
let studentEmail = document.getElementById("studentEmail");
let studentPhone = document.getElementById("studentPhone");
let studentAddress = document.getElementById("studentAddress");
let studentSex = document.querySelector("input[name='studentSex']:checked");

function setError(input, message) {
  let inputControl = input.parentElement;
  let errorMessage = inputControl.querySelector(".error-message");
  errorMessage.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccess(input) {
  let inputControl = input.parentElement;
  let errorMessage = inputControl.querySelector(".error-message");
  errorMessage.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

function validateForm() {
  let studentIDValue = document.getElementById("studentID").value.trim();
  let studentNameValue = document.getElementById("studentName").value.trim();
  let studentEmailValue = document.getElementById("studentEmail").value.trim();
  let studentPhoneValue = document.getElementById("studentPhone").value.trim();
  let studentAddressValue = document
    .getElementById("studentAddress")
    .value.trim();
  let studentSexValue = document
    .querySelector("input[name='studentSex']:checked")
    .value.trim();

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
  } else if (isNaN(studentPhoneValue)) {
    setError(studentPhone, "*Yêu cầu số điện thoại phải là số");
  } else if (!studentPhoneValue.match(phonePattern)) {
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

//Check trùng id
function checkID(id) {
  let list = this.arrayData;
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      return true;
    }
  }
  return false;
}
//Hiển thị dữ liệu từ from sau khi submit
function showData() {
  let listStudent = this.arrayData;
  let table = `
    <tbody>
    `;
  for (let i = 0; i < arrayData.length; i++) {
    table += `<tr>`;
    table += `<td>` + (i + 1) + `</td>`;
    table += `<td>` + arrayData[i].id + `</td>`;
    table += `<td>` + arrayData[i].name + `</td>`;
    table += `<td>` + arrayData[i].email + `</td>`;
    table += `<td>` + arrayData[i].phone + `</td>`;
    table += `<td>` + arrayData[i].address + `</td>`;
    table += `<td>` + arrayData[i].sex + `</td>`;
    table += `<td>
        <button class="btnEdit" onclick="editData('${arrayData[i].id}')">Edit</button>
        <button class="btnDelete" onclick="deleteData('${arrayData[i].id}')">Delete</button>
        </td>`;
    table += `</tr>`;
  }
  table += `</tbody></table>`;

  document.getElementById("content").innerHTML = table;
}
//Hàm lấy chỉ số sinh viên trong arrayData từ studentID
function getStudentByStudentByID(studentID) {
  for (let i = 0; i < arrayData.length; i++) {
    if (studentID == arrayData[i].id) {
      return i;
    }
  }
  return -1;
}
//Reset dữ liệu sau khi submit
function reset() {
  document.getElementById("studentID").value = "";
  document.getElementById("studentName").value = "";
  document.getElementById("studentEmail").value = "";
  document.getElementById("studentPhone").value = "";
  document.getElementById("studentAddress").value = "";
  document.querySelector("input[name='studentSex']:checked").value = "";
}
var arrayData = [];
let action = "create";
function createData() {
  if (validateForm()) {
    let studentID = document.getElementById("studentID").value;
    let studentName = document.getElementById("studentName").value;
    let studentEmail = document.getElementById("studentEmail").value;
    let studentPhone = document.getElementById("studentPhone").value;
    let studentAddress = document.getElementById("studentAddress").value;
    let studentSex = document.querySelector("input[name='studentSex']:checked").value;
    if (action == "create") {
      let item = {
        id: studentID,
        name: studentName,
        email: studentEmail,
        phone: studentPhone,
        address: studentAddress,
        sex: studentSex,
      };
      if (!checkID(studentID)) {
        this.arrayData.push(item);
        console.log("Object sau khi push vào mảng là:",arrayData);
        reset();
      } else {
        alert("MSV đã bị trùng ,vui lòng nhập MSV khác");
      }
    } else {
      let i = getStudentByStudentByID(studentID);
      //3.Tiến hành cập nhật
      arrayData[i].id = studentID;
      arrayData[i].name = studentName;
      arrayData[i].email = studentEmail;
      arrayData[i].phone = studentPhone;
      arrayData[i].address = studentAddress;
      arrayData[i].sex = studentSex;
      //Cho phép nhập studentID
      document.getElementById("studentID").readOnly = false;
      reset();
      showData();
      showData();
    }
  }
}

function editData(studentID) {
  let i = getStudentByStudentByID(studentID);
  if (i >= 0) {
    document.getElementById("studentID").value = arrayData[i].id;
    document.getElementById("studentName").value = arrayData[i].name;
    document.getElementById("studentEmail").value = arrayData[i].email;
    document.getElementById("studentPhone").value = arrayData[i].phone;
    document.getElementById("studentAddress").value = arrayData[i].address;
    if (arrayData[i].sex == "Nam") {
      document.getElementById("Nam").checked = true;
    } else {
      document.getElementById("Nu").checked = true;
    }
    action = "edit";
    document.getElementById("studentID").readOnly = true;
  }
}

//Hàm thực thực hiện xóa sinh viên
function deleteData(studentID) {
  //1.Lấy i sinh viên ở trong mảng
  let i = getStudentByStudentByID(studentID);
  let isCheckDelete = confirm("Bạn có chắc muốn xóa không?");
  if (isCheckDelete) {
    //2.Thực hiện xóa theo i
    arrayData.splice(i, 1);
    showData();
  } else {
    showData();
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  createData();
  showData();
});
