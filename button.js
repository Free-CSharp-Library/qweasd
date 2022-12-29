$(document).ready(function () {
  $("#submit").click(function () {
    $("#showbtn").show();
    $("#nextuna").show();
    if (
      $("#Main").val() != "Main" ||
      $("#Console").val() != "Console" ||
      $("WriteLine").val() != "WriteLine"
    ) {
      $("#submit").show();
      $("#nextuna").hide();
    } else {
      $("#submit").hide();
      $("#nextuna").show();
      $("#showbtn").hide();
    }
  });
  $("#nextuna").click(function () {
    $("#una").hide();
    $("#pangalawa").show();
  });
  $("#showbtn").click(function () {
    $(this).hide();
    $("#hide").show();
    $("#submit").hide();
  });
  $("#hide").click(function () {
    $(this).hide();
    $("#showbtn").hide();
    $("#submit").show();
  });

  $("#submit1").click(function () {
    $("#showbtn1").show();
    $("#nextpangalawa").show();
    if (
      $("#comment").val() != "//" ||
      $("#comment2").val() != "/*" ||
      $("#comment3").val() != "*/"
    ) {
      $("#submit1").show();
      $("#nextpangalawa").hide();
    } else {
      $("#submit1").hide();
      $("#nextpangalawa").show();
      $("#prev1").show();
      $("#showbtn1").hide();
    }
  });
  $("#prev1").click(function () {
    $("#pangalawa").hide();
    $("#una").show();
  });
  $("#nextpangalawa").click(function () {
    $("#pangalawa").hide();
    $("#pangatlo").show();
  });
  $("#showbtn1").click(function () {
    $(this).hide();
    $("#hide1").show();
    $("#submit1").hide();
  });
  $("#hide1").click(function () {
    $(this).hide();
    $("#showbtn1").hide();
    $("#submit1").show();
  });

  $("#submit2").click(function () {
    $("#showbtn2").show();
    $("#nextpangatlo").show();
    if (
      $("#string").val() != "string" ||
      $("#myname").val() != "myName" ||
      $("#john").val() != "John"
    ) {
      $("#submit2").show();
      $("#nextpangatlo").hide();
    } else {
      $("#submit2").hide();
      $("#nextpangatlo").show();
      $("#prev2").show();
      $("#showbtn2").hide();
    }
  });
  $("#prev2").click(function () {
    $("#pangatlo").hide();
    $("#pangalawa").show();
  });
  $("#nextpangatlo").click(function () {
    $("#pangatlo").hide();
    $("#pangapat").show();
  });
  $("#showbtn2").click(function () {
    $(this).hide();
    $("#hide2").show();
    $("#submit2").hide();
  });
  $("#hide2").click(function () {
    $(this).hide();
    $("#showbtn2").hide();
    $("#submit2").show();
  });

  $("#submit3").click(function () {
    $("#showbtn3").show();
    $("#nextpangapat").show();
    if (
      $("#int1").val() != "int" &&
      $("#double1").val() != "double" &&
      $("#char1").val() != "char" &&
      $("#bool1").val() != "bool" &&
      $("#string1").val() != "string"
    ) {
      $("#submit3").show();
    } else {
      $("#submit3").hide();
      $("#prev3").show();
      $("#showbtn3").hide();
    }
  });
  $("#prev3").click(function () {
    $("#pangapat").hide();
    $("#pangatlo").show();
  });
  $("#showbtn3").click(function () {
    $(this).hide();
    $("#hide3").show();
    $("#submit3").hide();
  });
  $("#hide3").click(function () {
    $(this).hide();
    $("#showbtn3").hide();
    $("#submit3").show();
  });

  $("#submit5").click(function () {
    $("#showbtn5").show();
    $("#next5").show();
    if (
      $("#string5").val() != "string" ||
      $("#ReadLine").val() != "ReadLine()"
    ) {
      $("#showbtn5").show();
      $("#next5").hide();
    } else {
      $("#submit5").hide();
      $("#showbtn5").hide();
      $("#next5").show();
    }
  });
  $("#next5").click(function () {
    $("#panglima").hide();
    $("#panganim").show();
  });
  $("#showbtn5").click(function () {
    $(this).hide();
    $("#hide5").show();
    $("#submit5").hide();
  });
  $("#hide5").click(function () {
    $(this).hide();
    $("#showbtn5").hide();
    $("#submit5").show();
  });

  $("#submit6").click(function () {
    $("#showbtn6").show();
    $("#next6").show();
    if ($("#mult").val() != "*") {
      $("#submit6").show();
      $("#next6").hide();
    } else {
      $("#submit6").hide();
      $("#next6").show();
      $("#prev6").show();
      $("#showbtn6").hide();
    }
  });
  $("#prev6").click(function () {
    $("#panganim").hide();
    $("#panglima").show();
  });
  $("#next6").click(function () {
    $("#panganim").hide();
    $("#pangpito").show();
  });
  $("#showbtn6").click(function () {
    $(this).hide();
    $("#hide6").show();
    $("#submit6").hide();
  });
  $("#hide6").click(function () {
    $(this).hide();
    $("#showbtn6").hide();
    $("#submit6").show();
  });

  $("#submit7").click(function () {
    $("#showbtn7").show();
    $("#next7").show();
    if ($("#Sqrt").val() != "Sqrt") {
      $("#submit7").show();
      $("#next7").hide();
    } else {
      $("#submit7").hide();
      $("#next7").show();
      $("#prev7").show();
      $("#showbtn7").hide();
    }
  });
  $("#prev7").click(function () {
    $("#pangpito").hide();
    $("#panganim").show();
  });
  $("#next7").click(function () {
    $("#pangpito").hide();
    $("#pangwalo").show();
  });
  $("#showbtn7").click(function () {
    $(this).hide();
    $("#hide7").show();
    $("#submit7").hide();
  });
  $("#hide7").click(function () {
    $(this).hide();
    $("#showbtn7").hide();
    $("#submit7").show();
  });

  $("#submit8").click(function () {
    $("#showbtn8").show();
    $("#next8").show();
    if ($("#plus").val() != "+") {
      $("#submit8").show();
      $("#next8").hide();
    } else {
      $("#submit8").hide();
      $("#next8").show();
      $("#prev8").show();
      $("#showbtn8").hide();
    }
  });
  $("#prev8").click(function () {
    $("#pangwalo").hide();
    $("#pangpito").show();
  });
  $("#next7").click(function () {
    $("#pangwalo").hide();
    $("#pangsiyam").show();
  });
  $("#showbtn8").click(function () {
    $(this).hide();
    $("#hide8").show();
    $("#submit8").hide();
  });
  $("#hide8").click(function () {
    $(this).hide();
    $("#showbtn8").hide();
    $("#submit8").show();
  });

  $("#submit9").click(function () {
    $("#showbtn9").show();
    $("#next9").show();
    if (
      $("#x").val() != "x" ||
      $("#greater").val() != ">" ||
      $("#y").val() != "y"
    ) {
      $("#submit9").show();
      $("#next9").hide();
    } else {
      $("#submit9").hide();
      $("#prev9").show();
      $("#showbtn9").hide();
    }
  });
  $("#prev9").click(function () {
    $("#pangsiyam").hide();
    $("#pangwalo").show();
  });
  $("#showbtn9").click(function () {
    $(this).hide();
    $("#hide9").show();
    $("#submit9").hide();
  });
  $("#hide9").click(function () {
    $(this).hide();
    $("#showbtn9").hide();
    $("#submit9").show();
  });

  $("#submit10").click(function () {
    $("#showbtn10").show();
    $("#next10").show();
    if ($("#if").val() != "if" || $("#greater1").val() != ">") {
      $("#showbtn10").show();
      $("#next10").hide();
    } else {
      $("#submit10").hide();
      $("#showbtn10").hide();
      $("#next10").show();
    }
  });
  $("#next10").click(function () {
    $("#sampu").hide();
    $("#eleven").show();
  });
  $("#showbtn10").click(function () {
    $(this).hide();
    $("#hide10").show();
    $("#submit10").hide();
  });
  $("#hide10").click(function () {
    $(this).hide();
    $("#showbtn10").hide();
    $("#submit10").show();
  });

  $("#submit11").click(function () {
    $("#showbtn11").show();
    $("#next11").show();
    if (
      $("#case1").val() != "case" ||
      $("#case2").val() != "case" ||
      $("#day").val() != "day" ||
      $("#break").val() != "break"
    ) {
      $("#submit11").show();
      $("#next11").hide();
    } else {
      $("#submit11").hide();
      $("#prev11").show();
      $("#showbtn11").hide();
    }
  });
  $("#prev11").click(function () {
    $("#eleven").hide();
    $("#sampu").show();
  });
  $("#next11").click(function () {
    $("#eleven").hide();
    $("#twelve").show();
  });
  $("#showbtn11").click(function () {
    $(this).hide();
    $("#hide11").show();
    $("#submit11").hide();
  });
  $("#hide11").click(function () {
    $(this).hide();
    $("#showbtn11").hide();
    $("#submit11").show();
  });

  $("#submit12").click(function () {
    $("#showbtn12").show();
    $("#next12").show();
    if (
      $("#while").val() != "while" ||
      $("#less").val() != "<" ||
      $("#i++").val() != "i++"
    ) {
      $("#submit12").show();
      $("#next12").hide();
    } else {
      $("#submit12").hide();
      $("#prev12").show();
      $("#showbtn12").hide();
      $("#next12").show();
    }
  });
  $("#prev12").click(function () {
    $("#twelve").hide();
    $("#eleven").show();
  });
  $("#next11").click(function () {
    $("#twelve").hide();
    $("#thirteen").show();
  });
  $("#showbtn12").click(function () {
    $(this).hide();
    $("#hide12").show();
    $("#submit12").hide();
  });
  $("#hide12").click(function () {
    $(this).hide();
    $("#showbtn12").hide();
    $("#submit12").show();
  });

  $("#submit13").click(function () {
    $("#showbtn13").show();
    $("#next13").show();
    if ($("#for").val() != "for" || $("#i++1").val() != "i++") {
      $("#submit13").show();
      $("#next13").hide();
    } else {
      $("#submit13").hide();
      $("#prev13").show();
      $("#showbtn13").hide();
      $("#next13").show();
    }
  });
  $("#prev13").click(function () {
    $("#thirteen").hide();
    $("#twelve").show();
  });
  $("#next13").click(function () {
    $("#thirteen").hide();
    $("#last").show();
  });
  $("#showbtn13").click(function () {
    $(this).hide();
    $("#hide13").show();
    $("#submit13").hide();
  });
  $("#hide13").click(function () {
    $(this).hide();
    $("#showbtn13").hide();
    $("#submit13").show();
  });

  $("#submit14").click(function () {
    $("#showbtn14").show();
    if ($("#string").val() != "string[]" || $("#cars").val() != "cars") {
      $("#submit14").show();
    } else {
      $("#submit14").hide();
      $("#prev14").show();
      $("#showbtn14").hide();
    }
  });
  $("#prev14").click(function () {
    $("#last").hide();
    $("#thirteen").show();
  });
  $("#showbtn14").click(function () {
    $(this).hide();
    $("#hide14").show();
    $("#submit14").hide();
  });
  $("#hide14").click(function () {
    $(this).hide();
    $("#showbtn14").hide();
    $("#submit14").show();
  });
});
