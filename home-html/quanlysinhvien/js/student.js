function emailIsValid(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function saveEdit() {
	let fullname = document.getElementById('fullname').value;
	let email = document.getElementById('email').value;
	let phonenumber = document.getElementById('phonenumber').value;
	let address = document.getElementById('address').value;
	let id = document.getElementById('idp').value;
	let gender ='';
	if (document.getElementById('male').checked) {
    	gender = document.getElementById('male').value;
  	} else if (document.getElementById('female').checked) {
    	gender = document.getElementById('female').value;
}
	if(_.isEmpty(fullname)) {
		fullname = '';
		document.getElementById('fullname-error').innerHTML = 'Vui lòng nhập tên!';
	} else if (fullname.trim().length <=2) {
		fullname = '';
		document.getElementById('fullname-error').innerHTML = 'Tên quá ngắn';
	} else if (fullname.trim().length >20) {
		fullname = '';
		document.getElementById('fullname-error').innerHTML = 'Tên quá dài';
	} else {
		document.getElementById('fullname-error').innerHTML = '';
	}
	if(_.isEmpty(email)) {
		email = '';
		document.getElementById('email-error').innerHTML = 'Vui lòng nhập email!';
	} else if (!emailIsValid(email)) {
		email = '';
		document.getElementById('email-error').innerHTML = 'Sai định dạng email';
	} else {
		document.getElementById('email-error').innerHTML = '';
	}
	if(_.isEmpty(phonenumber)) {
		phonenumber = '';
		document.getElementById('phonenumber-error').innerHTML = 'Vui lòng nhập SĐT!';
	} else if (phonenumber.trim().length > 10) {
		phonenumber = '';
		document.getElementById('phonenumber-error').innerHTML = 'Số điện thoại không đúng';
	} else if (phonenumber.trim().length < 10) {
		phonenumber = '';
		document.getElementById('phonenumber-error').innerHTML = 'Số điện thoại không đúng';
	} else {
		document.getElementById('phonenumber-error').innerHTML = '';
	}
	if(_.isEmpty(address)) {
		address = '';
		document.getElementById('address-error').innerHTML = 'Vui lòng nhập địa chỉ!';
	} else {
		document.getElementById('address-error').innerHTML = '';
	}
	if(_.isEmpty(gender)) {
		document.getElementById('gender-error').innerHTML = 'Vui lòng chọn giới tính';
	} else {
		document.getElementById('gender-error').innerHTML = '';
	}

	if (fullname && email && phonenumber && address && gender) {
		let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : []; 
		students[id] = {
			fullname: fullname,
			email: email,
			phonenumber: phonenumber,
			address: address,
			gender: gender,
		}
		localStorage.setItem('students', JSON.stringify(students))
		this.renderListStudent();
	}
}

function saveCreate() {
	let fullname = document.getElementById('fullname').value;
	let email = document.getElementById('email').value;
	let phonenumber = document.getElementById('phonenumber').value;
	let address = document.getElementById('address').value;
	let id = document.getElementById('idp').value;
	let gender ='';
	if (document.getElementById('male').checked) {
    	gender = document.getElementById('male').value;
  	} else if (document.getElementById('female').checked) {
    	gender = document.getElementById('female').value;
}
	if(_.isEmpty(fullname)) {
		fullname = '';
		document.getElementById('fullname-error').innerHTML = 'Vui lòng nhập tên!';
	} else if (fullname.trim().length <=2) {
		fullname = '';
		document.getElementById('fullname-error').innerHTML = 'Tên quá ngắn';
	} else if (fullname.trim().length >20) {
		fullname = '';
		document.getElementById('fullname-error').innerHTML = 'Tên quá dài';
	} else {
		document.getElementById('fullname-error').innerHTML = '';
	}
	if(_.isEmpty(email)) {
		email = '';
		document.getElementById('email-error').innerHTML = 'Vui lòng nhập email!';
	} else if (!emailIsValid(email)) {
		email = '';
		document.getElementById('email-error').innerHTML = 'Sai định dạng email';
	} else {
		document.getElementById('email-error').innerHTML = '';
	}
	if(_.isEmpty(phonenumber)) {
		phonenumber = '';
		document.getElementById('phonenumber-error').innerHTML = 'Vui lòng nhập SĐT!';
	} else if (phonenumber.trim().length > 10) {
		phonenumber = '';
		document.getElementById('phonenumber-error').innerHTML = 'Số điện thoại không đúng';
	} else if (phonenumber.trim().length < 10) {
		phonenumber = '';
		document.getElementById('phonenumber-error').innerHTML = 'Số điện thoại không đúng';
	} else {
		document.getElementById('phonenumber-error').innerHTML = '';
	}
	if(_.isEmpty(address)) {
		address = '';
		document.getElementById('address-error').innerHTML = 'Vui lòng nhập địa chỉ!';
	} else {
		document.getElementById('address-error').innerHTML = '';
	}
	if(_.isEmpty(gender)) {
		document.getElementById('gender-error').innerHTML = 'Vui lòng chọn giới tính';
	} else {
		document.getElementById('gender-error').innerHTML = '';
	}

	if (fullname && email && phonenumber && address && gender) {
		let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : []; 
		students.push ({
			fullname: fullname,
			email: email,
			phonenumber: phonenumber,
			address: address,
			gender: gender,
		});
		localStorage.setItem('students', JSON.stringify(students))
		this.renderListStudent();
	}
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("address").value = "";
    document.getElementById("gender").value = "";
}


function renderListStudent(id) { 
	let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : []; 
	
	if (students.length === 0) {
		document.getElementById('list-student').style.display = 'none';
		return false;
	}

	document.getElementById('list-student').style.display = 'block';
	
	let tableContent = `<tr id="first-row">
		<td id="col-header-order">No</td>
		<td>Họ và tên</td>
		<td id="col-header-email">Địa chỉ email</td>
		<td>Điện thoại</td>
		<td>Giới tính</td>
		
		<td id="col-header-action">Thao Tác</td></tr>`;

	students.forEach((student, index) => {
				let studentId = index;
				let genderLabel = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';
 				index++;

 				tableContent += `<tr>
					<td>${index}</td>
					<td>${student.fullname}</td>
					<td>${student.email}</td>
					<td>${student.phonenumber}</td>
					<td>${genderLabel}</td>
					
					<td>
						<a onclick='editStudent(${studentId})'> Edit </a> | <a onclick='deleteStudent(${studentId})' style="text-decoration: none"> Delete </a>
				</td>
			</tr>`;
		})

		document.getElementById('grid-students').innerHTML = tableContent;
}

function deleteStudent(id) {
	let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
	if (confirm('Are you sure to delete this record ?')) { 
		students.splice(id, 1);
		localStorage.setItem('students',JSON.stringify(students));
		renderListStudent();
		resetForm();
	}
}

function editStudent(id) {
	let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : []; 
	document.getElementById('fullname').value=students[id].fullname;
	document.getElementById('email').value=students[id].email;
	document.getElementById('phonenumber').value=students[id].phonenumber;
	document.getElementById('address').value=students[id].address;
	document.getElementById('idp').value = id;
	students[id].gender=="1" ? document.getElementById('male').checked="checked":document.getElementById('female').checked="checked";
	localStorage.setItem('students',JSON.stringify(students));
	renderListStudent();
	saveEdit();

}

