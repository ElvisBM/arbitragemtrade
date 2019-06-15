/**
 * scripts.js
 */
(function($) {
	$( document ).ready(function() {



        $("input").on('keyup keypress blur change paste', function() {
           calc();
        });

        // $("input").keypress(function() {
        //     calc();
        //  });

        $("#aumento").keypress(function() {
            calc();
         });

        function calc(){
            var tem = formatVal( $('#tembtc').val() );
            var nc = formatVal( $('#nc').val()) ;
            var aumento = formatVal( $('#aumento').val() );


            if( nc > 0 && nc !== null ) {
                var passiva = nc + aumento;
                // var passivaResul = passiva.toString().replace(".",",");
                // var passivaResul = passivaResul.slice(0, 2) + "." + passivaResul.slice(2, 8);
                $('#passiva').html( formatSaida( passiva ) );

                var aumentoPorcetagem = ( ( passiva - tem ) / tem ) * 100;
                var spread = aumentoPorcetagem.toFixed(2);
                $('#spread').html(spread + "%");
            }
        }

        $("#valorporcetagem").on('keyup keypress blur change paste', function() {
           var valor = formatVal( $(this).val() );
           if( valor > 0 && valor !== null ) {
            
            var porc03 = valor * (0.3/100); 
            var result03 = valor - porc03;

            var porc05 = valor * (0.5/100); 
            var result05 =  valor - porc05;

            $('#porc03').html( formatSaida( result03 ) );
            $('#porc05').html( formatSaida( result05 ) );

            var liqiuido03 = result03 * (0.5/100); 
            var liqiuido05 = result05 * (0.5/100); 
            
            $('#liquidoc03').html( formatSaida( liqiuido03 ) );
            $('#liquido05').html( formatSaida( liqiuido05 ) );
           }

           var 
         
        });
 

        function formatVal( valor ){
            var retorno = valor.replace(".", "");
            var retorno =  retorno.replace(",",".");
            var retorno =  retorno.replace("R$","");
            return parseFloat( retorno , 10);
        }

        function formatSaida ( valor ){
            var retorno = valor.toString().replace(".",",");
            var retorno = retorno.slice(0, 2) + "." + retorno.slice(2, 8);
            return retorno;
        }
	});
})(jQuery);