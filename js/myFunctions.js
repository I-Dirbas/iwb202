// قم بالحصول على القيمة المحفوظة من العنصر ذي المعرف "value"
var query = window.location.search.substring(1);
var queryParams = query.split("&");
var variable = "";

for (var i = 0; i < queryParams.length; i++) {
  var pair = queryParams[i].split("=");

  if (pair[0] === "variable") {
    variable = pair[1];
    break;
  }
}

// حساب قيمة الضريبة وتحويلها إلى عدد صحيح وتعيينها لعنصر الجدول ذي المعرف "tax"
var taxValue = Math.round(parseInt(variable) * 0.05);
document.getElementById("tax").innerText = taxValue.toLocaleString(undefined, {useGrouping: false});

// حساب قيمة الضريبة المرتجعة وتحويلها إلى عدد صحيح وتعيينها لعنصر الجدول ذي المعرف "retax"
var retaxValue = Math.round(parseInt(variable) * 0.01);
document.getElementById("retax").innerText = retaxValue.toLocaleString(undefined, {useGrouping: false});

// وضع قيمة المتغير في المكان المناسب في الجدول
document.getElementById("alpr").innerText = variable;
var ids = variable;


//----------------------------------------------------



const checkbox = document.getElementById('myCheckbox');
const form = document.getElementById('myform');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    form.classList.remove('hide');
  } else {
    form.classList.add('hide');
  }
});




function validateFullName(input) {
  var value = input.value;
  if (!/^([\u0600-\u06FF]+\s+){1,3}[\u0600-\u06FF]+$/.test(value)) {
    input.setCustomValidity(" يجب ادخال الإسم الكامل  (باللغة العربية)");
  } else {
    input.setCustomValidity("");
  }
}


function validateIdNumber(input) {
  var value = input.value;

  // التحقق من أن القيمة تحتوي على 11 رقمًا
  if (value.length !== 11) {
    input.setCustomValidity("يرجى التأكد من عدد الارقام");
    return;
  }

  // التحقق من أن الرقم الأول ينتمي إلى الأرقام المسموح بها في البداية
  var allowedStartNumbers = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
  ];
  var startNumber = value.substr(0, 2);
  if (!allowedStartNumbers.includes(startNumber)) {
    input.setCustomValidity("الرقم المدخل خاطئ, يرجى التحقق من الرقم ");
    return;
  }

  // التحقق من أن القيمة تحتوي على أرقام فقط
  if (!/^\d+$/.test(value)) {
    input.setCustomValidity("يرجى التأكد من الرقم الوطني");
    return;
  }

  // إزالة رسالة التحذير إذا تم تحقيق جميع الشروط
  input.setCustomValidity("");
}

function validateAge(input) {
  var dob = new Date(input.value);
  var today = new Date();
  var age = today.getFullYear() - dob.getFullYear();

  if (age < 18) {
    input.setCustomValidity("يجب أن يكون عمرك 18 عامًا أو أكثر.");
  } else {
    input.setCustomValidity("");
  }
}

function validatePhoneNumber(input) {
  var phoneNumber = input.value;

  // التحقق من أن عدد الأرقام يكون 10
  if (phoneNumber.length !== 10) {
    input.setCustomValidity("يرجى التأكد من الرقم (Syriatel, MTN)");
    return;
  }

  // التحقق من أن القيمة تحتوي على أرقام فقط
  if (!/^\d+$/.test(phoneNumber)) {
    input.setCustomValidity(" لا يمكن ان يحتوى الرقم على احرف ");
    return;
  }

  // التحقق من أن الرقم يبدأ بأحد الأرقام المسموح بها
  var allowedStartNumbers = ['093', '094', '095', '096', '098', '099'];
  var startNumber = phoneNumber.substr(0, 3);
  if (!allowedStartNumbers.includes(startNumber)) {
    input.setCustomValidity("يجب ان يكون الرقم فقط ضمن  (Syriatel, MTN)");
    return;
  }

  // إزالة رسالة التحذير إذا تم تحقيق جميع الشروط
  input.setCustomValidity("");
}

function validateEmail(input) {
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(input.value)) {
    input.setCustomValidity("يرجى إدخال بريد إلكتروني صحيح.");
  } else {
    input.setCustomValidity("");
  }
}

function formatDate(date) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  // إضافة صفر إلى اليوم والشهر إذا كانت قيمتهما أقل من 10
  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  return day + "-" + month + "-" + year;
}

var currentDate = new Date();
var formattedDate = formatDate(currentDate);
console.log(formattedDate); // يعرض التاريخ بالتنسيق "dd-mm-yyyy"



function cap() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var stringLength = 6;
  var randomString = "";

  for (var i = 0; i < stringLength; i++){
    var rnum = Math.floor(Math.random() * chars.length);
    randomString += chars.substring(rnum, rnum + 1);
  }

  document.getElementById("capt").value = randomString;
}

function SignIn() {
  var captcha = document.getElementById("txtinput");
  if (captcha.value === document.getElementById("capt").value) {
    alert("تم التحقق بنجاح!");
  } else {
    alert("رمز التحقق غير صحيح، يرجى المحاولة مرة أخرى.");
  }
}


document.getElementById("rIcon").addEventListener("click", function() {
  cap();
});

function checkCaptcha() {
  var captcha = document.getElementById("txtinput");
  if (captcha.value === document.getElementById("capt").value) {
    SignIn();
  } else {
    alert("رمز التحقق غير صحيح، يرجى المحاولة مرة أخرى.");
  }
}

var query = window.location.search.substring(1);
var queryParams = query.split("&");
var variable = "159000";

for (var i = 0; i < queryParams.length; i++) {
  var pair = queryParams[i].split("=");

  // تحقق من أن الاسم المطلوب هو "variable"
  if (pair[0] === "variable") {
    // إعطاء المتغير قيمته المستخرجة من رابط الصفحة
    variable = pair[1];
    break;
  }
}

// وضع قيمة المتغير في المكان المناسب في الجدول
document.getElementById("alpr").innerText = variable;



document.body.onload = setInitialValues;

// هذه الدالة تحمل الكود الذي يجب تنفيذه بمجرد تحميل الصفحة
function onPageLoad() {
  // تنفيذ دالة cap لإنشاء كود التحقق
  cap();

  // إضافة مستمع الحدث للزر refresh
  var refreshIcon = document.getElementById("rIcon");
  if (refreshIcon) {
    refreshIcon.addEventListener("click", function () {
      cap();
    });
  }

  // إضافة مستمع الحدث للزر submit
  var submitButton = document.getElementById("endbtn");
  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // منع تحديث الصفحة عند النقر
      checkCaptcha();
    });
  }
}

// استدعاء الدالة onPageLoad عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", onPageLoad);


           function validate() {
  var input = document.getElementById("txtinput");
  var captcha = document.getElementById("capt");

  if (input.value == captcha.value) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity("رمز التحقق غير صحيح.");
  }
}

function validateCaptcha(input) {
  var captcha = document.getElementById("capt");

  if (input.value != captcha.value) {
    captcha.setCustomValidity("يرجى إدخال رمز التحقق الصحيح.");
  } else {
    captcha.setCustomValidity("");
  }
}
        