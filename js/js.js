/**
 * Created by alyona on 31.10.14.
 */
var page ={};
page.body = document.body;
page.getValue = document.getElementsByClassName('getValue')[0];
page.date=document.getElementsByClassName('date')[0];
page.usd = new Array();
page.eur =new Array();
page.uah = new Array();
page.gbp=new Array();
page.usd.length=page.eur.length=page.uah.length=page.gbp.length=2;
page.str = new String();

/*page.usd[0]= document.getElementsByClassName('usd')[0];
 page.usd[1]= document.getElementsByClassName('usd')[1];
 page.usd[2]= document.getElementsByClassName('usd')[2]; */

page.result = document.getElementsByClassName('result')[0];



page.getValue.addEventListener('click',function (){
    for(i=0;i<page.usd.length;i++){
       page.usd[i]= document.getElementsByClassName('usd')[i];
    }


   for(j=0;j<page.eur.length;j++){
        page.eur[j]=document.getElementsByClassName('eur')[j];
    }
     for(k=0;k<page.uah.length;k++){
        page.uah[k]=document.getElementsByClassName('uah')[k];
    }
    for(l=0;l<page.gbp.length;l++){
        page.gbp[l]=document.getElementsByClassName('gbp')[l];
    }

/*
    alert('работает');
    alert(page.date.value);
    alert(page.usd[0].value+', '+page.usd[1].value);
    alert(page.eur[0].value+', '+page.eur[1].value);
    alert(page.uah[0].value+', '+page.uah[1].value);
    alert(page.gbp[0].value+', '+page.gbp[1].value); */
   // page.result.innerText = '<h1>Привет</h1>';







    page.str = '<h2>Курсы валют</h2>'+
        '<table class="currency" border="0" cellspacing="1" cellpadding="1" width="633" align="center">'+
            '<thead>'+
                '<tr>'+
                    '<td colspan="3" align="center">'+
                        '<p>по состоянию на '+page.date.value+' г.</p>'+
                    '</td>'+
                '</tr>'+
                '<tr>'+
                    '<td align="center"><strong>Валюта:</strong></td>'+
                    '<td align="center"><strong>Покупка</strong></td>'+
                    '<td align="center"><strong>Продажа</strong></td>'+
                '</tr>'+
            '</thead>'+
            '<tbody>'+
                '<tr>'+
                    '<td class="rtecenter">USD</td>'+
                    '<td class="rtecenter">'+page.usd[0].value+'</td>'+
                    '<td class="rtecenter">'+page.usd[1].value+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td class="rtecenter">EUR</td>'+
                    '<td class="rtecenter">'+page.eur[0].value+'</td>'+
                    '<td class="rtecenter">'+page.eur[1].value+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td class="rtecenter">UAH</td>'+
                    '<td class="rtecenter">'+page.uah[0].value+'</td>'+
                    '<td class="rtecenter">'+page.uah[1].value+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td class="rtecenter">GBP</td>'+
                    '<td class="rtecenter">'+page.gbp[0].value+'</td>'+
                    '<td class="rtecenter">'+page.gbp[1].value+'</td>'+
                '</tr>'+
            '</tbody>'+
        '</table>'+
    '</div>'+
    '<p>&nbsp;</p>';
    page.result.innerText = page.str;


},false);