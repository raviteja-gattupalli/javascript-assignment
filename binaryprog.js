




function convert_one_otherbin(bin1,bin2){
    var counter,fstcounter1,fstcounter0,seccounter1,seccounter0;
    if(bin1.length!=bin2.length)
    {
        document.write("Cannot convert");

    }
    else{

        counter=0;fstcounter1=0;fstcounter0=0;seccounter1=0;seccounter0=0;
        for(var i=0;i<bin1.length;i++)
        {

            if(bin1[i]=='1'){
                fstcounter1=fstcounter1+1;


            }

            if(bin1[i]=='0')
            {

                fstcounter0=fstcounter0+1;
            }
            if(bin2[i]=='0'){
                seccounter0=seccounter0+1;
            }
            if(bin2[i]=='1'){
                seccounter1=seccounter1+1;
            }
        }
      
        if(fstcounter0==seccounter0 && seccounter1==fstcounter1)
        {

            for(var i=0;i<bin1.length;i++){

                if(bin1[i]!=bin2[i])
                {
                    counter=counter+1;
                }

            }
            document.write(counter/2);
        }

        else{

            document.write("cannot possible to convert");
        }

        
        }



    }




