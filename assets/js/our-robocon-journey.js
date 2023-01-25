
    const img = document.getElementById("base-img");
    img.onload = () => {
        const len = img.width;
        const ht = img.height;

       const arr = [
            {
                left : 13,
                top : 175
            },
            {
                left : 150,
                top : 200
            },{
                left : 225,
                top : 300
            },{
                left : 365,
                top : 105
            },{
                left : 510,
                top : 373
            },{
                left:750,
                top:228
            }
        ]
        for(let i = 0 ; i < 6 ; i++){
            let bbtn = document.getElementById(`b${i+1}`);
            let l = arr[i].left * len / 849;
            let t = arr[i].top * ht / 539;
            let btnHt = 100 * len / 849;
            let btnWd = 100 * ht / 539;
            bbtn.style.left = `${l}px`
            bbtn.style.top = `${t}px`
            bbtn.style.height = `${btnHt}px`
            bbtn.style.width = `${btnWd}px`
        }
        const r2 = document.getElementById("p-top-row")
        r2.style.marginTop = `${ht + 20}px`
    }
	
	const reload = () => {
		        const len = img.width;
        const ht = img.height;

        const arr = [
            {
                left : 13,
                top : 175
            },
            {
                left : 150,
                top : 200
            },{
                left : 225,
                top : 300
            },{
                left : 365,
                top : 105
            },{
                left : 510,
                top : 373
            },{
                left:750,
                top:228
            }
        ]
        for(let i = 0 ; i < 6 ; i++){
            let bbtn = document.getElementById(`b${i+1}`);
            let l = arr[i].left * len / 849;
            let t = arr[i].top * ht / 539;
            let btnHt = 100 * len / 849;
            let btnWd = 100 * ht / 539;
            bbtn.style.left = `${l}px`
            bbtn.style.top = `${t}px`
            bbtn.style.height = `${btnHt}px`
            bbtn.style.width = `${btnWd}px`
        }
        const r2 = document.getElementById("p-top-row")
        r2.style.marginTop = `${ht + 20}px`
	}
	
	for(let i = 0 ; i < 10 ; i++)
      setTimeout(reload, 300);