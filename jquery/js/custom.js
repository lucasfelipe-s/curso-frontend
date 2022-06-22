$(document).ready(function(){

   $('.owl-carousel').owlCarousel();
   
   let titulos = $('h4') 
   
   let itens = $('.featured-item') 
   
   let destaques = $('#featured') 
   
   $('.featured-item a').addClass('btn btn-dark stretch-link');
   
   $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   
   $('.featured-item h4').dblclick( function(){
      
      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });
      
   });

   $('#form-submit').on('click', function(e){

      e.preventDefault()

      if( $('#email').val() != '' ){

         $('#email').animate({
            opacity: "toggle",
            top: "-50"
         }, 500, function(){
            console.log($(this).val())
         })

      }


   });
   $('.nav-modal-open').on('click', function(e){

      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal($('#modelId'))

      myModal.show()

   })

   function validate( elem ){
      if( elem.val() == '') {

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }


   $('body').on('submit', '.modal-body .form', function(e){

      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')

      validate(inputName)
      validate(inputEmail)

      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      } else {
         $(this).submit()  
      }

   })

   
   $('body').on('blur', '#nome', function(){
      validate($(this))
   })

   $('body').on('blur', '#email', function(){
      validate($(this))
   })


   $('body').on('focus', '#date', function(){
      $(this).datepicker()
   })

   $('body').on('blur', '#date', function(){
      validate($(this))
      $(this).mask('00/00/0000');
   }) 

   $('body').on('blur', '#time', function(){
      validate($(this))
      $(this).mask('00:00');
   })

   $('body').on('blur', '#cep', function(){
      validate($(this))
      $(this).mask('00000-000');
   })

   $('body').on('blur', '#phone', function(){
      validate($(this))
      $(this).mask('00000-0000');
   })

   $('body').on('blur', '#cpf', function(){
      validate($(this))
      $(this).mask('000.000.000-00');
   })

})