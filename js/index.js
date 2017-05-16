jQuery("document").ready(function($){
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({
			scrollTop: ($(this.hash).offset().top - 60)
		},800);
	});
});

$(window).scroll(function () {
 if ( $(this).scrollTop() > 0 )  {
   $('#top').css('opacity','0.5');
 } else {
   $('#top').css('opacity','0');
 }
});

$('#menu').on('click',function(){
	$('#topo nav').css('left','0');
	$('body').css('overflow','hidden');
	setTimeout(function(){
		$('body').on('click',function(){
			$('#topo nav').css('left','-90%');
			$('body').css('overflow','auto');
			$('body').off('click');
		});
	},100);
});

var j = [true,true,true,true];

$("#card1").on('click',function(){
	if ( j[0] ){
		$("#cont1").css({"max-height":"1000px","margin":"5%"});
		$("#img1").css({"transform":"rotate(180deg)"});
		j[0] = false;
	} else {
		$("#cont1").css({"max-height":"0px"});
		setTimeout(function(){
			$("#cont1").css({"margin":"0%"});
		},500);
		$("#img1").css({"transform":"rotate(0deg)"});
		j[0] = true;
	}
});

$("#card1").on('mouseover',function(){
	$("#i1").attr('src','imgs/sets/more_client_c.png');
});
$("#card1").on('mouseout',function(){
	$("#i1").attr('src','imgs/sets/more_client.png');
});

$("#card2").on('mouseover',function(){
	$("#i2").attr('src','imgs/sets/fidelity_c.png');
});
$("#card2").on('mouseout',function(){
	$("#i2").attr('src','imgs/sets/fidelity.png');
});

$("#card3").on('mouseover',function(){
	$("#i3").attr('src','imgs/sets/market_c.png');
});
$("#card3").on('mouseout',function(){
	$("#i3").attr('src','imgs/sets/market.png');
});

$("#card4").on('mouseover',function(){
	$("#i4").attr('src','imgs/sets/more_c.png');
});
$("#card4").on('mouseout',function(){
	$("#i4").attr('src','imgs/sets/more.png');
});

$("#card2").on('click',function(){
	if ( j[1] ){
		$("#cont2").css({"max-height":"1000px","margin":"5%"});
		$("#img2").css({"transform":"rotate(180deg)"});
		j[1] = false;
	} else {
		$("#cont2").css({"max-height":"0px"});
		setTimeout(function(){
			$("#cont2").css({"margin":"0%"});
		},500);
		$("#img2").css({"transform":"rotate(0deg)"});
		j[1] = true;
	}
});

$("#card3").on('click',function(){
	if ( j[2] ){
		$("#cont3").css({"max-height":"1000px","margin":"5%"});
		$("#img3").css({"transform":"rotate(180deg)"});
		j[2] = false;
	} else {
		$("#cont3").css({"max-height":"0px"});
		setTimeout(function(){
			$("#cont3").css({"margin":"0%"});
		},500);
		$("#img3").css({"transform":"rotate(0deg)"});
		j[2] = true;
	}
});

$("#card4").on('click',function(){
	if ( j[3] ){
		$("#cont4").css({"max-height":"1000px","margin":"5%"});
		$("#img4").css({"transform":"rotate(180deg)"});
		j[3] = false;
	} else {
		$("#cont4").css({"max-height":"0px"});
		setTimeout(function(){
			$("#cont4").css({"margin":"0%"});
		},500);
		$("#img4").css({"transform":"rotate(0deg)"});
		j[3] = true;
	}
});

$('.ft_person').height($('.ft_person').width());

$('#s_in').on('mouseover',function(){
  $('#img_in').attr('src','imgs/sets/in_off.png');
});
$('#s_in').on('mouseout',function(){
  $('#img_in').attr('src','imgs/sets/in_on.png');
});

$('#s_fb').on('mouseover',function(){
  $('#img_fb').attr('src','imgs/sets/fb_off.png');
});
$('#s_fb').on('mouseout',function(){
  $('#img_fb').attr('src','imgs/sets/fb_on.png');
});


$('#f_in').on('mouseover',function(){
  $('#f_img_in').attr('src','imgs/sets/in_off.png');
});
$('#f_in').on('mouseout',function(){
  $('#f_img_in').attr('src','imgs/sets/in_on.png');
});

$('#f_fb').on('mouseover',function(){
  $('#f_img_fb').attr('src','imgs/sets/fb_off.png');
});
$('#f_fb').on('mouseout',function(){
  $('#f_img_fb').attr('src','imgs/sets/fb_on.png');
});

$('#f_tt').on('mouseover',function(){
  $('#f_img_tt').attr('src','imgs/sets/tt_off.png');
});
$('#f_tt').on('mouseout',function(){
  $('#f_img_tt').attr('src','imgs/sets/tt_on.png');
});

$('#social').css('margin-left','calc(50% - '+($('#social').width() / 2)+'px)');

$('#submit_form').on('click',sendMailForm);

function sendMailForm() {
  $('#erro_nome_form').html("");
  $('#erro_email_form').html("");
  $('#erro_assunto_form').html("");
  $('#erro_msg_form').html("");
  var nome = $('#nome_form').val();
  var email = $('#email_form').val();
  var assunto = $('#assunto_form').val();
  var msg = $('#msg_form').val();
  var erro = 0;

  if ( nome == "" ){
    erro++;
    $('#erro_nome_form').html("* Digite o seu nome.");
  }

  if ( email == "" ){
    erro++;
    $('#erro_email_form').html("* Digite o seu e-mail.");
  }

  if ( assunto == "" ){
    erro++;
    $('#erro_assunto_form').html("* Digite o assunto.");
  }

  if ( msg == "" ){
    erro++;
    $('#erro_msg_form').html("* Digite a mensagem.");
  }

  if ( erro == 0 ){
    $.ajax({
      type: "POST",
      url: "http://empresario.usevou.com/sendemail.php",
      data: {
          'q': 'form',
          'nome': nome,
          'email': email,
          'assunto': assunto,
          'msg': msg
      },
      async: true,
      dataType: "json",
      success: function (json) {
        console.log(json);
        if (json[0]['res'] == 1){
          swal({
            title:'Obrigado!',
            text:'Agradecemos pelo seu contato!<br><br>Agora fique de olho no seu e-mail, em breve lhe retornaremos!',
            type: 'success',
            html: true
          },function(){
            $('#nome_form').val('');
            $('#email_form').val('');
            $('#assunto_form').val('');
            $('#msg_form').val('');
          });
        } else {
          $('#erro_email_form').html(json[0]['erro']);
        }
      },error: function(xhr,e,t){
        console.log(xhr.responseText);
      }
    });
  }
}
