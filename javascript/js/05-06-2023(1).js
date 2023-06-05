
var k=document.getElementsByClassName('rightAns')
        var l=Array();
        var marks=0;
        var ab=new Array();
        for(let i=0;i<k.length;i++){
            l[i]=parseInt(k[i].textContent)
        }
        
        var m=document.getElementsByClassName('menu-tbl');
        var b=Array();
        for(let i=0;i<m.length;i++){
            b[i]=parseInt(m[i].lastChild.lastChild.lastChild.textContent)
        }
        for(let i=0;i<m.length&&i<k.length;i++){
            if(l[i]==b[i])
            marks++;

        }
        var str="";
        for(let i=1,count=0;i<=20;i++){
            ab[i]=0;
            for(let j=1;j<=10;j++,count++){
                if(l[count]==b[count])
                ab[i]+=1;
            }
            str+='\nmarks is '+i*10+"   : "+ab[i];
        }
        console.log(str+"\nTotal: "+marks)